import CursoCard from "../components/CursoCard.jsx";
import { cursos } from "../data.js";

export default function Cursos() {
  return (
    <main className="secao">
      <h1>Cursos de graduação</h1>
      <p className="lead">Escolha o curso e veja a duração e o que você vai estudar.</p>
      <div className="grade">
        {cursos.map((c) => <CursoCard key={c.nome} {...c} />)}
      </div>
    </main>
  );
}