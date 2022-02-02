export default class Token {

  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBldGVyIFBhcmtlciIsImlhdCI6MTUxNjIzOTAyMn0.CmC8fc-iDBCUDtsxLhh9zVR7i_9wQIilFXu0ZtoAON0";

  getToken(): string {
    return this.token;
  }

}