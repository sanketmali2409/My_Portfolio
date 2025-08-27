const express = require('express');
const path = require('path');
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Sample projects data - replace with your actual data
const projects = [
    {
        title: "IoT Weather Station",
        description: "ESP32-based weather monitoring system with cloud connectivity and real-time data visualization.",
        category: "ESP32",
        technologies: ["ESP32", "C++", "WiFi", "MQTT", "Sensors"],
        hardware: ["DHT22", "BMP280", "LCD Display", "ESP32 DevKit"],
        year: "2024",
        github: "https://github.com/sanketmali2409/weather-station"
    },
    {
        title: "ARM7 LCD Controller", 
        description: "LPC2148-based LCD control system with menu navigation and sensor data display.",
        category: "LPC2148",
        technologies: ["C", "Keil", "ARM7", "LCD Interface"],
        hardware: ["LPC2148", "16x2 LCD", "Push Buttons", "Temperature Sensor"],
        year: "2023",
        github: "https://github.com/sanketmali2409/arm7-lcd-controller"
    },
    {
        title: "PIC CAN Communication",
        description: "CAN bus communication system using PIC16F877A for automotive applications.", 
        category: "PIC16F877A",
        technologies: ["C", "MPLAB", "CAN Protocol", "PIC16F877A"],
        hardware: ["PIC16F877A", "MCP2515", "CAN Transceiver", "LCD"],
        year: "2023",
        github: "https://github.com/sanketmali2409/pic-can-bus"
    }
];
// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home',
        projects: projects  // Add this line
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About',
        projects: projects // Make sure to pass projects data if needed
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', { 
        title: 'Projects - Sanket Mali | Embedded Systems Engineer',
        projects: projects 
    });
});

app.get('/skills', (req, res) => {
    res.render('skills', { 
        title: 'Skills - Sanket Mali | Embedded Systems Engineer'
    });
});

app.get('/resume', (req, res) => {
    res.render('resume', { 
        title: 'Resume - Sanket Mali | Embedded Systems Engineer'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'Contact - Sanket Mali | Embedded Systems Engineer'
    });
});

// Handle 404
app.use((req, res) => {
    res.status(404).render('404', { 
        title: '404 - Page Not Found'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).render('error', { 
        title: '500 - Server Error',
        error: process.env.NODE_ENV === 'development' ? err : {}
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});