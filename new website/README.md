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

### Option 1: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Copy the contents of the `dist` folder to the root of your repository:
   ```bash
   cp -r dist/* ../
   ```

3. Commit and push to GitHub:
   ```bash
   cd ..
   git add .
   git commit -m "Deploy new website"
   git push origin main
   ```

### Option 2: Using GitHub Actions (Recommended)

Create a `.github/workflows/deploy.yml` file in your repository root with automated deployment configuration. This will automatically build and deploy your site whenever you push to the main branch.

## Project Structure

```
new website/
├── public/          # Static assets (images, favicon, etc.)
│   └── assets/      # Images and other assets
├── components/      # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   └── Footer.tsx
├── constants.ts     # Project and member data
├── types.ts         # TypeScript type definitions
├── App.tsx          # Main application component
├── index.tsx        # Application entry point
└── index.html       # HTML template
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
