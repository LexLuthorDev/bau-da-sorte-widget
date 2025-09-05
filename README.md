# Baú da Sorte Widget - CDN

Este diretório contém os arquivos para distribuição via CDN do widget Baú da Sorte.

## 📁 Estrutura

```
cdn/
├── v1.0.0/
│   └── bau-da-sorte-widget.min.js    # Versão específica
├── latest.js                          # Última versão
├── package.json                       # Configuração do pacote
└── README.md                          # Este arquivo
```

## 🚀 Como usar

### Via CDN (recomendado)

```html
<!-- Última versão -->
<script src="https://cdn.bau-da-sorte.com/latest.js"></script>

<!-- Versão específica -->
<script src="https://cdn.bau-da-sorte.com/v1.0.0/bau-da-sorte-widget.min.js"></script>
```

### Inicialização

```javascript
const widget = new BauDaSorteWidget({
  containerId: 'bau-da-sorte-widget',
  apiUrl: 'https://api.bau-da-sorte.com',
  apiKey: 'sua-api-key-aqui',
  onError: (error) => {
    console.error('Erro:', error);
  }
});
```

## 🔧 Deploy

### GitHub Pages (Gratuito)

1. Crie um repositório público
2. Faça upload dos arquivos da pasta `cdn/`
3. Ative GitHub Pages nas configurações
4. URL será: `https://seu-usuario.github.io/seu-repositorio/`

### Netlify (Gratuito)

1. Conecte seu repositório GitHub
2. Configure build command: `npm run build`
3. Configure publish directory: `cdn/`
4. Deploy automático a cada push

### Vercel (Gratuito)

1. Conecte seu repositório
2. Configure build command: `npm run build`
3. Configure output directory: `cdn/`

## 📊 Estatísticas

- **Tamanho**: ~34 KB (minificado)
- **Gzip**: ~12 KB
- **Compatibilidade**: Todos os navegadores modernos
- **Dependências**: Nenhuma

## 🔒 Segurança

- Validação de API Key obrigatória
- CORS configurado
- Headers de segurança
- Rate limiting

## 📝 Changelog

### v1.0.0
- ✅ Widget funcional completo
- ✅ Validação de API Key
- ✅ Modo demo
- ✅ Animações e sons
- ✅ Background dinâmico
- ✅ Partículas
- ✅ Responsivo
