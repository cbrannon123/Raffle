import React from 'react';
import StyledAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../../config/firebase';
import { Link } from 'react-router-dom';
import styles from '../../../pages/App/App.module.css';

const AdminNav = props => {
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
            {props.isSignedIn ? (
              <li>
                <button onClick={() => firebase.auth().signOut()}>
                  Sign Out
                </button>
              </li>
            ) : (
              <StyledAuth
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

export default AdminNav;
