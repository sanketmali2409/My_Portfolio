# Sanket Mali - Embedded Systems Engineer Portfolio

A professional portfolio website for Sanket Mali, an Embedded Systems Engineer specializing in microcontroller programming, robotics, and IoT solutions.

## 🚀 Features

- **Professional Design**: Clean, modern interface with Bootstrap 5.
- **Responsive Layout**: Mobile-friendly design that works on all devices.
- **Project Showcase**: Detailed project portfolio with category filtering.
- **Skills Display**: Comprehensive skills and technical expertise sections.
- **Resume Download**: Integrated links to download a professional resume.
- **Smooth Animations**: On-scroll reveal animations and interactive elements.
- **SEO Optimized**: Proper meta tags and structured content.

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Bootstrap 5, Custom CSS
- **Icons**: Font Awesome 6
- **Data Management**: JSON for project data.

## 📁 Project Structure

```
embedded-portfolio/
├── app.js                 # Main Express application
├── package.json           # Node.js dependencies
├── data/
│   └── projects.json     # Project data in JSON format
├── views/
│   ├── layout.ejs        # Main layout template
│   ├── index.ejs         # Home page
│   ├── about.ejs         # About page
│   ├── projects.ejs      # Projects page
│   ├── skills.ejs        # Skills page
│   ├── resume.ejs        # Resume page
│   └── contact.ejs       # Contact page
├── public/
│   ├── css/
│   │   └── style.css     # Custom styles
│   ├── js/
│   │   └── main.js       # Custom JavaScript
│   └── images/           # Project images (placeholder)
└── README.md             # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd embedded-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Production Deployment

1. **Install dependencies**
   ```bash
   npm install --production
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📋 Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (if configured)

## 🎯 Key Features Explained

### 1. Project Management
- Projects are stored in `data/projects.json`
- Each project includes title, description, technologies, GitHub link, and category
- Filter projects by category (Microcontroller, IoT, Control Systems, Robotics)

### 2. Skills Section
- Interactive progress bars for skill levels
- Categorized skills (Microcontrollers, Programming, Tools)
- Professional certifications display

### 3. Contact Form
- Form validation with HTML5 and JavaScript
- Responsive design with Bootstrap styling
- Success/error notifications

### 4. Responsive Design
- Mobile-first approach
- Bootstrap 5 grid system
- Custom CSS animations

## 🔧 Customization

### Adding New Projects
1. Edit `data/projects.json`
2. Add new project object with required fields:
   ```json
   {
     "id": 7,
     "title": "New Project",
     "description": "Project description",
     "technologies": ["STM32", "C++"],
     "image": "/images/projects/new-project.jpg",
     "github": "https://github.com/username/new-project",
     "category": "Microcontroller",
     "year": 2024
   }
   ```

### Modifying Styles
- Edit `public/css/style.css` for custom styling
- Bootstrap classes can be overridden
- CSS variables defined in `:root` for easy theming

### Updating Content
- Edit EJS templates in `views/` directory
- Update personal information in layout.ejs
- Modify contact details in contact.ejs

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px

## 🎨 Design Features

- **Color Scheme**: Professional blue gradient theme
- **Typography**: Clean, readable fonts
- **Animations**: Smooth hover effects and transitions
- **Icons**: Font Awesome icons throughout
- **Cards**: Bootstrap cards with custom styling

## 🔒 Security Considerations

- Form validation on both client and server side
- Input sanitization (implement in production)
- HTTPS recommended for production
- Environment variables for sensitive data

## 📈 Performance Optimizations

- Minified CSS and JavaScript for production
- Image optimization (implement lazy loading)
- Gzip compression (configure in production)
- CDN for external libraries

## 🚀 Deployment Options

### Heroku
1. Create Heroku app
2. Connect GitHub repository
3. Deploy automatically

### Vercel
1. Connect GitHub repository
2. Configure build settings
3. Deploy with Vercel

### DigitalOcean
1. Create droplet
2. Install Node.js
3. Clone repository
4. Use PM2 for process management

## 📞 Support

For questions or support:
- Email: sanket.mali@email.com
- GitHub: [github.com/sanketmali](https://github.com/sanketmali)
- LinkedIn: [linkedin.com/in/sanketmali](https://linkedin.com/in/sanketmali)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- Font Awesome for the icons
- Express.js community for the web framework
- EJS for the templating engine

---

**Built with ❤️ for the embedded systems community** 
>>>>>>> My portfolio starting phase
