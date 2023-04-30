# This is our current working project.
  this folder contains everything we need for our project. if you set it up correctly you can get it to work on your local machine.

  our goal is to make this work in a docker container so that all of us can work on it in our own machines.

  ## how to run locally

    first you need to have mysql installed on your computer. you need to set up a connection, a database, and a user for the server to use to access the database.

    you also need to install prisma, aws-sdk presign library, and possibly some other libraries im forgetting.

    you need to have two terminals open. one in the express directory and the other in the react dir. from there do an npm install for both terminals. then on the expres(back end) do a npm run dev and do that same command for the react(front end) as well. your server should be running on localhost:3000.

    after you are done, control c both terminals to end the dev env. you also have to do npx kill-port [portnumber] for whatever ports are in use.