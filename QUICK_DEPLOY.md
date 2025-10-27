# 🚀 Quick Deploy Instructions

## Push to GitHub & Deploy

Run these commands:

```bash
cd /Users/user/Desktop/softwarevalaliberia

# Push code to GitHub
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

That's it! Your site will be live at: **https://samsonbryant.github.io/softwarevalalib**

---

## Connect Custom Domain (softwarevalalib.app)

### 1. Configure DNS in Namecheap

Add these DNS records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| **CNAME** | www | samsonbryant.github.io | Auto |
| **A** | @ | 185.199.108.153 | Auto |
| **A** | @ | 185.199.109.153 | Auto |
| **A** | @ | 185.199.110.153 | Auto |
| **A** | @ | 185.199.111.153 | Auto |

### 2. Enable Custom Domain in GitHub

1. Go to: https://github.com/samsonbryant/softwarevalalib/settings/pages
2. Under "Custom domain", enter: **softwarevalalib.app**
3. Check "Enforce HTTPS" (after SSL is active)

### 3. Wait

- DNS: 24-48 hours to propagate
- SSL: 5-30 minutes (automatic from GitHub)

---

## ✅ Done!

Your website will be available at:
- https://samsonbryant.github.io/softwarevalalib (immediately)
- https://softwarevalalib.app (after DNS configured)

**Note**: GitHub provides free SSL automatically. No need to configure your purchased certificate.

---

See full guide: `GITHUB_PAGES_DEPLOYMENT.md`

