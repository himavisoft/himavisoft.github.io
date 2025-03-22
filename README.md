# Himavisoft Website

This is the official website for Himavisoft, a software consultancy company specializing in technically deep backend systems and AI-driven fullstack solutions.

## Setup Instructions for GitHub Pages

1. Create a new repository on GitHub named `himavisoft.github.io` (replace "himavisoft" with your GitHub username)

2. Clone the repository locally:
   ```bash
   git clone https://github.com/yourusername/himavisoft.github.io.git
   cd himavisoft.github.io
   ```

3. Copy all the website files into the repository:
   - index.html
   - css/styles.css
   - js/main.js
   - Any additional assets (images, etc.)

4. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Initial website setup"
   git push origin main
   ```

5. Enable GitHub Pages:
   - Go to your repository settings
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select the "main" branch
   - Click "Save"

6. Your website will be available at `https://yourusername.github.io`

## Custom Domain Setup

To use your custom domain with GitHub Pages:

1. Add a CNAME file to your repository:
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add CNAME file"
   git push origin main
   ```

2. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a CNAME record for www subdomain pointing to your GitHub Pages URL:
     ```
     www.yourdomain.com CNAME yourusername.github.io
     ```

3. Wait for DNS propagation (can take up to 24-48 hours)

## Local Development

To test the website locally:

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## Maintenance

- To update the website, simply edit the files and push the changes to GitHub
- GitHub Pages will automatically rebuild and deploy your site
- Changes may take a few minutes to be visible on the live site

## Contact

For any questions or support, please contact us at contact@himavisoft.com 