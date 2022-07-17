export default function Navbar() {
  return <nav className="nav">
    <a href="/" className="site-title">MyPage</a>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/blog">Articles</a>
      </li>
      <li>
        <a href="/downloads">Downloads</a>
      </li>
      <li>
        <a href="/pricing">Pricing</a>
      </li>
    </ul>
  </nav>
}