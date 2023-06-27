function Header(props) {
  return (
    <header>
      <h1>First header</h1>
      <h2>Second header</h2>
      <Nav />
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </nav>
  );
}

export default Header;
