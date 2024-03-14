# Pose

This website is built on GitHub Pages using 11ty, a JavaScript-powered static site generator.

## Set Up the Environment

1. **Install Node.js**

   Check if Node.js is installed:

   ```bash
   node -v
   ```

   If not, install Node.js:

   - Windows: Download the installer from the [official website](https://nodejs.org/en/download/).
   - macOS: Install using [Homebrew](https://brew.sh/):
     ```bash
     brew install node
     ```
   - Linux (Ubuntu/Debian):
     ```bash
     sudo apt-get update
     sudo apt-get install nodejs
     sudo apt-get install npm
     ```

2. **Clone the Repository**

   Clone this repository to your local machine:

   ```bash
   git clone {git_url}
   ```

3. **Install Dependencies**

   Change directory (cd) into the site repository and install the required Node modules:

   ```bash
   cd {repository_name}
   npm install
   ```

## Development and Deployment

1. **Development Scripts**

   - Start the development server:

     ```bash
     npm start
     ```

   - Build the site for production:
     ```bash
     npm run build
     ```

2. **Deployment**

   - When you push changes to GitHub, the workflow will copy the files from the `/public/` folder to the `gh-pages` branch.
   - In the repository's Settings > Pages, the source should be set to "Deploy from a branch", and the Branch should be `gh-pages`, with the folder set to `/(root)`.
