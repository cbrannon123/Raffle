import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Index } from '../Index/Index';
import { LoginModal } from '../../components/LoginModal/LoginModal';
import { SignupModal } from '../../components/SignupModal/SignupModal';
import Show from '../Show/Show';
import CreateItem from '../../components/CreateItem/CreateItem';

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
                  <Link to={'/create'}>CreateItem</Link>
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
        <Route exact path="/" render={props => <Index {...props} />} />
        <Route path={'/item/:id'} render={props => <Show {...props} />} />
        <Route path={'/create'} render={props => <CreateItem {...props} />} />
      </div>
    );
  }
}
