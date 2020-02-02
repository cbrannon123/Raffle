import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import styles from './App.module.css'
import { SignupForm } from '../../components/SignupForm/SignupForm';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Index } from '../../components/Index/Index';

export const App = () => (
  <div className="App">
    <header className={styles.header} data-testid="header">
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span >img</span>
          <Link to={'/'} className={styles.companyName}>Name</Link>
        </div>
        <div>
          <ul className={styles.linksContainer}>
            <li><Link to={'/login'}>Log In</Link></li>
            <li><Link to={'/signup'}>Sign Up</Link></li>
            <li><Link href="#">How It Works</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
    <Switch>
      {/* <Route exact path='home' component={} /> */}
      <Route exact path='/' component={ Index } />
      <Route exact path='/signup' component={ SignupForm } />
      <Route exact path='/login' component={ LoginForm } />
    </Switch>

  </div>
);


