import * as chalk from "chalk";
import Middleware from "./middleware";

const WEAK_PASSWORD = "123456";

export default class CheckWeakPasswordMiddleware extends Middleware {

  check(email: string, password: string): boolean {

    if (password === WEAK_PASSWORD) {
      console.log(chalk.yellow("WARNING: Weak password!"));
    }

    return this.checkNext(email, password);

  }
}