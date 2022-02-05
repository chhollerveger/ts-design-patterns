import * as readline from "readline";
import CheckPermissionMiddleware from "./middlewares/check-permission-middleware";
import CheckUserMiddleware from "./middlewares/check-user-middleware";
import CheckWeakPasswordMiddleware from "./middlewares/check-weak-password-middleware";
import Middleware from "./middlewares/middleware";
import Server from "./servers/server";

const server = new Server();

function setPromptQuestions() {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter your email: ", email => {

    rl.question("Enter your password: ", password => {

      server.logIn(email, password);
      rl.close();

    });

  });

  rl.on("close", () => setPromptQuestions());

}

const middleware: Middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());
middleware.linkWith(new CheckWeakPasswordMiddleware());

server.setMiddleware(middleware);

setPromptQuestions();