class SignupService {
  constructor($http) {
    this.$http = $http;
    this.loggedIn = !this.$http.get('/api/token')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  }

  signup(firstname, lastname, email, password) {
    if (!this.loggedIn) {
      const user = { firstname, lastname, email, password };
      this.$hhtp.post('/api/users', user)
      .then((res) => {
        this.$http.post('/api/token', { email, password})
        .then(() => {
          // user is now created and logged in.
          // return 1;
        })
        .catch((err) => {
          console.error(err);
          return err;
        });
      })
      .catch((err) => {
        console.error(err);
        return err;
      });
    }
  }
}

export default SignupService;
