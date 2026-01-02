# Quick Start Guide

## 🚀 Run Locally (First Time)

```bash
cd "new website"
npm install
npm run dev
```

Visit: http://localhost:3000

## 📦 Deploy to GitHub Pages

### Quick Deploy (Manual)

```bash
cd "new website"
npm run build
./deploy.sh
cd ..
git add .
git commit -m "Deploy new website"
git push origin main
```

Wait 2-5 minutes, then visit: https://aiar-git.github.io

### Auto Deploy (Recommended)

Just push changes to the `new website` folder:

```bash
cd "new website"
# Make your changes...
git add .
git commit -m "Update content"
git push origin main
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
./deploy.sh      # Deploy to GitHub Pages
```

## 📚 More Info

- Full guide: See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- Project structure: See [README.md](README.md)

## ⚠️ Important

- Always work in the `new website` folder
- Never edit files in the repository root (they're auto-generated)
- Keep the CNAME file if using a custom domain

