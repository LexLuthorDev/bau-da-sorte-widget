const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'dist');
const cdnDir = __dirname;

console.log('🚀 Copiando arquivos para CDN...');

try {
  // Copiar versão específica
  const version = 'v1.0.0';
  const versionDir = path.join(cdnDir, version);
  
  if (!fs.existsSync(versionDir)) {
    fs.mkdirSync(versionDir, { recursive: true });
  }
  
  const sourceFile = path.join(sourceDir, 'bau-da-sorte-widget.min.js');
  const versionFile = path.join(versionDir, 'bau-da-sorte-widget.min.js');
  const latestFile = path.join(cdnDir, 'latest.js');
  
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, versionFile);
    fs.copyFileSync(sourceFile, latestFile);
    
    const stats = fs.statSync(versionFile);
    console.log('✅ Arquivos copiados com sucesso!');
    console.log(`📁 Versão: ${version}/bau-da-sorte-widget.min.js`);
    console.log(`📁 Latest: latest.js`);
    console.log(`📊 Tamanho: ${(stats.size / 1024).toFixed(0)} KB`);
  } else {
    console.error('❌ Arquivo fonte não encontrado:', sourceFile);
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Erro ao copiar arquivos:', error.message);
  process.exit(1);
}
