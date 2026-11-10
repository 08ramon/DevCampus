import NoticiaCard from "../components/NoticiaCard.jsx";
import { noticias } from "../data.js";

export default function Noticias() {
  return (
    <main className="secao">
      <h1>Notícias do campus</h1>
      <p className="lead">Eventos, avisos e novidades.</p>
      <div className="grade">
        {noticias.map((n) => <NoticiaCard key={n.titulo} {...n} />)}
      </div>
    </main>
  );
}