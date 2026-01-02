# Deployment Guide for aiar Website

This guide will help you deploy your renovated website to GitHub Pages.

## Prerequisites

- Node.js (v20.19.0 or >=22.12.0)
- Git
- GitHub account with access to the repository

## Local Development

### First Time Setup

1. Navigate to the new website folder:
   ```bash
   cd "new website"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

The site will hot-reload as you make changes to the code.

## Deployment Options

### Option 1: Manual Deployment (Quick & Simple)

This is the fastest way to deploy your site manually.

1. **Build the project:**
   ```bash
   cd "new website"
   npm run build
   ```

2. **Run the deployment script:**
   ```bash
   ./deploy.sh
   ```

3. **Review and commit the changes:**
   ```bash
   cd ..
   git status
   git add .
   git commit -m "Deploy new website"
   git push origin main
   ```

4. **Wait a few minutes** for GitHub Pages to update, then visit:
   ```
   https://aiar-git.github.io
   ```

### Option 2: GitHub Actions (Automated - Recommended)

This method automatically deploys your site whenever you push changes to the `new website` folder.

#### Setup (One-time)

1. The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`

2. Enable GitHub Actions in your repository:
   - Go to your GitHub repository
   - Click on "Settings" → "Actions" → "General"
   - Under "Workflow permissions", select "Read and write permissions"
   - Click "Save"

3. Make sure GitHub Pages is enabled:
   - Go to "Settings" → "Pages"
   - Under "Source", select "Deploy from a branch"
   - Under "Branch", select "main" and "/ (root)"
   - Click "Save"

#### Usage

After setup, simply push changes to the `new website` folder:

```bash
cd "new website"
# Make your changes to the code
git add .
git commit -m "Update website content"
git push origin main
```

The GitHub Action will automatically:
- Build your website
- Deploy it to the repository root
- Make it live on GitHub Pages

You can monitor the deployment progress:
- Go to your repository on GitHub
- Click the "Actions" tab
- Watch the workflow run

### Option 3: Manual Build and Copy

If you prefer more control over the process:

1. **Build the project:**
   ```bash
   cd "new website"
   npm run build
   ```

2. **Backup important files:**
   ```bash
   cd ..
   cp CNAME CNAME.backup  # if you have a custom domain
   ```

3. **Clean the root directory:**
   ```bash
   # Remove old website files (be careful!)
   rm -rf assets css js index.html
   ```

4. **Copy new build files:**
   ```bash
   cp -r "new website/dist/"* .
   ```

5. **Restore important files:**
   ```bash
   mv CNAME.backup CNAME  # if you backed it up
   ```

6. **Commit and push:**
   ```bash
   git add .
   git commit -m "Deploy new website"
   git push origin main
   ```

## Troubleshooting

### Issue: Website not updating after push

**Solution:**
- Wait 2-5 minutes for GitHub Pages to rebuild
- Clear your browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check the Actions tab on GitHub for any build errors

### Issue: Images not loading

**Solution:**
- Make sure images are in `new website/public/assets/img/`
- Check that image paths in `constants.ts` start with `/assets/img/`
- Rebuild and redeploy

### Issue: Dev server shows errors

**Solution:**
- Check for syntax errors in your TypeScript files
- Make sure all imports are correct
- Try deleting `node_modules` and running `npm install` again

### Issue: Build fails

**Solution:**
- Check the terminal output for specific errors
- Make sure all dependencies are installed: `npm install`
- Try clearing the build cache: `rm -rf dist` then rebuild

## Updating Content

### Adding a New Project

Edit `new website/constants.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  hostedBy: 'Organization Name',
  description: 'Detailed description...',
  year: '2024',
  imageUrl: '/assets/img/project-image.gif',
  size: 'large', // or 'small'
  videoUrl: 'https://youtube.com/...' // optional
}
```

### Adding a New Team Member

Edit `new website/constants.ts`:

```typescript
{
  name: 'Member Name',
  role: 'their role',
  imageUrl: '/assets/img/member-photo.png',
  bio: "Biography text...",
  website: 'https://website.com' // optional
}
```

### Updating Images

1. Add new images to `new website/public/assets/img/`
2. Reference them in your code as `/assets/img/filename.ext`
3. Rebuild and deploy

## File Structure

```
aiar-git.github.io/
├── new website/              # Source code (keep this)
│   ├── public/
│   │   └── assets/          # Images and static files
│   ├── components/          # React components
│   ├── constants.ts         # Content data
│   ├── types.ts            # TypeScript types
│   ├── App.tsx             # Main app
│   ├── package.json        # Dependencies
│   └── deploy.sh           # Deployment script
├── .github/
│   └── workflows/
│       └── deploy.yml      # Auto-deployment config
├── assets/                 # Deployed assets (generated)
├── index.html             # Deployed HTML (generated)
├── *.js, *.css           # Deployed files (generated)
└── CNAME                 # Custom domain (if applicable)
```

## Important Notes

1. **Never delete the `new website` folder** - it contains your source code
2. **The root directory files are auto-generated** - don't edit them directly
3. **Always make changes in the `new website` folder** and rebuild
4. **Keep the CNAME file** if you're using a custom domain
5. **The `.git` and `.github` folders** should never be deleted

## Support

If you encounter issues:
1. Check the GitHub Actions logs for deployment errors
2. Review the browser console for runtime errors
3. Verify all file paths are correct
4. Make sure Node.js version is compatible

## Next Steps

After successful deployment:
1. Test all links and images on the live site
2. Check mobile responsiveness
3. Verify all project videos load correctly
4. Test contact links and social media links
5. Set up custom domain (if desired)

Your website should now be live at: **https://aiar-git.github.io**

Enjoy your new website! 🎉

