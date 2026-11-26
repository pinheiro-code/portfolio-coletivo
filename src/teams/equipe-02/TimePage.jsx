import { membros } from './dados.js'

export default function TimePage({ onVoltar }) {
  return (
    <article className="equipe-02-pagina">
      <header className="equipe-02-cabeca">
        <h1 className="equipe-02-titulo">Quem fez o projeto</h1>
        <p className="equipe-02-lead">
          Somos a Equipe 02, quatro alunos da Unifor. Cada um cuidou de uma parte do Portal de Atividades Complementares.
        </p>
      </header>

      <ul className="equipe-02-time">
        {membros.map((membro) => (
          <li key={membro.nome} className="equipe-02-membro">
            {/* Foto do integrante; sem foto, mostra as iniciais */}
            {membro.foto ? (
              <img className="equipe-02-avatar equipe-02-avatar-foto" src={membro.foto} alt="" width="160" height="160" loading="lazy" />
            ) : (
              <span className="equipe-02-avatar" aria-hidden="true">{membro.iniciais}</span>
            )}
            <div>
              <h2 className="equipe-02-membro-nome">
                <a href={membro.perfil} target="_blank" rel="noreferrer">
                  {membro.nome}
                </a>
              </h2>
              <p className="equipe-02-membro-papel">{membro.papel}</p>
              <p className="equipe-02-membro-fez">{membro.fez}</p>
            </div>
          </li>
        ))}
      </ul>

      <footer className="equipe-02-rodape equipe-02-rodape-time">
        <button type="button" className="equipe-02-botao-secundario" onClick={onVoltar}>
          Voltar ao projeto
        </button>
      </footer>
    </article>
  )
}
