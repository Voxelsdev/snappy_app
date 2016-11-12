class AuthService {
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

  isLoggedIn() {
    return this.loggedIn;
  }

  login(email, password) {
    this.$http.post('/api/token', { email, password }).then(() => {
      this.loggedIn = true;
    })
    .catch((err) => {
      throw err;
    });
  }

  logout() {
    this.$http.delete('/api/token').then(() => {
      this.loggedIn = false;
    })
    .catch((err) => {
      throw err;
    });
  }
}

export default AuthService;
