# AgniSpark APK Website

A lightweight, mobile-first static landing page for the **AgniSpark** Android APK.

## Folder structure

```text
AgniSpark-Website/
├── index.html
├── styles.css
├── script.js
├── .nojekyll
├── assets/
│   └── app-icon.webp
└── downloads/
    └── AgniSpark.apk
```

## APK path

The website download buttons use this exact relative path:

```text
downloads/AgniSpark.apk
```

Do not rename the APK or move it unless you also update the links in `index.html` and `script.js`.

## APK metadata inspected

- App name: AgniSpark
- Package: com.utdroid.agnispark
- Version name: 1.0
- Version code: 1
- Minimum SDK: 24 (Android 7.0)
- Target SDK: 37
- APK size: 7,554,625 bytes (~7.2 MiB)

The APK also contains screens/resources for Home, Program, Analytics, History and Settings, plus an ESP32 IP connection flow, drying stages, temperature/humidity/moisture indicators, heater/fan controls and drying-process notifications.

No actual screenshots of the running app were found in the APK, so the website does not pretend to show screenshots. The phone mockup is a website-generated visual based only on verified UI concepts/labels found in the APK.

## Free hosting: GitHub Pages

GitHub Pages is suitable because this site is only HTML/CSS/JavaScript plus a downloadable APK. With GitHub Free, a public repository can be used for Pages.

### Android-only deployment

1. Open GitHub in Chrome on your Android phone and sign in.
2. Create a new **public** repository, for example:
   `agnispark-website`
3. Open the repository.
4. Use **Add file → Upload files**.
5. Upload the contents of this folder while preserving the structure:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll`
   - `assets/app-icon.webp`
   - `downloads/AgniSpark.apk`
6. Commit the files to the `main` branch.
7. Open **Settings → Pages**.
8. Under Build and deployment, choose **Deploy from a branch**.
9. Choose branch `main` and folder `/ (root)`, then save.
10. Wait for GitHub Pages to publish. Your site will appear at a URL like:
    `https://YOUR-GITHUB-USERNAME.github.io/agnispark-website/`

GitHub says Pages can take up to about 10 minutes to publish after changes are pushed.

### Important

The repository and Pages site are public. Do not put private credentials, API keys or sensitive files in it.

The APK in this package is about 7.2 MiB, below GitHub's browser upload limit for regular repository files.

## Updating the APK later

Replace:

```text
downloads/AgniSpark.apk
```

with the new APK, keeping the same filename. The website buttons will automatically continue to point to it.

## What the site does

```text
Android user
    ↓
Public GitHub Pages website
    ↓
Download APK
    ↓
downloads/AgniSpark.apk
    ↓
Android package installer
    ↓
AgniSpark installed
```
