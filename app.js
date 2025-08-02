const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import project data
const projectsData = require('./data/projects.json');

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Sanket Mali - Embedded Systems Engineer',
        projects: projectsData.projects
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me - Sanket Mali'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects - Sanket Mali',
        projects: projectsData.projects,
        categories: projectsData.categories
    });
});

app.get('/skills', (req, res) => {
    res.render('skills', {
        title: 'Skills - Sanket Mali'
    });
});

app.get('/resume', (req, res) => {
    res.render('resume', {
        title: 'Resume - Sanket Mali'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact - Sanket Mali'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// "scripts": {
//   "dev": "nodemon app.js"
// }