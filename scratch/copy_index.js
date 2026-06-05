const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'fairytale', 'index.htm');
const destPath = path.join(__dirname, '..', 'index.html');

try {
    let html = fs.readFileSync(srcPath, 'utf8');
    
    // Replace all relative parent directory paths '../' with './' so they work in the root folder
    const updatedHtml = html.replace(/\.\.\//g, './');
    
    fs.writeFileSync(destPath, updatedHtml, 'utf8');
    console.log('Successfully copied fairytale/index.htm to root index.html and adjusted paths!');
} catch (err) {
    console.error('Error processing file:', err);
}
