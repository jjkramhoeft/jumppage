# Jump page

A static page of shortcut cards. No build step, so it runs as-is on GitHub Pages.

```
index.html   page, styles and script
config.js    icon list and default cards
icons/       icon images
.nojekyll    tells GitHub Pages to serve files untouched
```

## Editing links

- **For everyone:** edit `cards` in `config.js`. Each card is `{ id, title, url, icon }`, where `icon` is an icon id.
- **Just for you:** click the pencil on the page to add, edit, reorder or delete cards. These changes live in your browser's local storage, so they're per browser and override the defaults in `config.js`. To return to the defaults, clear the site's data in your browser.

## Adding an icon

1. Put an image in `icons/` (SVG preferred; PNG, WebP etc. also work). Square images look best. Colored logos keep their colors.
2. Add a line to `icons` in `config.js`:
   ```js
   { id: 'jira', label: 'Jira', file: 'icons/jira.svg' },
   ```

GitHub Pages can't list a folder's contents, which is why each icon has to be listed in `config.js`.

## Publishing on GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, and save.

The page appears at `https://<user>.github.io/<repo>/` after a minute or so. All paths are relative, so it works under a repository subpath.

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
```
