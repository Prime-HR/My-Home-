# 📚 Learning Center — Resources Folder

Put your learning files here, then list them in `learning-center.html`.

## How to add a resource (3 steps)
1. **Drop your file in this folder** — e.g. `ai-lesson-01-what-is-ai.pdf`, `momo-5-shields.png`.
   - Slides: export your NotebookLM deck as **PDF** and drop it here.
   - Documents: export your Notion page as **PDF**.
   - Images: PNG / JPG infographics or posters.
2. **Open `resources.js`** (one folder up) — this is the simple list of all resources.
3. **Copy one line** and change the details:
   ```js
   { title:"My Lesson (Slides)", type:"slide", subject:"Mathematics", desc:"Short description.", url:"resources/my-lesson.pdf" },
   ```
   - `type` = `slide` | `pdf` | `text` | `image` | `video`
   - For **videos**, no file needed — just paste the YouTube or TikTok link as the `url`.
4. Save and push. Done — it appears in the Learning Center.

## Tips
- Use simple file names: lowercase, dashes, no spaces (e.g. `science-lesson-06-photosynthesis.pdf`).
- Keep PDFs reasonably small so they load fast on phones.
- You can always ask Claude to add resources to the list for you.

*AI For Ghana · raufhusein.site*
