import * as chalk from "chalk";
import FakeDatabase from "../servers/fake-database";
import Middleware from "./middleware";


export default class CheckUserMiddleware extends Middleware {

  check(email: string, password: string): boolean {

    if (!email.includes("@")) {
      console.log(chalk.red("ERROR: Invalid email!"));
      return false;
    }

    if (!FakeDatabase.filter(item => item.email === email && item.password === password).length) {
      console.log(chalk.red("ERROR: Invalid email or password!"));
      return false;
    }

    return this.checkNext(email, password);

  }
}