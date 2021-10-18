import React from 'react'
import Image from 'next/image'
import styles from './TopNav.module.scss'

function TopNav() {
    return (
        <div className={styles.container}>
            {/* <img src="../../public/icons/hamburger-menu.svg" alt="Menu" /> */}
            {/* <Image src="../../public/icons/hamburger-menu.svg" height={30} width={30} /> */}
            <div style={{height: 30, width: 30, backgroundColor: 'red'}}></div>
            <div style={{height: 30, backgroundColor: 'red'}}>LOGO</div>
            <div className={styles.rightSide}>
                <div style={{height: 30, width: 30, backgroundColor: 'red'}}></div>
                <div style={{height: 30, width: 30, backgroundColor: 'red'}}></div>
            </div>
        </div>
    )
}

export default TopNav
