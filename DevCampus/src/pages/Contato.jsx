import { useState } from "react";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);
  return (
    <main className="secao contato">
      <div>
        <h1>Fale conosco</h1>
        <p><strong>Endereço</strong><br />Av. Tancredo Neves, 1000, Salvador, BA</p>
        <p><strong>Telefone</strong><br />(71) 3000-0000</p>
        <p><strong>E-mail</strong><br />contato@horizonte.edu.br</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}>
        <label>Nome<input type="text" required /></label>
        <label>E-mail<input type="email" required /></label>
        <label>Mensagem<textarea rows="5" required /></label>
        <button className="btn" type="submit">Enviar mensagem</button>
        {enviado && <p role="status" className="ok">Mensagem enviada. Responderemos em até 2 dias úteis.</p>}
      </form>
    </main>
  );
}