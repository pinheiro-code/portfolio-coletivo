import { useEffect, useRef, useState } from 'react'
import VideoReferencia from '../../components/VideoReferencia.jsx'
import { repositorio, video } from './dados.js'

// As quatro etapas do caminho de um certificado (é uma sequência de verdade)
const etapas = [
  { titulo: 'O aluno participa', texto: 'Escolhe uma atividade na vitrine do portal ou faz uma por conta própria, como um curso ou um evento.' },
  { titulo: 'Envia o certificado', texto: 'Tira uma foto ou anexa o PDF, informa quantas horas foram e em qual área a atividade se encaixa.', selo: 'Enviado' },
  { titulo: 'A coordenação avalia', texto: 'O coordenador do curso abre o certificado e aprova, ou recusa explicando o motivo.', selo: 'Em análise', tom: 'analise' },
  { titulo: 'As horas entram na conta', texto: 'O que foi aprovado soma no painel do aluno, separado por área.', selo: 'Aprovado', tom: 'aprovado' },
]

// Exemplo ilustrativo das barras do painel do aluno
const areas = [
  { nome: 'Ensino', horas: 42, meta: 60 },
  { nome: 'Pesquisa', horas: 20, meta: 50 },
  { nome: 'Extensão', horas: 70, meta: 90 },
]

// Trilha "Como funciona": a única animação da página, quando ela aparece na tela
function Trilha() {
  const ref = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setVisivel(true)
      return undefined
    }
    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          obs.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <ol ref={ref} className={`equipe-02-trilha${visivel ? ' equipe-02-trilha-ativa' : ''}`}>
      {etapas.map((etapa, i) => (
        <li key={etapa.titulo} className="equipe-02-etapa" style={{ '--i': i }}>
          <span className="equipe-02-etapa-numero" aria-hidden="true">{i + 1}</span>
          <h3 className="equipe-02-etapa-titulo">{etapa.titulo}</h3>
          <p className="equipe-02-etapa-texto">{etapa.texto}</p>
          {etapa.selo && (
            <span className={`equipe-02-selo${etapa.tom ? ` equipe-02-selo-${etapa.tom}` : ''}`}>{etapa.selo}</span>
          )}
          {i === etapas.length - 1 && (
            <div className="equipe-02-barras">
              {areas.map((area) => (
                <div key={area.nome} className="equipe-02-barra-linha">
                  <span className="equipe-02-barra-nome">{area.nome}</span>
                  <span className="equipe-02-barra-trilho">
                    <span className="equipe-02-barra-cheia" style={{ '--p': area.horas / area.meta }} />
                  </span>
                  <span className="equipe-02-barra-horas">{area.horas} h</span>
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}

export default function ProjetoPage({ onVerTime }) {
  return (
    <article className="equipe-02-pagina">
      <div className="equipe-02-video">
        <VideoReferencia titulo={video.titulo} url={video.url} referencia={video.referencia} />
      </div>

      <header className="equipe-02-cabeca">
        <h1 className="equipe-02-titulo">Portal de Atividades Complementares</h1>
        <p className="equipe-02-lead">
          Um lugar só para o aluno da Unifor enviar os certificados das suas atividades complementares e acompanhar
          quantas horas já tem, e para a coordenação avaliar tudo sem papel, e-mail ou planilha.
        </p>
      </header>

      <section className="equipe-02-secao">
        <h2 className="equipe-02-subtitulo">O que ele resolve</h2>
        <p>
          Todo curso de graduação exige um número de horas em atividades complementares, como cursos, eventos,
          monitorias e projetos. Cada uma precisa de um certificado, e alguém da coordenação precisa conferir.
        </p>
        <p>
          Sem um sistema, os certificados chegam por e-mail ou em papel, o aluno não sabe quantas horas já foram aceitas
          e a coordenação confere tudo à mão. O portal junta esse caminho num lugar só, com a situação de cada
          certificado sempre à vista.
        </p>
      </section>

      <section className="equipe-02-secao">
        <h2 className="equipe-02-subtitulo">Como funciona</h2>
        <Trilha />
      </section>

      <section className="equipe-02-secao">
        <h2 className="equipe-02-subtitulo">Quem usa</h2>
        <div className="equipe-02-publicos">
          <div>
            <h3 className="equipe-02-publico-titulo">Aluno</h3>
            <ul className="equipe-02-lista">
              <li>Vê as atividades disponíveis</li>
              <li>Envia certificados</li>
              <li>Acompanha se cada um foi aprovado</li>
              <li>Vê quantas horas faltam para concluir</li>
            </ul>
          </div>
          <div>
            <h3 className="equipe-02-publico-titulo">Coordenação</h3>
            <ul className="equipe-02-lista">
              <li>Cadastra atividades para os alunos</li>
              <li>Avalia os certificados do seu curso</li>
              <li>Aprova ou recusa, com o motivo</li>
              <li>Fica com o histórico de cada decisão</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="equipe-02-secao">
        <h2 className="equipe-02-subtitulo">Como usamos inteligência artificial</h2>
        <p>
          Usamos o Claude, uma ferramenta de inteligência artificial, como apoio durante o projeto: para tirar dúvidas,
          revisar textos, ajudar a escrever e testar partes do sistema e montar estas páginas. Tudo o que a ferramenta
          sugeriu foi revisado e testado pela equipe antes de entrar no projeto.
        </p>
      </section>

      <footer className="equipe-02-rodape">
        <a className="equipe-02-link-repo" href={repositorio} target="_blank" rel="noreferrer">
          Ver o projeto no GitHub
        </a>
        <button type="button" className="equipe-02-botao" onClick={onVerTime}>
          Conhecer a equipe
        </button>
      </footer>
    </article>
  )
}
