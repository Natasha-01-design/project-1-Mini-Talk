# Mini Talk — A Civic Justice Reporting Platform

**Mini Talk** is a web-based platform that allows users to report social injustices. It supports account creation, login, report submission with optional video links, and displays current justice-related news using the NewsData.io API. All reports are stored and retrieved locally using `json-server`.

## Features

- User registration and login
- Submit reports with title, description, and optional video URL
- View all submitted reports
- Real-time news feed from NewsData.io
- Clean, responsive layout using HTML, CSS, and JavaScript

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- [json-server](https://github.com/typicode/json-server) for local REST API
- [NewsData.io](https://newsdata.io/) for justice-related news

## Folder Structure

MiniTalk/
├── index.html
├── style.css
├── index.js
├── db.json

markdown
Copy
Edit

## Getting Started

### Prerequisites

- Node.js and npm
- `json-server` installed globally

```bash
## Running the App Locally

### Step 1: Install json-server

```bash
npm install -g json-server
Step 2: Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/minitalk.git
cd minitalk
Step 3: Start the Mock API Server
bash
Copy
Edit
json-server --watch db.json
Step 4: Launch the App
Open index.html in your browser
Or use Live Server in VS Code

Configuring NewsData API
Sign up for a free API key at newsdata.io

Open index.js and replace the placeholder:

js
Copy
Edit
const apiKey = "YOUR_API_KEY_HERE";
License
This project is licensed under the MIT License.

text
Copy
Edit


Copyright (c) 2025 [Natasha Karwitha]
Author
[Natasha Karwitha]


yaml
Copy
Edit









