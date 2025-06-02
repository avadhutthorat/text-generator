# Text Generator

A modern React application that generates custom placeholder text for your projects. Built with React 18 and styled with a futuristic UI design.

![Text Generator Demo](public/demo.gif)

## 🚀 Features

- **Instant Text Generation**: Generate custom placeholder text on demand
- **Customizable Output**: Control the number of paragraphs generated
- **Format Options**: Choose between HTML and plain text output
- **Modern UI**: Sleek, responsive design with animations
- **Copy to Clipboard**: One-click copying of generated text
- **Mobile Responsive**: Works seamlessly on all devices

## 🛠️ Technologies Used

- React 18
- Axios for API calls
- Modern CSS with animations
- Clipboard API
- Responsive Design

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/avadhutthorat/text-generator.git
   cd text-generator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will open in your default browser at `http://localhost:3000`.

## 🔧 Usage

1. Select the number of paragraphs you want to generate
2. Choose the output format (HTML/Text)
3. The text will be generated automatically
4. Click the copy button to copy the generated text to your clipboard

## 🎨 Customization

You can customize the appearance by modifying the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #6c63ff;
  --secondary-color: #4a90e2;
  --background-color: #f8f9fa;
  --text-color: #2c3e50;
}
```

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop computers
- Tablets
- Mobile phones

## 🔄 API Integration

The application uses the Bacon Ipsum API to generate text. The API endpoint:

```
https://baconipsum.com/api/?type=all-meat&paras=${count}&start-with-lorem=1&format=${format}
```

## 💻 Development

To start development:

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Submit a pull request

## 🐛 Known Issues

- None currently reported

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [Bacon Ipsum](https://baconipsum.com/) for the text generation API

Project Link: [https://github.com/avadhutthorat/text-generator](https://github.com/avadhutthorat/text-generator)

Live Demo: [https://avadhutthorat.github.io/text-generator/](https://avadhutthorat.github.io/text-generator/)

---

Made with ❤️ by [Avadhut Thorat](https://github.com/avadhutthorat)
