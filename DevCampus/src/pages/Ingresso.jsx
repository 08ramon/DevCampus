const formas = [
  { titulo: "Vestibular", texto: "Prova online ou presencial, com inscrição gratuita. Redação e 30 questões objetivas." },
  { titulo: "Transferência", texto: "Já cursa outra faculdade? Aproveitamos suas disciplinas com análise do histórico escolar." },
  { titulo: "Bolsas", texto: "Bolsas de 20% a 100% por desempenho no Enem, renda familiar ou mérito esportivo." },
];

export default function Ingresso() {
  return (
    <main className="secao">
      <h1>Formas de ingresso</h1>
      <p className="lead">Há mais de um caminho para estudar na Horizonte.</p>
      <div className="grade">
        {formas.map((f) => (
          <article className="card" key={f.titulo}>
            <h3>{f.titulo}</h3>
            <p>{f.texto}</p>
          </article>
        ))}
      </div>
    </main>
  );
}