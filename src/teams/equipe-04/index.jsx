import logo from './assets/recircula-logo.png'
import FichaMembro from './FichaMembro.jsx'
import { funcionalidades, links, membros, tecnologias, usosDeIA, video } from './dados.js'
import './equipe-04.css'

export default function Equipe04() {
  return (
    <div className="equipe-04-pagina">
      <div className="equipe-04-conteudo">
        <section className="equipe-04-abertura">
          <div>
            <p className="equipe-04-equipe">Equipe 04</p>
            <h1>ReCircula</h1>
            <p className="equipe-04-chamada">
              Um marketplace universitário que dá uma nova vida a materiais acadêmicos, por meio de vendas e
              doações entre estudantes.
            </p>
            <div className="equipe-04-acoes">
              <a className="equipe-04-botao" href={links.site} target="_blank" rel="noreferrer">
                Abrir o ReCircula
              </a>
              <a href={links.repositorio} target="_blank" rel="noreferrer">
                Ver o código no GitHub
              </a>
            </div>
          </div>
          <img className="equipe-04-logo" src={logo} alt="Logo do ReCircula" width="256" height="256" />
        </section>

        <section className="equipe-04-secao" aria-labelledby="eq04-video">
          <h2 id="eq04-video">Vídeo do projeto</h2>
          <div className="equipe-04-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.id}?hl=pt-BR`}
              title={video.titulo}
              allow="encrypted-media; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <dl className="equipe-04-referencia">
            <div>
              <dt>Fonte</dt>
              <dd>
                <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">
                  {video.titulo}
                </a>
                , no canal{' '}
                <a href={video.canalUrl} target="_blank" rel="noreferrer">{video.canal}</a> (YouTube).
              </dd>
            </div>
            <div>
              <dt>Tema abordado</dt>
              <dd>
                Apresentação do ReCircula: venda e doação de materiais acadêmicos entre estudantes.
              </dd>
            </div>
            <div>
              <dt>Inspiração</dt>
              <dd>
                Economia circular: facilitar o reaproveitamento e tornar os materiais mais acessíveis à
                comunidade universitária.
              </dd>
            </div>
          </dl>
        </section>

        <section className="equipe-04-secao" aria-labelledby="eq04-projeto">
          <h2 id="eq04-projeto">A página e o projeto</h2>
          <div className="equipe-04-texto">
            <p>
              O ReCircula conecta pessoas que procuram materiais acadêmicos a estudantes que desejam
              vender ou doar itens que já não usam. A proposta é facilitar o reaproveitamento,
              incentivar a economia circular e tornar esses materiais mais acessíveis à comunidade
              universitária.
            </p>
            <p>
              As conversas e combinações de entrega acontecem diretamente entre os estudantes: a
              plataforma não intermedeia pagamentos.
            </p>
            <p>
              Nesta página, reunimos o vídeo do projeto, o que ele faz, as tecnologias que usamos e
              quem o desenvolveu.
            </p>
          </div>

          <h3>O que dá para fazer no ReCircula</h3>
          <ul className="equipe-04-funcionalidades">
            {funcionalidades.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>Tecnologias do projeto</h3>
          <dl className="equipe-04-tecnologias">
            {tecnologias.map(({ camada, itens }) => (
              <div key={camada}>
                <dt>{camada}</dt>
                <dd>{itens}</dd>
              </div>
            ))}
          </dl>

          <h3>Como usamos IA no projeto</h3>
          <ul className="equipe-04-usos">
            {usosDeIA.map((uso) => (
              <li key={uso.titulo}>
                <strong>{uso.titulo}</strong>
                <p>{uso.texto}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="equipe-04-secao" aria-labelledby="eq04-equipe">
          <h2 id="eq04-equipe">Quem somos</h2>
          <div className="equipe-04-texto">
            <p>
              Somos a equipe do ReCircula, projeto desenvolvido na cadeira de Desenvolvimento de
              Plataformas Web, no 4º semestre de Ciência da Computação da Universidade de Fortaleza
              (UNIFOR).
            </p>
            <p>
              O front-end e a API são aplicações independentes, e dividimos o trabalho seguindo essa
              separação: Samuel no front-end e no design, Henrique e Miguel no back-end.
            </p>
          </div>
          <div className="equipe-04-membros">
            {membros.map((membro) => (
              <FichaMembro key={membro.nome} membro={membro} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
