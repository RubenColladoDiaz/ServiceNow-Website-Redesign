import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');
const validExtensions = ['.jpg', '.jpeg', '.png', '.avif'];

async function convertirImagenesAWebp(files) {
    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (validExtensions.includes(ext)) {
            const filePath = path.join(imagesDir, file);
            const webpFile = file.replace(ext, '.webp');
            const webpPath = path.join(imagesDir, webpFile);
            if (fs.existsSync(webpPath)) {
                console.log(`Ya existe: ${webpFile}`);
                continue;
            }
            try {
                await sharp(filePath)
                    .webp({ quality: 85 })
                    .toFile(webpPath);
                console.log(`Convertido: ${file} → ${webpFile}`);
            } catch (e) {
                console.error(`Error convirtiendo ${file}:`, e);
            }
        }
    }
}

function eliminarArchivosNoWebp(files) {
    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (validExtensions.includes(ext)) {
            const filePath = path.join(imagesDir, file);
            try {
                fs.unlinkSync(filePath);
                console.log(`Eliminado: ${file}`);
            } catch (e) {
                console.error(`Error eliminando ${file}:`, e);
            }
        }
    }
}

function actualizarRutasImagenes() {
    const dataFile = path.join(process.cwd(), 'src', 'data', 'productImagesRoutes.ts');
    try {
        let content = fs.readFileSync(dataFile, 'utf-8');
        content = content.replace(/(\/images\/[^"']+)\.(jpg|jpeg|png|avif)/gi, '$1.webp');
        fs.writeFileSync(dataFile, content, 'utf-8');
        console.log('Rutas de imágenes actualizadas a .webp en src/data/productImagesRoutes.ts');
    } catch (e) {
        console.error('Error actualizando rutas en src/data/productImagesRoutes.ts:', e);
    }
}

fs.readdir(imagesDir, async (err, files) => {
    if (err) {
        console.error('Error leyendo la carpeta de imágenes:', err);
        return;
    }

    await convertirImagenesAWebp(files);
    eliminarArchivosNoWebp(files);
    actualizarRutasImagenes();
});