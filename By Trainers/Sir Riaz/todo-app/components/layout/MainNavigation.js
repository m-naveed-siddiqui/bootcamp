import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Exercise Tracker</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Todos</Link>
          </li>
          <li>
            <Link href='/new-todo'>Add New Todo</Link>
          </li>
          <li>
            <Link href='/register'>Register</Link>
          </li>
          <li>
            <Link href='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
