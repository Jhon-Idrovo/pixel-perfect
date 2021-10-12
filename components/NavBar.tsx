import './NavBar.module.scss';

import Link from 'next/link';

import Logo from './Logo';

function NavBar() {
  return (
    <nav className="nav">
      <Logo />
      <ol className="nav__list">
        <li className="nav__list-el nav__list-el--history">
          <Link href="">
            <a className="nav__link">1. HISTORY</a>
          </Link>
        </li>
        <li className="nav__list-el nav__list-el--team">
          <Link href="">
            <a className="nav__link">2. TEAM</a>
          </Link>
        </li>
      </ol>
    </nav>
  );
}

export default NavBar;
