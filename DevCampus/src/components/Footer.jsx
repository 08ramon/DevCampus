import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p><strong>Faculdade Horizonte</strong><br />Av. Tancredo Neves, 1000, Salvador, BA</p>
      <p><Link to="/ingresso">Como entrar</Link> · <Link to="/contato">Fale conosco</Link></p>
      <p className="mini">© 2026 Faculdade Horizonte. Site fictício para atividade acadêmica.</p>
    </footer>
  );
}