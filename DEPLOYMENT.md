# Deployment Guide for Vercel

## Quick Start

Follow these steps to deploy your PSD Officer Rotation Matching System to Vercel.

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
```bash
git init
```

2. **Add all files**:
```bash
git add .
```

3. **Commit your changes**:
```bash
git commit -m "Initial commit: PSD Rotation Matching System"
```

### Step 2: Push to GitHub

1. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Name it `psd-rotation-matching` (or your preferred name)
   - Don't initialize with README (you already have one)
   - Click "Create repository"

2. **Add GitHub as remote and push**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/psd-rotation-matching.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. **Sign in to Vercel**:
   - Go to https://vercel.com
   - Sign up or log in (can use GitHub account)

2. **Import your project**:
   - Click "Add New Project"
   - Click "Import" next to your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure build settings** (should be auto-detected):
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - You'll get a URL like: `https://psd-rotation-matching.vercel.app`

## Important Notes

### Python Dependencies

Vercel will automatically:
- Detect `requirements.txt`
- Install Python packages (numpy, pandas, scipy)
- Make Python available for your API routes

### Environment Variables

This MVP doesn't require any environment variables! Everything works out of the box.

### Excel Templates

Templates will be generated during the build process via the `postinstall` script in `package.json`.

## Testing Your Deployment

1. Visit your Vercel URL
2. Download sample templates
3. Upload the templates
4. Click "Run Matching"
5. View results

## Troubleshooting

### Build Fails

Check Vercel build logs:
1. Go to your Vercel dashboard
2. Click on your project
3. Click on the failed deployment
4. View the "Build Logs" tab

Common issues:
- **Python not found**: Vercel should auto-detect requirements.txt
- **Module not found**: Check that all dependencies are in package.json
- **TypeScript errors**: Run `npm run build` locally first

### Runtime Errors

Check function logs:
1. Vercel dashboard → Project → Functions
2. Look for errors in `/api/match`

Common issues:
- **Python script fails**: Check that lib/matching.py exists and has correct permissions
- **Excel parsing fails**: Verify Excel file format matches templates

## Updating Your Deployment

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

Vercel automatically redeploys on every push to main branch.

## Custom Domain (Optional)

1. Go to Vercel dashboard → Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Security Considerations

For production use:

1. **Rate Limiting**: Add rate limiting to API routes
2. **File Size Limits**: Configure max upload size
3. **Authentication**: Add user authentication if needed
4. **Input Validation**: Enhanced validation for Excel files

## Support

If you encounter issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review build logs carefully
- Ensure Python dependencies are compatible with Vercel's environment

---

**That's it!** Your PSD Officer Rotation Matching System should now be live on Vercel.
