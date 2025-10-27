# Quick Deployment Checklist
## softwarevalalib.app → Namecheap Hosting

### 📦 Files Ready to Upload

All files are in: `build/` folder

**Files to upload:**
```
build/
├── index.html              ← Main file
├── .htaccess              ← Server configuration
├── favicon.ico
├── manifest.json
├── robots.txt
├── sitemap.xml
├── asset-manifest.json
└── static/
    ├── css/
    │   └── main.67cfd020.css
    ├── js/
    │   └── [multiple files]
    └── media/
        └── SVL Logo.fd77490ecf4137719602.jpg
```

---

### ✅ Deployment Steps

1. **Login to Namecheap** → cPanel
2. **Open File Manager** → Navigate to `public_html`
3. **Delete** all existing files (if any)
4. **Upload** all files from `build/` folder
5. **Verify** `.htaccess` uploaded successfully
6. **Install SSL** certificate (Let's Encrypt or manual)
7. **Configure DNS** with A-records
8. **Wait** 24-48 hours for DNS propagation
9. **Test** website at https://softwarevalalib.app

---

### 🔒 SSL Installation

**Option 1: Free (Recommended)**
- cPanel → SSL/TLS → Install Let's Encrypt → Click Install

**Option 2: Your Purchased Certificate**
- cPanel → SSL/TLS → Upload Certificate
- Paste: Certificate, Private Key, CA Bundle

---

### 🌐 DNS Configuration

In Namecheap Domain Manager:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | [Hosting IP] | Auto |
| A | www | [Hosting IP] | Auto |

*Contact Namecheap support for your hosting IP address*

---

### 🧪 Testing After Deployment

Visit these URLs:
- ✅ https://softwarevalalib.app (Home)
- ✅ https://softwarevalalib.app/services
- ✅ https://softwarevalalib.app/projects
- ✅ https://softwarevalalib.app/about
- ✅ https://softwarevalalib.app/contact

All should work without 404 errors!

---

### 📝 Post-Deployment

- [ ] Update `.htaccess` to force HTTPS (uncomment section)
- [ ] Add Google Analytics (if needed)
- [ ] Submit sitemap to Google Search Console
- [ ] Test contact form functionality
- [ ] Verify mobile responsiveness

---

### 🆘 Quick Troubleshooting

**404 on routes?** → Check `.htaccess` uploaded and readable  
**No SSL?** → Wait 15 min, clear cache, check DNS propagation  
**Old content showing?** → Clear browser cache (Ctrl+Shift+Del)  
**Wrong domain?** → Verify DNS records in Namecheap

---

**Need help?** See full guide: `NAMECHEAP_DEPLOYMENT_GUIDE.md`

