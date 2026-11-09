import { Link } from "react-router-dom";
import CursoCard from "../components/CursoCard.jsx";
import { cursos } from "../data.js";

export default function Inicio() {
  return (
    <main>
      <section className="hero">
        <h1>Sua carreira começa onde o horizonte se abre.</h1>
        <p>Cursos de graduação com prática desde o primeiro semestre, professores em atividade no mercado e bolsas para quem quer começar já.</p>
        <div className="botoes">
          <Link className="btn" to="/ingresso">Quero ingressar</Link>
          <Link className="btn sec" to="/cursos">Ver cursos</Link>
        </div>
      </section>
      <section className="secao">
        <h2>Cursos em destaque</h2>
        <div className="grade">
          {cursos.slice(0, 3).map((c) => <CursoCard key={c.nome} {...c} />)}
        </div>
      </section>
      <section className="secao faixa">
        <div><strong>6</strong><span>cursos de graduação</span></div>
        <div><strong>40+</strong><span>laboratórios e salas práticas</span></div>
        <div><strong>30%</strong><span>dos alunos com bolsa</span></div>
      </section>
    </main>
  );
}