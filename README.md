# Lo Kai Sing — Personal portfolio

Static personal site (HTML / CSS / JS). Swiss typography, bilingual EN / 中文, no backend. Built for **GitHub Pages**.

## Local preview

From this folder:

```bash
# Option A — open directly
open index.html          # macOS
xdg-open index.html      # Linux

# Option B — tiny local server (avoids some file:// quirks)
python3 -m http.server 8080
# then visit http://localhost:8080
```

Files:

| File         | Role                          |
|--------------|-------------------------------|
| `index.html` | Structure & content shell     |
| `styles.css` | Swiss layout & responsive UI  |
| `script.js`  | EN/ZH toggle + `localStorage` |
| `README.md`  | This file                     |

## Deploy to GitHub Pages

### A. User site — `https://YOUR_USERNAME.github.io`

1. Create a **public** repo named exactly `YOUR_USERNAME.github.io`.
2. Copy these files into the **repo root** (`index.html` must be at root).
3. Push to `main`:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

4. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `/ (root)` → Save.
5. Wait a few minutes, then open `https://YOUR_USERNAME.github.io`.

### B. Project site — `https://YOUR_USERNAME.github.io/REPO_NAME`

Same steps in any public repo (e.g. `portfolio`). Site URL will include the repo name. If you use a `docs/` folder workflow, put these files under `docs/` and select that folder in Pages settings instead.

### After the first deploy

Every `git push` to the published branch republishes the site. No build step required.

## Customisation notes

- **LinkedIn**: replace `href="#linkedin"` in `index.html` when you have the real profile URL.
- **CV PDF**: drop a `cv.pdf` in this folder and point the Contact CV link at it if you want a direct download (do not publish salary or private contact details).
- **Language**: default is English; the EN / 中文 toggle stores preference in `localStorage`.

## Privacy on the public page

Intentionally omitted: phone, home address, salary / expected salary, real client brand names (masked), photo.
