# 🎨 Customization Guide - Software Vala Liberia Website

## 📝 **Easy Content Editing**

Your website is now fully functional and ready to customize! All your company details are centralized in easy-to-edit files.

## 🏢 **Main Company Configuration**

### **File: `src/data/company-config.json`**
This is your **master configuration file** - edit this to update your company details across the entire website.

```json
{
  "company": {
    "name": "Software Vala Liberia",           // ← Change your company name
    "tagline": "Your custom tagline here",     // ← Update your main tagline
    "description": "Your company description", // ← Update company description
    "location": {
      "city": "Your City",                     // ← Update your city
      "state": "Your State",                   // ← Update your state/region
      "country": "Your Country",               // ← Update your country
      "fullAddress": "Complete Address"        // ← Update full address
    }
  },
  "contact": {
    "phone": "+231 XXX XXX XXXX",             // ← Update your phone number
    "email": "your@email.com",                // ← Update your email
    "website": "https://yourwebsite.com"      // ← Update your website URL
  },
  "stats": {
    "projectsCompleted": 50,                  // ← Update your project count
    "happyClients": 25,                       // ← Update client count
    "yearsExperience": 5                      // ← Update years of experience
  }
}
```

## 📄 **Content Files to Edit**

### 1. **Hero Section** - `src/data/hero.json`
```json
{
  "title": "Your Main Headline",
  "subtitle": "Your compelling description",
  "ctaText": "Your Call-to-Action Button Text"
}
```

### 2. **Services** - `src/data/services.json`
```json
[
  {
    "id": 1,
    "title": "Your Service Name",
    "description": "Detailed service description",
    "features": ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
  }
]
```

### 3. **Projects** - `src/data/projects.json`
```json
[
  {
    "id": 1,
    "title": "Your Project Name",
    "description": "Project description",
    "technologies": ["Tech 1", "Tech 2"],
    "category": "Web Development"
  }
]
```

### 4. **Team Members** - `src/data/team.json`
```json
[
  {
    "id": 1,
    "name": "Team Member Name",
    "role": "Job Title",
    "bio": "Brief biography",
    "skills": ["Skill 1", "Skill 2", "Skill 3"]
  }
]
```

### 5. **Testimonials** - `src/data/testimonials.json`
```json
[
  {
    "id": 1,
    "quote": "Client testimonial text",
    "author": "Client Name",
    "role": "Client Job Title"
  }
]
```

## 🎨 **Visual Customization**

### **Colors**
To change your brand colors, edit `src/index.css`:

```css
/* Find these color variables and update them */
.bg-primary { background-color: #your-color; }
.text-primary { color: #your-color; }
```

### **Logo**
1. Add your logo image to `public/images/`
2. Update the header in `src/components/SimpleHeader.jsx`
3. Replace the text logo with an image

### **Images**
Add your images to `public/images/` and update the paths in your data files:
- Team member photos
- Project screenshots
- Company photos
- Testimonial photos

## 📱 **Contact Information Update**

### **Quick Update Checklist:**
- [ ] Phone number in `company-config.json`
- [ ] Email address in `company-config.json`
- [ ] Office address in `company-config.json`
- [ ] Business hours in `company-config.json`
- [ ] Social media links in `company-config.json`

## 🔧 **Advanced Customization**

### **Adding New Services**
1. Open `src/data/services.json`
2. Add a new service object with the same structure
3. The website will automatically display it

### **Adding New Team Members**
1. Open `src/data/team.json`
2. Add a new team member object
3. Add their photo to `public/images/`

### **Adding New Projects**
1. Open `src/data/projects.json`
2. Add a new project object
3. Add project images to `public/images/`

### **Updating Statistics**
Edit the numbers in `src/data/company-config.json`:
```json
"stats": {
  "projectsCompleted": 75,    // ← Update this
  "happyClients": 40,         // ← Update this
  "yearsExperience": 8        // ← Update this
}
```

## 🌐 **SEO & Meta Information**

### **Update Site Metadata**
Edit `public/index.html`:
```html
<title>Your Company Name - Your Tagline</title>
<meta name="description" content="Your company description" />
<meta name="keywords" content="your, keywords, here" />
```

### **Update Sitemap**
Edit `public/sitemap.xml` and replace `softwarevala.com` with your domain.

## 📧 **Contact Form Setup**

### **Connect to Email Service**
To make the contact form send real emails:

1. **Option 1: Formspree**
   - Sign up at formspree.io
   - Replace the form action in `src/pages/Contact.jsx`

2. **Option 2: EmailJS**
   - Sign up at emailjs.com
   - Follow their React integration guide

3. **Option 3: Backend Integration**
   - Connect to your own backend API
   - Update the form submission logic

## 🚀 **Quick Start Editing**

### **Most Important Files to Edit First:**
1. `src/data/company-config.json` - Your main company info
2. `src/data/hero.json` - Your homepage headline
3. `src/data/services.json` - Your services
4. `src/data/team.json` - Your team members
5. `public/index.html` - Site title and description

### **Testing Your Changes**
After making changes:
1. Save the files
2. The development server will automatically reload
3. Check your browser to see the updates
4. Run `npm run build` to test the production build

## 📞 **Need Help?**

If you need assistance with customization:
1. Check the browser console for any errors
2. Ensure all JSON files have valid syntax
3. Make sure image paths are correct
4. Test on both desktop and mobile

## 🎯 **Pro Tips**

1. **Keep Backups**: Always backup your data files before major changes
2. **Test Regularly**: Check your changes on different screen sizes
3. **Optimize Images**: Compress images for faster loading
4. **Update Regularly**: Keep your content fresh and up-to-date
5. **Mobile First**: Always check how changes look on mobile devices

## ✅ **Customization Checklist**

- [ ] Company name and tagline updated
- [ ] Contact information updated (phone, email, address)
- [ ] Services updated with your offerings
- [ ] Team members added with photos and bios
- [ ] Projects/portfolio updated with your work
- [ ] Testimonials updated with real client feedback
- [ ] Statistics updated with current numbers
- [ ] Colors updated to match your brand
- [ ] Logo added (if desired)
- [ ] Meta tags updated for SEO
- [ ] Contact form connected to email service
- [ ] All placeholder text replaced
- [ ] Images optimized and uploaded
- [ ] Social media links updated
- [ ] Business hours updated

**Your website is now ready to represent your business professionally! 🎉**
