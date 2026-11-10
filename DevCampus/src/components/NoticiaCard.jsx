export default function NoticiaCard({ data, titulo, texto }) {
  return (
    <article className="card noticia">
      <time>{data}</time>
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </article>
  );
}