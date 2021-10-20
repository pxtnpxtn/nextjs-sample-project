import React from 'react';
import { useAuth } from '../../../context/auth.context';
import styles from './TopNav.module.scss';

function TopNav() {
	const { profile } = useAuth();
	const firstNameLetter = profile.givenName.charAt(0);

	return (
		<div className={styles.container}>
			<div className={styles.leftSide}>
				<img src="/icons/hamburger-menu.svg" alt="Menu" height={25} />
			</div>
			<img src="/logo.svg" alt="SiteSec logo" height={30} />
			<div className={styles.rightSide}>
				<img
					src="/icons/app-grid.svg"
					alt="View more apps"
					height={30}
				/>
				<div className={styles.avatar}>{firstNameLetter}</div>
			</div>
		</div>
	);
}

export default TopNav;
