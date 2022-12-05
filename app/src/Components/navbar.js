import * as React from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import { Home, ReportLostItems, SearchFoundItems } from '../pages';

// These are references to styles in layout.module.css
import styles from './layout.module.css'

// Creates navbar component (React component)
const Navbar = () => {
  return (
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <CustomLink to ='/' className={styles.navLinkText}>
              Home
            </CustomLink>
          </li>
          <li className={styles.navLinkItem}>
            <CustomLink to='/search-found-items' className={styles.navLinkText}>
              Search Found Items
            </CustomLink>
          </li>
          <li className={styles.navLinkItem}>
            <CustomLink to='/report-lost-items' className={styles.navLinkText}>
              Report Lost Item
            </CustomLink>
          </li>
          <li className={styles.navLinkItem}>
            <CustomLink to='/admin-reporting' className={styles.navLinkText}>
              Admin Reporting
            </CustomLink>
          </li>
        </ul>
      </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

// Export component
export default Navbar