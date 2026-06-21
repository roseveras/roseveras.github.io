# Violet E. Glock — Portfolio Site

---

## How to deploy on GitHub Pages (free)

1. Create a new repository named: `violetglockart.github.io`
   (or your exact GitHub username + .github.io — this gives you a free custom URL)
2. Upload `index.html` and your `images/` folder to the repo
3. Go to Settings → Pages → set Source to "Deploy from branch: main"
4. Your site will be live at `https://violetglockart.github.io` within ~2 minutes

---

## How to customize

### Change the hero (the first thing people see)

The hero is the big opening screen — right now it shows the text "Frame by frame, by hand." along with a tagline. Here's how to change it to show just your name, your title, and a short description.

**Step 1 — Open index.html in the GitHub editor**

Go to your repository, click `index.html`, then click the pencil icon in the top-right corner to edit it.

**Step 2 — Find the hero section**

Use your browser's find function: press `Ctrl + F` (Windows) or `Cmd + F` (Mac) and search for:

```
<!-- HERO -->
```

You'll see a block that looks like this:

```html
<header class="hero">
  <p class="hero-eyebrow">Stop Motion Animator &amp; Illustrator</p>
  <h1>Frame by<br /><em>frame,</em><br />by hand.</h1>
  <p class="hero-sub">I make worlds out of wire, foam, and light — one painstaking frame at a time.</p>
  <div class="hero-scroll"><span></span> Scroll to explore</div>
</header>
```

**Step 3 — Replace it with this**

Delete everything between `<header class="hero">` and `</header>` and replace it with:

```html
<header class="hero">
  <p class="hero-eyebrow">Stop Motion Animator &amp; Illustrator</p>
  <h1>Violet E. Glock</h1>
  <p class="hero-sub">Your one or two sentence description goes here. For example: I make stop motion films, illustrations, and puppets by hand.</p>
  <div class="hero-scroll"><span></span> Scroll to explore</div>
</header>
```

What each part does:

- `<p class="hero-eyebrow">` — the small uppercase line above your name (e.g. STOP MOTION ANIMATOR & ILLUSTRATOR). The `&amp;` is how you write `&` in HTML — don't change it to a regular `&` or it may break.
- `<h1>` — your name, big and bold at the top
- `<p class="hero-sub">` — a short description in smaller text below your name. Keep it to one or two sentences.
- `<div class="hero-scroll">` — the small "Scroll to explore" line at the bottom. You can delete this whole line if you don't want it.

**Step 4 — Add a full-screen background image (optional)**

If you want a photo to fill the entire hero background behind your name, find this in the CSS section near the top of the file (search for `.hero {`):

```css
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7rem 3rem 4rem;
  max-width: 900px;
  margin: 0 auto;
}
```

Replace it with:

```css
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7rem 3rem 4rem;
  max-width: 100%;
  margin: 0 auto;
  background-image: url('images/your-image-name.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}
```

Then directly below that closing `}`, add this so your text stays readable over the image:

```css
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 0;
}

.hero > * {
  position: relative;
  z-index: 1;
  color: #F7F3EE;
}
```

This adds a semi-transparent dark overlay so your name shows up clearly over the photo. If the image is already dark and you want less overlay, change `0.45` to something lower like `0.2`. If you want more, go up to `0.6`.

Make sure your image is uploaded to the `images/` folder in your repo and the filename matches exactly, including capitalisation (hero.jpg and Hero.jpg are treated as different files).

**Step 5 — Commit your changes**

Scroll to the bottom of the GitHub editor, write a short note like "update hero section", and click **Commit changes**. Wait 60–90 seconds, then hard refresh your live site (`Cmd + Shift + R` on Mac, `Ctrl + Shift + R` on Windows).

---

### Swap in your content

Search for these placeholders in index.html and replace them:

| Placeholder | Replace with |
|---|---|
| `[Your Film Title]` | Your actual film title |
| `[your film's theme]` | A brief description |
| `violet@youremail.com` | Your email |
| `vimeo.com/yourusername` | Your Vimeo profile |
| `linkedin.com/in/yourusername` | Your LinkedIn |

### Add your Vimeo film embed

1. Go to your Vimeo video
2. Click Share → Embed
3. Copy just the video ID number from the URL (e.g. `123456789`)
4. In index.html, find the comment block that says "Replace this placeholder with your Vimeo embed"
5. Replace the placeholder `<div class="video-embed">...</div>` with:
```html
<div class="video-embed">
  <iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID?title=0&byline=0&portrait=0"
    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>
```

### Add your photos

1. Create an `images/` folder next to index.html
2. Add your photos (jpg or webp recommended, keep under 500KB each)
3. Replace each `<div class="gallery-item">` placeholder with:
```html
<div class="gallery-item">
  <img src="images/your-file-name.jpg" alt="Brief description">
</div>
```

### Add your headshot

Replace the `<div class="about-photo-placeholder">` with:
```html
<img src="images/violet.jpg" alt="Violet E. Glock">
```

### Add more gallery items

Just duplicate a `<div class="gallery-item">` block in the illustrations or puppets grid.
The grid handles the layout automatically.

### Update your skills tags

Find the `.skills-list` section and edit, add, or remove `<span class="skill-tag">` items.

### Change the colors
 
All five colors on the site are defined in one place, so you only need to change them once and they update everywhere automatically.
 
In `index.html`, use `Ctrl + F` (Windows) or `Cmd + F` (Mac) to search for `:root`. You'll find this block near the top of the file, inside the `<style>` tag:
 
```css
:root {
  --linen:    #F7F3EE;
  --ink:      #1C1410;
  --clay:     #B5673A;
  --sage:     #8A9E84;
  --paper:    #E8DDD0;
}
```
 
Each line is a color variable. The part after `--` is the name, and the `#` code is the actual color. Here's what each one controls:
 
| Variable | What it looks like | Used for |
|---|---|---|
| `--linen` | off-white | the main page background |
| `--ink` | dark brown-black | all body text, borders, nav |
| `--clay` | warm orange-brown | the accent color — small uppercase labels, skill tags, hover states on links |
| `--sage` | dusty green | available if you want to add your own accents |
| `--paper` | aged paper beige | card backgrounds, like the contact section and gallery placeholders |
 
To change a color, replace the hex code (the `#` followed by 6 characters) with a new one. For example, to make the accent color a deep red instead of orange-brown, you'd change:
 
```css
--clay:     #B5673A;
```
 
to:
 
```css
--clay:     #8B2020;
```
 
**How to find a hex code you like:**
 
Go to [coolors.co](https://coolors.co) and hit the spacebar to generate palettes until you see something you like — it shows the hex codes for each color. Or Google "color picker", click the color you want, and copy the hex code from the result.
 
The color you'll most likely want to experiment with first is `--clay`, since it's the accent that appears most visibly throughout the page. `--linen` and `--ink` together set the overall mood — if you want a dark-background site, you could swap them so `--linen` is very dark and `--ink` is very light, and the whole site will invert.

---

## Optional: custom domain (e.g. violeteglock.com)

Domains cost ~$12/year from Namecheap or Cloudflare.
After buying: add a `CNAME` file to your repo containing your domain,
then follow GitHub's custom domain docs to point your DNS records.

---

## File structure
```
violeteglock.github.io/
├── index.html        ← everything lives here
└── images/
    ├── violet.jpg    ← your headshot
    ├── film-still.jpg
    ├── illo-1.jpg
    ├── puppet-1.jpg
    └── ...
```
