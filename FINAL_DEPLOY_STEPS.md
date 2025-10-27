# 🔐 Final Deployment Steps

## Authentication Required

GitHub requires authentication to push code. Use one of these methods:

---

## Option 1: GitHub Personal Access Token (Recommended)

### Step 1: Create a Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: "Software Vala Liberia Deployment"
4. Select scopes:
   - ✅ `repo` (full control of private repositories)
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Push with Token

```bash
cd /Users/user/Desktop/softwarevalaliberia

# When prompted for username: enter your GitHub username
# When prompted for password: paste your Personal Access Token
git push -u origin main
```

### Step 3: Deploy

```bash
npm run deploy
```

---

## Option 2: GitHub CLI (Easy)

### Install GitHub CLI

```bash
brew install gh
```

### Authenticate

```bash
gh auth login
# Follow the prompts to authenticate
```

### Push and Deploy

```bash
cd /Users/user/Desktop/softwarevalaliberia
git push -u origin main
npm run deploy
```

---

## Option 3: SSH Key (Most Secure)

### Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter to accept default location
# Optionally set a passphrase
```

### Add SSH Key to GitHub

1. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

2. Go to: https://github.com/settings/keys
3. Click **"New SSH key"**
4. Paste your key and save

### Update Remote URL

```bash
cd /Users/user/Desktop/softwarevalaliberia
git remote set-url origin git@github.com:samsonbryant/softwarevalalib.git
git push -u origin main
npm run deploy
```

---

## 📝 After Successfully Pushing

Once you've pushed successfully, run:

```bash
npm run deploy
```

This will:
1. Build your React app
2. Deploy to GitHub Pages
3. Make it live at: **https://samsonbryant.github.io/softwarevalalib**

---

## ✅ Next: Configure Domain

After deployment works, configure your custom domain:

### 1. DNS Settings (Namecheap)

Add these records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| **CNAME** | www | samsonbryant.github.io | Auto |
| **A** | @ | 185.199.108.153 | Auto |
| **A** | @ | 185.199.109.153 | Auto |
| **A** | @ | 185.199.110.153 | Auto |
| **A** | @ | 185.199.111.153 | Auto |

### 2. GitHub Settings

1. Go to: https://github.com/samsonbryant/softwarevalalib/settings/pages
2. Under "Custom domain", enter: **softwarevalalib.app**
3. Check "Enforce HTTPS" (after SSL provisioned)

---

## 🎯 Website URLs

- **GitHub Pages**: https://samsonbryant.github.io/softwarevalalib
- **Custom Domain**: https://softwarevalalib.app (after DNS configured)

---

## ⚡ Quick Commands Summary

```bash
cd /Users/user/Desktop/softwarevalaliberia

# Push to GitHub (choose authentication method above)
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

---

## 🆘 Troubleshooting

### "Permission denied"
→ You need to authenticate with GitHub (use one of the methods above)

### "Remote origin already exists"
→ That's fine, the remote is already configured

### "Failed to push some refs"
→ Make sure you're authenticated and have access to the repository

### "Repository not found"
→ Make sure the repository exists at: https://github.com/samsonbryant/softwarevalalib

---

**Choose your authentication method and deploy!** 🚀

