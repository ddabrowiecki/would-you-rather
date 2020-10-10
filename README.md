# Would You Rather? The Game #

This project is an application built with React and Redux.  It is a functioning game with a mock backend server.  Come test your preferred outcomes against those of your friends in "Would You Rather?"

This serves as the second project for the Udacity React/Redux nanodegree program.

## Starting up

For this project, you must have `npm` installed, as well as its dependencies.  This can be done by running `npm install`.

1. Clone the project repository from GitHub onto your local machine.
2. `cd` to the directory where the project was cloned.
3. Once in that directory, run `npm start`.
4. Now that the server is running, access the project in your browser at `http://localhost:3000`.

## How to play

First you will be asked to login. You will choose to impersonate any of three people: Tyler, Sarah or John.  Once logged in, you will see a home screen of questions to answer.

Due to the existing mocked data, you will have existing questions as well as questions already answered by the person you are impersonating.

If you would like to create a new question, please navigate to that tab at the top of the screen.  Please note: data is not able to be persisted to the mock backend and if you create a question, it will disappear when the app is refreshed.  If you try to access the URL of the formerly created question, you will see an error page.

Top score is determined as the sum of answered and created questions. To view top scorers, please navigate to the Leaderboard.

Finally, if you would like to play the game as another user, feel free to logout and choose a different user from the dropdown.