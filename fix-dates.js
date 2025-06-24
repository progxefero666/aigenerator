//fix-dates.js
const fs = require('fs');
const path = require('path');

// Busca archivos de modelos
const modelsDir = './src/client/models';
const files = fs.readdirSync(modelsDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(modelsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Reemplaza los campos de fecha específicos
    content = content.replace(/creationdate\?:\s*string/g, 'creationdate?: Date');
    content = content.replace(/updatedate\?:\s*string/g, 'updatedate?: Date');

    fs.writeFileSync(filePath, content);
});
