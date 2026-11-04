# Overcoming the Language Barrier in Japan

(It's actually *Kashmiri Lessons with Fayk for Arousha*. Don't tell anyone.)

A small Next.js site. Link previews say "Japan"; the page itself is a Kashmiri lesson.

## Editing the lessons

Everything Arousha sees lives in [`data/phrases.ts`](data/phrases.ts):

- Add or change phrases and lessons there.
- Leave `script` empty until a native speaker has checked the Kashmiri. Then fill it in and set `verified: true`.
- Fayk's teasing lines are in `faykQuips` at the bottom of the same file.
- Audio clips go in `public/audio/` and are linked with `audio: "/audio/name.mp3"`. No clip, no play button.

## Running it on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Publishing it (personal GitHub + Vercel)

Do these once, one at a time.

### 1. Tell git who you are (only in this folder)

Use the name and email of your **personal** GitHub account:

```bash
git config user.name "Your Name"
git config user.email "you@personal-email.com"
```

### 2. Make the first commit

```bash
git add -A
git commit -m "Phase 1: Kashmiri lessons page"
```

### 3. Create the GitHub repo

1. Sign in to github.com with your **personal** account.
2. Click **+** (top right) → **New repository**.
3. Name it `overcomingthelanguagebarrierinjapan`, choose **Public**, and leave every "Add README / .gitignore / license" box **unticked**.
4. Click **Create repository**. GitHub shows a page with commands; use the ones below instead.

### 4. Push the code

Replace `YOUR-USERNAME` with your personal GitHub username:

```bash
git remote add origin https://github.com/YOUR-USERNAME/overcomingthelanguagebarrierinjapan.git
git branch -M main
git push -u origin main
```

A browser window may pop up asking you to sign in to GitHub. Pick your personal account.

### 5. Connect Vercel

1. Go to vercel.com and **Continue with GitHub** using the same personal account.
2. Click **Add New… → Project**, find `overcomingthelanguagebarrierinjapan`, click **Import**.
3. Check the **Project Name** is `overcomingthelanguagebarrierinjapan` (this becomes the URL). Leave everything else as it is.
4. Click **Deploy**. After a minute you get `overcomingthelanguagebarrierinjapan.vercel.app`.

If that name is already taken, Vercel adds random letters to the URL. You can change it under **Settings → Domains**.

From now on, every `git push` to `main` updates the site automatically.
