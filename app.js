// 1. Import required modules
const express = require('express');
const path = require('path');

// 2. Create Express app and set port
const app = express();
const PORT = process.env.PORT || 3000;

// 3. Set EJS as the templating engine and specify views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// 4. Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// 5. Enable parsing of JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 6. Import project data from JSON file
const projectsData = require('./data/projects.json');

// 7. Define routes for each page

// Home page route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Sanket Mali - Embedded Systems Engineer',
        projects: projectsData.projects
    });
});

// About page route
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me - Sanket Mali'
    });
});

// Projects page route
app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects - Sanket Mali',
        projects: projectsData.projects,
        categories: projectsData.categories
    });
});

// Skills page route
app.get('/skills', (req, res) => {
    res.render('skills', {
        title: 'Skills - Sanket Mali'
    });
});

// Resume page route
app.get('/resume', (req, res) => {
    res.render('resume', {
        title: 'Resume - Sanket Mali'
    });
});

// Contact page route
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact - Contact Sanket Mali'
    });
});

// 8. Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// 9. (Optional) Add this to package.json scripts for auto-reload during development:
// "scripts": {
//   "dev": "nodemon app.js"
// }