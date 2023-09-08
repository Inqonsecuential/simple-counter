# Simple Counter App

A basic web application built with React, TypeScript, and Tailwind CSS that allows users to create, increment, decrement, and remove counters. The app also persists counter data between page reloads and tab reopens.

## Features

- Create new counters.
- Increment and decrement any counter.
- Remove counters.
- Persistent counter data using `localStorage`.
- Real-time synchronization of counter changes between multiple tabs/windows using `localStorage`.

## Getting Started

Follow these instructions to run the app locally on your machine.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js and npm (Node Package Manager)
- Git (optional)

### Installation

1. Clone the repository to your local machine (or download the ZIP file):

   ```bash
   git clone https://github.com/your-username/counter-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd counter-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the App

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your web browser and access the app at [http://localhost:3000](http://localhost:3000).

### Usage

- Click the "Create New Counter" button to add a new counter.
- Use the "Increase" and "Decrease" buttons on each counter to increment and decrement its value.
- Click the "Remove" button to delete a counter.
- Counter data is automatically saved and loaded between page reloads and tab reopens.

### Customization

You can customize the app's appearance and behavior by modifying the code in the project files. You can adjust styles using Tailwind CSS classes, add additional features, or change the layout as needed.

### Deployment

To deploy the app to a production environment, you can use platforms like Netlify, Vercel, or GitHub Pages. Create a production build using:

```bash
npm run build
```

This command generates optimized and minified files in the `build` folder that you can then deploy to your chosen hosting service.

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or would like to contribute to the project, please open an issue or submit a pull request.

## License

This project is licensed under the GNU GPL v3 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This app is built with React, TypeScript, and Tailwind CSS.
- Tailwind CSS styles are included for quick and easy styling.
- Counter data persistence is achieved using `localStorage`.
- Real-time synchronization of counter changes is achieved using `localStorage`.
