# 🚀 Deploy Now - Step by Step

## You're Almost There!

Follow these steps to deploy your website:

---

## Step 1: Create GitHub Personal Access Token

1. Open this link: https://github.com/settings/tokens/new
2. Token name: "Software Vala Liberia"
3. Expiration: Choose **90 days** or **No expiration**
4. Select scope: ✅ **repo** (full control of repositories)
5. Click **"Generate token"** at the bottom
6. **COPY THE TOKEN** - it looks like: `ghp_xxxxxxxxxxxxxxxxxxxx`
7. You won't be able to see it again!

---

## Step 2: Run Deploy Commands

Once you have your token, tell me and I'll run the deployment commands.

Or run these commands yourself:

```bash
cd /Users/user/Desktop/softwarevalaliberia

# Set your GitHub credentials (replace with your actual GitHub username)
git config --global user.name "Your GitHub Username"
git config --global user.email "your-email@example.com"

# Update remote URL to include token
git remote set-url origin https://YOUR_TOKEN@github.com/samsonbryant/softwarevalalib.git

# Push to GitHub
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

---

## Alternative: Use GitHub Desktop

If you have GitHub Desktop installed:

1. Open GitHub Desktop
2. File → Add Local Repository
3. Select: `/Users/user/Desktop/softwarevalaliberia`
4. Click "Publish repository"
5. After pushing, run: `npm run deploy`

---

## Your Website URLs

After successful deployment:
- **GitHub Pages**: https://samsonbryant.github.io/softwarevalalib
- **Custom Domain**: https://softwarevalalib.app (after DNS configured)

---

**Ready when you are! Share your token or let me know if you want to run the commands yourself.** 🔐

