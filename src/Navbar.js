export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        MyPage
      </a>
      <ul>
        <Navlink href="/about">About</Navlink>
        <Navlink href="/blog">Articles</Navlink>
        <Navlink href="/downloads">Downloads</Navlink>
        <Navlink href="/pricing">Pricing</Navlink>
      </ul>
    </nav>
  );
}

function Navlink({ href, children, ...props }) {
  const path = window.location.pathname;
  // If the path is equal to href, set .active class to Navlink Comp
  return (
    <li className={path === href ? "active" : ""}> 
      <a href={href} {...props}>{children}</a>
    </li>
  );
}
