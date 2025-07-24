#!/usr/bin/env python3
"""
RFIndiana Newsletter Generator

This script automates the generation of email-safe HTML newsletters from Astro components.
It builds the Astro site, extracts the newsletter content, and creates a clean HTML file
ready for pasting into Brevo email campaigns.

Usage:
    python generate_newsletter.py

Output:
    - output/newsletter-raw.html: Clean HTML ready for Brevo
    - output/newsletter-preview.html: Preview with wrapper for team review
"""

import os
import sys
import subprocess
import logging
from pathlib import Path
from bs4 import BeautifulSoup
from datetime import datetime

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class NewsletterGenerator:
    def __init__(self, project_root: str = None):
        """Initialize the newsletter generator.
        
        Args:
            project_root: Path to the Astro project root. If None, assumes script is in email-preview/
        """
        if project_root is None:
            # Assume script is in email-preview/ subdirectory
            self.project_root = Path(__file__).parent.parent
        else:
            self.project_root = Path(project_root)
            
        self.email_preview_dir = self.project_root / "email-preview"
        self.output_dir = self.email_preview_dir / "output"
        self.dist_dir = self.project_root / "dist"
        
        # Ensure output directory exists
        self.output_dir.mkdir(exist_ok=True)
        
        logger.info(f"Project root: {self.project_root}")
        logger.info(f"Output directory: {self.output_dir}")

    def run_astro_build(self) -> bool:
        """Run the Astro build process to generate the latest HTML.
        
        Returns:
            bool: True if build succeeded, False otherwise
        """
        logger.info("Building Astro site...")
        
        try:
            # Change to project root and run build
            result = subprocess.run(
                ["npm", "run", "build"],
                cwd=self.project_root,
                check=True,
                capture_output=True,
                text=True
            )
            
            logger.info("Astro build completed successfully")
            return True
            
        except subprocess.CalledProcessError as e:
            logger.error(f"Astro build failed: {e}")
            logger.error(f"STDOUT: {e.stdout}")
            logger.error(f"STDERR: {e.stderr}")
            return False
        except FileNotFoundError:
            logger.error("npm not found. Please ensure Node.js and npm are installed.")
            return False

    def extract_newsletter_content(self) -> str:
        """Extract newsletter content from the built email-preview page.
        
        Returns:
            str: Clean HTML content ready for email
        """
        preview_file = self.dist_dir / "email-preview" / "index.html"
        
        if not preview_file.exists():
            raise FileNotFoundError(f"Built preview file not found: {preview_file}")
        
        logger.info(f"Extracting content from: {preview_file}")
        
        with open(preview_file, 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Find the preview container
        preview_container = soup.find('div', class_='preview-container')
        if not preview_container:
            raise ValueError("Could not find preview-container in built HTML")
        
        # Remove the preview title
        preview_title = preview_container.find('h1', class_='preview-title')
        if preview_title:
            preview_title.decompose()
        
        # Get all the component content (everything inside preview-container)
        newsletter_components = []
        for child in preview_container.children:
            if child.name and child.name != 'h1':  # Skip text nodes and title
                newsletter_components.append(str(child))
        
        # Join all components
        clean_content = '\n'.join(newsletter_components)
        
        # Clean up the HTML - remove Astro-specific attributes
        clean_soup = BeautifulSoup(clean_content, 'html.parser')
        
        # Remove data-astro-cid attributes
        for tag in clean_soup.find_all(attrs={"data-astro-cid": True}):
            del tag['data-astro-cid']
        
        # Convert relative image paths to absolute URLs
        for img in clean_soup.find_all('img'):
            src = img.get('src', '')
            if src.startswith('/email-preview/'):
                img['src'] = f"https://rfindiana.org{src}"
        
        logger.info("Newsletter content extracted and cleaned")
        
        # Format the HTML nicely with proper indentation
        formatted_html = clean_soup.prettify()
        
        return formatted_html

    def generate_newsletter_files(self, newsletter_content: str) -> tuple[Path, Path]:
        """Generate both raw and preview newsletter files.
        
        Args:
            newsletter_content: Clean HTML content
            
        Returns:
            tuple: (raw_file_path, preview_file_path)
        """
        timestamp = datetime.now().strftime("%Y%m%d")
        
        # Generate raw HTML file (for Brevo)
        raw_file = self.output_dir / f"{timestamp}-newsletter-raw.html"
        with open(raw_file, 'w', encoding='utf-8') as f:
            f.write(newsletter_content)
        
        # Generate preview HTML file (for team review)
        preview_file = self.output_dir / f"{timestamp}-newsletter-preview.html"
        preview_html = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsletter Preview - {timestamp}</title>
    <style>
        body {{ 
            font-family: Arial, sans-serif; 
            background-color: #f5f5f5; 
            margin: 0; 
            padding: 20px; 
        }}
        .preview-wrapper {{
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }}
        .preview-header {{
            text-align: center;
            padding: 20px 0;
            border-bottom: 2px solid #eee;
            margin-bottom: 30px;
        }}
        .preview-instructions {{
            background: #e8f4f8;
            border: 1px solid #b3d9e6;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
            font-size: 14px;
        }}
    </style>
</head>
<body>
    <div class="preview-wrapper">
        <div class="preview-header">
            <h1>📬 Newsletter Preview</h1>
            <p>Generated: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}</p>
        </div>
        
        <div class="preview-instructions">
            <h3>📋 Instructions for Brevo</h3>
            <ol>
                <li>The raw HTML file is available at: <code>{raw_file.name}</code></li>
                <li>Copy the contents of the raw HTML file and paste into Brevo</li>
                <li>Preview below shows how the newsletter will appear</li>
            </ol>
        </div>
        
        <div class="newsletter-content">
            {newsletter_content}
        </div>
    </div>
