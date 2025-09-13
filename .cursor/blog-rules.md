# 📝 Blog Post Creation Rules

## 🚀 Quick Start Checklist

### 1. Copy Template
```bash
cp src/pages/blog/blog-post-template.html src/pages/blog/your-post-name.html
```

### 2. Update Template Placeholders
- `[Blog Post Title]` → Your actual title
- `[Blog post description goes here]` → SEO description (150-160 chars)
- `[Blog post URL]` → Full URL (e.g., https://bobbieallsop.github.io/pages/blog/your-post-name.html)
- `[Social share image URL]` → Image URL (e.g., https://bobbieallsop.github.io/assets/images/your-image.png)
- `[Category]` → Category (AI & Development, UX Design, Game Design, Development, Case Study)
- `[Date]` → Publication date (e.g., "September 2025")
- `[Read time]` → Estimated read time (e.g., "3 min read")
- `<!-- Blog post content goes here -->` → Your actual content

### 3. Add to Blog Listing
Add new article card to `src/pages/blog.html` at the top (after line 67).

### 4. Update Vite Config
Add to `vite.config.js` in `rollupOptions.input` (around line 30-50):
```javascript
'pages/blog/your-post-name': resolve(__dirname, 'src/pages/blog/your-post-name.html'),
```

### 5. Calculate Read Time 
Use the automated read time calculator:
```bash
# Calculate read time for a blog post
npm run read-time src/pages/blog/your-post-name.html

# Automatically update the [Read time] placeholder in the file
npm run read-time:update src/pages/blog/your-post-name.html

# Calculate from clipboard content (macOS)
npm run read-time -- --content "$(pbpaste)"
```

### 6. Add Social Share Image
- Place images in `src/assets/images/`
- Use format: `your-post-name-share.png`
- Dimensions: 1200x630px (recommended)
- Reference as: `../assets/images/your-post-name-share.png`

## 📋 Content Structure Template

### Basic Blog Post Structure
```html
<div class="blog-post-content">
    <!-- Optional: Use intro section for engaging opening -->
    <section class="intro">
        <p>Compelling hook that draws readers in...</p>
        <p>Brief overview of what they'll learn...</p>
    </section>
    
    <!-- Main content sections -->
    <section>
        <h2>Main Heading</h2>
        <p>Your content paragraphs...</p>
        
        <!-- Use subheadings for better structure -->
        <h3>Subheading</h3>
        <p>More detailed content...</p>
        
        <!-- Use lined lists for better readability -->
        <ul class="lined-list">
            <li><strong>Point 1:</strong> Explanation</li>
            <li><strong>Point 2:</strong> Explanation</li>
        </ul>
    </section>
    
    <!-- Code blocks when needed -->
    <div class="code-block">
        <div class="code-header">
            <span>JavaScript</span>
        </div>
        <pre><code>// Your code here</code></pre>
    </div>
    
    <!-- Optional: Conclusion section -->
    <section class="conclusion">
        <h2>Key Takeaways</h2>
        <p>Summarize main points...</p>
    </section>
</div>

<!-- CTA section is outside blog-post-content -->
<section class="section-cta">
    <div class="cta-content">
        <h2>Thank you for reading!</h2>
        <div class="cta-text">
            <p>Want to work with me? Feel free to contact me!</p>
            <p>...or just say hello on my social media.</p>
        </div>
        <div class="cta-buttons">
            <a href="/pages/contact.html" class="cta-button primary">Contact Me</a>
            <a href="/pages/blog.html" class="cta-button secondary">Back to Blog</a>
        </div>
    </div>
</section>
```

## 🎨 Available CSS Classes & Components

### Layout Classes
- `.blog-post` - Main article container (max-width: 800px)
- `.blog-post-content` - Content wrapper with typography styles
- `.main-wrapper` - Page wrapper
- `.section-standard` - Standard section spacing

### Header & Meta Classes
- `.page-header` - Title and metadata container
- `.page-meta` - Metadata container (displays with bullet separators)
- `.meta-item` - Individual metadata items (category, date, read-time)

### Content Classes
- `.intro` - Introduction section styling
- `.conclusion` - Conclusion section styling
- `.lined-list` - Styled lists with better spacing and bullets
- `.lead` - Larger intro text (font-size: var(--h4-font-size))

### Code & Technical Content
- `.code-block` - Code container with syntax highlighting
- `.code-header` - Code block header with language label
- `.tech-stack` - Flexbox container for technology tags
- `.tech-item` - Individual technology badges

### Interactive Elements
- `.section-cta` - Call-to-action section (styled background)
- `.cta-content` - CTA content wrapper (max-width: 600px)
- `.cta-text` - CTA text styling
- `.cta-buttons` - CTA button container
- `.cta-button.primary` - Primary CTA button
- `.cta-button.secondary` - Secondary CTA button

### Image & Media Classes
- `.img-container` - Image wrapper with responsive sizing
- `.img-responsive` - Responsive image styling
- `.image-caption` - Image caption styling

## 📖 Content Guidelines & Best Practices

### Writing Style
- **Hook readers early**: Use the `intro` section with compelling opening
- **Structure clearly**: Use H2 for main sections, H3 for subsections
- **Make it scannable**: Use `lined-list` for key points
- **Be specific**: Include concrete examples and actionable advice
- **Conclude strongly**: Summarize key takeaways in conclusion section

### Common Content Patterns
```html
<!-- For technical content -->
<h3>Key Benefits ✅</h3>
<ul class="lined-list">
    <li><strong>Performance:</strong> 40% faster load times</li>
    <li><strong>Maintainability:</strong> Cleaner, more organized code</li>
</ul>

<!-- For challenges/problems -->
<h3>Challenges Encountered ⚠️</h3>
<ul class="lined-list">
    <li>Complex state management across components</li>
    <li>Browser compatibility issues with newer APIs</li>
</ul>

<!-- For step-by-step processes -->
<h3>Implementation Steps</h3>
<ol class="lined-list">
    <li><strong>Setup:</strong> Initialize the project structure</li>
    <li><strong>Configure:</strong> Add necessary dependencies</li>
    <li><strong>Implement:</strong> Build core functionality</li>
</ol>
```

### SEO & Accessibility
- **Meta description**: 150-160 characters, engaging and descriptive
- **Headings**: Use proper hierarchy (H1 → H2 → H3)
- **Alt text**: Include for all images
- **Loading**: Use `loading="lazy"` for images below the fold
- **Links**: Descriptive link text, use `target="_blank"` for external links

## 🔧 File Structure & Organization

### Required Files to Update
1. **Blog post HTML**: `src/pages/blog/your-post-name.html`
2. **Blog listing**: `src/pages/blog.html` (add card at top)
3. **Vite config**: `vite.config.js` (add to rollupOptions.input)
4. **Social image**: `src/assets/images/your-post-name-share.png`

### File Naming Convention
- Use kebab-case: `my-awesome-blog-post.html`
- Keep URLs SEO-friendly and descriptive
- Image names should match post name: `my-awesome-blog-post-share.png`

## ⏱️ Read Time Calculator Tool

### Automatic Read Time Calculation
The project includes a built-in tool to calculate and update read times automatically:

```bash
# Analyze a blog post and show read time
npm run read-time src/pages/blog/your-post.html

# Automatically update the [Read time] placeholder
npm run read-time:update src/pages/blog/your-post.html

# Calculate from raw content (useful for drafts)
npm run read-time -- --content "Your article content here..."

# Calculate from clipboard (macOS)
npm run read-time -- --content "$(pbpaste)"
```

### How It Works
- **Words per minute**: 200 (industry standard)
- **Minimum read time**: 1 minute
- **Content extraction**: Analyzes only content within `<div class="blog-post-content">`
- **Smart parsing**: Removes HTML tags, preserves meaningful text
- **Auto-rounding**: Always rounds up to nearest minute

### Example Output
```
📊 Read Time Analysis
━━━━━━━━━━━━━━━━━━━━
📄 File: src/pages/blog/ai-prototyping-sprint-blog.html
📝 Word count: 825 words
⏱️  Estimated read time: 5 min read
🔢 Calculation: 825 words ÷ 200 wpm = 5 min
```

## 🚦 Testing Checklist

Before publishing:
- [ ] All placeholder text replaced
- [ ] **Read time calculated and updated** (`npm run read-time:update`)
- [ ] Images display correctly
- [ ] Links work (internal and external)
- [ ] Social share image is 1200x630px
- [ ] Meta description is 150-160 characters
- [ ] Blog card added to blog.html listing
- [ ] Vite config updated with new entry
- [ ] Content flows well and is scannable
- [ ] CTA buttons point to correct pages

## 🎯 Categories & Tags

### Standard Categories
- **AI & Development** - AI tools, programming, automation
- **UX Design** - User experience, design process, research
- **Game Design** - Game development, prototyping, mechanics
- **Development** - General programming, tools, frameworks
- **Case Study** - In-depth project breakdowns

### Category Guidelines
- Use one primary category per post
- Categories should reflect the main focus/audience
- Keep categories consistent across posts
