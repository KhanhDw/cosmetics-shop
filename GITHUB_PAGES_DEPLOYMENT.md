# Deploying to GitHub Pages

This document explains how to deploy your React/TypeScript/Vite project to GitHub Pages.

## Prerequisites

1. Your repository must be public for GitHub Pages to work
2. Make sure you have admin rights to the repository
3. The project must build successfully (run `npm run build` to test)

## Setup Process

### 1. Repository Configuration

1. Push your code to the main branch of your GitHub repository
2. Make sure the `.github/workflows/deploy.yml` file exists in your repository

### 2. GitHub Pages Configuration

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. In the left sidebar, click on "Pages"
4. Under "Build and deployment", set:
   - Source: "GitHub Actions"
   
> Note: The workflow will automatically deploy from the `dist` folder after a successful build

### 3. Workflow Configuration

The deployment uses GitHub Actions with the following behavior:
- Automatically triggers on each push to the `main` branch
- Also available as a manual trigger ("workflow_dispatch")
- Builds the project using `npm run build` with GitHub Pages configuration
- Deploys the contents of the `dist` folder to GitHub Pages

## Path Configuration for Subdirectories

When deploying to GitHub Pages with a subdirectory (like `/cosmetics-shop/`), special attention must be paid to internal links:

1. **Navigation Links**: Use React Router's `<Link>` component instead of `<a>` tags with absolute paths
   - ❌ Don't use: `<a href="/">Home</a>`
   - ✅ Use: `<Link to="/">Home</Link>`
   
2. **Vite Base Configuration**: The `vite.config.ts` file automatically sets the correct base path when building for GitHub Pages

3. **SPA Routing**: For Single Page Applications like React with React Router, GitHub Pages requires special handling for client-side routing. This project includes:
   - A `404.html` file in the public directory that handles direct route access
   - Modifications to `index.html` to handle redirects from `404.html`

## Environment Specifics

- The deployment is configured using the `GITHUB_PAGES` environment variable
- The base path is set to `/cosmetics-shop/` to match the repository name
- The project will be accessible at: `https://<your-username>.github.io/cosmetics-shop/`

## Manual Deployment

If you want to manually trigger a deployment (without pushing to main):
1. Go to the "Actions" tab in your repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" and choose the branch

## Troubleshooting

### If the site doesn't load properly:
1. Check that the base path in `vite.config.ts` matches your repository name
2. Verify that all asset paths in your React components are relative
3. Check the GitHub Pages deployment status in the repository settings
4. Ensure you're using `<Link>` components for internal navigation instead of `<a>` tags with absolute paths

### If routes don't work when accessed directly or after refresh:
1. Make sure the `404.html` file exists in your `public` directory
2. Verify that GitHub Pages is configured to use the correct branch
3. Wait a few minutes after deployment for GitHub Pages to update

### If the build fails in GitHub Actions:
1. Check the Actions logs for specific error messages
2. Ensure all dependencies are properly specified in package.json
3. Verify that the build command works locally with: `GITHUB_PAGES=true npm run build`

## Notes

- The first deployment may take a few minutes to become available
- Subsequent deployments will update the site automatically
- All internal navigation should use React Router's `<Link>` component for proper subdirectory handling
- Direct access to routes (like `/products`) will work after the `404.html` configuration is active
- After making changes to fix navigation issues, rebuild and redeploy by pushing changes to main branch