import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
	return (
		<div className="navigation">
			<Logo />
			<NavLink to="/">Accueil</NavLink>
			<NavLink to="/a-propos">À propos</NavLink>
		</div>
	);
};

export default Navigation;
