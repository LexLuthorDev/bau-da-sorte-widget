# 🚀 Deploy do Widget para CDN

## 📋 Opções de Deploy

### 1. **GitHub Pages (Gratuito)**
```bash
# 1. Criar repositório público no GitHub
# 2. Fazer upload da pasta cdn/
# 3. Ativar GitHub Pages em Settings > Pages
# 4. URL: https://seu-usuario.github.io/seu-repositorio/
```

### 2. **Netlify (Gratuito)**
```bash
# 1. Conectar repositório GitHub
# 2. Build command: npm run build
# 3. Publish directory: cdn/
# 4. Deploy automático
```

### 3. **Vercel (Gratuito)**
```bash
# 1. Conectar repositório
# 2. Build command: npm run build
# 3. Output directory: cdn/
# 4. Deploy automático
```

### 4. **jsDelivr (Gratuito)**
```bash
# 1. Fazer push para GitHub
# 2. Usar: https://cdn.jsdelivr.net/gh/usuario/repo@versao/caminho/arquivo.js
# 3. Exemplo: https://cdn.jsdelivr.net/gh/bau-da-sorte/widget@v1.0.0/cdn/latest.js
```

## 🔧 Scripts de Deploy

### Deploy para GitHub Pages
```bash
# No diretório widget/
npm run build
cd cdn
git init
git add .
git commit -m "Deploy widget v1.0.0"
git remote add origin https://github.com/seu-usuario/bau-da-sorte-widget.git
git push -u origin main
```

### Deploy para Netlify
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=cdn
```

## 📊 URLs de Exemplo

Após o deploy, seus usuários poderão usar:

```html
<!-- Última versão -->
<script src="https://seu-cdn.com/latest.js"></script>

<!-- Versão específica -->
<script src="https://seu-cdn.com/v1.0.0/bau-da-sorte-widget.min.js"></script>

<!-- Via jsDelivr -->
<script src="https://cdn.jsdelivr.net/gh/seu-usuario/bau-da-sorte-widget@v1.0.0/cdn/latest.js"></script>
```

## 🎯 Próximos Passos

1. **Escolher provider de CDN**
2. **Fazer deploy dos arquivos**
3. **Testar URLs**
4. **Documentar para usuários**
5. **Configurar CI/CD para atualizações automáticas**
