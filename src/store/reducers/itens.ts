import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';


const initialState = [{
  titulo: 'Assistente virtual',
  descricao: 'Conheça nosso smart speaker de maior sucesso ainda melhor. O novo design de áudio com direcionamento frontal (1 speaker de 1,6") garante mais graves e um som completo.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/assistente-virtual.png?raw=true",
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'eletronicos'
}, {
  titulo: 'AirPods com Estojo de Recarga',
  descricao: 'Os AirPods ligam automaticamente e estão sempre conectados e sabem quando estão nos seus ouvidos e pausam quando são tirados. Para ajustar o volume, trocar de música, fazer uma ligação.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/airpod.png?raw=true",
  favorito: false,
  preco: 900,
  id: uuid(),
  categoria: 'eletronicos'
}, {
  titulo: 'Tablet Wi-Fi',
  descricao: 'Com o chip A12Z Bionic, o novo Tablet Pro garante maior fluidez em tarefas diárias, trabalhos e muito mais edite vídeos em 4K, crie objetos 3D e utilize realidade aumentada de forma natural e instantânea.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/tablet.png?raw=true",
  favorito: false,
  preco: 637,
  id: uuid(),
  categoria: 'eletronicos'
}, {
  titulo: 'Assistente virtual com tela',
  descricao: 'Desenvolvido para se mover com você: com um display HD de 10,1" que se move automaticamente, as chamadas de vídeo, as receitas e os filmes e séries estarão sempre à vista. Os alto-falantes oferecem som direcional premium e de alta qualidade.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/assistente-virtual-tela.png?raw=true",
  favorito: false,
  preco: 1600,
  id: uuid(),
  categoria: 'eletronicos'
}, {
  titulo: 'Leitor de livros digitais',
  descricao: 'O Leitor de livros digitais com a maior e melhor resolução - tela Paperwhite de 7" e 300 ppi. Leia como se fosse em papel, sem reflexo, mesmo sob a luz do sol.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/leitor-livros.png?raw=true",
  favorito: false,
  preco: 447,
  id: uuid(),
  categoria: 'eletronicos'
}, {
  titulo: 'Almofada de assento',
  descricao: 'Feito de material de couro, confortável e suave. Couro ambiental natural dá uma sensação delicada. Adequado para uso durante todo o ano. Com as funções de aquecimento e ventilação do assento de carro podem ser usadas normalmente.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/assento.png?raw=true",
  favorito: false,
  preco: 45.90,
  id: uuid(),
  categoria: 'automotivos'
}, {
  titulo: 'Capa de volante de couro',
  descricao: 'Esta capa de volante feita de couro sintético, antiderrapante, respirável. 100% SEM ODOR: elástico saudável e ecológico, não tóxico, durável. Melhor aderência no volante proporciona uma ótima e confortável experiência de direção.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/capa-volante-couro.png?raw=true",
  favorito: false,
  preco: 150,
  id: uuid(),
  categoria: 'automotivos'
}, {
  titulo: 'Organizador lateral',
  descricao: 'Aumente mais espaço e garanta a segurança – todos os motoristas sabem que é muito perigoso que nosso telefone caia na lacuna entre o assento frontal e o lado do console durante a condução, este enchimento de lacuna de assento de carro cria armazenamento extra para você para evitar que coisas perigosas aconteçam, pode armazenar coisas como smartphone, carteira,que garante a condução segura.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/organizador-lateral.png?raw=true",
  favorito: false,
  preco: 149.90,
  id: uuid(),
  categoria: 'automotivos'
}, {
  titulo: 'Capa de volante de cristais',
  descricao: 'Material da capa do volante de cristal: Couro de alta qualidade e artesanato em diamante: mais estável em comparação com outros mesmos produtos, e não machuca suas mãos. Esta capa de volante brilhante para mulheres meninas é universal para volante com diâmetro de 37-38 cm/14,5-15 pol. ',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/capa-volante-cristais.png?raw=true",
  favorito: false,
  preco: 290,
  id: uuid(),
  categoria: 'automotivos'
}, {
  titulo: 'Suporte Veicular',
  descricao: 'Com o Suporte Veicular Magnetico 3 em 1 i2GO PRO você posiciona seu Smartphone de qualquer tamanho e outros dispositivos onde quiser de maneira fácil e segura. Ideal para o utilização de aplicativos de GPS e controlar músicas no carro, assistir a filmes e séries em casa, além de atender chamadas de vídeo e conferir documentos e mensagens no escritório.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/suporte-veicular.png?raw=true",
  favorito: false,
  preco: 59.90,
  id: uuid(),
  categoria: 'automotivos'
}, {
  titulo: 'Console',
  descricao: 'O console que está em pré-venda oferece novas possibilidades de jogabilidade que você nunca imaginou. Além disso, você também pode baixar jogos digitais, Experimente o carregamento extremamente rápido do SSD de 825GB com ultra-velocidade, uma imersão mais profunda com suporte à resposta tátil, gatilhos adaptáveis e áudio 3D.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/console-1.png?raw=true",
  favorito: false,
  preco: 4300,
  id: uuid(),
  categoria: 'jogos'
}, {
  titulo: 'Jogo para console',
  descricao: 'Embarque em uma jornada épica e comovente e lute contra queles que desafiam o destino que anseia por conhecimento para ajudá-lo a entender a profecia e o papel que ele desempenhará. Você deve decidir se será acorrentado pelo medo de repetir seus erros ou se libertar de seu passado para ser o pai que precisa.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/jogo-1.png?raw=true",
  favorito: false,
  preco: 299.90,
  id: uuid(),
  categoria: 'jogos'
}, {
  titulo: 'Console',
  descricao: 'Menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital e também possui os melhores serviços para jogadores de todos os tipos.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/console-2.png?raw=true",
  favorito: false,
  preco: 4349,
  id: uuid(),
  categoria: 'jogos'
}, {
  titulo: 'Controle joystick sem fio',
  descricao: 'Este controle combina funções revolucionárias, preservando precisão, conforto e exatidão em cada movimento. Graças à sua ergonomia especialmente projetada para a posição da sua mão, você pode passar horas jogando com total conforto.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/manete.png?raw=true",
  favorito: false,
  preco: 279,
  id: uuid(),
  categoria: 'jogos'
}, {
  titulo: 'Jogo para console',
  descricao: 'Em sua mais nova aventura um adolescente está se ajustando a sua nova casa mas quando uma luta feroz pelo poder ameaça destruir sua nova casa, o aspirante a herói percebe que com grandes poderes, também deve vir uma grande responsabilidade para salvar toda a Nova Iorque deve assumir o manto de herói.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/jogo-2.png?raw=true",
  favorito: false,
  preco: 349.90,
  id: uuid(),
  categoria: 'jogos'
}, {
  titulo: 'Organizador de Mesa',
  descricao: 'Moderno, funcional e versátil com acabamento em plástico de alta qualidade e construção robusta que se adapta a qualquer ambiente. (5 compartimentos e 1 divisão na parte traseira). Em sua área de trabalho, mantenha tudo limpo e organizado, como caneta, lápis, tesoura, clipes, notas adesivas, acessórios e muito mais para economizar espaço com estilo.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/guarda-treco.png?raw=true",
  favorito: false,
  preco: 19.90,
  id: uuid(),
  categoria: 'escritorio'
}, {
  titulo: 'Caderno Inteligente',
  descricao: 'Caderno inteligente com calendário, elástico para caneta e divisórias Formato: 215 x 280 mm (lxa) Com 60 folhas pautadas e 20 folhas lisas brancas de 90 gramas que você tira e coloca quando quiser Fabricado com muito cuidado e atenção aos detalhes',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/caderno.png?raw=true",
  favorito: false,
  preco: 285,
  id: uuid(),
  categoria: 'escritorio'
}, {
  titulo: 'Cadeira de Escritório',
  descricao: 'Base giratória em 360º de polipropileno com 5 rodízios;Ajuste de altura a gás;Encosto com estrutura de madeira com estofamento revestido em couro PU;Assento com madeira multi laminada com estofamento revestido em couro PU;Braços em polipropileno com estofamento revestido em couro PU; Espuma com densidade controlada.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/cadeira.png?raw=true",
  favorito: false,
  preco: 629,
  id: uuid(),
  categoria: 'escritorio'
}, {
  titulo: 'Papel Sulfite A4 75g 500 folhas',
  descricao: 'Desenvolvido para ser utilizado em atividades escolares e profissionais corte perfeito e equilibrada absorção, permite melhor deslizamento do papel na impressora. Produzido com eucalipto 100% renovável e as fibras são tratadas para obter o mais elevado grau de brancura. Chamex garante excelente performance em equipamentos e impressoras de alta velocidade, com 99% de não atolamento das folhas em sua impressora.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/papel.png?raw=true",
  favorito: false,
  preco: 27.60,
  id: uuid(),
  categoria: 'escritorio'
}, {
  titulo: 'Arquivo Estreito com Furação',
  descricao: 'Ideal para a organização de pastas e papéis. Organize seus documentos e pastas suspensas em um só lugar, poupando espaço em gavetas. Possui encaixe para acomodas as pastas sem amassar. Contém furos para ventilação do organizador e design diferenciado. Organiza e deixa seu ambiente mais bonito.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/organizador-pastas.png?raw=true",
  favorito: false,
  preco: 44.90,
  id: uuid(),
  categoria: 'escritorio'
}, {
  titulo: 'TV Smart 50"',
  descricao: 'A Smart TV LED 50" equipada com a tecnologia de Business TV que permite configurar a TV tanto para o modo residencial quanto para o modo hotel, trazendo uma maior variedade de configurações e personalizações para sua TV. Além de possui uma ótima qualidade de imagem 4K.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/tv-50.png?raw=true",
  favorito: false,
  preco: 2600,
  id: uuid(),
  categoria: 'som'
}, {
  titulo: 'Smart TV 60" 4K UHD',
  descricao: 'Smart TV LG 60" 4K UHD WiFi Bluetooth Inteligência Artificial, Painel de Controle, Processamento Natural de Linguagem, AI Recommendation, Otimizador de Games, Channels, Edição Inteligente de Apps e Media Player.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/tv-60.png?raw=true",
  favorito: false,
  preco: 3359,
  id: uuid(),
  categoria: 'som'
}, {
  titulo: 'Caixa de Som',
  descricao: 'A caixa de som 710 à prova de respingos transforma seu próximo evento em uma verdadeira festa, show ou balada. Show de luzes único e colorido sincronizado com seu aparelho de celular. Botões minimalistas e intuitivos no painel superior e o aplicativo permitem criar experiências musicais e visuais de alto nível. Com luzes estroboscópicas piscantes personalizáveis e o som incrível do conjunto duplo de tweeters e woofers ricos em graves.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/caixa-som.png?raw=true",
  favorito: false,
  preco: 5817.33,
  id: uuid(),
  categoria: 'som'
}, {
  titulo: 'Caixa de Som Bluetooth',
  descricao: 'Caixa de som oferece o ousado som com driver de longa excursão otimizado, tweeter separado e dois radiadores de graves. Até 20 horas de reprodução e um prático powerbank para manter carregados os dispositivos que fazem a festa a noite toda.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/caixa-som-bluetooth.png?raw=true",
  favorito: false,
  preco: 1199,
  id: uuid(),
  categoria: 'som'
}, {
  titulo: 'Mini System com Função karaokê',
  descricao: 'Moderno e superpotente, o Mini System vai reproduzir suas músicas com qualidade máxima nos mais diversos formatos, como MP3, WMA CD, CD-R e CD-RW. E, se a ideia for promover festas e encontros animados, a função karaokê, a conexão Bluetooth e as duas portas USB serão bastante úteis.',
  foto: "https://github.com/alura-cursos/trato-tech/blob/Aula3/src/assets/itens/mini-system.png?raw=true",
  favorito: false,
  preco: 782.91,
  id: uuid(),
  categoria: 'som'
}];

// Slice é a maneira como inicia um reducer

const itensSlice = createSlice({
    // Nome é como iremos chamar o reducer, nesse caso itens
    name: "itens",
    // estado inicial será o estado que o reducer começa
    initialState,
    // reducers permite criar funções para modificar os estados, seriam as actions
  reducers: {
    // estado é o seria o estado em que os itens se encontram e o payload um dado que será enviado
    cadastrarItem: (state, { payload }) => {
       state.push({...payload, id: uuid()})
    },
   mudarFavorito: (state, { payload }) => {
  const item = state.find(item => item.id === payload);
      if (item) {
        item.favorito = !item.favorito;
      } 
    }
  },
});

export const { mudarFavorito, cadastrarItem } = itensSlice.actions;

export default itensSlice.reducer;