class AuthCtrl {
  constructor(authSvc) {
    this.authSvc = authSvc;
  }

  isLoggedIn() {
    return this.authSvc.isLoggedIn();
  }

  login(email, password) {
    return this.authSvc.login(email, password);
  }

  logout() {
    return this.authSvc.logout();
  }
}

AuthCtrl.$inject = ['authService'];

export default AuthCtrl;
