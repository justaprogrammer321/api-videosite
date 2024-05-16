// index.js
const express = require('express');
const app = express();
const cors=require('cors')

app.use(cors());

const PORT = process.env.PORT || 3000; // Choose a suitable port

// Define an array of video URLs
const videoUrls = [
    'https://rad-semolina-da33a3.netlify.app/Wallpaperloop.mp4',
    'https://rad-semolina-da33a3.netlify.app/remadevideo.mp4',
];

// Define an API endpoint to get a random video URL
app.get('/api/getRandomVideo', (req, res) => {
    const randomIndex = Math.floor(Math.random() * videoUrls.length);
    const videoUrl = videoUrls[randomIndex];
    res.json({ videoUrl });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
