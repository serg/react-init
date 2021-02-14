# react-init
A simple starter kit for creating the React JS applications.

## Installation
Install the dependencies and devDependencies:
```
$ cd react-init
$ npm install
```

## Development mode
Start the development server:
```
$ npm start
```
The application will be available at the [`localhost:8080`](http://localhost:8080) link in browser.

## Production mode
To build the application for production use this command:
```
$ npm run build
```
All created files will be available at the `build` folder of project.

## Manual installation
This part about manual installation of packages for project. This is a showcase about how to create project from scratch in case if the `package.json` file doesn't contain any packages.

### Install project dependencies
```
$ npm i -S react react-dom
```

### Install development dependencies
```
$ npm i -D snowpack @snowpack/plugin-sass @snowpack/plugin-react-refresh @snowpack/plugin-webpack clean-webpack-plugin
```

### Install Sublime 3 packages
**This step is optional (no needed if you use another code editor).**
List of packages:
- Babel
- Sass
- Emmet
