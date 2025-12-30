# ⚖️ Landing Page - Escritório de Advocacia

Template profissional de landing page para escritórios de advocacia, desenvolvido com HTML5, CSS3 e JavaScript puro. Design elegante, responsivo e otimizado para conversão de clientes.

![Status](https://img.shields.io/badge/Status-Pronto-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 🎯 Características

- **Design Profissional** - Dark mode com dourado elegante
- **100% Responsivo** - Mobile-first design
- **Animações Suaves** - AOS (Animate On Scroll)
- **SEO Otimizado** - Meta tags completas
- **Performance** - Carregamento rápido
- **Conversão** - CTAs estratégicos

---

## 🛠 Tecnologias

### Core
- **HTML5** - Estrutura semântica
- **CSS3** - Grid, Flexbox, variáveis CSS
- **JavaScript** - Vanilla JS, sem jQuery

### Bibliotecas
- **AOS** - Animações ao rolar (unpkg.com/aos@2.3.1)
- **Google Fonts** - Playfair Display + Inter

---

## 📁 Estrutura

```
projeto-advocacia/
│
├── index.html          # Página principal
├── style.css           # Estilos
├── script.js           # Funcionalidades
│
└── assets/
    ├── icons/
    │   └── balance.svg     # Logo balança
    │
    └── img/
        ├── img01.avif      # Hero
        ├── img02.avif      # Áreas
        └── img03.avif      # Contato
```

---

## 📄 Seções

### 1. Hero
- Título impactante com gradiente
- 2 CTAs (Consulta + Áreas)
- Imagem profissional
- Layout 2 colunas

### 2. Sobre Nós
- História e credenciais
- 4 cards estatísticos:
  - Anos de experiência
  - Casos de sucesso
  - Clientes satisfeitos
  - Atendimento 24/7
- Horário de atendimento

### 3. Áreas de Atuação
- Imagem full-width
- 3 cards com acordeão:
  - **Direito Civil** (6 especialidades)
  - **Direito Trabalhista** (6 especialidades)
  - **Direito Empresarial** (6 especialidades)
- CTA final

### 4. Contato
- Imagem full-width
- 4 cards interativos:
  - WhatsApp
  - Email
  - Instagram
  - Endereço
- Hover effects

### 5. Footer
- Logo e créditos
- Link GitHub

---

## ⚙️ Funcionalidades JavaScript

```javascript
initAOS()              // Animações
setupSmoothScroll()    // Scroll suave
setupScrollEffects()   // Header + botão topo
setupAreaToggles()     // Acordeão
setupMobileMenu()      // Menu mobile
checkOfficeHours()     // Horário
```

---

## 🎨 Design System

### Cores
```css
--bg: #0a0e27              /* Fundo azul escuro */
--primary: #d4af37         /* Dourado principal */
--primary-dark: #b8941f    /* Dourado escuro */
--text: #e8eaf0            /* Texto branco */
--text-secondary: #a0a8c0  /* Cinza claro */
```

### Tipografia
- **Títulos**: Playfair Display (serif elegante)
- **Corpo**: Inter (sans-serif moderna)

---

## 🔧 Personalização

### 1. Informações do Escritório
**index.html:**
- Linha 10-13: Meta descriptions
- Linha 28: Title
- Linha 53: Nome do escritório
- Linha 82-86: Título hero
- Linha 103-116: Texto "Sobre"
- Linha 121-140: Estatísticas
- Linha 145-147: Horário

### 2. Áreas de Atuação
**Linhas 167-289:**
- Editar 3 cards de especialidades
- Trocar títulos, descrições e listas
- Personalizar ícones SVG

### 3. Contato
**Linhas 315-386:**
- **WhatsApp**: `https://wa.me/55SEUNUMERO`
- **Email**: `mailto:seu@email.com`
- **Instagram**: `https://www.instagram.com/seuusuario/`
- **Endereço**: texto completo

### 4. Cores
**style.css (linhas 1-24):**
```css
--primary: #d4af37;    /* Sua cor principal */
--bg: #0a0e27;         /* Fundo escuro */
```

### 5. Imagens
Substituir em `assets/img/`:
- `img01.avif` - Foto escritório (600x600px)
- `img02.avif` - Áreas atuação (1200x400px)
- `img03.avif` - Contato (1200x400px)
- `balance.svg` - Logo balança

---

## 🌐 Deploy Gratuito

### 🚀 Opção 1: Vercel (Recomendado)

**Vantagens:** Deploy automático, HTTPS, CDN global

**Passos:**
1. Criar conta no [GitHub](https://github.com)
2. Criar repositório público
3. Upload dos arquivos (drag & drop)
4. Acessar [Vercel](https://vercel.com)
5. "Sign Up" com GitHub
6. "Import Project" → selecionar repo
7. "Deploy" → pronto!

**URL:** `seu-projeto.vercel.app`

---

### 🎯 Opção 2: Netlify

**Vantagens:** Drag & drop, formulários grátis

**Passos (Método Rápido):**
1. Acessar [Netlify](https://netlify.com)
2. Criar conta
3. Arrastar pasta do projeto
4. Pronto!

**URL:** `random-name.netlify.app`

**Método GitHub:**
1. Criar repo no GitHub
2. No Netlify: "New site from Git"
3. Conectar GitHub
4. Deploy

---

### ⚡ Opção 3: Cloudflare Pages

**Vantagens:** CDN mais rápido, DDoS protection

**Passos:**
1. Criar conta no [Cloudflare Pages](https://pages.cloudflare.com)
2. "Create project" → "Connect Git"
3. Conectar GitHub
4. Selecionar repo
5. Deploy

**Ou upload direto:**
1. "Direct Upload"
2. Arrastar pasta
3. Deploy

**URL:** `seu-projeto.pages.dev`

---

### 📦 Opção 4: GitHub Pages

**Vantagens:** Simples, integrado

**Passos:**
1. Criar repo no GitHub
2. Upload dos arquivos
3. Settings → Pages
4. Source: "main" branch
5. Save
6. Aguardar 1-2 min

**URL:** `seuusuario.github.io/nome-repo`

---

## 📊 Comparação

| Plataforma | Deploy | Domínio | Melhor Para |
|------------|--------|---------|-------------|
| Vercel | ⚡⚡⚡⚡⚡ | ✅ Grátis | Profissionais |
| Netlify | ⚡⚡⚡⚡ | ✅ Grátis | Iniciantes |
| Cloudflare | ⚡⚡⚡⚡⚡ | ✅ Grátis | Performance |
| GitHub Pages | ⚡⚡⚡ | ⚠️ Limitado | Portfólios |

---

## 🔗 Domínio Próprio

**Para todas as plataformas:**

1. Comprar domínio:
   - Registro.br (Brasil)
   - Namecheap
   - GoDaddy

2. Configurar DNS:
   - Adicionar nameservers fornecidos
   - Ou adicionar records A/CNAME

3. Aguardar propagação (15min-48h)

4. HTTPS automático incluído

---

## 🔄 Atualizar Site

**Com GitHub:**
```bash
git add .
git commit -m "Atualização"
git push
```
Deploy automático em 30s!

**Drag & Drop:**
Arrastar arquivos novamente

---

## ✅ Checklist Pré-Deploy

- [ ] Testar em Chrome/Firefox/Safari
- [ ] Testar mobile/tablet/desktop
- [ ] Verificar todos os links
- [ ] Trocar dados de exemplo
- [ ] Otimizar imagens (< 500KB)
- [ ] Testar no [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 🆘 Problemas Comuns

**Imagens não aparecem:**
- Verificar caminhos: `./assets/img/img01.avif`
- Conferir se imagens foram enviadas

**Menu mobile não abre:**
- Testar em DevTools (F12)
- Verificar se script.js carrega

**Links não funcionam:**
- WhatsApp: formato `https://wa.me/5511999999999`
- Email: formato `mailto:seu@email.com`

---

## 📜 Licença

MIT License - Use livremente para fins comerciais ou pessoais.

---

## 👨‍💻 Créditos

**Desenvolvido por**: Guilherme Ribeiro  
**GitHub**: [github.com/devgbr86](https://github.com/devgbr86)  
**Ano**: 2025

---

**⚖️ Pronto para lançar sua presença jurídica online!**