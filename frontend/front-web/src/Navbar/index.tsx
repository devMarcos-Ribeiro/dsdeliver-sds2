import './styles.css';
import { ReactComponent as Logo } from '../assets/logo-ds-deliver.svg';

function Navbar() {
  return (
    <nav className="main-navbar">
      <Logo />
      <a href="home" className="logo-text">DS Deliver</a>
    </nav>
  );
}

export default Navbar;