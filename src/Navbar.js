// Using the Link component from react-router-dom to 
// replace all anchor <a href="url"> tags with <Link to="url">
// so we can reload and render only the Navlink components
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        MyPage
      </Link>
      <ul>
        <Navlink to="/about">About</Navlink>
        <Navlink to="/blog">Articles</Navlink>
        <Navlink to="/downloads">Downloads</Navlink>
        <Navlink to="/pricing">Pricing</Navlink>
      </ul>
    </nav>
  );
}
/* When modifying use <Link> instead of <a> make sure to use everywhere "to" instead of "href" */
function Navlink({ to, children, ...props }) {
  const path = window.location.pathname;

  // If the path is equal to href(to), set .active class to Navlink component.
  return (
    <li className={path === to ? "active" : "" }>
      <Link to={to } {...props }>
        {children }
      </Link>
    </li>
  );
}
