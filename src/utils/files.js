const fs = require('fs').promises;
const path = require('path');

async function getTypes(folder) {
    try {
        const files = await fs.readdir(folder);
        const nameFolder = files.filter(async (name) => {
            const ruteFile = path.join(folder, name);
            const statusFile = await fs.lstat(ruteFile);
            return statusFile.isDirectory();
        });
        return nameFolder;
    } catch (error) {
        console.error(error);
        return [];
    }
}


async function getAviableEntities(folder) {
    try {
        const files = await fs.readdir(folder);
        const nameFolder = files.filter(async (name) => {
            const ruteFile = path.join(folder, name);
            const statusFile = await fs.lstat(ruteFile);
            return statusFile.isDirectory();
        });
        return nameFolder;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getEntity(folder) {
    try {
        const files = await fs.readdir(folder);
        const entities = await Promise.all(files.map(async (name) => {
            const ruteFile = path.join(folder, name);
            const statusFile = await fs.lstat(ruteFile);
            return {
                name: name,
                isDirectory: statusFile.isDirectory(),
                path: ruteFile,
            };
        }));
        return entities;
    } catch (error) {
        console.error(error);
        return [];
    }
}






module.exports = {
    getTypes,
    getAviableEntities,
    getEntity
}