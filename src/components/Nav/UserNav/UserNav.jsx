import React from 'react';
import StyledAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../../config/firebase';
import { Link } from 'react-router-dom';
import styles from '../../../pages/App/App.module.css';
import '../../Nav/firebaseui-styling.global.css';

const UserNav = props => {
  return (
    <header className={styles.header} data-testid="header">
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to={'/'} className={styles.companyName}>
            Hamburgevons
          </Link>
        </div>
        <div>
          <ul className={styles.linksContainer}>
            {props.isSignedIn ? (
              <li>
                <button onClick={() => firebase.auth().signOut()}>
                  Sign Out
                </button>
              </li>
            ) : (
              <StyledAuth
                className={styles.firebaseUi}
                uiConfig={props.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default UserNav;
