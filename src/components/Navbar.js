import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
	// setTimeout(() => {
	// 	props.history.push('/about')
	// }, 2000);
	return (
		<nav className='nav-wrapper blue darken-3'>
			<div className='container'>
				<span className='logo'>TODOLIST</span>
				<ul className='right'>
					<li>
						<Link to='/'>HOME</Link>
					</li>
					<li>
						<Link to='/about'>ABOUT</Link>
					</li>
					<li>
						<Link to='/contact'>CONTACT</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
