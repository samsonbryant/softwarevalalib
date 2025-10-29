# ⚡ Quick Render Setup

## Fast Deployment Steps

### 1. Sign Up
- Go to: https://render.com/
- Click "Get Started for Free"
- Sign up with GitHub account

### 2. Create Static Site
- Click "New +" → "Static Site"
- Connect repository: **samsonbryant/softwarevalalib**
- Name: `softwarevalalib`

### 3. Build Settings

Copy these exact settings:

**Build Command**:
```bash
npm install && npm run build
```

**Publish Directory**:
```bash
build
```

**Node Version**: `18`

### 4. Deploy
- Click **"Create Static Site"**
- Wait 3-5 minutes
- Your site will be live!

---

## 🎯 After Deployment

**Your Render URL**: `https://softwarevalalib-[id].onrender.com`

### Add Custom Domain

1. Render Dashboard → Your Service → Settings
2. Custom Domains → Add: **softwarevalalib.app**
3. Configure DNS in Namecheap (Render will show you the records)
4. Wait for SSL (automatic, 5-10 min)

---

## ✅ That's It!

Your website will be live at your Render URL immediately.

See **RENDER_DEPLOYMENT_GUIDE.md** for detailed instructions.

---

**Ready to deploy! Go to https://render.com/** 🚀

