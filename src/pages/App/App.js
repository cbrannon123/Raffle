// <Container>
//   <Navbar expand="lg" variant="light" bg="light">
//     <Navbar.Brand href="#">Navbar</Navbar.Brand>
//   </Navbar>
// </Container>
import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import { Index } from '../Index/Index';
import { LoginModal } from '../../components/LoginModal/LoginModal';
import { SignupModal } from '../../components/SignupModal/SignupModal';
import Create from '../../components/CreateItem/CreateItem';
import Show from '../Show/Show'

export const App = () => (
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
              <Link to={'/create'}>Create</Link>
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
      <Route exact path="/" component={Index} />
      <Route exact path="/show" component={Show} />
      <Route exact path="/create" component={Create} />
    </Switch>
  </div>
);
