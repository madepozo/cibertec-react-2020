import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../actions/authActions';

const Header = () => {
	const isLoggedIn = useSelector(state => state.isLoggedIn);
	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const logout = () => {
		localStorage.clear();

		dispatch({
			type: LOGOUT
		});
	};

	return (
		<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item">
					Admin
				</a>

				<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-end">
					<div className="navbar-item">
						{ isLoggedIn ? (
							<span>
								({user.name})
								<button className="button is-small is-success ml-4" onClick={logout}>
									cerrar sesión
								</button>
							</span>
						) : null}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
