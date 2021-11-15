import {Component} from 'react';



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
    try {
      this.setState({user});
      const serializedState = JSON.stringify(user);
      localStorage.setItem('user', serializedState);
   } catch (err) {
      // die silently
   }
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
      this.setState({isLoggedIn: true});
    }
    else{
      this.setState({user: null});
    }
  }

  getUser() {
    return this.state.user;
  }

}

export default new AuthProvider({});                                                                                          