</body>
</html>"""
        
        with open(preview_file, 'w', encoding='utf-8') as f:
            f.write(preview_html)
        
        logger.info(f"Generated files:")
        logger.info(f"  Raw HTML: {raw_file}")
        logger.info(f"  Preview HTML: {preview_file}")
        
        return raw_file, preview_file

    def copy_to_public(self, raw_file: Path, preview_file: Path):
        """Copy generated files to the public directory for web access.
        
        Args:
            raw_file: Path to raw HTML file
            preview_file: Path to preview HTML file
        """
        public_dir = self.project_root / "public" / "email-preview"
        public_dir.mkdir(exist_ok=True)
        
        # Copy raw file as newsletter-raw.html (overwrites existing)
        import shutil
        shutil.copy2(raw_file, public_dir / "newsletter-raw.html")
        shutil.copy2(preview_file, public_dir / f"newsletter-preview-{datetime.now().strftime('%Y%m%d')}.html")
        
        logger.info(f"Files copied to public directory: {public_dir}")

    def generate(self) -> bool:
        """Main method to generate the newsletter.
        
        Returns:
            bool: True if generation succeeded, False otherwise
        """
        try:
            # Step 1: Build Astro site
            if not self.run_astro_build():
                return False
            
            # Step 2: Extract newsletter content
            newsletter_content = self.extract_newsletter_content()
            
            # Step 3: Generate output files
            raw_file, preview_file = self.generate_newsletter_files(newsletter_content)
            
            # Step 4: Copy to public directory
            self.copy_to_public(raw_file, preview_file)
            
            logger.info("✅ Newsletter generation completed successfully!")
            logger.info(f"📁 Raw HTML: {raw_file}")
            logger.info(f"🔍 Preview: {preview_file}")
            logger.info(f"🌐 Public URL: https://rfindiana.org/email-preview/newsletter-raw.html")
            
            return True
            
        except Exception as e:
            logger.error(f"❌ Newsletter generation failed: {e}")
            return False


def main():
    """Main entry point for the script."""
    generator = NewsletterGenerator()
    
    if generator.generate():
        sys.exit(0)
    else:
        sys.exit(1)


if __name__ == "__main__":
    main()