import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  ["/", "Início"], ["/sobre", "Sobre"], ["/cursos", "Cursos"],
  ["/ingresso", "Ingresso"], ["/noticias", "Notícias"], ["/contato", "Contato"],
];

export default function Nav() {
  const [aberto, setAberto] = useState(false);
  return (
    <header className="nav">
      <NavLink to="/" className="marca">Horizonte</NavLink>
      <button className="menu-btn" aria-expanded={aberto} onClick={() => setAberto(!aberto)}>
        Menu
      </button>
      <nav className={aberto ? "links aberto" : "links"}>
        {links.map(([to, nome]) => (
          <NavLink key={to} to={to} end={to === "/"} onClick={() => setAberto(false)}>
            {nome}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}