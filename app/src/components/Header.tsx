// src/components/Header.tsx

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">
          <span role="img" aria-label="patte">
            🐾
          </span>
          <span>
            <strong>Ada</strong>
            <span style={{ color: "#ff6d38" }}>opte</span>
          </span>
        </a>
        <nav className="nav" aria-label="Navigation principale">
          <a href="/">Accueil</a>
          <a href="/Adoption">J'adopte</a>
          <a href="/guide">Guide de l'adoption</a>
          <a href="/benevole">Devenir bénévole</a>
        </nav>
      </div>
    </header>
  );
}
