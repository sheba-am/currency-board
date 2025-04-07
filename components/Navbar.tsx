import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" href="/">Flow</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/currencies">Currencies</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
