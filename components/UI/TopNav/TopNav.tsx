import React from 'react';
import styles from './TopNav.module.scss';

function TopNav() {
	// TODO: Auth context, get firstName, get first letter of name.
	const firstName = 'Paxton';
	const profileLetter = firstName.charAt(0);

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
				<div className={styles.avatar}>{profileLetter}</div>
			</div>
		</div>
	);
}

export default TopNav;
