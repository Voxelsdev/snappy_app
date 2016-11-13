class SignupCtrl {
  constructor(signupSvc) {
    this.signupSvc = signupSvc;
  }

  signup(firstname, lastname, email, password) {
    return this.signupSvc.signup(firstname, lastname, email, password);
  }
}

LoginCtrl.$inject = ['signupService'];

export default SignupCtrl;
