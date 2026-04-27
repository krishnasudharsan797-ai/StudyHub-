# StudyHub 📚 - Your Learning Resource Hub

A modern, full-featured React web application for discovering and managing curated learning platforms across multiple domains.

![StudyHub](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0-purple) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-teal) ![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 Features

### Core Features
- **5 Learning Domains**: Web Development, Data Science, Cloud & DevOps, Mobile Development, Design & UX
- **30+ Skills**: Organized by domain with comprehensive descriptions
- **100+ Learning Platforms**: Curated resources from industry-leading platforms
- **Save & Bookmark**: Keep track of your favorite learning resources
- **Global Search**: Search across domains, skills, and platforms
- **Responsive Design**: Beautiful, functional UI on all devices

### Pages & Sections
- **Home Page** - Hero section with rotating quotes and featured domains
- **Domains Page** - Browse all learning domains
- **Skills Page** - Explore skills within a selected domain
- **Resources Page** - View curated platforms for each skill
- **Saved Page** - Manage your bookmarked platforms
- **Login/Signup** - Authentication UI (demo mode)
- **Admin Dashboard** - Manage domains, skills, and platforms
- **About Page** - Learn about StudyHub's mission and values

### Technical Features
- ⚡ **Vite** - Lightning-fast build tool
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🛣️ **React Router** - Client-side navigation
- 💾 **localStorage** - Persistent saved platforms
- 🔍 **Global Search** - Unified search functionality
- 🎭 **Smooth Animations** - Professional micro-interactions
- 📱 **Mobile-First** - Responsive across all devices

## 📦 Project Structure

```
studyhub/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with search
│   │   ├── Navbar.css
│   │   ├── Hero.jsx            # Hero section with quotes
│   │   ├── Hero.css
│   │   ├── DomainCard.jsx       # Domain card component
│   │   ├── SkillCard.jsx        # Skill card component
│   │   ├── PlatformCard.jsx     # Platform card with save
│   │   ├── SearchBar.jsx        # Global search bar
│   │   ├── SearchBar.css
│   │   └── Cards.css            # Card styling
│   ├── pages/
│   │   ├── Home.jsx             # Home page
│   │   ├── Domains.jsx          # All domains
│   │   ├── Skills.jsx           # Skills for domain
│   │   ├── Resources.jsx        # Platforms for skill
│   │   ├── Saved.jsx            # Saved platforms
│   │   ├── Login.jsx            # Login page
│   │   ├── Signup.jsx           # Signup page
│   │   ├── About.jsx            # About page
│   │   └── Admin.jsx            # Admin dashboard
│   ├── data/
│   │   └── domains.js           # Data structure with domains, skills, platforms
│   ├── App.jsx                  # Main app component with routing
│   ├── App.css                  # Global styles & animations
│   ├── index.css                # Tailwind & base styles
│   └── main.jsx                 # React entry point
├── index.html                   # HTML entry point
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── .gitignore                  # Git ignore
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Modern web browser

### Installation

1. **Extract the project**
   ```bash
   unzip studyhub.zip
   cd studyhub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The app will automatically open at `http://localhost:5173`
   - If not, manually navigate to the URL

### Building for Production

```bash
npm run build
npm run preview
```

This creates an optimized production build in the `dist` folder.

## 🗂️ Data Structure

The app uses a hierarchical data structure:

```javascript
Domain {
  id: number,
  name: string,
  description: string,
  icon: emoji,
  color: gradient,
  skills: [
    Skill {
      id: number,
      name: string,
      description: string,
      platforms: [
        Platform {
          id: number,
          name: string,
          logo: emoji,
          url: string,
          color: gradient,
          description: string
        }
      ]
    }
  ]
}
```

## 🎨 Design System

### Colors
- **Primary**: #3b82f6 (Blue)
- **Secondary**: #8b5cf6 (Purple)
- **Accent**: #ec4899 (Pink)
- **Dark**: #1e293b (Slate)
- **Light**: #f8fafc (Light Slate)

### Typography
- **Font Family**: Poppins (with fallbacks)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400-500)

### Components
- **Cards**: Rounded corners (16px), soft shadows, hover effects
- **Buttons**: Gradient backgrounds, smooth transitions
- **Forms**: Clean inputs with focus states
- **Animations**: Fade-in, slide, scale with staggered delays

## 🔐 Authentication

The login/signup pages are **UI only** (demo mode):
- Any email/password combination is accepted
- Users can select "User" or "Admin" role
- "Demo Login" button pre-fills credentials
- User data stored in localStorage

### Demo Credentials
- Email: `demo@example.com`
- Password: `demo123`

## 💾 Saved Platforms

Bookmarked platforms are persisted using localStorage:
- Saved data survives page refreshes
- Click the bookmark icon to save/unsave
- View all saved items on the "Saved" page
- Remove items individually or bulk clear

## 🔍 Search

Global search functionality:
- Search across all domains, skills, and platforms
- Real-time results as you type
- Click results to navigate directly
- Works across the entire app

## 🛠️ Admin Dashboard

The admin page provides a UI for managing content:
- **Add Domain**: Create new learning domains
- **Add Skill**: Add skills to domains
- **Add Platform**: Add platforms to skills
- **Statistics**: View platform analytics
- **Recent Activity**: Track content changes

*Note: This is UI only. Form submissions don't persist.*

## 📱 Responsive Design

The app is fully responsive:
- **Mobile**: Stack layouts, hamburger menu
- **Tablet**: 2-column grids
- **Desktop**: 3-column grids, full navigation
- **Large**: Extended max-width with proper spacing

## 🎭 Animations

Professional micro-interactions throughout:
- **Page Load**: Staggered fade-in animations
- **Hover Effects**: Cards lift and shadows expand
- **Transitions**: Smooth color and transform changes
- **Scrolling**: Smooth scroll behavior

## 🔧 Customization

### Adding New Domains

1. Edit `src/data/domains.js`
2. Add to `domainsData` array:
```javascript
{
  id: 6,
  name: "Your Domain",
  description: "Description",
  icon: "🚀",
  color: "from-color-500 to-color-600",
  skills: [/* ... */]
}
```

### Changing Colors

Edit `tailwind.config.js` and `App.css` to customize the color scheme.

### Adding Components

Create new components in `src/components/` and export them for use in pages.

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

- Icons and emojis from Unicode Standard
- Color inspiration from Tailwind CSS
- Built with React, Vite, and Tailwind CSS

## 📞 Support

For questions or issues:
1. Check the FAQ section in the About page
2. Review the code comments
3. Check browser console for errors
4. Ensure all dependencies are installed

## 🎓 Learning Resources Used

This project was built using the best modern web development practices:
- React Hooks (useState, useEffect)
- React Router v6
- Tailwind CSS Utility Classes
- Responsive Design Principles
- Component-Based Architecture
- localStorage API

---

**Made with ❤️ for learners worldwide**

Version 1.0.0 | Last Updated: 2024
