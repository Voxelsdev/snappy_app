class AuthCtrl {
  constructor(authSvc) {
    this.authSvc = authSvc;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
  }

  isLoggedOut() {
    console.log(`Logged out: ${this.authSvc.loggedOut}`);
    return this.authSvc.isLoggedOut();
  }

  login() {
    this.authSvc.login(this.email, this.password);
  }

  logout() {
    this.authSvc.logout();
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
