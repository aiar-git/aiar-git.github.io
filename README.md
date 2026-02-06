# aiar collective - Website

This is the official website for the aiar collective, bridging music and neuroscience.

## Run Locally

**Prerequisites:** Node.js (v20.19.0 or >=22.12.0 recommended)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

The site will automatically reload when you make changes to the code.

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deploy to GitHub Pages

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Deploy new website"
   git push origin gh-pages
   ```

3. Wait 2-5 minutes for GitHub Pages to rebuild

### Using GitHub Actions (Automatic)

The `.github/workflows/deploy.yml` file is configured to automatically build and deploy when you push changes to the `gh-pages` branch.

## Project Structure

```
aiar-git.github.io/
├── public/          # Static assets (images, favicon, etc.)
│   └── assets/      # Images and other assets
├── components/      # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectGridCard.tsx
│   ├── ProjectModal.tsx
│   └── Footer.tsx
├── constants.ts     # Project and member data
├── types.ts         # TypeScript type definitions
├── App.tsx          # Main application component
├── index.tsx        # Application entry point
├── index.html       # HTML template
├── package.json     # Dependencies
├── vite.config.ts   # Build configuration
└── dist/            # Built files (generated)
```

## Customization

### Adding New Projects

Edit `constants.ts` and add a new project to the `PROJECTS` array:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  hostedBy: 'Host Organization',
  description: 'Project description...',
  year: '2024',
  imageUrl: '/assets/img/your-image.gif',
  size: 'large', // or 'small'
  videoUrl: 'https://youtube.com/...' // optional
}
```

### Adding New Team Members

Edit `constants.ts` and add a new member to the `MEMBERS` array:

```typescript
{
  name: 'Member Name',
  role: 'Their Role',
  imageUrl: '/assets/img/member-photo.png',
  bio: 'Biography text...',
  website: 'https://website.com' // optional
}
```

### Updating Images

Place new images in the `public/assets/img/` directory and reference them using `/assets/img/filename.ext` in your code.

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Spline** - 3D graphics for hero section

## License

Copyright © 2023 aiar collective
