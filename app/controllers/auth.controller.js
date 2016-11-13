class AuthCtrl {
  constructor(authSvc) {
    this.authSvc = authSvc;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }

  isLoggedIn() {
    return this.authSvc.isLoggedIn();
  }

  login() {
    return this.authSvc.login(this.email, this.password);
  }

  logout() {
    return this.authSvc.logout();
  }

  signup() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    };

    this.authSvc.signup(user);
  }
}

AuthCtrl.$inject = ['authService'];

export default AuthCtrl;
