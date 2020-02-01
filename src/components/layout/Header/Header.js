import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
export const Header = () => {
    return (
        <header className={styles.header} data-testid="header">
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <span >img</span>
                    <p className="companyName">Company Name</p>
                </div>
                <div>
                    <ul className={styles.linksContainer}>
                        <li><Link href="#">Log In</Link></li>
                        <li><Link href="#">Sign Up</Link></li>
                        <li><Link href="#">How It Works</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul> 
                </div>
            </nav>
        </header>
    )
};

