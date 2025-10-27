# 🔧 DNS Configuration for softwarevalalib.app

## Step-by-Step Guide

Follow these exact steps to get your website working at **softwarevalalib.app**

---

## Step 1: MAXIMUM Delete Existing DNS Records in Namecheap

1. Login to **Namecheap**: https://www.namecheap.com/
2. Go to **Domain List** in the left sidebar
3. Find **softwarevalalib.app** and click the **Manage** button (green button)
4. Click the **Advanced DNS** tab at the top
5. **Delete ALL existing records** for @ and www (if any exist)
   - Look for any A records with Host: @
   - Look for any A records with Host: www
   - Look for any CNAME records
   - Click the trash icon to delete each one

---

## Step 2: Add the Correct DNS Records

In the same Advanced DNS page, add these records **ONE BY ONE**:

### Add A Records (4 records total)

Click **Add New Record** button and add each one:

**Record 1:**
- Type: **A Record**
- Host: **@** (just the @ symbol)
- Value: **185.199.108.153**
- TTL: **Automatic** (or 30 min)

**Record 2:**
- Type: **A Record**
- Host: **@** (just the @ symbol)
- Value: **185.199.109.153**
- TTL: **Automatic**

**Record 3:**
- Type: **A Record**
- Host: **@** (just the @ symbol)
- Value: **185.199.110.153**
- TTL: **Automatic**

**Record 4:**
- Type: **A Record**
- Host: **@** (just the @ symbol)
- Value: **185.199.111.153**
- TTL: **Automatic**

### Add CNAME Record (1 record)

**Record 5:**
- Type: **CNAME Record**
- Host: **www** (just www)
- Value: **samsonbryant.github.io** (exactly this)
- TTL: **Automatic**

---

## Step 3: Save Changes

- Click the **Save All Changes** button (green button)
- You should see a success message

---

## Step 4: Verify DNS in GitHub

1. Go to: https://github.com/samsonbryant/softwarevalalib/settings/pages
2. Scroll down to **"Custom domain"** section
3. If there's already a domain there, **delete it** first
4. Enter: **softwarevalalib.app**
5. Click **Save**
6. Wait a few minutes

---

## Step 5: Wait for Propagation

DNS changes can take time to propagate:

- **Minimum**: 5-30 minutes
- **Typical**: 2-4 hours
- **Maximum**: 24-48 hours

You can check the status at: https://dnschecker.org/#A/softwarevalalib.app

When all locations show green checkmarks, DNS is ready.

---

## Step 6: SSL Certificate (Automatic)

GitHub will automatically provision an SSL certificate for your custom domain:
- Takes **5-30 minutes** after DNS is configured
- You don't need to do anything
- It's automatic

Check status at: https://www.ssllabs.com/ssltest/

---

## Step 7: Test Your Website

Once DNS and SSL are ready, test these URLs:

- https://softwarevalalib.app (should work)
- https://www.softwarevalalib.app (should redirect)

---

## Common Issues

### "Domain does not resolve"
- DNS records not added yet or not propagated
- Wait at least 30 minutes
- Check DNS at dnschecker.org

### "Still showing GitHub Pages error"
- DNS might not be fully propagated yet
- Wait 24-48 hours for full propagation

### "Certificate not valid"
- Wait for GitHub to provision SSL (5-30 min)
- Visit the URL once to trigger certificate generation

---

## Visual Guide: What DNS Should Look Like

Your Namecheap DNS should show:

```
Type    Host    Value                        TTL
----    ----    -----                        ---
A       @       185.199.108.153              Automatic
A       @       185.199.109.153              Automatic
A       @       185.199.110.153              Automatic
A       @       185.199.111.153              Automatic
CNAME   www     samsonbryant.github.io       Automatic
```

**Important**: No other A or CNAME records should exist for @ or www!

---

## Need Help?

After configuring DNS:
1. Take a screenshot of your Namecheap DNS records
2. Visit: https://dnschecker.org/#A/softwarevalalib.app
3. Take a screenshot of the results
4. Send both screenshots if you need help

**Your website will work at softwarevalalib.app once DNS is properly configured!** 🚀

