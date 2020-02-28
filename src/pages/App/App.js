import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from '../../config/firebase';
import AdminNav from '../../components/Nav/AdminNav/AdminNav';
import UserNav from '../../components/Nav/UserNav/UserNav';
import Index from '../Index/Index';
import Show from '../Show/Show';
import CreateItem from '../CreateItem/CreateItem';
import EditItem from '../EditItem/EditItem';
import styles from './App.module.css';

export class App extends Component {
  state = {
    isSignedIn: false,
    admin: false,
  };

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  componentDidMount = () => {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdTokenResult().then(id => {
          console.log(id.claims);
          this.setState({
            isSignedIn: !!user,
            admin: id.claims.admin,
          });
        });
      } else {
        this.setState({
          isSignedIn: !!user,
          admin: false,
        });
      }
    });
  };

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <div className="App">
        {this.state.admin ? (
          <AdminNav
            uiConfig={this.uiConfig}
            isSignedIn={this.state.isSignedIn}
          />
        ) : (
          <UserNav
            uiConfig={this.uiConfig}
            isSignedIn={this.state.isSignedIn}
          />
        )}
        <Route exact path="/" render={props => <Index {...props} />} />
        <Route
          path={'/item/:id'}
          render={props =>
            firebase.auth().currentUser ? (
              <Show isAdmin={this.state.admin} {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route path={'/create'} render={props => <CreateItem {...props} />} />
        <Route path={'/edit/:id'} render={props => <EditItem {...props} />} />
      </div>
    );
  }
}
