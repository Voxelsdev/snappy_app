class LoginCtrl {
  constructor(loginSvc) {
    this.loginSvc = loginSvc;
  }

  signup(firstname, lastname, email, password) {
    return this.loginSvc.signup(firstname, lastname, email, password);
  }
}

LoginCtrl.$inject = ['loginService'];

export default LoginCtrl;
