# Quick Start Guide

## 🚀 Run Locally (First Time)

```bash
npm install
npm run dev
```

Visit: http://localhost:3000

## 📦 Deploy to GitHub Pages

### Quick Deploy (Manual)

```bash
npm run build
git add .
git commit -m "Deploy new website"
git push origin gh-pages
```

Wait 2-5 minutes, then visit: https://aiarcollective.com

### Auto Deploy (Recommended)

Just push changes to the `gh-pages` branch:

```bash
# Make your changes...
git add .
git commit -m "Update content"
git push origin gh-pages
```

GitHub Actions will automatically build and deploy!

## 📝 Edit Content

All content is in `constants.ts`:

- **Projects**: Edit the `PROJECTS` array
- **Team Members**: Edit the `MEMBERS` array
- **Images**: Add to `public/assets/img/`

## 🎨 Edit Styling

- **Components**: Edit files in `components/` folder
- **Main App**: Edit `App.tsx`
- **Colors/Layout**: Uses Tailwind CSS classes

## 🔧 Common Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📚 More Info

- Full guide: See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- Project structure: See [README.md](README.md)

## ⚠️ Important

- All source files are now in the repository root
- The `dist` folder contains built files (auto-generated)
- Keep the CNAME file for custom domain

