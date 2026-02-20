# Karel Decherf - AI-Augmented Solutions Architect Portfolio

**Live:** https://KarelTestSpecial.github.io/portfolio-aiga

This is the **English / International** version of my portfolio, tailored for freelance work and modern tech roles.
It showcases my work as an **AI-Augmented Solutions Architect**, leveraging Generative AI (Gemini, Jules) to accelerate development.

## Tech Stack
- **React** (v19)
- **Bootstrap 5**
- **TypeScript**
- **Node.js** (Scripts for data generation)

## Project Structure
- `src/data/cv.json`: English CV data.
- `projects/projects.tsv`: Project list with English descriptions.
- `scripts/update-projects.js`: Generates `src/data/projects.json` from the TSV.

## Build & Deploy
1.  Install dependencies: `pnpm install`
2.  Update project data: `pnpm run update-projects`
3.  Start local server: `pnpm start`
4.  Build for production: `pnpm run build`
5.  Deploy to GitHub Pages: `pnpm run deploy`
