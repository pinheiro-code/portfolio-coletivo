import FichaMembro from '../../components/FichaMembro.jsx'
import VideoReferencia from '../../components/VideoReferencia.jsx'
import financeiro from './assets/financeiro.jpg'
import novaVenda from './assets/nova-venda.jpg'
import painel from './assets/painel.jpg'
import {
  equipe,
  funcionalidades,
  links,
  loginTeste,
  membros,
  problema,
  tecnologias,
  telas,
  usosDeIA,
  video,
} from './dados.js'
import './equipe-01.css'

const imagens = { painel, novaVenda, financeiro }

export default function Equipe01() {
  return (
    <div className="equipe-01-pagina">
      <section className="equipe-01-abertura">
        <p className="equipe-01-rotulo">Equipe 01</p>
        <h1>Gestio</h1>
        <p className="equipe-01-chamada">
          Sistema web gratuito para o pequeno negócio controlar vendas, estoque, clientes e contas em um só lugar.
        </p>
        <div className="equipe-01-acoes">
          <a className="equipe-01-botao" href={links.site} target="_blank" rel="noreferrer">
            Abrir o Gestio
          </a>
          <a href={links.repositorio} target="_blank" rel="noreferrer">
            Ver o código no GitHub
          </a>
        </div>
        <p className="equipe-01-login">
          Para testar: <code>{loginTeste.email}</code> com a senha <code>{loginTeste.senha}</code>
        </p>
      </section>

      <section className="equipe-01-secao" aria-labelledby="eq01-video">
        <h2 id="eq01-video">Vídeo do projeto</h2>
        <VideoReferencia titulo={video.titulo} url={video.url} referencia={video.referencia} />
      </section>

      <section className="equipe-01-secao" aria-labelledby="eq01-projeto">
        <h2 id="eq01-projeto">A página e o projeto</h2>
        <div className="equipe-01-texto">
          {problema.map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}
          <p>
            Esta página apresenta o Gestio para a turma: o vídeo, o que o sistema faz, as tecnologias, como usamos IA e
            quem fez. O sistema está publicado, então dá para testar ao vivo pelo botão lá em cima.
          </p>
        </div>

        <h3>O que dá para fazer no Gestio</h3>
        <ul className="equipe-01-grade">
          {funcionalidades.map((item) => (
            <li key={item.titulo}>
              <strong>{item.titulo}</strong>
              <span>{item.texto}</span>
            </li>
          ))}
        </ul>

        <h3>Telas</h3>
        <div className="equipe-01-telas">
          {telas.map((tela) => (
            <figure key={tela.arquivo}>
              <img src={imagens[tela.arquivo]} alt={tela.legenda} loading="lazy" width="1280" height="760" />
              <figcaption>{tela.legenda}</figcaption>
            </figure>
          ))}
        </div>

        <h3>Tecnologias</h3>
        <dl className="equipe-01-tecnologias">
          {tecnologias.map((item) => (
            <div key={item.camada}>
              <dt>{item.camada}</dt>
              <dd>{item.itens}</dd>
            </div>
          ))}
        </dl>

        <h3>Como usamos IA</h3>
        <p className="equipe-01-texto">
          Usamos o Claude, da Anthropic, como apoio do começo ao fim. A regra da equipe era pedir sempre a explicação
          junto com o código, para conseguir defender cada parte na apresentação.
        </p>
        <ul className="equipe-01-grade">
          {usosDeIA.map((item) => (
            <li key={item.titulo}>
              <strong>{item.titulo}</strong>
              <span>{item.texto}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="equipe-01-secao" aria-labelledby="eq01-equipe">
        <h2 id="eq01-equipe">A equipe</h2>
        <div className="equipe-01-texto">
          {equipe.map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}
        </div>
      </section>

      <section className="equipe-01-secao" aria-labelledby="eq01-ficha">
        <h2 id="eq01-ficha">Ficha técnica</h2>
        <div className="grade-fichas">
          {membros.map((membro) => (
            <FichaMembro key={membro.nome} {...membro} />
          ))}
        </div>
      </section>
    </div>
  )
}
