# Gemini AI - Plus Ultra (MHA)

*README.md by Gemini IA*

### Go Beyond! Plus Ultra! 🚀

This is a simple and fun cosmetic script for fans of **My Hero Academia (Boku no Hero Academia)**.

It visually changes the text of your subscription in the Google Gemini interface from **"Plus"** to **"Plus Ultra"**.

---

## Features

- **Cosmetic Text Change:** Visually changes the subscription label from **"Plus"** to **"Plus Ultra"** (and **"PLUS"** to **"PLUS ULTRA"**).
- **Lightweight & Fast:** Built with clean native JavaScript, it won't affect page performance.
- **Dynamic:** Uses a `MutationObserver` to ensure the text updates even when the page reloads or refreshes content dynamically via AJAX.
- **Safe:** Respects text fields (`textarea`, `input`) and `contentEditable` elements, so it never alters what you type into the chat.

---

## Installation

1. Install a userscript manager browser extension:
   - [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
   - [Violentmonkey](https://violentmonkey.github.io/)
2. Open your userscript manager dashboard and create a new script.
3. Paste the contents of `Gemini AI - Plus Ultra (MHA)-1.2.user.js` into the editor.
4. Save the script.

- Easy installation: [Greasyfork](https://greasyfork.org/en/scripts/584230-gemini-ai-plus-ultra-mha) (Recommended)

---

## How It Works

1. **Initial Processing:** Walks through all text nodes on the page and replaces standalone occurrences of `"Plus"` and `"PLUS"` with `"Plus Ultra"` and `"PLUS ULTRA"`.
2. **MutationObserver:** Watches for dynamically added nodes and character data changes, ensuring the replacement persists even when Gemini updates its UI via AJAX.
3. **Editable Protection:** Skips any text node whose parent is a `textarea`, `input`, or `contentEditable` element, preserving the user's typed input.

---

## Compatibility

- **Supported Domain:** Works on Google Gemini (`https://gemini.google.com/*`).
- **Browsers:** Compatible with Chrome, Firefox, Edge, Brave, Safari, or any browser running a userscript manager.

---

## License

[MIT](LICENSE) - Free for personal and educational use.

<img width="1872" height="1080" alt="img" src="https://github.com/user-attachments/assets/7fc0fc16-4feb-4efb-bf1c-5ac66909c03d" />
