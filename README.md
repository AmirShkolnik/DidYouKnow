![Jungle Quiz Logo](doc/readme-images/Jungel-Quiz-Logo.png)

Welcome To The Jungle Quiz!
---------------------------

Embark on an exhilarating journey into the heart of the jungle with our Jungle Quiz!

Test your knowledge and explore the mysteries of the jungle with 5 captivating questions randomly selected from our extensive database of 20 intriguing queries.

With each question, challenge yourself to uncover the secrets of the jungle while immersing yourself in the wonders of nature.

Don't worry if you're not sure - take your best guess and click on an answer. Correct answers will shine in yellow following the text "The Answer Is:", while incorrect ones will stand out in red.

Your score will be revealed instantly, and in just 2 seconds, you'll move on to the next question. At the conclusion of your jungle adventure, receive feedback tailored to your performance. 

Are you ready to answer the call of the wild and conquer the Jungle Quiz?

The live link can be found here - [Jungle Quiz](https://amirshkolnik.github.io/JungleQuiz/)

![Jungle Quiz](doc/readme-images/amiresponsive.png)

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Layout](#layout)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [Welcome](#welcome)
  * [Rules](#rules)
  * [Quiz](#quiz)
  * [Score](#score)
  * [Future Implementations](#future-implementations)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)
  * [Validator Testing](#validator-testing)
    * [HTML](#html)
    * [CSS](#css)
    * [Javascript](#javascript)
  * [Accessibility](#accessibility)
  * [Buttons Testing](#buttons-testing)
  * [Quiz Testing](#quiz-testing)
  * [Responsiveness](#responsiveness)
  * [Browser Testing](browser-testing)
  * [Device Testing](#device-testing)

* [Bugs](#bugs)
  * [Solved Bugs](#solved-bugs)
  * [Known Bugs](#known-bugs)
  
* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

User Experience (UX)
-----------------------

### User Stories

### First Time Visitor Goals

- I want to participate in an online quiz about the jungle and enhance my general knowledge.
- I want the ability to play the quiz anytime, anywhere.
- I want the website to adjust to my device's screen size.
- I want the website to be easy to navigate.
- I want to view my score to gauge my knowledge level.

### Returning Visitor Goals

- I want to expand my understanding of the jungle.
- I want to encounter new questions to test my knowledge.
- I want to explore various aspects of jungle life, such as plants, trees, animals, rivers, climate, and more.
- I want to achieve high scores to track my progress.

---

Design
------

### Color Scheme

I used the [Jungle Color Palette](https://www.color-hex.com/color-palette/84872) from the website color-hex made by [Chad_torino](https://www.color-hex.com/member/chad_torino) and the color red (#ff0000).

- I've used #e9ed60 & #422f25 as the primary and secondary colors for the site's text.

- I've used #422f25 as the overlay on the site's background image.

- I've used #e9ed60 & #be945b for borders on buttons, questions, answers, and the quiz area.

- I've used #52843c to show buttons.

- I've used #e9ed60 for button hover effects.

- I've used #ff0000 to indicate wrong answers.

- I've used #e9ed60 to highlight the correct answer.


![J U N G L E Color Palette](/doc/readme-images/color-palette.png)

### Typography

[Google Fonts](https://fonts.google.com/) was used to import the chosen fonts for use in the site.

I chose the [Lemon Google Fonts](https://fonts.google.com/specimen/Lemon?query=lemon&sort=alpha) for the site's font because it's a personal preference of mine. I find that the font has a visually appealing appearance that I personally enjoy. Additionally, it's easy to read, which is important for a quiz-style website where users need to quickly comprehend the text.

Furthermore, I believe that the Lemon font fits perfectly with the style and aesthetic of the quiz. Its clean and modern look adds a touch of sophistication while still maintaining a playful vibe, which aligns well with the overall theme of the quiz. Overall, I selected the Lemon Google Fonts because I found it aesthetically pleasing, easy to read, and fitting for the style and tone of the quiz.

Sans Serif is used as a backup font, in case for any reason the [Lemon](https://fonts.google.com/specimen/Lemon?query=lemon&sort=alpha) font isn't being imported into the site correctly.

![Lemon](doc/readme-images/Lemon.png)

### Imagery

I chose a jungle background for the website because of its thematic relevance to the website's title, 'Jungle Quiz.'

By incorporating an image of a jungle as the page background, I aimed to immerse the user in the atmosphere of a jungle environment, creating an engaging and immersive experience. 

This choice is intended to evoke the sense of adventure and exploration that one might associate with a jungle setting, enhancing the overall theme and appeal of the Jungle Quiz website. 

Ultimately, the jungle background serves to enhance the user's participation in the quiz, making them feel as though they are embarking on a thrilling journey through the heart of the jungle.

![Jungle](doc/readme-images/Jungle.png)

### Layout

The site is a single page with 4 steps/sections:
  - Welcome area
  - Rules area
  - Quiz area
  - Feedback and score area

### Wireframes

The wireframe shows designs for iPad/tablet and desktop displays, but the finished site is responsive to all devices.

#### 1. Welcome To The Jungle Quiz:

![Home Page](/doc/readme-images/Welcome.png)

#### 2. Follow The Rules:

![Rules](/doc/readme-images/Rules.png)

#### 3. Quiz Questions:

![Questions](/doc/readme-images/Questions.png)

#### 4. Score:

![Score](/doc/readme-images/Score.png)


Features
--------

![All Pages](doc/readme-images/amiresponsive-mix.png)

### Welcome

I chose the quiz features based on their simplicity and user-friendliness. 

The landing page of the website has a straightforward layout, featuring a prominent H1 heading that clearly states the name of the quiz. 

Additionally, there are two large and colorful interactive buttons, making it easy for users to navigate and select their desired option. 

- Rules
- Start

By providing users with only two options to choose from, we aim to streamline the decision-making process, ensuring a hassle-free and enjoyable experience for all users.

![Welcome Page](doc/readme-images/welcome.jpg)

### Rules

If the user clicks the 'Rules' button, the instructions section will appear, allowing them to read the main rules of the quiz. Pressing the back button will return them to the welcome area.

![Rules](doc/readme-images/rules.png)

### Quiz

#### Questions and Answers

If the user clicks the 'Start' button, the first question will appear. The user will then encounter 5 captivating questions randomly chosen from a database of 20 intriguing queries. 

![Score](doc/readme-images/shuffle2.jpg)

Upon selecting an answer, correct responses will shine in yellow following the text "The Answer Is:", while incorrect ones will be highlighted in red. 

![Questions and Answers](doc/readme-images/questions-and-answers.jpg)

The score will be promptly revealed, and within 2 seconds, the user will proceed to the next question.

![Questions and Answers](doc/readme-images/score3.jpg)
### Score

#### Score and Feedback

- After answering 5 questions, the user will be directed to the results page. Here, they will see their score and receive brief feedback. The feedback will vary depending on the user's results.

- The user will be presented with two options:
  - Home
  - Play Again

![Score](doc/readme-images/feedback.jpg)

### Future Implementations

- User can create a username and track his score.
- Shuffling the answer buttons.
- Generating questions across various subjects so that users can choose the area they wish to test their knowledge in.
- Establishing difficulty levels according to a timer.
- Background images and sounds will change according to the questions.
- Email JS to signup to newsletter.
- Ability to play sounds.

Technologies Used
-----------------

### Languages Used

This website was created using the following languages:

- JavaScript
- HTML5
- CSS

### Frameworks, Libraries & Programs Used

- [Am I Responsive](https://ui.dev/amiresponsive?url=https://amirshkolnik.github.io/JungleQuiz/) To show the website image on a range of devices.

- [Responsinator](http://www.responsinator.com/?url=amirshkolnik.github.io%2FJungleQuiz) To show the website image on a range of devices.

- [Affinity Photo](https://affinity.serif.com/en-gb/photo/) Photo editor software.

- [Balsamiq](https://balsamiq.com/) - Used to create wireframes.

- [Github](https://github.com/) - To save and store the files for the website.

- [GitPod](https://gitpod.io/) - IDE used to create the site.

- [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

- [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.

- [TinyPNG](https://tinypng.com/) To compress images

- [Birme](https://www.birme.net/) To resize images and convert to webp format.

- [Favicon Creator](https://realfavicongenerator.net/) To create favicon.

- [Webpage Spell-Check](https://chrome.google.com/webstore/detail/webpage-spell-check/mgdhaoimpabdhmacaclbbjddhngchjik/related) - a google chrome extension that allows you to spell check your webpage. Used to check the site and the readme for spelling errors.


Deployment & Local Development
------------------------------

### Deployment

The site was deployed using GitHub pages. The steps to deploy using GitHub pages are:

1. Go to the repository on GitHub.com.
2. Select 'Settings' near the top of the page.
3. Select 'Pages' from the menu bar on the left of the page.
4. Under 'Source' select the 'Branch' dropdown menu and select the main branch.
5. Once selected, click the 'Save'.
6. Deployment should be confirmed by a message on a green background saying "Your site is published at" followed by the web address.

The live link can be found here - [Jungle Quiz](https://amirshkolnik.github.io/JungleQuiz/).

### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project - [Jungle Quiz](https://github.com/AmirShkolnik/JungleQuiz).
3. Click the Fork button in the top right corner.

### How to Clone

To clone this repository follow the below steps: 

1. Locate the repository at this link [Jungle Quiz Repository](https://github.com/AmirShkolnik/JungleQuiz). 
2. Under **'Code'**, see the different cloning options, HTTPS, SSH, and GitHub CLI. Click the prefered cloning option, and then copy the link provided. 
3. Open **Terminal**.
4. In Terminal, change the current working directory to the desired location of the cloned directory.
5. Type **'git clone'**, and then paste the URL copied from GitHub earlier. 
6. Type **'Enter'** to create the local clone. 

## Testing

### Validator Testing
### HTML
  - No errors were returned when passing through the official W3C Markup Validator
        - [Jungle Quiz - W3C Validator Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Famirshkolnik.github.io%2FJungleQuiz%2F)

      ![Jungle Quiz - W3C Validator Results](doc/readme-images/HTML-checker.png)

### CSS
  - No errors were found when passing through the official W3C CSS Validator 
        - [Jungle Quiz - W3C CSS Validator Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Famirshkolnik.github.io%2FJungleQuiz%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)

      ![Jungle Quiz - W3C CSS Validator Results](doc/readme-images/CSS-Validering.png)


### Javascript

[JSHint Validator](https://jshint.com/) 

- ### Test results for questions.js
  ![JSHint Validator Results](doc/readme-images/JSHint-questions.png)

- ### Test results for script.js
  ![JSHint Validator Results](doc/readme-images/JSHint-script.png)

Accessibility
-------------

### Accessibility

The website attained a Lighthouse accessibility score of 100% on both mobile and desktop, affirming that the selected colors and fonts are easily readable and accessible.

- ### Lighthouse Score For PC

[Lighthouse Score For Mobile](https://pagespeed.web.dev/analysis/https-amirshkolnik-github-io-JungleQuiz/o5sdsclq4r?form_factor=desktop)

![Lighthouse Score For PC](doc/readme-images/lighthouse-pc.png)

- ### Lighthouse Score For Mobile

[Lighthouse Score For Mobile](https://pagespeed.web.dev/analysis/https-amirshkolnik-github-io-JungleQuiz/o5sdsclq4r?form_factor=mobile)

![Lighthouse Score For Mobile](doc/readme-images/lighthouse-mobile.png)

### Buttons Testing

- I verified all the navigation buttons to ensure they direct users to the correct sections of the website.
- I conducted manual testing on each button to guarantee users can navigate the quiz correctly.
- I manually tested the answers to confirm that the scoring displays the accurate result.
- I manually verified that the correct and incorrect answers are displayed with the appropriate colors and effects.
- I tested the score and feedback section to ensure that upon completing the quiz, users are directed to the final page and presented with the correct result along with the appropriate feedback.

### Quiz Testing

The quiz was thoroughly tested by friends and family to ensure everything functioned as intended, including the following:

- Questions were shuffled.
- No question appeared twice in the same quiz.
- The quiz displayed a different selection of questions each time it was played.
- The quiz concluded after all 5 questions were answered.
- The score was accurately tallied and ceased when the quiz ended.
- Correct answers were highlighted in yellow, while incorrect ones were distinguished in red.
- The correct final score was displayed once the quiz concluded.
- Appropriate feedback was presented at the end of the quiz.
- Buttons effects operated as expected.
- The 2-second function is functioning correctly; the user moves on to the next question 2 seconds after clicking the answer button

### Browser Testing

I checked the website on Google Chrome, Firefox, Microsoft Edge, opera and Safari browsers and everything was fine with no problems.

### Responsiveness

- I also tried the website on the following websites to test its responsiveness:

    - [Responsinator](http://www.responsinator.com/?url=amirshkolnik.github.io%2FJungleQuiz)
    - [Am I Responsive](https://ui.dev/amiresponsive?url=https://amirshkolnik.github.io/JungleQuiz/)
    
### Device Testing
I checked and tested the website on various devices such as desktops, laptops, and mobiles to ensure the quiz functions well on different screen sizes.

#### Laptop and Desktop:
- The website is responsive as planned, and the quiz is working as expected.

#### Android Mobiles:
- The website was tested on Samsung S9, S21, and 14A. It is responsive as planned, and the quiz is working as it should.

#### iPhone Devices:
- The website was tested on iPhone 10 and 14 Pro. While it is responsive as planned, the quiz is not functioning as expected. 

Bugs
----

### Solved Bugs

- When testing the JavaScript code for the first time, [JSHint Validator](https://jshint.com/) returned a few crucial errors because semicolons were missing in a couple of lines.

After fixing all the errors, JSHint returned 23 warnings regarding ES6. 

For example, 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use 'moz').

At this juncture, I lack the knowledge on how to resolve this issue/warnings.

- I implemented an onclick() event in the buttons on the index.html page, resolving it by using the getElementById method.

### Known Bugs

- For an unknown reason, a random answer is being highlighted in yellow before the user even selects an answer. This bug must be resolved so iPhone users can enjoy the quiz too.

![iPhone Devices](doc/readme-images/iphone.jpg)

Credits and Resources Used
-----------------------------

Great websites for general knowledge, training, and practical solutions.

- [W3Schools](https://www.w3schools.com/) 
- [Stack Overflow](https://stackoverflow.com/)
- [JSchallenger](https://www.jschallenger.com/)

The following article was very helpful in understanding shuffling and the Fisher–Yates shuffle algorithm.
- [Wikipedia](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

The following article was very helpful in understanding events.

- [Java Script](https://javascript.info/bubbling-and-capturing) 

### Youtube Channels

- [Programming with Mosh](https://www.youtube.com/watch?v=W6NZfCO5SIk) - JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour.

- [SuperSimpleDev](https://www.youtube.com/watch?v=SBmSRK3feww) - JavaScript Full Course - Beginner to Pro.

- [Telusko](https://www.youtube.com/watch?v=uDwSnnhl1Ng&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV) - JavaScript Tutorial.

- [Code Institute](https://www.youtube.com/watch?v=ZH-w2Ht4jqU&t=29s) - Community Q&A: PP2 Project FAQ's

### Color scheme

- [J U N G L E Color Palette](https://www.color-hex.com/color-palette/84872) - I used the jungle color palette from the website color-hex made by [Chad_torino](https://www.color-hex.com/member/chad_torino)

### Code Used

- The basic code for building the quiz was inspired by the following tutorial which I then adapted for my own Jungle Quiz. - [How To Make Quiz App Using JavaScript](https://www.youtube.com/watch?v=PBcqGxrr9g8) by GreatStack.

- I used the Fisher Yates Shuffle in order to shuffle the questions and answer from a 20 questions database which I learned about in this tutorial - [Shuffle an array](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array).

### Content

I gathered questions from various websites and utilized ChatGPT to both compose and revise some of them.

- [howstuffworks.com](https://play.howstuffworks.com/quiz/how-much-do-you-know-animals-that-live-the-jungle) - How Much Do You Know About Animals That Live in the Jungle by Annette.
- [beano.com](https://www.beano.com/posts/the-ultimate-jungle-quiz) - The Ultimate Jungle Quiz
Find out if you're the king of jungle trivia by Beano Quiz Team.
- [welovequizzes.com](https://www.beano.com/posts/the-ultimate-jungle-quiz) - 26 Jungle Quiz Questions And Answers: Dense by We Love Quizzes.
- [wanderlustchloe.com](https://www.wanderlustchloe.com/animal-trivia-questions/) - 50 Animal Trivia Questions + Animal Picture Round.
- [funtrivia.com](https://www.funtrivia.com/trivia-quiz/ForChildren/Animals-of-the-Jungle-392709.html) - Animals of the Jungle Trivia Quiz by AlexT781.

### Media

I used images, vectors, and illustrations from the following websites with thanks to the amazing photographers who created them.:

#### Pexels

- Background Image - [Alex Qian](https://www.pexels.com/sv-se/foto/landskap-natur-vatten-trad-2304796/)

#### Pixabay

- Favicon - Question Mark - [PClker-Free-Vector-Images](https://pixabay.com/sv/vectors/fr%C3%A5ga-m%C3%A4rke-knapp-tecken-symbol-24851/)
  
Acknowledgments
---------------

- My mentor, Antonio Rodriguez, for his support and guidance.

- Thank you to the Code Institute Slack community for their quick responses and helpful feedback!