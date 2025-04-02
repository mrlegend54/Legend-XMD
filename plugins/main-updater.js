const { cmd } = require("../command");
const axios = require('axios');
const fs = require('fs');
const path = require("path");
const AdmZip = require("adm-zip");

cmd({
  pattern: "update",
  alias: ["upgrade", "up"],
  react: '🚀',
  desc: "Update the bot to the latest version.",
  category: "misc",
  filename: __filename
}, async (client, message, args, { from, reply, sender, isOwner }) => {
  if (!isOwner) {
    return reply("This command is only for the bot owner.");
  }

  try {
    await reply("```🔍 Checking for LEGEND-MD updates...```");
    
    // Get latest commit from GitHub
    const { data: commitData } = await axios.get(
      "https://api.github.com/repos/legend5454/LEGEND-MD/commits/main"
    );
    const latestCommitHash = commitData.sha;

    // Get current commit hash
    let currentHash = 'unknown';
    try {
      const packageJson = require('../package.json');
      currentHash = packageJson.commitHash || 'unknown';
    } catch (error) {
      console.error("Error reading package.json:", error);
    }

    if (latestCommitHash === currentHash) {
      return reply("```✅ Your LEGEND-MD bot is already up-to-date!```");
    }

    await reply("```LEGEND-MD Bot Updating...🚀```");
    
    // Download latest code
    const zipPath = path.join(__dirname, "latest.zip");
    const { data: zipData } = await axios.get(
      "https://github.com/legend5454/LEGEND-MD/archive/main.zip",
      { responseType: "arraybuffer" }
    );
    fs.writeFileSync(zipPath, zipData);

    await reply("```📦 Extracting the latest code...```");
    
    // Extract ZIP file
    const extractPath = path.join(__dirname, 'latest');
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(extractPath, true);

    await reply("```🔄 Replacing files...```");
    
    // Copy updated files
    const sourcePath = path.join(extractPath, "LEGEND-MD-main");
    const destinationPath = path.join(__dirname, '..');
    copyFolderSync(sourcePath, destinationPath);

    // Cleanup
    fs.unlinkSync(zipPath);
    fs.rmSync(extractPath, { recursive: true, force: true });

    await reply("```🔄 Restarting the bot to apply updates...```");
    process.exit(0);
  } catch (error) {
    console.error("Update error:", error);
    reply("❌ Update failed. Please try manually.");
  }
});

// Helper function to copy directories
function copyFolderSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const items = fs.readdirSync(source);
  for (const item of items) {
    const srcPath = path.join(source, item);
    const destPath = path.join(target, item);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolderSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
  }
