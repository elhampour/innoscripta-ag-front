# innoscripta-ag-front
# Frontend Take Home Challenge

## Overview

This project enables you to view the news feed from three prominent sources: NewsAPI, The Guardian, and The New York Times. You can run the project either locally using npm or within a Docker container for easy setup.

## Running the Project

You can run the project using one of two methods: locally with npm or using Docker.

---

### Option 1: Running Locally with npm

To run the project locally, follow these steps:

1. **Install the project dependencies**:
   First, make sure you have npm installed on your system. Then, install the required dependencies by running:
   ```bash
   npm install
   ```
   Start the development server: After the dependencies are installed, you can start the development server by running:
   ```bash
   npm run dev
   ```
   Run the project in Visual Studio Code (Optional): Alternatively, if you are using Visual Studio Code, you can open the project in VS Code and press F5 to run the project directly from the IDE.
   
   This will start the project and map the local port 3001 to the container's port 3001. You can access the project at http://localhost:3001.

3. **Option 2: Running with Docker**:
To run the project using Docker, follow these steps:

Build the Docker image: First, build the Docker image using the following command:

```bash
docker build -t website -f .dockerfile .
```

Run the Docker container: Once the image is built, you can run the project inside a Docker container with the following command:

```bash
docker run --name website -d --restart unless-stopped -p 3000:3000 website
```
This will start the project and map the local port 3001 to the container's port 3001. You can access the project at http://localhost:3000.



