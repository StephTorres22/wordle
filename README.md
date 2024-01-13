My first attempt at creating a Wordle like word game/wordle clone, using MongoDB as my database to store a word for the user to guess each day, ensuring only one word per day and that it will be the same for any one who plays, hopefully. 
Other technologies used are NodeJS for the backend, using Express and Mongoose, and React for the frontend.

Please ensure Node, and npm are installed on machine before use.

wordle_server contains backend logic: - run "npm install" to install relevant dependencies.
                                      - run "npm run start" to start server. "ctrl + c" to quit.
                                      - run "npm run dev" to start up in development with hot reloading.

server is currently not deployed, it's running on localhost 8000.

word_clone contains the frontend: - run "npm install" to install all the relevant dependencies.
                                  - run "npm run build" to build the project
                                  - run "npm run dev" to start up in development with reloading. localhost 5173, "q" to quit
                                  - run "npm run preview" followed by "o" to open preview on localhost 4173, "q" to quit

build the server first, and then build react app.



STILL TO DO:

- Ensure user input is a valid word, deny attempt if it isn't.

- Ensure only letters can be passed into input fields, no numbers or special characters, regex match?

- Win conditions, what happens on win and loss... 
                                                 Ties in with persistence, stats page/modal.
                                                 On failure show actual word.
                                                 

- Persistence: Keep track of user attempts and remaining number of attempts 
               Keep score, successful days, how many attempts, percentage win vs losses, local storage? or create users and store, retrieve, update etc in Mongo. cookies?
               

- Keyboard graphic, click listeners on keys that interact with inputs, change colour depending if letter has been used and if letter is present/correct position.
                    different layouts for different countries or keep it as QWERTY?


