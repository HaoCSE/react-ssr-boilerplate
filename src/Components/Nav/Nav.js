import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import styles from './Nav.css';
import ReactFlagsSelect from 'react-flags-select';
import Flag from 'react-world-flags';
//import css module
// import 'react-flags-select/css/react-flags-select.css';
//OR import sass module
// import 'react-flags-select/scss/react-flags-select.scss';
function Nav({ lang }) {
	return (
		<header className={styles.navigation}>
			<Link to={`/${lang}`} className={styles.logo}>
				<img src={logo} alt="Logo" />
				<span>React SSR Boilerplate</span>
			</Link>
			<ul className={styles.menu}>
				<li>
					<NavLink to={`/${lang}/about`} activeClassName={styles.active}>
						<Flag code="VN" height="16"/>
					</NavLink>
				</li>
				<li>
					<NavLink to={`/${lang}/about`} activeClassName={styles.active}>
						<Flag code="US" height="16"/>
					</NavLink>
				</li>
				<li>
					<NavLink to={`/${lang}/about`} activeClassName={styles.active}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to={`/${lang}/article`} activeClassName={styles.active}>
						Article
					</NavLink>
				</li>
				<li>
					<a href="https://github.com/luangjokaj/react-ssr-boilerplate" target="_blank">
						GitHub
					</a>
				</li>
				
				{
					// <ReactFlagsSelect 
					//  defaultCountry="US" />
				}
			</ul>
		</header>
	);
}

export default Nav;
