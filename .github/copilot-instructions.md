# GitHub Copilot Instructions for Minecraft Skin Poser

## Overview
This project is a web-based Minecraft Skin Poser that allows users to upload, manipulate, and export Minecraft skins. The application is structured around a viewer that renders 3D models of Minecraft characters, allowing for various poses and backgrounds.

## Architecture
- **Main Components**: The application consists of three main panels: the left panel for skin uploads and controls, the viewer in the center, and the right panel for character manipulation.
- **Data Flow**: User interactions with the UI (buttons, sliders) directly manipulate the state of the viewer and the displayed skins. Changes are reflected in real-time.
- **Key Files**:
  - `index.html`: The main HTML structure of the application.
  - `main.js`: Contains the core logic for skin manipulation, viewer setup, and event handling.
  - `style.css`: Styles the application layout and components.

## Developer Workflows
- **Running the Application**: Open `index.html` in a web browser to start the application.
- **Building**: No specific build process is required; the application runs directly in the browser.
- **Testing**: Ensure all UI elements function as expected by interacting with the application.

## Project Conventions
- **Skin Management**: Skins are managed through an array of uploaded skins, allowing users to switch between them easily.
- **Pose Saving**: Poses can be saved and loaded using local storage, allowing for persistent user experiences.
- **Background Handling**: Users can upload images or select colors for the background, with options for transparency.

## Integration Points
- **External Libraries**: The project uses `html2canvas` for exporting images of the rendered scene and `skinview3d` for rendering the Minecraft skins.
- **Cross-Component Communication**: Events are used extensively to communicate between UI elements and the viewer, ensuring a responsive user experience.

## Examples
- **Setting a Skin**: Use the `setSkin(url)` function to change the current skin displayed in the viewer.
- **Saving a Pose**: Call the `savePoseBtn.onclick` function to save the current pose to local storage.

## Conclusion
This document provides a concise overview of the Minecraft Skin Poser project, outlining its architecture, workflows, conventions, and integration points. For further details, refer to the specific files mentioned above.