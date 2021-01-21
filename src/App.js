import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // We get a userAuth back
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // If userAuth object exists as userAuth could be null (signing out)
      if (userAuth) {
        // We get a userRef back from the function
        const userRef = await createUserProfileDocument(userAuth);

        // Get the data related to the user by using the .data() method
        // Below listens to any changes on user
        userRef.onSnapshot((snapShot) => {
          // setState has a chance of not fully finished being call as it is async
          // To fix this, we set a 2nd parameter (which is a function)
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        // userAuth is null in this case, whenever the user signs out
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
