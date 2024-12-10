Text-to-Speech Application Using React-Speech-Kit
This React application allows users to convert text to speech using the react-speech-kit. It provides an interactive UI to input text and listen to it being read aloud.

Features
Text-to-Speech: Converts user input text into speech using the react-speech-kit library.
Customizable Voice Options: Select from available voices supported by the browser.
Adjustable Rate and Pitch: Users can modify the speed and pitch of the speech.
Simple and User-Friendly Interface: Easy-to-use interface for entering text and controlling speech parameters.
Prerequisites
Before you begin, ensure that you have the following installed:

Node.js (with npm)
React (with react-speech-kit dependency)
Installation
1. Clone the Repository
Start by cloning the repository to your local machine:

bash
Copy code
git clone https://github.com/ullas-kiran/text-to-speech-app.git
cd text-to-speech-app
2. Install Dependencies
Once you've cloned the repository, run the following command to install all the required dependencies:

bash
Copy code
npm install
3. Start the Application
After installing the dependencies, you can start the development server:

bash
Copy code
npm start
The application will run on http://localhost:3000 by default. Open this URL in your browser to start using the app.

Usage
Enter Text: Type the text you want to be read aloud in the text input field.
Select Voice: Choose from the available voices in the dropdown.
Adjust Speech Parameters: Use the sliders to adjust the rate (speed) and pitch of the speech.
Click 'Speak': Press the "Speak" button to hear the text read aloud.
Technologies Used
React: A JavaScript library for building user interfaces.
react-speech-kit: A React-specific library to add speech synthesis capabilities.
Web Speech API: Provides support for text-to-speech functionality in browsers.
Contributing
If you have any suggestions for improvements or want to contribute new features, feel free to fork this repository and submit pull requests. You can also open issues if you encounter any bugs or have questions.