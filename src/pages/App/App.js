import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Index } from '../Index/Index';
import { LoginModal } from '../../components/LoginModal/LoginModal';
import { SignupModal } from '../../components/SignupModal/SignupModal';
import Show from '../Show/Show';

export class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <header className={styles.header} data-testid="header">
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <span>img</span>
              <Link to={'/'} className={styles.companyName}>
                Name
              </Link>
            </div>
            <div>
              <ul className={styles.linksContainer}>
                <li>
                  <Link to={'/'}>How It Works</Link>
                </li>
                <li>
                  <SignupModal />
                </li>
                <li>
                  <LoginModal />
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" render={() => <Index />} />
          <Route exact path="/show" component={Show} />
        </Switch>
      </div>
    );
  }
}
