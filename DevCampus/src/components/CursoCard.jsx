export default function CursoCard({ nome, duracao, descricao }) {
  return (
    <article className="card">
      <h3>{nome}</h3>
      <span className="tag">{duracao}</span>
      <p>{descricao}</p>
    </article>
  );
}