# Text Translator

A modern web application built with React and Vite that allows users to translate text between multiple languages using the MyMemory Translation API.

![Text Translator App](screenshot.png)

## Features

- Support for 90+ languages
- Real-time translation
- Clean and modern user interface
- Dark mode support
- Language swap functionality
- Responsive design
- Error handling and loading states

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (for icons)
- MyMemory Translation API

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rawani123/translator-app.git
cd text-translator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Usage

1. Select the source language from the first dropdown menu
2. Enter the text you want to translate in the input field
3. Select the target language from the second dropdown menu
4. Click the "Translate" button to get the translation
5. Use the swap button (↔️) to quickly switch between languages

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## API Rate Limits

The MyMemory Translation API has the following limits:
- 1000 words/day for anonymous users
- 10000 words/day with a registered email

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- MyMemory Translation API for providing the translation service
- Lucide React for the beautiful icons
- Tailwind CSS for the styling system
