import React, {Component} from 'react';

interface State {
  isLoggedIn: boolean;
  user: any;
}

class AuthProvider extends Component<void, State>{
  static checkAuth: any;
  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: null,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.checkAuth();
  }

  login(user: any) {
    this.setState({user});
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    this.setState({user: null});
    localStorage.removeItem('user');
  }

  checkIfLoggedIn(): boolean{
    return this.state.isLoggedIn;
  }


  checkAuth() {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.setState({user: JSON.parse(userString)});
    }
  }

  getUser() {
    return this.state.user;
  }

}

export default new AuthProvider({});                                                                                          

