import * as chalk from "chalk";
import FakeDatabase from "../servers/fake-database";
import PermissionType from "../servers/permission-type";
import Middleware from "./middleware";


export default class CheckPermissionMiddleware extends Middleware {

  check(email: string, password: string): boolean {

    const [user] = FakeDatabase.filter(item => item.email === email);

    if (!user) {
      console.log(chalk.red("ERROR: Email not registered!"));
      return false;
    }

    if (user.permission === PermissionType.ADMIN) {
      console.log(chalk.blue("Welcome admin!"));
      return true;
    }

    console.log(chalk.blue("Welcome user!"));

    return this.checkNext(email, password);

  }
}