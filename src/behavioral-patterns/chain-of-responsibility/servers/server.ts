import * as chalk from "chalk";
import Middleware from "../middlewares/middleware";

export default class Server {

  private middleware: Middleware;

  setMiddleware(middleware: Middleware): void {
    this.middleware = middleware;
  }

  logIn(email: string, password: string): boolean {
    if (this.middleware.check(email, password)) {
      console.log(chalk.green("Successfully authorized user!"));
      return true;
    }
    return false;
  }

}