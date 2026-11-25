import FichaMembro from '../../components/FichaMembro.jsx'
import VideoReferencia from '../../components/VideoReferencia.jsx'
import './equipe-base.css'
import meta from './meta.js'
import membros from './membros.js'

// Funcionalidades do PetCare, resumidas do relatório do sistema (capítulo 2).
const FUNCIONALIDADES = [
  ['Agendamento sem conflito', 'O tutor escolhe serviço, data e horário numa grade que mostra só os horários livres. Dois tutores no mesmo horário: só o primeiro é aceito.'],
  ['Cadastro de pets', 'O tutor cadastra, edita e remove os próprios pets, e a remoção pede o nome do animal para evitar engano.'],
  ['Agenda do dia', 'A atendente vê os atendimentos do dia, busca por pet, tutor ou CPF, confirma, conclui e cancela com motivo.'],
  ['Login por perfil', 'Tutor, atendente e administrador entram pela mesma tela, e cada um cai na sua área. Cinco senhas erradas bloqueiam a conta por 15 minutos.'],
]

const TECNOLOGIAS = ['Angular 22', 'Bootstrap 5', 'Node.js + Express', 'MySQL 8', 'JWT', 'Vercel', 'Render', 'Aiven']

const ENTREGAS = [
  ['Repositório e template', 'React + Vite, react-router-dom e a estrutura de pastas combinada.'],
  ['Home, menu e rodapé', 'vitrine com um card por equipe e menu que funciona no celular.'],
  ['Registro sem conflito', 'cada equipe se registra pelo meta.js da própria pasta.'],
  ['Revisão automática', 'lint, testes e build em todo Pull Request, e aviso de quem mexe fora da pasta.'],
  ['Deploy na Vercel', 'cada merge na main publica o site sozinho.'],
]

const CAMINHO = [
  ['Branch', 'A equipe cria feat/equipe-XX e trabalha só em src/teams/equipe-XX.'],
  ['Pull Request', 'A equipe envia a branch e abre o PR para a main.'],
  ['CI', 'O GitHub confere a pasta, o meta.js, o lint, os testes e o build.'],
  ['Merge', 'Com o CI verde, a Equipe Base revisa e mescla na main.'],
  ['No ar', 'A Vercel publica sozinha e o card da equipe aparece na Home.'],
]

export default function PaginaEquipeBase() {
  return (
    <article className="base-pagina">
      <header className="base-abertura">
        <div>
          <p className="base-selo">Equipe Base & Integração</p>
          <h1>{meta.nome}</h1>
          <p className="base-chamada">
            Somos a equipe do PetCare e fomos sorteados para montar a fundação técnica do portfólio e
            integrar as páginas das outras equipes até o link público.
          </p>
          <div className="base-acoes">
            <a className="botao" href="https://petcare-unifor.vercel.app" target="_blank" rel="noreferrer">
              Abrir o PetCare
            </a>
            <a href="https://github.com/pinheiro-code/portfolio-coletivo" target="_blank" rel="noreferrer">
              Ver o código do portfólio
            </a>
          </div>
        </div>
        <div className="base-marca" aria-hidden="true">
          🐾
        </div>
      </header>

      <section className="base-secao" aria-labelledby="base-video">
        <h2 id="base-video">Vídeo</h2>
        <VideoReferencia
          titulo="PetCare Project - T242-26"
          url="https://www.youtube.com/watch?v=AYvsXYkjJBs"
          referencia={
            <>
              "PetCare Project - T242-26", apresentação do PetCare para o professor, publicada por
              Thalys Silva no YouTube. O tema é o nosso sistema, o trabalho final da disciplina.
            </>
          }
        />
      </section>

      <section className="base-secao" aria-labelledby="base-projeto">
        <h2 id="base-projeto">O projeto: PetCare</h2>
        <p>
          O PetCare é um sistema web para petshop gerenciar clientes, pets e o agendamento de banho,
          tosa e consulta veterinária. Ele substitui a agenda de papel ou planilha e resolve três
          problemas do dia a dia: horários marcados em dobro, histórico do animal que se perde e tutor
          que só consegue agendar por telefone no horário comercial.
        </p>
        <ul className="base-recursos">
          {FUNCIONALIDADES.map(([titulo, texto]) => (
            <li key={titulo}>
              <strong>{titulo}</strong>
              <p>{texto}</p>
            </li>
          ))}
        </ul>
        <ul className="base-tecnologias" aria-label="Tecnologias do PetCare">
          {TECNOLOGIAS.map((tecnologia) => (
            <li key={tecnologia}>{tecnologia}</li>
          ))}
        </ul>
      </section>

      <section className="base-secao" aria-labelledby="base-papel">
        <h2 id="base-papel">Nosso papel no portfólio</h2>
        <p>Como Equipe Base, entregamos para a turma inteira:</p>
        <ul className="base-checklist">
          {ENTREGAS.map(([titulo, texto]) => (
            <li key={titulo}>
              <strong>{titulo}:</strong> <span>{texto}</span>
            </li>
          ))}
        </ul>

        <h3 className="base-subtitulo">Como uma página chega ao site</h3>
        <ol className="caminho">
          {CAMINHO.map(([titulo, texto]) => (
            <li key={titulo}>
              <strong>{titulo}</strong>
              <p>{texto}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="base-secao" aria-labelledby="base-ia">
        <h2 id="base-ia">Como a IA foi usada</h2>
        <p>
          No portfólio, usamos IA para gerar o esqueleto do projeto, propor a arquitetura de registro
          automático das equipes, escrever o CSS e revisar o código antes do merge. Toda sugestão passou
          pelo build, pelo lint e pelos testes antes de entrar na main.
        </p>
      </section>

      <section className="base-secao" aria-labelledby="base-equipe">
        <h2 id="base-equipe">A equipe</h2>
        <p>
          Somos seis integrantes, os mesmos do PetCare. No trabalho final, cada um cuidou de uma parte:
          front-end, back-end, banco de dados, segurança, usabilidade e apresentação. O papel de cada um
          abaixo é o da divisão do trabalho do relatório.
        </p>
        <div className="grade-fichas">
          {membros.map((membro) => (
            <FichaMembro key={membro.nome} {...membro} />
          ))}
        </div>
      </section>
    </article>
  )
}
