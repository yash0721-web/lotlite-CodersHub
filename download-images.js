const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const publicDir = path.join(__dirname, 'public');
const imagesDir = path.join(publicDir, 'Images');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

// List of images to download
const images = [
  // Course images
  { url: 'https://placehold.co/600x400/4F46E5/FFFFFF/png?text=Web+Development', filename: 'course-web-dev.jpg' },
  { url: 'https://placehold.co/600x400/4F46E5/FFFFFF/png?text=Python+Development', filename: 'course-python.jpg' },
  { url: 'https://placehold.co/600x400/4F46E5/FFFFFF/png?text=React+Development', filename: 'course-react.jpg' },
  { url: 'https://placehold.co/600x400/4F46E5/FFFFFF/png?text=Mobile+Development', filename: 'course-mobile.jpg' },
  { url: 'https://placehold.co/600x400/4F46E5/FFFFFF/png?text=DevOps', filename: 'course-devops.jpg' },
  { url: 'https://placehold.co/600x400/4F46E5/FFFFFF/png?text=Cybersecurity', filename: 'course-security.jpg' },
  { url: 'https://placehold.co/600x400/4F46E5/FFFFFF/png?text=MERN+Stack', filename: 'course-mern.jpg' },
  { url: 'https://placehold.co/600x400/4F46E5/FFFFFF/png?text=UI/UX+Design', filename: 'course-uiux.jpg' },
  
  // Testimonial images
  { url: 'https://placehold.co/400x400/4F46E5/FFFFFF/png?text=Testimonial+1', filename: 'Images/testimonial1.jpg' },
  { url: 'https://placehold.co/400x400/4F46E5/FFFFFF/png?text=Testimonial+2', filename: 'Images/testimonial2.jpg' },
  { url: 'https://placehold.co/400x400/4F46E5/FFFFFF/png?text=Testimonial+3', filename: 'Images/testimonial3.jpg' },
  { url: 'https://placehold.co/400x400/4F46E5/FFFFFF/png?text=Testimonial+4', filename: 'Images/testimonial4.jpg' },
  { url: 'https://placehold.co/400x400/4F46E5/FFFFFF/png?text=Testimonial+5', filename: 'Images/testimonial5.jpg' },
  { url: 'https://placehold.co/400x400/4F46E5/FFFFFF/png?text=Testimonial+6', filename: 'Images/testimonial6.jpg' },
  
  // Grid SVG
  { url: 'https://placehold.co/600x600/4F46E5/FFFFFF/svg?text=Grid+Pattern', filename: 'grid.svg' }
];

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(publicDir, filename);
    
    // Create directory if it doesn't exist
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      console.error(`Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Failed to download ${image.filename}`);
    }
  }
  
  console.log('All downloads completed!');
}

downloadAllImages(); 