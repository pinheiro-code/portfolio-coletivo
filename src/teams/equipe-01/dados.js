// Todo o texto da página da Equipe 01 fica aqui. Para mudar algo, mexa só neste arquivo.

// Link do vídeo no YouTube (pode ser "não listado"). Enquanto estiver vazio, a página mostra um aviso.
export const video = {
  url: '',
  titulo: 'Gestio: sistema de gestão para pequenos negócios',
  referencia:
    'Vídeo produzido com IA a partir do próprio Gestio: roteiro, slides e montagem feitos pela equipe com o Claude (Anthropic), ' +
    'narração por síntese de voz (Piper, voz pt-BR Edresson, licença CC BY 4.0) e telas reais do sistema. ' +
    'Tema: o problema do controle manual em pequenos negócios e como o Gestio resolve.',
}

export const links = {
    site: 'https://gestio-delta.vercel.app',
  repositorio: 'https://github.com/levicostaq/gestio',
}

export const loginTeste = { email: 'admin@gestio.com', senha: '123456' }

export const problema = [
  'Em uma mercearia, um salão ou uma pequena oficina, quase sempre é o próprio dono que vende, controla o estoque e paga as contas. Na maioria das vezes, tudo isso fica em caderno ou em planilha solta.',
  'Os sistemas de gestão do mercado resolvem, mas costumam cobrar mensalidade ou servem só para um tipo de negócio. O Gestio nasceu para ser gratuito e servir para qualquer ramo: o mesmo cadastro aceita produto (com estoque) e serviço (sem estoque).',
]

export const funcionalidades = [
  { titulo: 'Painel', texto: 'Vendas do mês, produtos acabando, últimas vendas e contas vencidas logo ao entrar.' },
  { titulo: 'Produtos e serviços', texto: 'Cadastro com preço, estoque e estoque mínimo, com busca.' },
  { titulo: 'Clientes', texto: 'Cadastro, busca e edição dos clientes do negócio.' },
  { titulo: 'Vendas', texto: 'Venda com vários itens, total calculado no servidor e baixa automática no estoque.' },
  { titulo: 'Financeiro', texto: 'Contas a pagar e a receber, filtros por período e marcar como pago.' },
  { titulo: 'Usuários', texto: 'O administrador cadastra funcionários, que só veem o dia a dia.' },
]

export const telas = [
  { arquivo: 'painel', legenda: 'Painel inicial com o resumo do negócio.' },
  { arquivo: 'novaVenda', legenda: 'Registro de uma venda: o estoque baixa sozinho.' },
  { arquivo: 'financeiro', legenda: 'Contas a pagar e a receber.' },
]

export const tecnologias = [
  { camada: 'Front-end', itens: 'React, Vite, Bootstrap e React Router' },
  { camada: 'API', itens: 'Node.js e Express, em camadas (rotas, controllers, services e models)' },
  { camada: 'Banco de dados', itens: 'MySQL, com 7 tabelas e uma empresa separada da outra' },
  { camada: 'Segurança', itens: 'Senhas com bcrypt e login com token JWT' },
  { camada: 'Organização', itens: 'GitHub com pull requests e Trello' },
  { camada: 'Publicação', itens: 'Vercel (site e API) e TiDB Cloud (banco)' },
]

export const usosDeIA = [
  {
    titulo: 'Planejamento',
    texto: 'Ajudou a montar o plano de trabalho, dividir as tarefas no Trello e definir os requisitos do sistema.',
  },
  {
    titulo: 'Código explicado',
    texto: 'Gerou partes da API e das telas junto com a explicação de cada passo, para a equipe entender o que estava fazendo, e não só copiar.',
  },
  {
    titulo: 'Erros e testes',
    texto: 'Ajudou a resolver erros de ambiente (MySQL, Node, Git) e a testar os fluxos principais, como login, venda e cancelamento.',
  },
  {
    titulo: 'Documentação e deploy',
    texto: 'Apoiou a documentação oficial, o artigo do Encontro de Extensão, esta página e a publicação na Vercel.',
  },
]

export const equipe = [
  'Somos três estudantes de Ciência da Computação da UNIFOR. O Gestio foi o trabalho final da disciplina de Desenvolvimento Web e também o nosso projeto de extensão.',
  'A gente trabalhou em ciclos curtos: cada tarefa virava um cartão no Trello, cada funcionalidade virava uma branch no GitHub e nada entrava na main sem pull request.',
]

export const membros = [
  {
    nome: 'Levi Costa Queiroz',
    papel: 'Back-end, integração Git e deploy',
    habilidades: ['Node.js', 'Express', 'MySQL', 'React', 'Git', 'Vercel'],
    bio: 'Montou a API, o banco de dados e o login, integrou as telas e publicou o sistema.',
    github: 'https://github.com/levicostaq',
    linkedin: 'https://www.linkedin.com/in/levicostaq',
  },
  {
    nome: 'Leonardo Noroes Milfont Padilha',
    papel: 'Front-end',
    habilidades: ['React', 'Bootstrap', 'Axios', 'Git'],
    bio: 'Desenvolveu as telas de listagem e cadastro de produtos e trabalhou nas telas de vendas.',
    github: 'https://github.com/leomilfont',
  },
  {
    nome: 'Marcelo Fong',
    papel: 'Testes e revisão',
    habilidades: ['Testes manuais', 'Trello'],
    bio: 'Testou os fluxos do sistema e revisou o material da entrega.',
  },
]
