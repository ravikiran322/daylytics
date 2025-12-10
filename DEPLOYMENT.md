# Deployment Guide - GitHub Pages

This guide will walk you through deploying Life Dashboard to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your machine
- Node.js and npm installed
- Your project code

## Step 1: Prepare Your Repository

### Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `life-dashboard` (or your preferred name)
3. Choose **Public** (required for free GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license (we already have these)

### Initialize Git and Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Life Dashboard"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Configure Vite for GitHub Pages

### Update Repository Name in vite.config.js

1. Open `vite.config.js`
2. Update the `base` property with your repository name:

```javascript
base: '/YOUR_REPO_NAME/'
```

**Example:**
- If your repo is `github.com/john/life-dashboard`, use: `base: '/life-dashboard/'`
- If your repo is `github.com/john/my-dashboard`, use: `base: '/my-dashboard/'`

**Important:** The base path must match your repository name exactly (case-sensitive)!

## Step 3: Install gh-pages Package

Install the `gh-pages` package as a dev dependency:

```bash
npm install --save-dev gh-pages
```

## Step 4: Build Your Project

Build the project for production:

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## Step 5: Deploy to GitHub Pages

### Option A: Using npm script (Recommended)

The `package.json` already includes a deploy script. Just run:

```bash
npm run deploy
```

This will:
1. Build your project
2. Deploy the `dist` folder to the `gh-pages` branch

### Option B: Manual Deployment

If you prefer manual deployment:

```bash
# Build first
npm run build

# Deploy using gh-pages
npx gh-pages -d dist
```

## Step 6: Enable GitHub Pages

1. Go to your GitHub repository on GitHub.com
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

## Step 7: Access Your Live Site

After a few minutes, your site will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**
- If your username is `john` and repo is `life-dashboard`:
- URL: `https://john.github.io/life-dashboard/`

## Updating Your Deployment

Whenever you make changes:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. Deploy again:
   ```bash
   npm run deploy
   ```

The site will update automatically (may take a few minutes).

## Troubleshooting

### Site Shows 404 or Blank Page

1. **Check base path** - Ensure `vite.config.js` base matches your repo name exactly
2. **Wait a few minutes** - GitHub Pages can take 1-5 minutes to update
3. **Check gh-pages branch** - Verify the branch exists and has files
4. **Clear browser cache** - Try incognito/private browsing mode

### Assets Not Loading

- Ensure all paths in your code use relative paths (not absolute)
- Check that `vite.config.js` base path is correct
- Verify images and assets are in the `public` folder

### Build Errors

- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (requires Node 16+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder:
   ```
   yourdomain.com
   ```

2. Configure DNS settings with your domain provider:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `YOUR_USERNAME.github.io`

3. Update `vite.config.js`:
   ```javascript
   base: '/' // Use root path for custom domain
   ```

4. Redeploy: `npm run deploy`

## Alternative: GitHub Actions (Advanced)

For automated deployments on every push, you can set up GitHub Actions. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Summary

✅ Repository created on GitHub  
✅ Code pushed to main branch  
✅ Vite configured with correct base path  
✅ gh-pages package installed  
✅ Site deployed to gh-pages branch  
✅ GitHub Pages enabled  
✅ Site is live! 🎉

## Next Steps

- Share your dashboard link with others
- Customize the content and data
- Add more features
- Set up a custom domain (optional)

---

**Need Help?** Open an issue on GitHub or check the [GitHub Pages documentation](https://docs.github.com/en/pages).
