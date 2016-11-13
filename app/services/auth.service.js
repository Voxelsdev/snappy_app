class AuthService {
  constructor($http) {
    this.$http = $http;
    this.loggedOut = !this.$http.get('/api/token')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  }

  isLoggedIn() {
    return this.loggedOut;
  }

  login(email, password) {
    console.log(this.loggedOut);
    this.$http.post('/api/token', { email, password }).then(() => {
      this.loggedOut = false;
    })
    .catch((err) => {
      throw err;
    });
  }

  logout() {
    this.$http.delete('/api/token').then(() => {
      this.loggedOut = true;
    })
    .catch((err) => {
      throw err;
    });
  }

  signup(user) {
    if (!this.loggedOut) {
      this.$http.post('/api/users', user)
      .then(() => {
        this.$http.post('/api/token', { email, password})
        .then(() => {
          // user is now signed up and logged in
          this.loggedOut = false;
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

AuthService.$inject = ['$http', '$state'];

export default AuthService;
