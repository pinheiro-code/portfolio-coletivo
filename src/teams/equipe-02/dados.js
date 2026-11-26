import fotoDavi from './assets/davi.jpg'
import fotoEmilio from './assets/emilio.jpg'
import fotoJoao from './assets/joao.jpg'
import fotoLucas from './assets/lucas.jpg'

export const video = {
  titulo: 'Apresentação do Portal de Atividades Complementares',
  url: 'https://www.youtube.com/watch?v=E_jupzLocj0',
  referencia:
    'Vídeo produzido pela Equipe 02. Tema: apresentação do Portal de Atividades Complementares e do caminho de um certificado, do envio à aprovação.',
}

export const repositorio = 'https://github.com/yyRed-dev/WEB'

export const membros = [
  {
    nome: 'João Pedro Palhano Militão',
    iniciais: 'JP',
    foto: fotoJoao,
    papel: 'Back-end e Banco de Dados',
    fez: 'Construiu a parte do sistema que guarda as informações e aplica as regras: o envio de certificados, a avaliação e a contagem das horas.',
    perfil: 'https://ead.unifor.br/ava/user/view.php?id=91783&course=104214',
  },
  {
    nome: 'Lucas Fidelis da Silva',
    iniciais: 'LF',
    foto: fotoLucas,
    papel: 'Pesquisa',
    fez: 'Fez toda a pesquisa que deu base ao projeto.',
    perfil: 'https://ead.unifor.br/ava/user/view.php?id=80179&course=104214',
  },
  {
    nome: 'Davi Lira de Oliveira',
    iniciais: 'DL',
    foto: fotoDavi,
    papel: 'Front-end',
    fez: 'Fez todas as telas do portal, do painel do aluno ao painel da coordenação.',
    perfil: 'https://ead.unifor.br/ava/user/view.php?id=84106&course=104214',
  },
  {
    nome: 'Emilio Charles Geleilate Filho',
    iniciais: 'EC',
    foto: fotoEmilio,
    papel: 'Líder da equipe',
    fez: 'Liderou a equipe durante todo o projeto.',
    perfil: 'https://ead.unifor.br/ava/user/view.php?id=80169&course=104214',
  },
]
