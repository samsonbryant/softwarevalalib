# Namecheap Deployment Guide
## softwarevalalib.app

### Prerequisites
- Domain purchased: **softwarevalalib.app**
- Namecheap hosting account with cPanel access
- SSL certificate ready to install
- All website files are in the `build` folder

---

## Step 1: Prepare Your Files

All files have been built and are ready in the `build` folder. The build includes:
- ✅ Optimized production files
- ✅ `.htaccess` configuration for React Router
- ✅ Security headers and compression
- ✅ Browser caching rules

**Location**: `/Users/user/Desktop/softwarevalaliberia/build/`

---

## Step 2: Access cPanel

1. Log in to your **Namecheap account**
2. Go to **Dashboard** → **Hosting List**
3. Click on **Manage** next to your hosting plan
4. Click **cPanel** button (or login directly at: `your-domain.com:2083`)

---

## Step 3: Upload Files via File Manager

### Option A: File Manager (Recommended for beginners)

1. In cPanel, click **File Manager**
2. Navigate to **public_html** folder
3. **Delete** all existing files in public_html (if any)
4. Click **Upload** button
5. Select all files from your `build` folder:
   - `index.html`
   - `static/` folder
   - `.htaccess`
6. Wait for upload to complete (may take a few minutes)

### Option B: FTP Upload (Faster for large files)

1. In cPanel, find your **FTP credentials**:
   - Host: `ftp.your-domain.com`
   - Username: (provided in cPanel)
   - Password: (your FTP password)

2. Use FTP client (FileZilla, Cyberduck, or terminal):
   ```bash
   ftp ftp.your-domain.com
   # Enter username and password
   cd public_html
   # Delete existing files
   rm *
   # Upload build folder contents
   put index.html
   mkdir static
   cd static
   # Upload static folder contents...
   ```

---

## Step 4: Install SSL Certificate

1. In cPanel, go to **SSL/TLS** section
2. Click **Install and Manage SSL for your site (HTTPS)**
3. Select your domain: **softwarevalalib.app**
4. Choose one of these options:

### Option A: Free Let's Encrypt SSL
1. Select **Let's Encrypt** tab
2. Click **Install** (auto-configured)
3. Wait 5-10 minutes for activation

### Option B: Manual SSL Upload
1. Select **Upload a New Certificate** tab
2. Paste your certificate files:
   - **Certificate** (CRT file)
   - **Private Key** (KEY file)
   - **Certificate Authority Bundle** (CA Bundle/Bundle)
3. Click **Install Certificate**

### Force HTTPS Redirect
After SSL is installed, uncomment this section in `.htaccess`:
```apache
# Force HTTPS (uncomment after SSL is installed)
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_грай URI} [L,R=301]
</IfModule>
```

---

## Step 5: Configure Domain DNS

1. In Namecheap account, go to **Domain List**
2. Click **Manage** next to **softwarevalalib.app**
3. Go to **Advanced DNS** tab

### A-Record Configuration
Add or update these records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| **A Record** | @ | Your hosting IP address | Automatic |
| **A Record** | www | Your hosting IP address | Automatic |
| **CNAME** | www | softwarevalalib.app | Automatic |

**Your hosting IP address** can be found in cPanel → **IP Address** or contact Namecheap support.

---

## Step 6: Wait for DNS Propagation

- DNS changes typically take **24-48 hours** to fully propagate
- Check status at: https://dnschecker.org/#A/softwarevalalib.app
- Once complete, your site will be accessible at:
  - https://softwarevalalib.app
  - https://www.softwarevalalib.app

---

## Step 7: Test Your Website

### Basic Tests
1. ✅ Visit https://softwarevalalib.app
2. ✅ Check all pages load correctly (Home, Services, Projects, About, Contact)
3. ✅ Verify navigation works properly
4. ✅ Test forms and interactive elements
5. ✅ Check SSL certificate (browser should show padlock)

### React Router Test
Try direct URLs:
- https://softwarevalalib.app/services
- https://softwarevalalib.app/about
- https://softwarevalalib.app/contact

All should load without 404 errors.

---

## Troubleshooting

### Issue: 404 Error on Routes
**Solution**: Make sure `.htaccess` file is uploaded and readable. Check file permissions (should be 644).

### Issue: SSL Not Working
**Solution**: 
- Wait 10-15 minutes after installation
- Clear browser cache
- Use https://www.ssllabs.com/ssltest/ to check SSL status

### Issue: Site Shows Default Page
**Solution**: Make sure files were uploaded to `public_html` (not a subfolder)

### Issue: CSS/JS Not Loading
**Solution**: 
- Check browser console for errors
- Verify `static` folder uploaded correctly
- Check file paths in `index.html`

---

## Post-Deployment Checklist

- [ ] Website loads at https://softwarevalalib.app
- [ ] SSL certificate installed and working
- [ ] All pages accessible via navigation
- [ ] Direct URLs work (no 404 errors)
- [ ] Images and assets load correctly
- [ ] Forms and interactive elements work
- [ ] Mobile responsive design works
- [ ] Browser cache cleared and tested
- [ ] Google Search Console added (if needed)
- [ ] Analytics installed (if needed)

---

## Additional Resources

- **Namecheap Support**: https://www.namecheap.com/support/
- **cPanel Documentation**: https://docs.cpanel.net/
- **React Deployment Guide**: https://create-react-app.dev/docs/deployment/

---

## Need Help?

If you encounter any issues:
1. Check Namecheap's support documentation
2. Contact Namecheap support (they have 24/7 live chat)
3. Check browser console for specific errors

---

**Good luck with your deployment! 🚀**

