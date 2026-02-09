Minecraft Creator Studio

Overview
Minecraft Creator Studio is a browser-based toolbox for Minecraft creators. The current app focuses on the Scene Creator: pose characters in 3D, design backgrounds, and export the final render.

Key Features
- Upload skins from a file or fetch by Minecraft username.
- Manage multiple characters in a single scene.
- Pose head, arms, and legs with quick reset controls.
- Save and load poses with local storage.
- Draw on the scene with pen, line, text, and shape tools.
- Manage layers for characters, drawings, and background.
- Customize the background (color, image, or transparency).
- Export the scene as an image.
- Light or dark theme toggle plus multi-language UI (EN, FR, ES, DE, IT).

App Areas
- Home: entry screen that lists Scene Creator and upcoming tools.
- Scene Creator: the full editor with the viewer, tools, and panels.

Tech Stack
- React + Vite
- skinview3d for 3D skin rendering
- html2canvas for export

Project Structure
- index.html: Vite entry HTML.
- src/App.jsx: UI layout and routing between home/editor.
- src/appLogic.js: Core scene logic, event handling, and state.
- src/main.jsx: React entry point.
- style.css: Global styling and layout.
- public/skins/: Sample skins.
- public/heads/: Optional head textures.
- public/armors/: Optional armor textures.
- public/icons/: UI icons and badges.

Development
1) Install dependencies:
	npm install
2) Run the dev server:
	npm run dev
3) Build for production:
	npm run build
4) Preview the production build:
	npm run preview