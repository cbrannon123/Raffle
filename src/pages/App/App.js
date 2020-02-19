import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import styles from './App.module.css';
import { Index } from '../Index/Index';
import Show from '../Show/Show';
import CreateItem from '../../components/CreateItem/CreateItem';
import EditItem from '../EditItem/EditItem';
import firebase from '../../config/firebase';
import StyledAuth from 'react-firebaseui/StyledFirebaseAuth';

export class App extends Component {
  state = {
    isSignedIn: false,
    admin: false
  
  };

  

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };
  
  
  userNav = () => {
    return (
      <header className={styles.header} data-testid="header">
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.img}>img</span>
          <Link to={'/'} className={styles.companyName}>
            Name
          </Link>
        </div>
        <div>
          <ul className={styles.linksContainer}>
            {this.state.isSignedIn ? (
              <li>
                <button onClick={() => firebase.auth().signOut()}>
                  Sign Out
                </button>
              </li>
            ) : (
              <StyledAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          </ul>
        </div>
      </nav>
    </header>
    )
  }

  adminNav = () => {
    return (
      <header className={styles.header} data-testid="header">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span className={styles.img}>img</span>
            <Link to={'/'} className={styles.companyName}>
              Name
            </Link>
          </div>
          <div>
            <ul className={styles.linksContainer}>
              <li>
                <Link to={'/create'}>CreateItem</Link>
              </li>
              {this.state.isSignedIn ? (
                <li>
                  <button onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </button>
                </li>
              ) : (
                <StyledAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />
              )}
            </ul>
          </div>
        </nav>
      </header>
    );
  };

  componentDidMount = () => {
    
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdTokenResult().then((id) => {
          this.setState({
            isSignedIn: !!user,
            admin: id.claims.admin
          });
        });
      } else {
        this.setState({
        
          isSignedIn: !!user,
          admin: false
       
       
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
       {this.state.admin ?
            this.adminNav()
            :
            this.userNav()
      
        })} 

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
