## Overview
The project aims to create an interactive whiteboard application allowing users to draw or write on a digital canvas. It implements a collaborative whiteboard feature, enabling teamwork among multiple users simultaneously. Additionally, it incorporates dynamic content generation based on the drawing, enhancing the user experience by generating content dynamically in response to the users' interactions with the canvas.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) leveraging Tailwind CSS for styling, along with several modules and APIs including Fal-AI, TLDraw, Excalidraw, and YJS Websockets. The project is built using TypeScript for enhanced type safety.


## Demo
<video src="./videos/Demo.mp4" width="320" height="240" controls></video>


## Getting Started
To get started with the project, follow these steps:<br><br>
**1. Clone the repository**:


```bash
git clone https://github.com/SammedJainDP/MOCKAI_Whiteboard.git

```
**2. Get the Fal-AI API Key**:

- Create an account in [Fal-AI website](https://fal.ai/) by providing your email and password.
- Login to generate a new API Key and copy it. 

**3. Configure API Key**:
- Create a file named .env.local in the root folder of the project.
- Place your Fal-AI API Key inside the .env.local file shown as below:


```bash
FAL_KEY="paste your key here."
```
**4. Run the Project**:
- Open your terminal and navigate to the project folder.
- Run the following command to install project dependencies:

```bash
npm install
```
- Run the following command to run the project based on your OS.


Windows:
```bash
npm run dev:win
```
or
```bash
yarn dev
```
or
```bash
pnpm dev
```
or
```bash
bun dev
```


Open [http://localhost:3000](http://localhost:3000) or the specified URL in the terminal, with your browser to see the result.


## Usage
Upon accessing the URL, users arrive at the landing page presenting a welcoming note and two distinct options: "Live Interact" and "Genius Board".

**Live Interact** :
 Selecting this option directs the user to a form where in the user may either join a room by typing the Room ID or Create a New Room.


- **Home Icon** : Tapping this icon swiftly guides users back to the landing page.

- **Join Room** : This button becomes active only when the Room ID is entered. Clicking it seamlessly redirects users to an interactive whiteboard.

- **Create New Room** : Upon selection, users are instantly led to an interactive whiteboard.

**Interactive Whiteboard** : Furnished with a range of tools, this whiteboard displays the room code previously joined by the user or a freshly generated unique code if initiating a new room. The copy button allows for easy sharing of the room code. An exit button facilitates a swift return to the form.



 **Genius Board** : Opting for this feature guides users to an AI-Powered interactive whiteboard.

- **AI-Powered Whiteboard**: Equipped with an array of tools, this whiteboard integrates advanced AI capabilities. Upon creating content, the AI promptly generates an image adjacent to the canvas. A text input field atop the canvas empowers users to provide descriptions for the AI-generated images.To aid comprehension, a default input is provided, though users have the freedom to input anything they imagine. Additionally, a home button situated above the canvas enables users to seamlessly return to the landing page.

## Acknawledgment
I would like to extend my appreciation to the following sources for the role in enhancing my knowledge and supporting my project:

**YouTube**: For hosting educational content that has contributed in understanding of various concepts.

**Google**: For serving as a vast repository of information and resources that aided in my research and development.

**ChatGPT**: For providing valuable insights and assistance throughout the learning journey.

**GitHub Copilot**: For assisting in coding tasks and providing suggestions during the development process.

I am grateful for the wealth of knowledge and assistance provided by these platforms, which have played a significant role in my project's success.

