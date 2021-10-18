import React from 'react'
import styles from './ClientInfoSummary.module.scss'

function ClientInfoSummary() {
    return (
        <div className={styles.container}>
            <div style={{height: 50, width: 50, backgroundColor: 'red', borderRadius: '50%'}}></div>
            <div className={styles.info}>
                <h3>Site Name</h3>
                <p>Site Address</p>
                <p>Main Contact</p>
            </div>
        </div>
    )
}

export default ClientInfoSummary
