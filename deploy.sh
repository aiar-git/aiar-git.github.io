#!/bin/bash

# Deploy script for aiar website to GitHub Pages
# This script builds the React app for deployment

set -e

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

echo "✅ Build complete!"
echo ""
echo "The built files are in the 'dist' folder."
echo ""
echo "Next steps:"
echo "1. Review the changes: git status"
echo "2. Stage the changes: git add ."
echo "3. Commit: git commit -m 'Deploy new website'"
echo "4. Push to GitHub: git push origin gh-pages"
echo ""
echo "Your site will be live at: https://aiarcollective.com"

