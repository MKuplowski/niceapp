import React from 'react';
import styles from '../styles/Header.module.sass';
import Button from './Button';
import  LastChange  from './LastChange';
// import { BsFillArrowLeftSquareFill } from "react-icons/bs";
// <BsFillArrowLeftSquareFill size="2em"/>
const Header = () => {
    return(
        
        <header className={styles.header}>
            <nav>
           
           
            <div className={styles.header__nav}>
                 
               
                <Button type="button"
        variant="primary"
        tabIndex={0}
        role="button">Back</Button>

        <LastChange>
            tu beda updejty itp
        </LastChange>
                <div className={styles.header__nav__end}>
                <Button type="button"
                variant="secondary"
                tabIndex={0}
                role="button">Save as Draft</Button>
                <Button
                type="submit"
                variant="third"
                tabIndex={0}
                role="button">Publish</Button>
                </div>
                
            </div>

        
           
             </nav>

        </header>
    )
}

export default Header