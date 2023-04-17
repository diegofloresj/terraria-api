const fs = require('fs').promises;
const path = require('path');

async function getNameFolder(folder) {
    try {
        const files = await fs.readdir(folder);
        const nameFolder= files.filter(async (nombre) => {
            const ruteFile = path.join(folder, nombre);
            const statusFile = await fs.lstat(ruteFile);
            return statusFile.isDirectory();
        });
        return nameFolder;
    } catch (error) {
        console.error(error);
        return [];
    }
}

module.exports = getNameFolder;