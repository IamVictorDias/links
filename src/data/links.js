// Dados da página. Para editar links, mexa só neste arquivo.
export const perfil = {
  nome: "Victor Dias",
  usuario: "@iamvictordias",
  bio: "Pokémon TCG Player, Collector & Content Creator", // manter o texto do mock até termos a bio real
  frase: "Colecionando histórias. Jogando para evoluir.", // manter o texto do mock até termos a frase real
  avatar: "", // vazio = usa o avatar ilustrado do mock; coloque a URL/caminho da foto real aqui
};

/**
 * @typedef {Object} Link
 * @property {string} id         identificador único (usado como key)
 * @property {string} titulo     título do card e nome na barra de redes sociais
 * @property {string} url        endereço externo (abre em nova aba)
 * @property {string} icone      nome do ícone: instagram, youtube, tiktok, play, bag, chat, cards, bolt
 * @property {string} descricao  texto pequeno abaixo do título do card
 * @property {string} rotulo     texto em caixa alta acima do título do card
 * @property {string} cor        cor de destaque do card: yellow, cyan, purple ou green
 * @property {boolean} [pendente] true = dado provisório, falta confirmar com o cliente
 * @property {boolean} [social]   false = não aparece na barra de ícones de redes sociais (só como card)
 */

// O primeiro link da lista ganha o destaque visual (borda dourada e ponto "ao vivo").
// descricao, rotulo e cor vêm do mock (card da mesma plataforma). TODO: revisar textos do mock.
/** @type {Link[]} */
export const links = [
  {
    id: "instagram",
    titulo: "Instagram",
    url: "https://www.instagram.com/iamvictordias/",
    icone: "instagram",
    descricao: "Reels, novidades e bastidores da minha coleção",
    rotulo: "DO FEED PARA A SUA COLEÇÃO",
    cor: "cyan",
  },
  {
    id: "youtube",
    titulo: "YouTube",
    url: "https://www.youtube.com/", // TODO: trocar pelo canal real
    icone: "youtube",
    pendente: true,
    descricao: "Dicas, gameplays e aberturas de boosters",
    rotulo: "CONTEÚDO NOVO",
    cor: "yellow",
  },
  {
    id: "tiktok",
    titulo: "TikTok",
    url: "https://www.tiktok.com/", // TODO: trocar pelo perfil real
    icone: "tiktok",
    pendente: true,
    descricao: "Aberturas de boosters, dicas rápidas e melhores momentos",
    rotulo: "POKÉMON TCG EM VÍDEOS CURTOS",
    cor: "purple",
  },
];

// Textos fixos da página. Todos vêm do mock e ainda precisam ser revisados.
export const textos = {
  marca: "TRAINER",
  marcaDestaque: "HUB",
  marcaPonto: ".",
  compartilhar: "Compartilhar",
  linkCopiado: "Link copiado!",
  compartilharAria: "Copiar link da página",
  avatarAria: "Avatar de treinador",
  verificadoAria: "Verificado",
  sobretitulo: "30 ANOS DE AVENTURAS · A JORNADA CONTINUA",
  redesSociaisAria: "Redes sociais",
  linksAria: "Meus links",
  linksTitulo: "EXPLORE O MEU UNIVERSO",
  notaLinha1: "De treinador para treinador.",
  notaLinha2: "Obrigado por fazer parte dessa jornada.",
  rodape: "Feito com energia de treinador.",
  rodapeTag: "PLAY. COLLECT. EVOLVE.",
};
