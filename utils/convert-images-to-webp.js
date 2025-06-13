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

async function eliminarArchivosNoWebp(files) {
    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (validExtensions.includes(ext)) {
            const filePath = path.join(imagesDir, file);
            let intentos = 0;
            const maxIntentos = 3;

            while (intentos < maxIntentos) {
                try {
                    // Esperar un poco antes de intentar eliminar
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    fs.unlinkSync(filePath);
                    console.log(`Eliminado: ${file}`);
                    break;
                } catch (e) {
                    intentos++;
                    if (intentos === maxIntentos) {
                        console.error(`Error eliminando ${file} después de ${maxIntentos} intentos:`, e);
                    } else {
                        console.log(`Intento ${intentos} fallido para eliminar ${file}, reintentando...`);
                    }
                }
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

    if (todasImagenesSonWebp(files)) {
        console.log('Todas las imágenes ya están en formato WebP. No es necesario realizar conversiones.');
        return;
    }

    await convertirImagenesAWebp(files);
    await eliminarArchivosNoWebp(files);
    actualizarRutasImagenes();
});