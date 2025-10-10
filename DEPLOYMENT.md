# Deployment Guide - GitHub Pages

## Prerequisites

1. Push your code to GitHub repository
2. Ensure your repository name is `portfolio-airey` (or update `basePath` in `next.config.js`)

## Deployment Steps

### 1. Build and Deploy

Run the following command to build and deploy your site:

```bash
npm run deploy
```

This will:

- Build the Next.js app as a static site
- Create an `out` directory with the static files
- Push the contents to the `gh-pages` branch
- Deploy to GitHub Pages

### 2. Configure GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### 3. Access Your Site

Your site will be available at:

```
https://wisdomairey.github.io/portfolio-airey/
```

## Important Notes

### Base Path

The `basePath` in `next.config.js` is set to `/portfolio-airey`. This matches your repository name. If your repository name is different, update it accordingly:

```javascript
basePath: '/your-repo-name',
```

### Custom Domain (Optional)

If you want to use a custom domain:

1. Create a `CNAME` file in the `public` directory with your domain name
2. Configure DNS settings with your domain provider
3. Update `basePath` to `''` in `next.config.js`

### Images

Images are set to `unoptimized: true` because GitHub Pages doesn't support Next.js Image Optimization API.

## Troubleshooting

### 404 Errors

If you get 404 errors:

- Ensure the `basePath` matches your repository name
- Check that GitHub Pages is configured to use the `gh-pages` branch

### Deployment Fails

If deployment fails:

- Ensure you have committed and pushed your code to GitHub
- Check that you have the correct repository permissions
- Verify git is properly configured with your GitHub account

### Updates Not Showing

- Clear browser cache
- Wait a few minutes for GitHub Pages to update
- Check the Actions tab in GitHub for deployment status

## Manual Deployment

If you prefer manual deployment:

```bash
# Build the site
npm run build

# The static files will be in the 'out' directory
# Manually push the 'out' directory to gh-pages branch
```
