# 🚀 StudyHub - Quick Start Guide

Welcome to StudyHub! Follow these simple steps to get started.

## ⚡ 30-Second Setup

```bash
# 1. Install dependencies (one-time only)
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:5173
```

That's it! 🎉

## 📋 What You'll See

1. **Home Page** - Landing page with hero section and featured domains
2. **Navbar** - Navigation and search functionality
3. **Domains** - 5 major learning domains
4. **Skills** - 30+ skills organized by domain
5. **Resources** - 100+ curated learning platforms
6. **Saved** - Your bookmarked platforms
7. **Admin** - Content management interface

## 🎯 Try These Actions

### 1. Explore Domains
- Click "Explore Domains" on home page
- Click any domain card

### 2. Browse Skills
- Select a domain to see its skills
- Each skill has multiple platforms

### 3. View Resources
- Click any skill to see learning platforms
- Try visiting a platform (opens in new tab)
- Click the bookmark icon to save

### 4. Search
- Use the search bar in the navbar
- Search for "Python", "React", or any skill

### 5. Login (Demo)
- Click "Login" in navbar
- Use any email/password or click "Try Demo Login"
- Select User or Admin role

### 6. Admin Features
- Login as Admin to access Admin Dashboard
- Try adding domains, skills, and platforms (UI only)

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components (Home, Domains, etc.)
├── data/           # Data structure (domains.js)
├── App.jsx         # Main app with routing
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` and `src/App.css`

### Add New Domains
Edit `src/data/domains.js` and add to the `domainsData` array

### Modify Content
All content is in `src/data/domains.js` - easy to edit!

## 🛠️ Available Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 🔐 Demo Accounts

**User Account**
- Any email/password works
- Access: Explore domains, save resources

**Admin Account**
- Select "Admin" during login
- Access: Admin dashboard with content management

## 💡 Pro Tips

1. **Search** is your friend - Try searching for "JavaScript" or "React"
2. **Save platforms** you like using the bookmark button
3. **Check Saved page** to see all your bookmarked resources
4. **Explore About page** for more info about StudyHub
5. **Try Admin dashboard** to see the management interface

## 🐛 Troubleshooting

### Port already in use?
```bash
# Use a different port
npm run dev -- --port 3000
```

### Module not found?
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Want to reset saved platforms?
- Open DevTools (F12) → Application → LocalStorage
- Find and delete "savedPlatforms" entry
- Refresh page

## 📚 Learning Resources

The platforms featured in StudyHub are real and accessible:
- Visit them through the app
- Create free accounts
- Start learning!

## 🌟 Features Showcase

✅ 5 Learning Domains  
✅ 30+ Skills  
✅ 100+ Platforms  
✅ Global Search  
✅ Save/Bookmark  
✅ Responsive Design  
✅ Smooth Animations  
✅ Authentication UI  
✅ Admin Dashboard  
✅ Professional UI/UX  

## 📞 Next Steps

1. Explore all pages
2. Try the search functionality
3. Save your favorite platforms
4. Check out the admin dashboard
5. Review the code in `src/` folder
6. Customize colors and content

## 💻 Browser Requirements

- Modern browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Cookie/localStorage enabled

## 🎓 Learn More

See `README.md` for:
- Full feature list
- Detailed setup instructions
- Project structure explanation
- Customization guide
- Browser support details

---

**Happy Learning! 🚀**

Questions? Check the About page in the app or review README.md
