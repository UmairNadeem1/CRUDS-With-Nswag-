export class ApiBase {

 jwt = '';
 protected constructor() {
  }
  settoken(token: string) {
    this.jwt = token;
  }

  protected transformOptions(options: any): Promise<any> {
   options.headers = options.headers.append('Authorization', `Bearer ${this.jwt}`);
   return Promise.resolve(options);
  }
}


