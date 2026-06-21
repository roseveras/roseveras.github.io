# Violet Glock — Portfolio Site (Multi-Page Version)

A 7-page portfolio site for stop motion animator & illustrator Violet Glock.
Built with plain HTML + CSS — no frameworks, no build step, deploys in minutes.

---

## File structure

```
violetglock.github.io/
├── index.html          ← homepage with video hero + section links
├── films.html           ← all films overview
├── rotting-girl.html    ← dedicated page for your featured film
├── puppets.html         ← puppet gallery
├── fabrication.html     ← fabrication/process gallery
├── illustration.html    ← illustration gallery
├── about.html           ← about page
├── contact.html         ← contact page
├── style.css            ← shared styling for ALL pages (edit once, updates everywhere)
├── images/               ← put all your photos here
└── video/                ← put your hero background video here
```

**Important:** All 8 HTML pages share one `style.css` file. If you want to change a color, font, or spacing rule, you only ever need to edit `style.css` — it updates every page automatically. You do NOT need to repeat style edits across each HTML file.

---

## How to deploy on GitHub Pages (free)

1. Create a new GitHub account at github.com if you don't have one
2. Create a new repository named: `yourusername.github.io`
   (use your exact GitHub username + `.github.io` — this gives you a free custom URL)
3. Upload every file and folder from this project (all the `.html` files, `style.css`, the `images/` folder, and the `video/` folder) to the repo
4. Go to **Settings → Pages** → set Source to **"Deploy from branch: main"**
5. Your site will be live at `https://yourusername.github.io` within ~2 minutes

---

## How to edit any page

1. Go to your repository on GitHub
2. Click on the file you want to edit (e.g. `about.html`)
3. Click the pencil icon (✏️) in the top right to open the editor
4. Make your changes
5. Scroll down, write a short note describing what you changed, click **Commit changes**
6. Wait 60–90 seconds, then hard refresh your live site: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

---

## Adding your background video (homepage hero)

The homepage (`index.html`) has a looping video playing behind your name. Here's how to add yours:

**Step 1 — Prepare your video file**

