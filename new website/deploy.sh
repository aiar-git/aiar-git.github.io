#!/bin/bash

# Deploy script for aiar website to GitHub Pages
# This script builds the React app and copies it to the repository root

set -e

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Navigate to the repository root
cd ..

# Backup CNAME file if it exists
if [ -f "CNAME" ]; then
    echo "💾 Backing up CNAME file..."
    cp CNAME CNAME.backup
fi

# Remove old files (but keep new website folder, .git, and CNAME)
echo "🧹 Cleaning old files..."
find . -maxdepth 1 ! -name 'new website' ! -name '.git' ! -name '.gitignore' ! -name 'CNAME' ! -name 'CNAME.backup' ! -name '.' ! -name '..' -exec rm -rf {} + 2>/dev/null || true

# Copy new build files to root
echo "📋 Copying new build files..."
cp -r "new website/dist/"* .

# Restore CNAME if it was backed up
if [ -f "CNAME.backup" ]; then
    echo "♻️  Restoring CNAME file..."
    mv CNAME.backup CNAME
fi

echo "✅ Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. Review the changes: git status"
echo "2. Stage the changes: git add ."
echo "3. Commit: git commit -m 'Deploy new website'"
echo "4. Push to GitHub: git push origin main"
echo ""
echo "Your site will be live at: https://aiar-git.github.io"

