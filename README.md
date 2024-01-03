My first attempt at creating a Wordle like word game/wordle clone, using MongoDB as my database to store a word for the user to guess each day, ensuring only one word per day and that it will be the same for any one who plays, hopefully. 
Other technologies used are NodeJS for the backend, using Express and Mongoose, and React for the frontend.

Please ensure Node, and npm are installed on machine before use.

wordle_server contains backend logic: - run "npm install" to install relevant dependencies.
                                      - run "npm run start" to start server.
                                      - run "npm run dev" to start up in development with hot reloading.

server is currently not deployed, it's running on localhost 8000.

word_clone contains the frontend: - run "npm install" to install all the relevant dependencies.
                                  - run "npm run build" to build the project
                                  - run "npm run dev" to start up in development with reloading. localhost 5173, "q" to quit
                                  - run "npm run preview" followed by "o" to open preview on localhost 4173, "q" to quit

build the server first, and then build react app.

