import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');
const validExtensions = ['.jpg', '.jpeg', '.png', '.avif'];

function todasImagenesSonWebp(files) {
    return files.every(file => {
        const ext = path.extname(file).toLowerCase();
        return ext === '.webp' || ext === '.svg';
    });
}

async function convertirImagenesAWebp(files) {
    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (validExtensions.includes(ext)) {
            const filePath = path.join(imagesDir, file);
            const webpFile = file.replace(ext, '.webp');
            const webpPath = path.join(imagesDir, webpFile);
            if (fs.existsSync(webpPath)) {
                console.log(`Already exists: ${webpFile}`);
                continue;
            }
            try {
                await sharp(filePath)
                    .webp({ quality: 85 })
                    .toFile(webpPath);
                console.log(`Converted: ${file} → ${webpFile}`);
            } catch (e) {
                console.error(`Error converting ${file}:`, e);
            }
        }
    }
}

async function intentarEliminarArchivo(filePath, fileName, maxIntentos = 3) {
    for (let intento = 1; intento <= maxIntentos; intento++) {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            fs.unlinkSync(filePath);
            console.log(`Deleted: ${fileName}`);
            return true;
        } catch (e) {
            if (intento === maxIntentos) {
                console.error(`Error deleting ${fileName} after ${maxIntentos} attempts:`, e);
                return false;
            }
            console.log(`Attempt ${intento} failed to delete ${fileName}, retrying...`);
        }
    }
    return false;
}

async function eliminarArchivosNoWebp(files) {
    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (validExtensions.includes(ext)) {
            const filePath = path.join(imagesDir, file);
            await intentarEliminarArchivo(filePath, file);
        }
    }
}

function actualizarRutasImagenes() {
    const dataFile = path.join(process.cwd(), 'src', 'data', 'productImagesRoutes.ts');
    try {
        let content = fs.readFileSync(dataFile, 'utf-8');
        content = content.replace(/(\/images\/[^"']+)\.(jpg|jpeg|png|avif)/gi, '$1.webp');
        fs.writeFileSync(dataFile, content, 'utf-8');
        console.log('Image routes updated to .webp in src/data/productImagesRoutes.ts');
    } catch (e) {
        console.error('Error updating routes in src/data/productImagesRoutes.ts:', e);
    }
}

fs.readdir(imagesDir, async (err, files) => {
    if (err) {
        console.error('Error reading images folder:', err);
        return;
    }

    if (todasImagenesSonWebp(files)) {
        console.log('All images are already in WebP format. No conversion needed.');
        return;
    }

    await convertirImagenesAWebp(files);
    await eliminarArchivosNoWebp(files);
    actualizarRutasImagenes();
});