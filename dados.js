let dados = [
    {
      titulo: "Breaking Bad",
      categoria: "Crime, Drama",
      descricao: "Walter White, um professor de química, se envolve no tráfico de drogas após descobrir que tem câncer terminal.",
      link: "https://www.imdb.com/title/tt0903747/",
      tags: "Bryan Cranston (Walter White) Aaron Paul (Jesse Pinkman) Crime Drama"
    },
    {
      titulo: "Game of Thrones",
      categoria: "Fantasia",
      descricao: "Reinos disputam o Trono de Ferro em Westeros enquanto ameaças sobrenaturais emergem.",
      link: "https://www.imdb.com/title/tt0944947/",
      tags: "George R.R. Martin Fantasia Dragões Ação"
    },
    {
      titulo: "Chernobyl",
      categoria: "Histórico, Drama",
      descricao: "Série sobre o desastre nuclear de Chernobyl e seus impactos nas pessoas e no governo soviético.",
      link: "https://www.imdb.com/title/tt7366338/",
      tags: "História Real Drama Catástrofe"
    },
    {
      titulo: "The Sopranos",
      categoria: "Crime, Drama",
      descricao: "Tony Soprano, um mafioso de Nova Jersey, lida com problemas familiares e negócios criminosos.",
      link: "https://www.imdb.com/title/tt0141842/",
      tags: "Mafia Família Crime Drama"
    },
    {
      titulo: "Band of Brothers",
      categoria: "Guerra, Drama",
      descricao: "A história da Easy Company, parte da 101ª Divisão Aerotransportada, durante a Segunda Guerra Mundial.",
      link: "https://www.imdb.com/title/tt0185906/",
      tags: "Segunda Guerra Mundial História Real Guerra Drama"
    },
    {
      titulo: "The Wire",
      categoria: "Crime, Drama",
      descricao: "Série sobre a vida nas ruas de Baltimore, explorando crime, polícia, e sociedade.",
      link: "https://www.imdb.com/title/tt0306414/",
      tags: "Crime Polícia Baltimore Drama"
    },
    {
      titulo: "Better Call Saul",
      categoria: "Crime, Drama",
      descricao: "A jornada de Jimmy McGill até se tornar o advogado Saul Goodman, bem conhecido em 'Breaking Bad'.",
      link: "https://www.imdb.com/title/tt3032476/",
      tags: "Prequel Advogado Crime Drama"
    },
    {
      titulo: "Stranger Things",
      categoria: "Fantasia, Ficção Científica",
      descricao: "Um grupo de amigos enfrenta fenômenos sobrenaturais em uma pequena cidade nos anos 80.",
      link: "https://www.imdb.com/title/tt4574334/",
      tags: "Ficção Científica Anos 80 Sobrenatural Amizade"
    },
    {
      titulo: "Sherlock",
      categoria: "Mistério, Drama",
      descricao: "Sherlock Holmes e John Watson resolvem mistérios na Londres moderna.",
      link: "https://www.imdb.com/title/tt2076673/",
      tags: "Sherlock Holmes Mistério Detetive Londres"
    },
    {
      titulo: "Peaky Blinders",
      categoria: "Crime, Drama",
      descricao: "A ascensão de uma gangue criminosa liderada por Thomas Shelby na Inglaterra pós-Primeira Guerra Mundial.",
      link: "https://www.imdb.com/title/tt2442560/",
      tags: "Gangues Crime História Inglaterra"
    },
    {
      titulo: "The Twilight Zone",
      categoria: "Fantasia, Mistério",
      descricao: "Uma série antológica que explora temas sobrenaturais e ficção científica.",
      link: "https://www.imdb.com/title/tt0052520/",
      tags: "Ficção Científica Mistério Antologia"
    },
    {
      titulo: "Fleabag",
      categoria: "Comédia, Drama",
      descricao: "Uma jovem mulher lida com sua vida caótica e cheia de desafios emocionais e familiares.",
      link: "https://www.imdb.com/title/tt5687612/",
      tags: "Comédia Drama Feminismo Personagem Feminina Forte"
    },
    {
      titulo: "Fargo",
      categoria: "Crime, Drama",
      descricao: "Histórias de crime ambientadas no estado frio de Minnesota, com personagens excêntricos.",
      link: "https://www.imdb.com/title/tt2802850/",
      tags: "Crime Minnesota Suspense"
    },
    {
      titulo: "House",
      categoria: "Drama Médico",
      descricao: "O Dr. Gregory House, um médico genial mas problemático, resolve casos médicos complicados.",
      link: "https://www.imdb.com/title/tt0412142/",
      tags: "Medicina Dr. House Drama Médico"
    },
    {
      titulo: "Friends",
      categoria: "Comédia",
      descricao: "Seis amigos de Nova York passam pelos altos e baixos da vida pessoal e profissional.",
      link: "https://www.imdb.com/title/tt0108778/",
      tags: "Comédia Amizade Nova York"
    },
    {
      titulo: "Dark",
      categoria: "Ficção Científica, Mistério",
      descricao: "Uma cidade alemã descobre conexões entre desaparecimentos e eventos sobrenaturais ao longo do tempo.",
      link: "https://www.imdb.com/title/tt5753856/",
      tags: "Viagem no Tempo Alemanha Mistério Ficção Científica"
    },
    {
      titulo: "The Office",
      categoria: "Comédia",
      descricao: "O cotidiano de uma empresa de papel com funcionários excêntricos e um chefe desastrado.",
      link: "https://www.imdb.com/title/tt0386676/",
      tags: "Comédia Escritório Mockumentary"
    },
    {
      titulo: "Succession",
      categoria: "Drama",
      descricao: "Os Roys, uma família disfuncional bilionária, disputam o controle do império da mídia.",
      link: "https://www.imdb.com/title/tt7660850/",
      tags: "Família Drama Poder Negócios"
    },
    {
        titulo: "Battlestar Galactica",
        categoria: "Ficção Científica, Ação",
        descricao: "A humanidade luta pela sobrevivência contra os Cylons, enquanto a última frota de naves tenta encontrar a Terra.",
        link: "https://www.imdb.com/title/tt0407362/",
        tags: "Ficção Científica Cylons Guerra Espaço"
    },
    {
        titulo: "Freaks and Geeks",
        categoria: "Comédia, Drama",
        descricao: "Segue dois grupos de adolescentes no ensino médio dos anos 80, explorando temas de amadurecimento e exclusão social.",
        link: "https://www.imdb.com/title/tt0193676/",
        tags: "Adolescência Anos 80 Comédia Drama"
    },
    {
        titulo: "Mad Men",
        categoria: "Drama",
        descricao: "A vida de Don Draper, um brilhante executivo de publicidade na Nova York dos anos 60, e as complexidades de sua vida pessoal e profissional.",
        link: "https://www.imdb.com/title/tt0804503/",
        tags: "Publicidade Anos 60 Drama Negócios"
    },
    {
        titulo: "Narcos",
        categoria: "Crime, Drama",
        descricao: "A ascensão e queda de Pablo Escobar e o impacto do narcotráfico na Colômbia.",
        link: "https://www.imdb.com/title/tt2707408/",
        tags: "Pablo Escobar Narcotráfico Crime História Real"
    },
    {
        titulo: "Mindhunter",
        categoria: "Crime, Drama, Suspense",
        descricao: "Dois agentes do FBI desenvolvem a psicologia criminal ao entrevistar assassinos em série para entender suas mentes.",
        link: "https://www.imdb.com/title/tt6814026/",
        tags: "FBI Assassinos em Série Psicologia Criminal Suspense"
    },
    {
        titulo: "Mr. Robot",
        categoria: "Suspense, Drama, Tecnologia",
        descricao: "Elliot, um hacker talentoso com transtornos mentais, se envolve em uma conspiração de derrubar conglomerados corporativos.",
        link: "https://www.imdb.com/title/tt4158110/",
        tags: "Hacking Tecnologia Conspiração Drama"
    },
    {
        titulo: "Black Mirror",
        categoria: "Ficção Científica, Antologia",
        descricao: "Uma antologia que explora o impacto perturbador da tecnologia nas vidas humanas e na sociedade.",
        link: "https://www.imdb.com/title/tt2085059/",
        tags: "Ficção Científica Tecnologia Distopia Antologia"
    },
    {
        titulo: "Heartstopper",
        categoria: "Drama, Romance",
        descricao: "A história de dois adolescentes britânicos que se apaixonam enquanto enfrentam os desafios da vida escolar.",
        link: "https://www.imdb.com/title/tt14339362/",
        tags: "Romance LGBTQ+ Adolescência Drama"
    },
    {
        titulo: "Severance",
        categoria: "Suspense, Ficção Científica",
        descricao: "Funcionários de uma corporação têm suas memórias divididas entre vida pessoal e profissional, mas segredos sombrios começam a surgir.",
        link: "https://www.imdb.com/title/tt11280740/",
        tags: "Memória Corporativo Ficção Científica Suspense"
    },
    {
        titulo: "It's Always Sunny in Philadelphia",
        categoria: "Comédia",
        descricao: "Um grupo de amigos disfuncionais tenta gerenciar um bar em Filadélfia, envolvido em situações hilárias e absurdas.",
        link: "https://www.imdb.com/title/tt0472954/",
        tags: "Comédia Amizade Situação Absurdas Filadélfia"
    },
    {
        titulo: "The Boys",
        categoria: "Ação, Drama, Ficção Científica",
        descricao: "Um grupo de vigilantes luta contra super-heróis corruptos que abusam de seus poderes.",
        link: "https://www.imdb.com/title/tt1190634/",
        tags: "Super-heróis Vigilantes Ação Poder"
    },
    {
        titulo: "Seinfeld",
        categoria: "Comédia",
        descricao: "Uma série sobre nada, acompanhando a vida cotidiana de Jerry Seinfeld e seus amigos excêntricos em Nova York.",
        link: "https://www.imdb.com/title/tt0098904/",
        tags: "Comédia Sitcom Nova York Jerry Seinfeld"
    },
    {
        titulo: "Peep Show",
        categoria: "Comédia, Drama",
        descricao: "Dois amigos com personalidades conflitantes navegam pelas dificuldades da vida moderna enquanto compartilham um apartamento.",
        link: "https://www.imdb.com/title/tt0451094/",
        tags: "Comédia Amizade Vida Cotidiana Sitcom Britânica"
    },
    {
        titulo: "The Last of Us",
        categoria: "Ficção Científica, Drama",
        descricao: "Em um mundo pós-apocalíptico, um homem e uma adolescente atravessam os EUA devastados em busca de sobrevivência.",
        link: "https://www.imdb.com/title/tt3581920/",
        tags: "Pós-apocalipse Zumbis Drama Sobrevivência"
    },
    {
        titulo: "When They See Us",
        categoria: "Drama, Histórico",
        descricao: "Série baseada na história real dos 'Cinco do Central Park', que foram injustamente acusados de um crime em Nova York.",
        link: "https://www.imdb.com/title/tt7137906/",
        tags: "Justiça História Real Crime Drama"
    },
    {
        titulo: "The Mandalorian",
        categoria: "Ficção Científica, Aventura",
        descricao: "A história de um caçador de recompensas solitário em uma galáxia distante, após a queda do Império.",
        link: "https://www.imdb.com/title/tt8111088/",
        tags: "Star Wars Caçador de Recompensas Aventura Ficção Científica"
    },
    {
        titulo: "Lost",
        categoria: "Aventura, Mistério",
        descricao: "Sobreviventes de um acidente de avião ficam presos em uma ilha misteriosa cheia de segredos e perigos.",
        link: "https://www.imdb.com/title/tt0411008/",
        tags: "Mistério Ilha Sobrevivência Drama"
    },
    {
        titulo: "Line of Duty",
        categoria: "Crime, Drama",
        descricao: "Uma equipe de investigação interna da polícia lida com casos de corrupção entre seus próprios colegas.",
        link: "https://www.imdb.com/title/tt2366780/",
        tags: "Polícia Corrupção Investigação Crime"
    },
    {
        titulo: "Deadwood",
        categoria: "Western, Drama",
        descricao: "A vida em uma cidade sem lei no Velho Oeste, focando nos personagens complexos e em seus conflitos morais.",
        link: "https://www.imdb.com/title/tt0348914/",
        tags: "Western Velho Oeste História Drama"
    },
    {
        titulo: "Mare of Easttown",
        categoria: "Drama, Crime",
        descricao: "Uma detetive de uma pequena cidade investiga um assassinato enquanto enfrenta seus próprios problemas pessoais.",
        link: "https://www.imdb.com/title/tt11043706/",
        tags: "Crime Detetive Drama Mistério"
    },
    {
        titulo: "Hannibal",
        categoria: "Suspense, Crime, Drama",
        descricao: "A complexa relação entre um detetive do FBI e o brilhante, mas perigoso, psiquiatra Hannibal Lecter.",
        link: "https://www.imdb.com/title/tt2243973/",
        tags: "Suspense FBI Hannibal Lecter Psicopatia"
    },
    {
        titulo: "Boardwalk Empire",
        categoria: "Crime, Drama, Histórico",
        descricao: "A história de Enoch 'Nucky' Thompson, um político corrupto e gângster que controla Atlantic City durante a Lei Seca nos EUA.",
        link: "https://www.imdb.com/title/tt0979432/",
        tags: "Crime Lei Seca Gângster História"
    },
    {
        titulo: "Atlanta",
        categoria: "Comédia, Drama",
        descricao: "Earn e seu primo Alfred tentam alcançar sucesso no cenário musical de Atlanta enquanto lidam com questões sociais e pessoais.",
        link: "https://www.imdb.com/title/tt4288182/",
        tags: "Música Cultura Comédia Drama"
    },
    {
        titulo: "Vikings",
        categoria: "Histórico, Ação, Drama",
        descricao: "A série acompanha as aventuras de Ragnar Lothbrok, um dos mais famosos heróis nórdicos, e sua busca por conquista e glória.",
        link: "https://www.imdb.com/title/tt2306299/",
        tags: "Histórico Vikings Aventura Nórdico"
    },
    {
        titulo: "Twin Peaks",
        categoria: "Mistério, Drama, Suspense",
        descricao: "A investigação do assassinato de Laura Palmer em uma pequena cidade cheia de segredos e mistérios sobrenaturais.",
        link: "https://www.imdb.com/title/tt0098936/",
        tags: "Mistério Sobrenatural Suspense Cult"
    },
    {
        titulo: "The Shield",
        categoria: "Crime, Drama",
        descricao: "Uma unidade de polícia corrupta tenta equilibrar seus métodos ilegais com a tentativa de combater o crime em Los Angeles.",
        link: "https://www.imdb.com/title/tt0286486/",
        tags: "Polícia Corrupção Crime Drama"
    },
    {
        titulo: "Happy Valley",
        categoria: "Crime, Drama",
        descricao: "A sargento Catherine Cawood enfrenta os desafios de ser policial em uma pequena cidade enquanto lida com tragédias pessoais.",
        link: "https://www.imdb.com/title/tt3554046/",
        tags: "Crime Polícia Drama Mistério"
    },
    {
        titulo: "True Detective",
        categoria: "Crime, Mistério, Drama",
        descricao: "Cada temporada segue um novo caso e novos detetives, lidando com crimes complexos e seus efeitos psicológicos.",
        link: "https://www.imdb.com/title/tt2356777/",
        tags: "Crime Detetives Mistério Antologia"
    },
    {
        titulo: "The Haunting of Hill House",
        categoria: "Terror, Drama, Sobrenatural",
        descricao: "Família lida com as memórias assombradas da infância passada em uma mansão marcada por tragédias sobrenaturais.",
        link: "https://www.imdb.com/title/tt6763664/",
        tags: "Sobrenatural Casa Assombrada Terror Família"
    },
    {
        titulo: "The Americans",
        categoria: "Suspense, Drama, Espionagem",
        descricao: "Dois espiões soviéticos disfarçados de americanos vivem nos EUA durante a Guerra Fria, enquanto equilibram suas vidas familiares.",
        link: "https://www.imdb.com/title/tt2149175/",
        tags: "Espionagem Guerra Fria Suspense Drama"
    },
    {
        titulo: "Justified",
        categoria: "Crime, Western, Drama",
        descricao: "O delegado Raylan Givens enfrenta criminosos perigosos em sua cidade natal, no estilo de um moderno justiceiro do Velho Oeste.",
        link: "https://www.imdb.com/title/tt1489428/",
        tags: "Crime Western Drama Justiça"
    }
];

  