- Keep it short: a 5–20 second loop works best. It will play on repeat automatically.
- Export as `.mp4` using H.264 compression — this format works in every browser.
- Keep the file size small, ideally under 15MB, so it loads quickly. If your file is larger:
  - Use a free tool like [Handbrake](https://handbrake.fr) (download, drag your video in, choose "Fast 1080p30" preset, export)
  - Or use [CloudConvert](https://cloudconvert.com/mp4-converter) online — upload your file, lower the bitrate, download the result
- Avoid videos with important dialogue or sound — the video plays muted automatically (this is required for autoplay to work in browsers, and also keeps the homepage from blasting sound at visitors).

**Step 2 — Upload it to your repo**

1. Go to your repository on GitHub
2. Open the `video` folder
3. Click **Add file → Upload files**
4. Drag in your video file
5. Commit the upload

**Step 3 — Point the code at your file**

Open `index.html`, search for `your-video-file.mp4`, and replace it with your actual filename:

```html
<source src="video/your-video-file.mp4" type="video/mp4">
```

For example, if you uploaded `reel-loop.mp4`, it should read:

```html
<source src="video/reel-loop.mp4" type="video/mp4">
```

**Optional — add a poster image**

The poster image shows briefly while the video loads, so visitors don't see a blank screen. Upload a still frame from your video (or any image) to your `images` folder, then update this line in `index.html`:

```html
<video class="hero-video" autoplay muted loop playsinline poster="images/hero-poster.jpg">
```

Replace `hero-poster.jpg` with your actual filename.

**If you don't want a video at all**

You can swap the `<video>` block for a static image instead. Replace this:

```html
<video class="hero-video" autoplay muted loop playsinline poster="images/hero-poster.jpg">
  <source src="video/your-video-file.mp4" type="video/mp4">
</video>
```

with:

```html
<img class="hero-video" src="images/your-image.jpg" alt="">
```

The `.hero-video` class works for both video and image, so the layout won't break.

---

## Editing the homepage title

In `index.html`, search for:

```html
<h1 class="hero-title">Violet Glock</h1>
```

Change the text between the tags. It will always render in bold, uppercase letters automatically — you don't need to type it in capitals yourself, the styling handles that.

---

## Adding your Vimeo film embeds

There are video embed placeholders on `films.html` and `rotting-girl.html`. For each one:

1. Go to your video on Vimeo
2. Click **Share → Embed**
3. Copy just the video ID number from the embed code (it's the long number in the URL, e.g. `123456789`)
4. In the HTML file, find the comment that says "Replace this placeholder with your Vimeo embed"
5. Replace the placeholder `<div class="video-embed">...</div>` block with:

```html
<div class="video-embed">
  <iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID?title=0&byline=0&portrait=0"
    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>
```

Replace `YOUR_VIDEO_ID` with your actual ID.

---

## Adding photos to a gallery page (Puppets, Fabrication, Illustration, Rotting Girl stills)

1. Upload your photos to the `images/` folder in your repo (jpg or webp recommended, ideally under 500KB each so the page loads fast)
2. In the relevant HTML file, find a placeholder block that looks like this:

```html
<div class="gallery-item"><div class="gallery-placeholder">puppet</div></div>
```

3. Replace it with:

```html
<div class="gallery-item">
  <img src="images/your-file-name.jpg" alt="Brief description of the image">
</div>
```

4. To add more images, just duplicate the `<div class="gallery-item">...</div>` block as many times as you need. The grid adjusts automatically — you don't need to manually arrange rows or columns.

---

## Adding your headshot (About page)

In `about.html`, find:

```html
<div class="about-photo-placeholder">your photo here</div>
```

Replace it with:

```html
<img src="images/violet.jpg" alt="Violet Glock">
```

(Make sure `violet.jpg` matches the actual filename you uploaded to `images/`.)

---

## Editing the About page text

In `about.html`, find the `<div class="about-text">` block and edit the text inside each `<p>` tag. There's also a row of skill tags near the bottom:

```html
<div class="skills-list">
  <span class="skill-tag">Stop Motion</span>
  <span class="skill-tag">Puppet Fabrication</span>
  ...
</div>
```

Add, remove, or rename any `<span class="skill-tag">...</span>` entry.

---

## Adding credits to the Rotting Girl page

In `rotting-girl.html`, find the `.credits-list` block:

```html
<div class="credits-list">
  <div class="credit-role">Direction &amp; Animation</div>
  <div class="credit-name">Violet Glock</div>
  ...
</div>
```

Each credit is a pair of lines: a role (e.g. "Sound Design") and a name. Add a new pair for each credit, or delete a pair you don't need. They display in two columns automatically.

---

## Updating your contact links

In `contact.html`, find and replace:

| Placeholder | Replace with |
|---|---|
| `violet@youremail.com` | Your actual email (appears twice — once in the visible text, once in the `mailto:` link) |
| `vimeo.com/yourusername` | Your Vimeo profile URL |
| `linkedin.com/in/yourusername` | Your LinkedIn profile URL |
| `instagram.com/yourusername` | Your Instagram profile URL |

---

## Adding Instagram (or any new link) to other pages

Instagram is already included on the Contact page. If you want to add it anywhere else, copy this block and place it among the other `contact-link` entries:

```html
<a class="contact-link" href="https://instagram.com/yourusername" target="_blank" rel="noopener">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
  Instagram
</a>
```

---

## Changing the colors (applies to the whole site)

Open `style.css` (not any of the HTML files) and find this block near the top:

```css
:root {
  --linen:    #F7F3EE;
  --ink:      #1C1410;
  --clay:     #B5673A;
  --sage:     #8A9E84;
  --paper:    #E8DDD0;
}
```

| Variable | What it looks like | Used for |
|---|---|---|
| `--linen` | off-white | the main page background |
| `--ink` | dark brown-black | all body text, borders, nav |
| `--clay` | warm orange-brown | the accent color — small uppercase labels, skill tags, hover states on links |
| `--sage` | dusty green | available if you want to add your own accents |
| `--paper` | aged paper beige | card backgrounds, gallery placeholders |

To change a color, replace the hex code (the `#` followed by 6 characters) with a new one. For example, to make the accent color a deep red instead of orange-brown:

```css
--clay:     #8B2020;
```

**How to find a hex code you like:** go to [coolors.co](https://coolors.co) and press the spacebar to generate palettes — it shows the hex code for each color. Or Google "color picker," click the color you want, and copy the hex code shown.

Because every page links to this same `style.css` file, you only ever need to change a color once here, and it updates across all 8 pages automatically.

---

## Adding navigation links to a new page

If you create a 9th page later, copy this nav block into it and add a link to it on every other page's nav too, so visitors can reach it from anywhere:

```html
<li><a href="your-new-page.html">Page Name</a></li>
```

---

## Optional: custom domain (e.g. violetglock.com)

Domains cost about $12/year from Namecheap or Cloudflare. After buying one:
1. Add a file named `CNAME` (no extension) to your repo containing just your domain name
2. Follow [GitHub's custom domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) to point your domain's DNS records at GitHub
