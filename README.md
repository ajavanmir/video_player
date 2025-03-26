# Video Player Script Documentation

## Overview
This is a custom video player script written in JavaScript that provides an interactive and user-friendly interface for controlling HTML5 video playback. The script includes features such as play/pause, volume control, fast-forward/rewind, full-screen mode, and a progress bar to track the video's playback position.

The project is developed by **Amir Javanmir** and released on **March 26, 2025** under copyright protection.

---

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [File Structure](#file-structure)
5. [Dependencies](#dependencies)
6. [Customization](#customization)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features
The video player includes the following functionalities:
- **Play/Pause**: Toggle between playing and pausing the video.
- **Volume Control**: Adjust the volume using a slider with real-time visual feedback.
- **Progress Bar**: Drag or click on the progress bar to seek through the video.
- **Fast Forward/Rewind**: Skip forward or backward by 10 seconds.
- **Full-Screen Mode**: Enter or exit full-screen mode for an immersive experience.
- **Time Display**: Displays the current playback time and total video duration in `MM:SS` format.
- **Dynamic UI Updates**: Automatically updates the progress bar and time display as the video plays.

---

## Installation
To use this video player in your project, follow these steps:

1. Clone or download the repository containing the project files.
2. Ensure you have the required dependencies installed (see [Dependencies](#dependencies)).
3. Include the necessary CSS and JavaScript files in your HTML file:
   ```html
   <link href="./css/ionicons.min.css" rel="stylesheet">
   <link href="./css/style.css" type="text/css" rel="stylesheet" />
   <script src="./js/file.js"></script>
   ```
4. Add the video player structure to your HTML file (see [File Structure](#file-structure) for reference).

---

## Usage
### HTML Structure
The video player requires a specific HTML structure to function correctly. Below is an example of the required markup:

```html
<div class="myplayer">
    <video src="path/to/your/video.mp4"></video>
    <div class="myplayer__controls">
        <div class="controls__progressbar">
            <input class="controls__progressbar-current" type="range" min="1" max="100" step="1" value="0">
        </div>
        <div class="controls__btns">
            <div class="left">
                <div class="btns play"><i class="icon ion-md-play"></i></div>
                <div class="btns rewind"><i class="icon ion-md-rewind"></i></div>
                <div class="btns forward"><i class="icon ion-md-fastforward"></i></div>
                <div class="timer">
                    <span class="currentTime">00:00</span>
                    <span>/</span>
                    <span class="videoTime">00:00</span>
                </div>
            </div>
            <div class="right">
                <div class="btns volume">
                    <i class="icon ion-md-volume-high"></i>
                    <div class="volume__progress">
                        <input id="volume_bar" type="range" min="1" max="100" step="1" value="50">
                    </div>
                </div>
                <div class="btns fullscreen"><i class="icon ion-md-expand"></i></div>
            </div>
        </div>
    </div>
</div>
```

### JavaScript Integration
Ensure the JavaScript file (`file.js`) is included at the end of your HTML file, just before the closing `</body>` tag. This ensures the DOM is fully loaded before the script runs.

---

## File Structure
The project consists of the following files and directories:

```
project-root/
├── css/
│   ├── ionicons.min.css       # Icon library for UI elements
│   └── style.css              # Custom styles for the video player
├── js/
│   └── file.js                # Main JavaScript file for video player functionality
├── video/
│   └── SampleVideo.ia.mp4     # Example video file
└── index.html                 # Main HTML file containing the video player
```

---

## Dependencies
The video player relies on the following external libraries:
- **Ionicons**: A premium icon library used for UI elements like play, pause, and volume icons. Download it from [ionicons.com](https://ionicons.com/) and include it in your project.

Additionally, ensure your browser supports the following:
- HTML5 `<video>` element.
- JavaScript ES6+ features.

---

## Customization
You can customize the video player to suit your needs:
- **Styling**: Modify the `style.css` file to change the appearance of the player (e.g., colors, layout, etc.).
- **Icons**: Replace the Ionicons with custom icons or another icon library.
- **Behavior**: Adjust the JavaScript code to add new features or modify existing ones (e.g., change the skip interval for fast-forward/rewind).

---

## Contributing
If you'd like to contribute to this project:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

Please ensure your contributions adhere to the project's coding standards and include appropriate documentation.

---

## License
This project is licensed under the **Copyright of Amir Javanmir**. Unauthorized copying, modification, or redistribution of this software is prohibited without explicit permission from the author.

For inquiries or collaboration opportunities, contact the author directly.

---

## Contact
- **Author**: Amir Javanmir
- **Release Date**: March 26, 2025
- **Email**: [Insert your email here]
- **Website**: [Insert your website here]

---

Thank you for using this video player script! If you find it helpful, please consider giving credit to the author.
