import type { Book, Idea } from "./types";

// Original editorial syntheses; bibliographical references, not full-book reproductions.
export const additionalBooks: Book[] = [
  {
    id: "platon",
    title: "La République",
    author: "Platon",
    category: "Philosophie",
    description:
      "Justice, connaissance et éducation à travers le dialogue philosophique.",
    sourceUrl: "https://fr.wikisource.org/wiki/La_République_(Platon)",
    sourceType: "livre",
    language: "fr",
    verificationStatus: "référence identifiée",
  },
  {
    id: "descartes",
    title: "Discours de la méthode",
    author: "René Descartes",
    category: "Philosophie",
    description:
      "Décomposer les difficultés, ordonner le raisonnement et examiner ses certitudes.",
    sourceUrl: "https://fr.wikisource.org/wiki/Discours_de_la_méthode",
    sourceType: "livre",
    language: "fr",
    verificationStatus: "référence identifiée",
  },
  {
    id: "spinoza",
    title: "Éthique",
    author: "Baruch Spinoza",
    category: "Philosophie",
    description:
      "Une philosophie des affects, de leurs causes et de la puissance d’agir.",
    sourceUrl: "https://fr.wikisource.org/wiki/Éthique_(Spinoza)",
    sourceType: "livre",
    language: "fr",
    verificationStatus: "référence identifiée",
  },
  {
    id: "kant",
    title: "Fondements de la métaphysique des mœurs",
    author: "Immanuel Kant",
    category: "Philosophie",
    description: "Universalisation des maximes et respect des personnes.",
    sourceUrl:
      "https://fr.wikisource.org/wiki/Fondements_de_la_métaphysique_des_mœurs",
    sourceType: "livre",
    language: "fr",
    verificationStatus: "référence identifiée",
  },
  {
    id: "nietzsche",
    title: "Le Gai Savoir",
    author: "Friedrich Nietzsche",
    category: "Philosophie",
    description:
      "Valeurs héritées, affirmation de la vie et expérience de pensée de l’éternel retour.",
    sourceUrl: "https://fr.wikisource.org/wiki/Le_Gai_Savoir",
    sourceType: "livre",
    language: "fr",
    verificationStatus: "référence identifiée",
  },
  {
    id: "hume",
    title: "Enquête sur l’entendement humain",
    author: "David Hume",
    category: "Philosophie",
    description: "Habitude, causalité et appréciation des témoignages.",
    sourceUrl:
      "https://fr.wikisource.org/wiki/Enquête_sur_l’entendement_humain",
    sourceType: "livre",
    language: "fr",
    verificationStatus: "référence identifiée",
  },
  {
    id: "sartre",
    title: "L’existentialisme est un humanisme",
    author: "Jean-Paul Sartre",
    category: "Philosophie",
    description: "Choix, responsabilité et définition de soi par l’action.",
    sourceUrl:
      "https://openlibrary.org/search?q=L%E2%80%99existentialisme%20est%20un%20humanisme%20Jean-Paul%20Sartre",
    sourceType: "livre",
    language: "fr",
    verificationStatus: "référence identifiée",
  },
  {
    id: "camus",
    title: "Le Mythe de Sisyphe",
    author: "Albert Camus",
    category: "Philosophie",
    description:
      "Le décalage entre notre besoin de sens et le silence du monde.",
    sourceUrl:
      "https://openlibrary.org/search?q=Le%20Mythe%20de%20Sisyphe%20Albert%20Camus",
    sourceType: "livre",
    language: "fr",
    verificationStatus: "référence identifiée",
  },
  {
    id: "beauvoir",
    title: "Le Deuxième Sexe",
    author: "Simone de Beauvoir",
    category: "Philosophie",
    description:
      "Altérité, situation et construction sociale des rôles sexués.",
    sourceUrl:
      "https://openlibrary.org/search?q=Le%20Deuxi%C3%A8me%20Sexe%20Simone%20de%20Beauvoir",
    sourceType: "livre",
    language: "fr",
    verificationStatus: "référence identifiée",
  },
  {
    id: "rawls",
    title: "A Theory of Justice",
    author: "John Rawls",
    category: "Philosophie",
    description: "Équité, position originelle et principes de justice.",
    sourceUrl: "https://doi.org/10.4159/9780674042605",
    sourceType: "livre",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "james",
    title: "The Principles of Psychology",
    author: "William James",
    category: "Psychologie",
    description:
      "Une approche historique de l’habitude, de l’attention et du cours de la pensée.",
    sourceUrl: "https://www.gutenberg.org/ebooks/57628",
    sourceType: "livre",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "piaget",
    title: "The Origins of Intelligence in Children",
    author: "Jean Piaget",
    category: "Psychologie",
    description:
      "Schèmes d’action, assimilation et accommodation dans le développement.",
    sourceUrl: "https://doi.org/10.1037/11494-000",
    sourceType: "livre",
    language: "fr",
    verificationStatus: "référence identifiée",
  },
  {
    id: "bandura",
    title: "Self-efficacy: Toward a Unifying Theory of Behavioral Change",
    author: "Albert Bandura",
    category: "Psychologie",
    description:
      "Le sentiment d’efficacité personnelle et les sources qui peuvent le soutenir.",
    sourceUrl: "https://doi.org/10.1037/0033-295X.84.2.191",
    sourceType: "recherche",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "deci-ryan",
    title:
      "Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being",
    author: "Richard M. Ryan et Edward L. Deci",
    category: "Psychologie",
    description:
      "Autonomie, compétence et relation dans la qualité de la motivation.",
    sourceUrl: "https://doi.org/10.1037/0003-066X.55.1.68",
    sourceType: "recherche",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "prospect",
    title: "Prospect Theory: An Analysis of Decision under Risk",
    author: "Daniel Kahneman et Amos Tversky",
    category: "Psychologie",
    description:
      "Points de référence, pertes et pondération des probabilités dans des choix risqués.",
    sourceUrl: "https://doi.org/10.2307/1914185",
    sourceType: "recherche",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "festinger",
    title: "A Theory of Cognitive Dissonance",
    author: "Leon Festinger",
    category: "Psychologie",
    description:
      "Tensions entre cognitions et façons de réduire leur incompatibilité.",
    sourceUrl:
      "https://openlibrary.org/search?q=A%20Theory%20of%20Cognitive%20Dissonance%20Leon%20Festinger",
    sourceType: "livre",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "bowlby",
    title: "Attachment and Loss, Volume 1: Attachment",
    author: "John Bowlby",
    category: "Psychologie",
    description:
      "Attachement, recherche de proximité et exploration dans le développement.",
    sourceUrl:
      "https://openlibrary.org/search?q=Attachment%20and%20Loss%2C%20Volume%201%3A%20Attachment%20John%20Bowlby",
    sourceType: "livre",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "gross",
    title: "The Emerging Field of Emotion Regulation: An Integrative Review",
    author: "James J. Gross",
    category: "Psychologie",
    description:
      "Des stratégies de régulation qui interviennent à différents moments de l’émotion.",
    sourceUrl: "https://doi.org/10.1037/1089-2680.2.3.271",
    sourceType: "recherche",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "loftus",
    title:
      "Reconstruction of Automobile Destruction: An Example of the Interaction Between Language and Memory",
    author: "Elizabeth F. Loftus et John C. Palmer",
    category: "Psychologie",
    description:
      "L’influence de la formulation des questions sur les souvenirs rapportés.",
    sourceUrl: "https://doi.org/10.1016/S0022-5371(74)80011-3",
    sourceType: "recherche",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "ebbinghaus",
    title: "Memory: A Contribution to Experimental Psychology",
    author: "Hermann Ebbinghaus",
    category: "Psychologie",
    description:
      "Une étude historique de l’apprentissage, de l’oubli et des économies de réapprentissage.",
    sourceUrl: "https://psychclassics.yorku.ca/Ebbinghaus/",
    sourceType: "livre",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "drucker",
    title: "The Practice of Management",
    author: "Peter F. Drucker",
    category: "Business et stratégie",
    description:
      "La finalité de l’entreprise, ses clients et la cohérence de ses objectifs.",
    sourceUrl:
      "https://openlibrary.org/search?q=The%20Practice%20of%20Management%20Peter%20F.%20Drucker",
    sourceType: "livre",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "christensen",
    title: "The Innovator’s Dilemma",
    author: "Clayton M. Christensen",
    category: "Business et stratégie",
    description:
      "Pourquoi des entreprises bien gérées peuvent manquer certaines innovations.",
    sourceUrl:
      "https://openlibrary.org/search?q=The%20Innovator%E2%80%99s%20Dilemma%20Clayton%20M.%20Christensen",
    sourceType: "livre",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "schumpeter",
    title: "Capitalism, Socialism and Democracy",
    author: "Joseph A. Schumpeter",
    category: "Business et stratégie",
    description:
      "La concurrence par transformation des produits, des procédés et des marchés.",
    sourceUrl:
      "https://openlibrary.org/search?q=Capitalism%2C%20Socialism%20and%20Democracy%20Joseph%20A.%20Schumpeter",
    sourceType: "livre",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "coase",
    title: "The Nature of the Firm",
    author: "Ronald H. Coase",
    category: "Business et stratégie",
    description: "Les coûts de coordination et les frontières de l’entreprise.",
    sourceUrl: "https://doi.org/10.1111/j.1468-0335.1937.tb00002.x",
    sourceType: "recherche",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "barney",
    title: "Firm Resources and Sustained Competitive Advantage",
    author: "Jay B. Barney",
    category: "Business et stratégie",
    description:
      "Ressources, imitation et conditions d’un avantage concurrentiel durable.",
    sourceUrl: "https://doi.org/10.1177/014920639101700108",
    sourceType: "recherche",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "march",
    title: "Exploration and Exploitation in Organizational Learning",
    author: "James G. March",
    category: "Business et stratégie",
    description:
      "Le compromis entre améliorer ce qu’on maîtrise et chercher d’autres possibilités.",
    sourceUrl: "https://doi.org/10.1287/orsc.2.1.71",
    sourceType: "recherche",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "deming",
    title: "Out of the Crisis",
    author: "W. Edwards Deming",
    category: "Business et stratégie",
    description: "Qualité, variation et responsabilité du système de travail.",
    sourceUrl:
      "https://openlibrary.org/search?q=Out%20of%20the%20Crisis%20W.%20Edwards%20Deming",
    sourceType: "livre",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "sarasvathy",
    title:
      "Causation and Effectuation: Toward a Theoretical Shift from Economic Inevitability to Entrepreneurial Contingency",
    author: "Saras D. Sarasvathy",
    category: "Business et stratégie",
    description:
      "Des logiques entrepreneuriales sous incertitude, à partir des moyens disponibles.",
    sourceUrl: "https://doi.org/10.5465/amr.2001.4378020",
    sourceType: "recherche",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "ries",
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Business et stratégie",
    description:
      "Hypothèses, apprentissage validé et expérimentations de produit.",
    sourceUrl:
      "https://openlibrary.org/search?q=The%20Lean%20Startup%20Eric%20Ries",
    sourceType: "livre",
    language: "en",
    verificationStatus: "référence identifiée",
  },
  {
    id: "blue-ocean",
    title: "Blue Ocean Strategy",
    author: "W. Chan Kim et Renée Mauborgne",
    category: "Business et stratégie",
    description:
      "Recomposer les critères de valeur plutôt que seulement rivaliser sur les mêmes dimensions.",
    sourceUrl:
      "https://openlibrary.org/search?q=Blue%20Ocean%20Strategy%20W.%20Chan%20Kim%20et%20Ren%C3%A9e%20Mauborgne",
    sourceType: "livre",
    language: "en",
    verificationStatus: "référence identifiée",
  },
];

export const additionalIdeas: Idea[] = [
  {
    id: "extended-platon-1",
    title: "Sortir de la caverne ne suffit pas à convaincre",
    hook: "Une découverte peut vous libérer sans vous rendre immédiatement compréhensible pour les autres.",
    content: [
      "Dans le livre VII de La République, des prisonniers prennent des ombres pour la réalité. La sortie de la caverne représente une transformation de la connaissance, mais aussi un apprentissage pénible : voir autrement ne se fait pas d’un seul regard.",
      "Le retour du prisonnier éclairé rencontre l’incompréhension. Lecture proposée : pour transmettre une découverte, il faut aussi comprendre les habitudes de ceux qui ne l’ont pas faite. Le récit concerne l’éducation philosophique, pas une preuve que vos contradicteurs seraient aveugles.",
    ],
    example:
      "Une analyste découvre un indicateur plus pertinent. Au lieu de déclarer l’ancien tableau absurde, elle montre les cas où les deux mesures conduisent à des décisions différentes.",
    takeaway:
      "Une idée nouvelle demande une pédagogie, pas seulement une démonstration.",
    category: "Philosophie",
    bookId: "platon",
    sourceReference: "La République, livres I, VI et VII, IVe siècle av. J.-C.",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-platon-2",
    title: "Une opinion juste peut manquer de fondations",
    hook: "Donner la bonne réponse n’est pas encore savoir pourquoi elle tient.",
    content: [
      "La distinction platonicienne entre opinion et connaissance interroge le statut de nos convictions. Dans les livres VI et VII, la philosophie cherche à dépasser les apparences et les réponses reçues pour examiner leurs principes.",
      "Application proposée : demandez à quelqu’un d’expliquer ce qui justifie une affirmation, puis ce qui fragiliserait cette justification. Une réponse correcte par hasard ou par imitation peut être utile, mais elle résiste mal lorsque la situation change.",
    ],
    example:
      "Vous répétez qu’un prix plus bas augmente les ventes. Expliquer les mécanismes et les exceptions vous permet de décider quand une remise dévaloriserait au contraire l’offre.",
    takeaway:
      "Cherchez les raisons qui rendent une conviction transportable à une situation nouvelle.",
    category: "Philosophie",
    bookId: "platon",
    sourceReference: "La République, livres I, VI et VII, IVe siècle av. J.-C.",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-platon-3",
    title: "La justice n’est pas simplement aider ses proches",
    hook: "Une règle peut sembler loyale tout en devenant injuste pour ceux qui restent dehors.",
    content: [
      "Dans le livre I de La République, Socrate examine plusieurs définitions de la justice, dont l’idée d’aider ses amis et de nuire à ses ennemis. Le dialogue fait apparaître les limites d’une morale fondée uniquement sur l’appartenance.",
      "Le questionnement ne fournit pas une procédure administrative moderne. Il invite à distinguer la fidélité à un groupe de la qualité d’un jugement. Une règle doit pouvoir être discutée au-delà de l’intérêt de ceux qui en bénéficient.",
    ],
    example:
      "Un responsable attribue toujours les missions intéressantes aux collègues qu’il connaît. Rendre les critères explicites révèle que la confiance personnelle n’était pas un critère d’accès équitable.",
    takeaway:
      "Testez une règle du point de vue de ceux qui ne font pas partie du cercle.",
    category: "Philosophie",
    bookId: "platon",
    sourceReference: "La République, livres I, VI et VII, IVe siècle av. J.-C.",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-platon-4",
    title: "Apprendre peut commencer par reconnaître une contradiction",
    hook: "Une question bien posée est parfois plus féconde qu’une explication immédiate.",
    content: [
      "Les dialogues de La République avancent en éprouvant les définitions proposées. Un interlocuteur affirme une règle, puis découvre qu’elle conduit à un résultat qu’il refuse. Cette tension oblige à préciser ce qu’il pensait déjà savoir.",
      "Lecture pratique : une contradiction n’est pas nécessairement un échec humiliant. Elle peut indiquer le point exact où une notion demande à être reconstruite. L’enjeu est de chercher ensemble, plutôt que de transformer chaque échange en piège rhétorique.",
    ],
    example:
      "Une équipe affirme privilégier la qualité, mais récompense seulement le nombre de dossiers terminés. Examiner ce décalage permet de redéfinir ce qu’elle mesure réellement.",
    takeaway:
      "Utilisez la contradiction pour clarifier une règle, pas pour disqualifier une personne.",
    category: "Philosophie",
    bookId: "platon",
    sourceReference: "La République, livres I, VI et VII, IVe siècle av. J.-C.",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-descartes-1",
    title: "Décomposer un problème change ce qu’on peut résoudre",
    hook: "Une difficulté peut sembler insoluble parce qu’elle rassemble plusieurs questions différentes.",
    content: [
      "Dans la deuxième partie du Discours de la méthode, Descartes propose de diviser les difficultés pour mieux les examiner. Cette décomposition permet de remplacer un bloc intimidant par des questions dont les rapports deviennent visibles.",
      "Application proposée : distinguez les faits à établir, les choix à faire et les dépendances entre eux. La division a cependant une limite : réunir les réponses reste nécessaire, car les interactions peuvent produire une difficulté absente des morceaux isolés.",
    ],
    example:
      "Un projet échoue à démarrer. Vous séparez le besoin utilisateur, la faisabilité technique et le financement, puis identifiez quelle réponse conditionne réellement les deux autres.",
    takeaway: "Découpez pour comprendre, puis recomposez pour décider.",
    category: "Philosophie",
    bookId: "descartes",
    sourceReference: "Discours de la méthode, parties II et IV, 1637",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-descartes-2",
    title: "Douter méthodiquement n’est pas douter de tout sans fin",
    hook: "Le doute peut servir à construire une connaissance plutôt qu’à empêcher toute conclusion.",
    content: [
      "Le doute cartésien met à l’épreuve les croyances pour chercher un point de départ résistant. Dans le Discours, ce geste appartient à une démarche philosophique structurée ; ce n’est pas l’affirmation que toutes les explications se valent.",
      "Lecture proposée : distinguez une objection qui permet d’enquêter d’une suspicion qui ne pourrait jamais être satisfaite. Un doute utile précise ce qu’il faudrait vérifier, et reconnaît quand les raisons disponibles deviennent suffisantes pour agir.",
    ],
    example:
      "Vous doutez d’un chiffre commercial. Identifier sa méthode de calcul et son périmètre permet une vérification ; supposer que toute donnée est manipulée ne donne aucune prochaine étape.",
    takeaway:
      "Transformez le doute en question vérifiable, avec un critère pour avancer.",
    category: "Philosophie",
    bookId: "descartes",
    sourceReference: "Discours de la méthode, parties II et IV, 1637",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-descartes-3",
    title: "L’ordre du raisonnement compte autant que ses étapes",
    hook: "Une conclusion fragile peut venir d’une bonne idée placée avant ses fondations.",
    content: [
      "Descartes recommande de conduire ses pensées en allant des objets les plus simples vers les plus composés. L’ordre donne une structure aux inférences et rend plus visibles les suppositions nécessaires à chaque passage.",
      "Transposition proposée : lorsqu’un débat s’enlise, revenez aux questions dont les réponses sont présupposées par les autres. Le plus simple n’est pas toujours le plus petit : c’est parfois le point sur lequel un accord rend le reste discutable.",
    ],
    example:
      "Avant de choisir les fonctionnalités d’un service, une équipe s’accorde sur la personne à aider et le problème à résoudre. Les arbitrages techniques cessent alors d’être abstraits.",
    takeaway:
      "Cherchez quelle question doit être résolue avant que les autres aient un sens.",
    category: "Philosophie",
    bookId: "descartes",
    sourceReference: "Discours de la méthode, parties II et IV, 1637",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-spinoza-1",
    title: "Comprendre une émotion change la façon d’y répondre",
    hook: "Nommer ce qui vous traverse ne suffit pas toujours ; en chercher les causes ouvre d’autres prises.",
    content: [
      "Dans l’Éthique, Spinoza examine les affects comme des phénomènes qui ont des causes, plutôt que comme de simples défauts de volonté. Comprendre les déterminations d’une émotion peut modifier notre rapport à ce que nous subissons.",
      "Lecture contemporaine proposée : au lieu de vous reprocher une réaction, examinez la situation, vos attentes et les associations qui l’ont rendue probable. Ce cadre philosophique ne remplace ni une évaluation clinique ni un accompagnement lorsque la souffrance persiste.",
    ],
    example:
      "Une remarque vous irrite fortement. Vous distinguez son contenu, votre fatigue et la peur de perdre votre place, au lieu de traiter toute la situation comme une attaque intentionnelle.",
    takeaway:
      "Une émotion devient plus travaillable quand vous distinguez ses causes possibles.",
    category: "Philosophie",
    bookId: "spinoza",
    sourceReference: "Éthique, parties III à V, publication posthume en 1677",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-spinoza-2",
    title: "La liberté ne se réduit pas à choisir spontanément",
    hook: "Se sentir à l’origine d’une décision ne suffit pas à comprendre ce qui la produit.",
    content: [
      "Spinoza critique l’idée selon laquelle la conscience de nos désirs donnerait immédiatement accès à leurs causes. L’impression de choisir librement peut coexister avec une grande ignorance des influences qui nous déterminent.",
      "Sa conception de la liberté est liée à une compréhension plus adéquate et à l’activité. Application proposée : observez comment l’environnement prépare vos choix. Ce n’est pas une preuve que toute responsabilité disparaît, mais une invitation à agir aussi sur les conditions de l’action.",
    ],
    example:
      "Vous achetez toujours après une notification promotionnelle. Désactiver ce signal peut augmenter votre autonomie davantage que promettre de résister à chaque nouvelle sollicitation.",
    takeaway:
      "Pour mieux choisir, modifiez aussi les conditions dans lesquelles le choix arrive.",
    category: "Philosophie",
    bookId: "spinoza",
    sourceReference: "Éthique, parties III à V, publication posthume en 1677",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-spinoza-3",
    title: "Ce qui augmente votre puissance n’est pas toujours confortable",
    hook: "Une satisfaction immédiate et une capacité durable d’agir ne désignent pas forcément la même chose.",
    content: [
      "Dans l’Éthique, les variations de joie et de tristesse sont liées à des variations de puissance d’agir. Le conatus désigne l’effort par lequel chaque chose persévère dans son être, sans se réduire à une consigne de performance personnelle.",
      "Interprétation proposée : évaluez une habitude par ce qu’elle vous permet ensuite de comprendre ou d’entreprendre. Le vocabulaire de Spinoza ne justifie pas de rechercher une positivité permanente ni de juger les personnes sur leur efficacité.",
    ],
    example:
      "Une conversation exigeante vous demande un effort, mais clarifie un conflit et rend une coopération possible. Une distraction agréable évite le malaise sans transformer le problème.",
    takeaway:
      "Distinguez ce qui apaise un instant de ce qui élargit durablement vos possibilités.",
    category: "Philosophie",
    bookId: "spinoza",
    sourceReference: "Éthique, parties III à V, publication posthume en 1677",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-kant-1",
    title: "Une exception pour vous devient-elle une règle acceptable ?",
    hook: "Une action avantageuse peut dépendre du fait que les autres continuent à respecter la règle.",
    content: [
      "Dans les Fondements, Kant propose d’examiner la maxime d’une action et sa possibilité comme loi universelle. Le test vise les principes sur lesquels nous agissons, pas simplement le résultat obtenu dans un cas particulier.",
      "Application proposée : formulez honnêtement la règle que votre décision suppose. L’universalisation n’est pas un sondage sur ce que tout le monde aimerait ; elle examine la cohérence et la possibilité de vouloir une telle pratique.",
    ],
    example:
      "Un vendeur promet un délai qu’il sait impossible. Cette méthode exploite la confiance attachée aux promesses, tout en contribuant à détruire les conditions qui les rendent crédibles.",
    takeaway:
      "Demandez quelle règle votre action instaurerait si elle cessait d’être une exception.",
    category: "Philosophie",
    bookId: "kant",
    sourceReference:
      "Fondements de la métaphysique des mœurs, sections I et II, 1785",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-kant-2",
    title: "Une personne ne se résume pas à son utilité",
    hook: "Collaborer implique de compter sur les autres ; les réduire à des instruments est autre chose.",
    content: [
      "Kant distingue traiter une personne comme un moyen et la traiter seulement comme un moyen. La seconde attitude ignore sa capacité à poursuivre ses propres fins et à participer rationnellement à une décision.",
      "Lecture pratique : le consentement, l’information pertinente et la possibilité de refuser peuvent éclairer cette différence. Ils n’épuisent pas la théorie morale, mais aident à interroger les rapports de travail et les dispositifs conçus pour orienter les comportements.",
    ],
    example:
      "Une application cache volontairement les conditions de résiliation. Elle obtient peut-être plus de paiements, mais prive l’utilisateur d’un choix qu’une information loyale aurait rendu possible.",
    takeaway:
      "Un bon résultat ne suffit pas à justifier une méthode qui contourne la personne.",
    category: "Philosophie",
    bookId: "kant",
    sourceReference:
      "Fondements de la métaphysique des mœurs, sections I et II, 1785",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-kant-3",
    title: "Faire le bien et agir par devoir ne sont pas identiques",
    hook: "Deux gestes extérieurement semblables peuvent reposer sur des principes très différents.",
    content: [
      "Dans la première section des Fondements, Kant distingue l’action conforme au devoir de l’action accomplie par devoir. La valeur morale ne se lit donc pas seulement dans le résultat visible ou dans l’émotion agréable qui l’accompagne.",
      "Cette exigence ne commande pas de devenir insensible. Elle demande ce qui guiderait encore l’action si l’intérêt personnel ou la sympathie changeaient. Application proposée : concevez des règles qui protègent autrui même lorsque vous n’avez rien à y gagner.",
    ],
    example:
      "Un commerçant rembourse loyalement parce que ses clients le surveillent ; un autre applique la même règle à une personne qui ne pourra jamais publier d’avis.",
    takeaway:
      "Examinez ce qui soutient votre principe lorsque la récompense disparaît.",
    category: "Philosophie",
    bookId: "kant",
    sourceReference:
      "Fondements de la métaphysique des mœurs, sections I et II, 1785",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-nietzsche-1",
    title: "Et si cette journée devait revenir ?",
    hook: "Une expérience de pensée peut révéler un rapport à la vie que l’agenda seul ne montre pas.",
    content: [
      "Au paragraphe 341 du Gai Savoir, Nietzsche met en scène l’annonce d’un retour indéfini de la même existence. La force du passage tient à la réaction qu’il provoque : accablement ou capacité d’affirmation.",
      "Lecture proposée : cette épreuve aide à interroger les compromis répétés que nous ne regardons plus. Elle n’est ni une prédiction cosmologique établie ni l’obligation d’aimer chaque souffrance. Elle demande ce que signifie vouloir sa vie plutôt que seulement l’endurer.",
    ],
    example:
      "Vous acceptez une réunion inutile chaque semaine. Imaginer sa répétition durable vous conduit à demander son utilité et à proposer une autre organisation.",
    takeaway:
      "Examinez les répétitions ordinaires avant de chercher une transformation spectaculaire.",
    category: "Philosophie",
    bookId: "nietzsche",
    sourceReference: "Le Gai Savoir, notamment §125, §276 et §341, 1882–1887",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-nietzsche-2",
    title: "Accepter ce qui est arrivé n’est pas le trouver juste",
    hook: "On peut cesser de négocier avec le passé sans renoncer à transformer la suite.",
    content: [
      "L’amor fati, évoqué au paragraphe 276 du Gai Savoir, exprime un rapport affirmatif à l’existence. Il ne se résume pas à une technique de bien-être ni à l’idée que tout événement serait moralement bon.",
      "Interprétation proposée : reconnaître qu’un événement appartient désormais à votre histoire permet de déplacer l’effort vers ses conséquences. Cette lecture ne demande pas de pardonner un tort, d’effacer une injustice ou de supporter une situation dangereuse.",
    ],
    example:
      "Un lancement a échoué. Au lieu de refaire indéfiniment le scénario idéal, l’équipe documente les apprentissages et décide ce qu’elle peut encore construire à partir des ressources restantes.",
    takeaway: "Distinguez l’acceptation d’un fait de l’approbation de ce fait.",
    category: "Philosophie",
    bookId: "nietzsche",
    sourceReference: "Le Gai Savoir, notamment §125, §276 et §341, 1882–1887",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-nietzsche-3",
    title: "Que reste-t-il quand les anciennes certitudes s’effondrent ?",
    hook: "Perdre une référence commune ne produit pas automatiquement une meilleure orientation.",
    content: [
      "La scène du paragraphe 125 du Gai Savoir interroge la disparition de l’autorité des anciennes valeurs dans la culture européenne. Nietzsche insiste sur les conséquences de ce bouleversement, plutôt que sur un simple mot d’ordre antireligieux.",
      "Lecture contemporaine : abandonner une règle héritée ne dispense pas d’examiner ce qui la remplace. L’absence de fondement reconnu peut libérer une recherche, mais aussi laisser le jugement aux habitudes, au prestige ou à la force du moment.",
    ],
    example:
      "Une entreprise supprime son système d’évaluation sans préciser comment les promotions seront décidées. Des critères implicites reviennent aussitôt, parfois moins contestables parce que moins visibles.",
    takeaway:
      "Après avoir critiqué une valeur, demandez ce qui orientera concrètement vos choix.",
    category: "Philosophie",
    bookId: "nietzsche",
    sourceReference: "Le Gai Savoir, notamment §125, §276 et §341, 1882–1887",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-hume-1",
    title: "Le passé prépare une attente, pas une garantie",
    hook: "Une régularité observée mille fois ne démontre pas à elle seule qu’elle continuera demain.",
    content: [
      "Hume demande sur quoi repose le passage des observations passées aux événements futurs. L’expérience nous apprend des régularités, mais justifier leur prolongement par l’expérience suppose déjà que le futur ressemblera au passé.",
      "Cette difficulté ne rend pas toute prévision inutile. Elle rappelle que l’induction n’est pas une déduction certaine. Application proposée : distinguez la solidité d’une série d’observations des raisons de croire que ses conditions resteront comparables.",
    ],
    example:
      "Un produit se vend bien depuis six mois. Une hausse réglementaire du coût change pourtant les conditions qui soutenaient la tendance, même si le graphique passé demeure excellent.",
    takeaway:
      "Prévoir exige d’examiner la stabilité des conditions, pas seulement la longueur de la série.",
    category: "Philosophie",
    bookId: "hume",
    sourceReference:
      "Enquête sur l’entendement humain, sections IV, V et X, 1748",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-hume-2",
    title: "Voir deux événements ensemble ne révèle pas tout leur lien",
    hook: "Notre attente d’une cause peut dépasser ce qui est effectivement observé.",
    content: [
      "Dans son analyse de la causalité, Hume distingue la succession régulière des événements de l’idée d’une connexion nécessaire. L’habitude joue un rôle central dans la manière dont nous attendons un effet après une cause présumée.",
      "Transposition proposée : lorsqu’une décision semble avoir produit un résultat, examinez les autres changements et les cas comparables. Cette lecture philosophique annonce une vigilance utile, mais ne remplace pas les méthodes statistiques modernes pour identifier un effet causal.",
    ],
    example:
      "Une équipe change son logo puis constate une hausse des ventes. La saison, une campagne publicitaire ou un nouveau distributeur peuvent aussi expliquer cette hausse.",
    takeaway:
      "Une histoire causale convaincante demande plus qu’une succession dans le temps.",
    category: "Philosophie",
    bookId: "hume",
    sourceReference:
      "Enquête sur l’entendement humain, sections IV, V et X, 1748",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-hume-3",
    title: "Un témoignage se juge aussi par ses conditions",
    hook: "La sincérité apparente ne suffit pas à rendre toutes les affirmations également plausibles.",
    content: [
      "Dans la section X de l’Enquête, Hume examine le poids d’un témoignage face à l’expérience disponible. Il invite à considérer les circonstances du récit, la possibilité d’une erreur et les intérêts qui peuvent influencer sa transmission.",
      "Application proposée : distinguez ce que le témoin a observé, ce qu’il en déduit et ce qu’il répète. Cette prudence ne revient pas à rejeter automatiquement un récit inhabituel ; elle demande de proportionner la confiance aux raisons disponibles.",
    ],
    example:
      "Une personne affirme qu’une méthode a doublé sa productivité. Vous demandez quelle mesure a été utilisée, pendant combien de temps et avec quels autres changements.",
    takeaway:
      "Évaluez un récit par sa chaîne de preuves, pas seulement par l’assurance de celui qui parle.",
    category: "Philosophie",
    bookId: "hume",
    sourceReference:
      "Enquête sur l’entendement humain, sections IV, V et X, 1748",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-sartre-1",
    title: "Votre rôle ne dit pas tout ce que vous êtes",
    hook: "Un titre professionnel peut décrire une fonction sans épuiser vos possibilités.",
    content: [
      "Dans L’existentialisme est un humanisme, Sartre défend l’idée que l’être humain ne reçoit pas une définition achevée qui déterminerait à l’avance ses choix. L’action participe à la manière dont une existence prend forme.",
      "Lecture proposée : se décrire comme naturellement incapable de changer peut parfois masquer un engagement qu’on ne veut pas examiner. Cela ne signifie pas que les contraintes matérielles disparaissent, ni que chacun pourrait obtenir n’importe quel résultat par sa seule volonté.",
    ],
    example:
      "Un manager se dit incapable d’écouter parce qu’il est un décideur. Il peut pourtant modifier une conduite précise sans attendre de devenir une autre personne.",
    takeaway:
      "Interrogez les identités qui ferment trop vite la discussion sur vos actes.",
    category: "Philosophie",
    bookId: "sartre",
    sourceReference:
      "Conférence de 1945, publiée sous le titre L’existentialisme est un humanisme, 1946",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-sartre-2",
    title: "Ne pas choisir produit aussi des conséquences",
    hook: "L’attente peut être raisonnable, mais elle n’est pas toujours neutre.",
    content: [
      "Pour Sartre, la responsabilité ne disparaît pas simplement lorsqu’une personne refuse de se prononcer. Dans une situation donnée, laisser les choses suivre leur cours participe également à ce qui advient, même si toutes les options restent imparfaites.",
      "Application proposée : rendez visible le coût de l’inaction dans une décision. Cette perspective ne commande pas d’agir dans la précipitation ; elle empêche seulement de traiter le statu quo comme une absence totale d’engagement ou de risque.",
    ],
    example:
      "Une équipe reporte une correction d’accessibilité sans décision explicite. Les personnes exclues continuent pourtant à rencontrer l’obstacle chaque jour.",
    takeaway:
      "Comparez les effets d’attendre avec ceux d’agir ; ne supposez pas que l’attente est gratuite.",
    category: "Philosophie",
    bookId: "sartre",
    sourceReference:
      "Conférence de 1945, publiée sous le titre L’existentialisme est un humanisme, 1946",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-sartre-3",
    title: "Un principe général ne décide pas toujours à votre place",
    hook: "Deux devoirs plausibles peuvent conduire dans des directions opposées.",
    content: [
      "Dans sa conférence, Sartre évoque le cas d’un jeune homme partagé entre rester auprès de sa mère et rejoindre une lutte collective. L’exemple souligne qu’une formule morale générale ne produit pas mécaniquement la décision singulière.",
      "Cette lecture ne signifie pas que les raisons seraient inutiles. Elle rappelle qu’interpréter leur poids engage déjà celui qui choisit. Application proposée : expliquez ce que vous privilégiez et ce que votre choix laisse nécessairement de côté.",
    ],
    example:
      "Vous devez arbitrer entre une aide familiale urgente et un engagement professionnel important. Nommer la perte attachée à chaque option évite de prétendre qu’une solution annule tout conflit.",
    takeaway:
      "Une décision responsable reconnaît les raisons auxquelles elle ne peut pas entièrement répondre.",
    category: "Philosophie",
    bookId: "sartre",
    sourceReference:
      "Conférence de 1945, publiée sous le titre L’existentialisme est un humanisme, 1946",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-camus-1",
    title: "L’absurde naît d’une rencontre, pas d’un simple pessimisme",
    hook: "Dire que rien n’a de sens manque la tension que Camus cherche à décrire.",
    content: [
      "Dans Le Mythe de Sisyphe, l’absurde apparaît dans la confrontation entre la demande humaine de clarté et un monde qui ne lui fournit pas de réponse définitive. Il ne désigne donc pas seulement une propriété du monde ou une humeur individuelle.",
      "Lecture proposée : reconnaître cette tension peut libérer d’une exigence impossible, celle d’obtenir une justification totale avant de vivre. Camus explore une position philosophique ; cette réflexion ne remplace pas une aide adaptée face à une détresse psychique.",
    ],
    example:
      "Vous attendez de trouver la vocation parfaite pour commencer un projet. Vous pouvez pourtant vous engager dans une activité concrète sans avoir résolu le sens de toute votre existence.",
    takeaway:
      "Une raison locale d’agir peut suffire, même sans réponse ultime.",
    category: "Philosophie",
    bookId: "camus",
    sourceReference:
      "Le Mythe de Sisyphe, notamment « Les murs absurdes » et l’essai final, 1942",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-camus-2",
    title: "La lucidité ne condamne pas à l’immobilité",
    hook: "Voir les limites d’une situation n’oblige pas à renoncer à toute expérience.",
    content: [
      "Camus refuse de résoudre l’absurde par un saut qui ferait disparaître artificiellement la contradiction. Son essai explore la possibilité de vivre avec cette tension, en restant attentif à l’expérience plutôt qu’en attendant une réconciliation finale.",
      "Interprétation pratique : reconnaître les limites d’un projet permet de le choisir avec précision au lieu de le charger d’une promesse de salut. La lucidité peut rendre l’engagement moins spectaculaire et plus soutenable, sans supprimer ses difficultés.",
    ],
    example:
      "Vous lancez une activité parce qu’elle vous intéresse et répond à un besoin, sans lui demander de garantir à elle seule le bonheur, l’identité et la réussite sociale.",
    takeaway:
      "Choisissez ce qu’une action peut réellement offrir, sans lui demander de tout résoudre.",
    category: "Philosophie",
    bookId: "camus",
    sourceReference:
      "Le Mythe de Sisyphe, notamment « Les murs absurdes » et l’essai final, 1942",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-camus-3",
    title: "Une tâche répétée ne résume pas toute une existence",
    hook: "La répétition peut écraser, mais la regarder change déjà la question qu’on lui pose.",
    content: [
      "Dans la dernière partie du Mythe de Sisyphe, Camus s’intéresse notamment au moment où Sisyphe redescend vers son rocher. La conscience de sa condition devient un élément essentiel de la lecture qu’il propose du mythe.",
      "Cette perspective n’est pas un conseil pour tolérer des conditions de travail injustes. Lecture proposée : distinguez la répétition nécessaire, celle qui peut être transformée et celle qu’on subit sans l’avoir examinée. Aucune attitude intérieure n’abolit les contraintes matérielles.",
    ],
    example:
      "Une tâche administrative revient chaque semaine. Vous séparez ce qui peut être automatisé de ce qui reste utile, plutôt que d’en faire un jugement global sur la valeur de votre vie.",
    takeaway:
      "Regardez la structure d’une répétition avant de juger toute votre existence à travers elle.",
    category: "Philosophie",
    bookId: "camus",
    sourceReference:
      "Le Mythe de Sisyphe, notamment « Les murs absurdes » et l’essai final, 1942",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-beauvoir-1",
    title: "Le point de vue neutre a parfois une place bien précise",
    hook: "Une norme peut se présenter comme universelle alors qu’elle reprend l’expérience d’un groupe.",
    content: [
      "Dans l’introduction du Deuxième Sexe, Beauvoir examine comment le masculin peut occuper la position du sujet général, tandis que le féminin se trouve défini comme autre. Cette asymétrie concerne les conditions dans lesquelles les identités sont décrites et reconnues.",
      "Application proposée : cherchez quelle expérience est supposée normale dans une règle, une interface ou un récit. Ce travail ne consiste pas à rendre toutes les situations identiques, mais à rendre visibles les choix cachés derrière une apparente neutralité.",
    ],
    example:
      "Une organisation fixe toutes ses réunions importantes tard le soir. Le critère de disponibilité semble neutre, mais favorise certaines répartitions du travail familial.",
    takeaway:
      "Demandez à qui ressemble la personne implicitement prévue par une règle.",
    category: "Philosophie",
    bookId: "beauvoir",
    sourceReference: "Le Deuxième Sexe, introduction et tome II, 1949",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-beauvoir-2",
    title: "Un rôle appris finit parfois par sembler naturel",
    hook: "La répétition sociale peut effacer les traces de l’apprentissage qui l’a produite.",
    content: [
      "Dans Le Deuxième Sexe, Beauvoir analyse la formation des rôles féminins à travers l’éducation, les attentes et les institutions. La construction sociale n’implique pas qu’un rôle soit imaginaire : ses effets peuvent être très concrets et profondément incorporés.",
      "Lecture proposée : lorsque quelqu’un invoque une préférence naturelle, examinez aussi les récompenses et les sanctions qui ont accompagné son apprentissage. Le livre ne réduit pas toute différence à une cause unique ; il interroge une situation historique et sociale.",
    ],
    example:
      "Dans une équipe, les femmes prennent toujours les notes. Le fait que chacune ait déjà de l’expérience dans cette tâche peut reproduire une répartition plutôt que justifier son origine.",
    takeaway:
      "Pour comprendre une habitude collective, observez aussi comment elle a été distribuée et récompensée.",
    category: "Philosophie",
    bookId: "beauvoir",
    sourceReference: "Le Deuxième Sexe, introduction et tome II, 1949",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-beauvoir-3",
    title: "La liberté se pratique dans une situation",
    hook: "Affirmer que chacun choisit ne dit pas encore avec quelles ressources ni sous quelles contraintes.",
    content: [
      "L’analyse de Beauvoir articule la capacité d’agir aux conditions qui la rendent possible ou difficile. Les perspectives d’une personne dépendent aussi d’un accès au revenu, à l’éducation, à la reconnaissance et à des activités ouvertes sur le monde.",
      "Application proposée : lorsqu’on demande à quelqu’un de prendre une initiative, il faut examiner ses marges effectives. Reconnaître ces contraintes ne supprime pas toute liberté ; cela évite de transformer une inégalité de situation en défaut individuel de motivation.",
    ],
    example:
      "Une salariée refuse une formation non rémunérée hors de ses horaires. Avant de conclure qu’elle manque d’ambition, son responsable examine son coût réel en temps et en argent.",
    takeaway:
      "Évaluez une possibilité par ses conditions d’accès, pas seulement par son existence théorique.",
    category: "Philosophie",
    bookId: "beauvoir",
    sourceReference: "Le Deuxième Sexe, introduction et tome II, 1949",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-rawls-1",
    title: "Choisiriez-vous la règle sans connaître votre place ?",
    hook: "Une procédure juste doit pouvoir être discutée avant de savoir qui elle favorisera.",
    content: [
      "Rawls imagine une position originelle où les parties choisissent des principes de justice derrière un voile d’ignorance. Elles ne connaissent notamment pas leur place sociale ni leurs avantages particuliers, ce qui limite les règles taillées pour leur propre situation.",
      "Ce dispositif est une expérience de pensée normative, pas la description d’une négociation réelle. Application proposée : dans un collectif, évaluez une règle avant de distribuer les rôles, puis examinez les conditions de protection des personnes moins favorisées.",
    ],
    example:
      "Pour répartir les permanences, une équipe fixe des principes avant de connaître les dates que chacun souhaite éviter. Elle débat des contraintes plutôt que de défendre immédiatement son calendrier.",
    takeaway: "Discutez la règle avant de savoir si elle vous avantage.",
    category: "Philosophie",
    bookId: "rawls",
    sourceReference:
      "A Theory of Justice, §3–4, §11 et §24, 1971 ; édition révisée, 1999",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-rawls-2",
    title: "Une inégalité ne se justifie pas seulement par le gain total",
    hook: "Un système peut devenir plus riche tout en laissant certaines personnes durablement à l’écart.",
    content: [
      "Le principe de différence de Rawls demande que certaines inégalités sociales et économiques bénéficient aux membres les moins avantagés, dans un cadre qui protège aussi les libertés fondamentales et l’égalité équitable des chances.",
      "Il ne suffit donc pas de constater une hausse moyenne. Transposition proposée, sans confondre entreprise et société : lorsque vous évaluez une organisation, observez la distribution des bénéfices et les possibilités ouvertes à ceux qui partent avec le moins de ressources.",
    ],
    example:
      "Une prime augmente la rémunération moyenne mais récompense uniquement les équipes déjà les mieux équipées. Examiner les conditions de départ change la discussion sur son équité.",
    takeaway:
      "Regardez qui profite d’une amélioration, et pas seulement combien elle rapporte au total.",
    category: "Philosophie",
    bookId: "rawls",
    sourceReference:
      "A Theory of Justice, §3–4, §11 et §24, 1971 ; édition révisée, 1999",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-rawls-3",
    title: "Une porte ouverte n’assure pas des chances équitables",
    hook: "L’accès formel à une compétition peut coexister avec des conditions de préparation très inégales.",
    content: [
      "Rawls distingue une ouverture des positions en droit d’une égalité équitable des chances. Des personnes de capacités et de volonté comparables ne devraient pas voir leurs perspectives dépendre uniquement de leur origine sociale.",
      "Lecture pratique : une procédure identique pour tous ne neutralise pas automatiquement les écarts de ressources. L’enjeu est d’examiner la préparation, l’information et les obstacles antérieurs à la sélection, sans promettre pour autant une identité de tous les résultats.",
    ],
    example:
      "Un concours est gratuit, mais sa préparation exige un stage non rémunéré. Ouvrir l’inscription ne suffit pas à rendre les parcours de préparation comparables.",
    takeaway:
      "Pour juger l’accès, regardez aussi le chemin qui mène jusqu’à la porte.",
    category: "Philosophie",
    bookId: "rawls",
    sourceReference:
      "A Theory of Justice, §3–4, §11 et §24, 1971 ; édition révisée, 1999",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-rawls-4",
    title: "Les libertés ne sont pas de simples variables d’optimisation",
    hook: "Un avantage économique ne répond pas à toutes les objections sur les règles d’une société.",
    content: [
      "Dans la théorie de Rawls, les libertés fondamentales occupent une priorité qui empêche de les sacrifier simplement pour accroître des gains sociaux ou économiques. Cette structure distingue son projet d’un calcul qui additionnerait toutes les satisfactions.",
      "Application proposée : avant de comparer plusieurs solutions, identifiez les limites qui ne doivent pas être négociées comme de simples coûts. Ce transfert sert à structurer une discussion ; il ne réduit pas les principes politiques de Rawls à une méthode de gestion.",
    ],
    example:
      "Une équipe refuse un outil très rentable qui impose une surveillance disproportionnée. Elle examine d’abord les conditions acceptables de collecte, puis compare les solutions compatibles.",
    takeaway:
      "Définissez les protections essentielles avant d’optimiser les résultats à l’intérieur de ce cadre.",
    category: "Philosophie",
    bookId: "rawls",
    sourceReference:
      "A Theory of Justice, §3–4, §11 et §24, 1971 ; édition révisée, 1999",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-spinoza-4",
    title: "Imiter les affects peut amplifier un conflit",
    hook: "Une émotion peut circuler entre les personnes avant même que les raisons soient discutées.",
    content: [
      "Dans la troisième partie de l’Éthique, Spinoza examine l’imitation des affects : ce que nous imaginons ressentir chez autrui peut orienter nos propres émotions. Cette analyse met les relations au cœur de la vie affective, sans en faire une contagion automatique.",
      "Lecture proposée : dans un désaccord, observez comment le ton, les signes d’hostilité et les alliances modifient les jugements. Rendre cette dynamique visible permet parfois de revenir au problème initial, sans nier les raisons réelles de la colère.",
    ],
    example:
      "Une inquiétude encore vague devient une certitude collective après plusieurs messages alarmés. Une réunion consacrée aux faits établis et aux inconnues évite de traiter l’intensité partagée comme une preuve.",
    takeaway:
      "Une émotion partagée mérite d’être entendue, mais son intensité ne suffit pas à établir un fait.",
    category: "Philosophie",
    bookId: "spinoza",
    sourceReference: "Éthique, parties III à V, publication posthume en 1677",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-kant-4",
    title: "Le respect moral ne dépend pas du prestige",
    hook: "Une différence de compétence ne transforme pas les personnes en êtres de valeur inégale.",
    content: [
      "Dans la deuxième section des Fondements, Kant distingue ce qui a un prix et ce qui relève de la dignité. Le respect de la personne ne dépend pas de son utilité immédiate, de sa réussite ou de la demande qu’elle suscite.",
      "Application proposée : séparez l’évaluation d’une contribution et la manière dont vous traitez son auteur. Une critique exigeante peut porter sur un travail sans humilier une personne. Cette distinction n’empêche pas la responsabilité ; elle en encadre les formes.",
    ],
    example:
      "Un responsable corrige une erreur coûteuse en décrivant les faits et les attentes, sans réduire le salarié à une étiquette dégradante devant le groupe.",
    takeaway:
      "Évaluez les actes avec précision, sans confondre performance et dignité.",
    category: "Philosophie",
    bookId: "kant",
    sourceReference:
      "Fondements de la métaphysique des mœurs, sections I et II, 1785",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-james-1",
    title: "Une habitude déplace le moment où l’effort est nécessaire",
    hook: "Ce qui semble automatique aujourd’hui a souvent demandé une organisation hier.",
    content: [
      "Dans son chapitre sur l’habitude, William James décrit comment les conduites répétées deviennent plus faciles à déclencher. Son ouvrage est historique : ses formulations physiologiques ne doivent pas être reprises comme une description complète des neurosciences actuelles.",
      "Application proposée : examinez les signaux et les occasions qui préparent un comportement avant son exécution. La question n’est pas seulement de vouloir davantage, mais de réduire le nombre de décisions nécessaires au moment où l’action doit commencer.",
    ],
    example:
      "Vous placez un livre près de votre tasse, avec un marque-page déjà ouvert. Cette préparation rend la lecture plus accessible qu’un objectif général conservé dans une liste.",
    takeaway:
      "Préparez le commencement d’une action avant d’avoir besoin de motivation.",
    category: "Psychologie",
    bookId: "james",
    sourceReference:
      "The Principles of Psychology, vol. I, chapitres IV, IX et XI, 1890",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-james-2",
    title: "Choisir son attention implique de laisser quelque chose de côté",
    hook: "Concentrer son esprit n’est pas absorber tous les signaux avec plus d’énergie.",
    content: [
      "William James donne à la sélection une place centrale dans son analyse de l’attention. L’expérience n’est pas une réception uniforme de tout ce qui se présente : certains objets deviennent plus nets tandis que d’autres passent à l’arrière-plan.",
      "Lecture pratique : lorsque vous travaillez sur une question, définissez aussi ce qui peut rester temporairement hors champ. Cette organisation n’élimine pas la fatigue ni les interruptions ; elle évite d’exiger une disponibilité simultanée à des tâches incompatibles.",
    ],
    example:
      "Pendant une relecture, vous cherchez uniquement les erreurs de raisonnement. Un second passage sera consacré aux formulations, plutôt que de changer de critère à chaque phrase.",
    takeaway:
      "Une attention précise commence par un objet et par des exclusions explicites.",
    category: "Psychologie",
    bookId: "james",
    sourceReference:
      "The Principles of Psychology, vol. I, chapitres IV, IX et XI, 1890",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-james-3",
    title: "Votre pensée n’arrive pas en éléments parfaitement séparés",
    hook: "Un raisonnement intérieur peut sembler continu alors que son expression exige des mots successifs.",
    content: [
      "James décrit le courant de la pensée comme un processus personnel et changeant, comportant des transitions autant que des contenus distincts. Cette image interroge les modèles qui traiteraient l’expérience comme une simple succession de petites unités indépendantes.",
      "Application proposée : lorsqu’une idée reste difficile à formuler, cherchez aussi les liens et les hésitations qui l’entourent. Une prise de notes peut conserver une question ou une relation provisoire au lieu de figer trop tôt une conclusion définitive.",
    ],
    example:
      "Vous ne savez pas encore rédiger votre recommandation. Dessiner les tensions entre coût, confiance et simplicité rend visibles les passages que le texte devra ensuite expliquer.",
    takeaway:
      "Notez les relations entre vos idées, pas seulement les phrases déjà achevées.",
    category: "Psychologie",
    bookId: "james",
    sourceReference:
      "The Principles of Psychology, vol. I, chapitres IV, IX et XI, 1890",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-piaget-1",
    title: "Comprendre peut demander de changer la catégorie",
    hook: "Une information nouvelle ne s’ajoute pas toujours sans modifier ce qu’on savait déjà.",
    content: [
      "Chez Piaget, l’assimilation consiste à intégrer une situation à des schèmes disponibles, tandis que l’accommodation modifie ces schèmes lorsque l’expérience leur résiste. Ces processus s’inscrivent dans une théorie du développement de l’intelligence.",
      "Application proposée aux apprentissages adultes : demandez si l’erreur vient d’un fait manquant ou d’une grille mal adaptée. Cette transposition reste une lecture pédagogique ; elle ne prouve pas qu’une situation professionnelle reproduit les étapes du développement de l’enfant.",
    ],
    example:
      "Un débutant classe toutes les dépenses comme des pertes. Comprendre l’investissement exige de transformer cette catégorie, pas seulement d’ajouter le nom de nouvelles opérations.",
    takeaway:
      "Quand les exemples s’accumulent sans éclairer, examinez le cadre qui les organise.",
    category: "Psychologie",
    bookId: "piaget",
    sourceReference:
      "La naissance de l’intelligence chez l’enfant, 1936 ; traduction anglaise, 1952",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-piaget-2",
    title: "Une erreur peut montrer une logique en construction",
    hook: "Une réponse incorrecte n’est pas toujours une réponse donnée au hasard.",
    content: [
      "Les travaux de Piaget invitent à examiner les opérations qui conduisent l’enfant à une réponse. L’intérêt n’est pas seulement de repérer l’écart à la solution adulte, mais de comprendre la cohérence momentanée du raisonnement.",
      "Lecture pédagogique proposée : demandez comment la réponse a été obtenue avant de fournir une correction. Cela peut révéler une règle appliquée trop largement. Les recherches ultérieures ont aussi nuancé la rigidité des stades et montré l’importance des tâches et du contexte.",
    ],
    example:
      "Une personne additionne systématiquement deux taux de réduction. Lui faire expliquer son calcul révèle une confusion sur la base de référence, qu’un simple résultat corrigé aurait laissée intacte.",
    takeaway:
      "Corrigez la règle qui produit l’erreur, pas seulement son résultat.",
    category: "Psychologie",
    bookId: "piaget",
    sourceReference:
      "La naissance de l’intelligence chez l’enfant, 1936 ; traduction anglaise, 1952",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-piaget-3",
    title: "Manipuler une idée peut précéder sa formulation",
    hook: "Une notion abstraite gagne parfois à être reconstruite à travers une action concrète.",
    content: [
      "Dans La naissance de l’intelligence, Piaget étudie la manière dont les coordinations d’action participent à l’organisation de l’expérience. La connaissance n’est pas décrite comme un simple enregistrement passif de ce que le monde présente.",
      "Application pédagogique proposée : lorsqu’une définition ne suffit pas, concevez une situation où l’apprenant peut essayer, comparer et observer. Cette idée ne signifie pas que toute connaissance exige de manipuler un objet, ni qu’une activité sans retour d’information enseigne automatiquement.",
    ],
    example:
      "Pour expliquer un budget limité, vous répartissez des jetons entre plusieurs besoins, puis changez une contrainte. Les arbitrages deviennent visibles avant d’être nommés.",
    takeaway:
      "Proposez une expérience qui rende la structure du problème observable.",
    category: "Psychologie",
    bookId: "piaget",
    sourceReference:
      "La naissance de l’intelligence chez l’enfant, 1936 ; traduction anglaise, 1952",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-bandura-1",
    title: "Se sentir capable d’agir n’est pas se croire supérieur",
    hook: "La confiance utile porte souvent sur une tâche précise, pas sur une valeur personnelle globale.",
    content: [
      "Bandura distingue le sentiment d’efficacité personnelle, relatif à la capacité d’organiser et d’exécuter une action, d’une simple attente de résultat. Croire qu’une action serait utile ne suffit pas si l’on pense être incapable de la réaliser.",
      "Les expériences de maîtrise peuvent renforcer ce sentiment. Application proposée : construisez une réussite interprétable et graduée. Une confiance élevée ne remplace toutefois ni la compétence, ni les ressources, ni les conditions réelles nécessaires à l’action.",
    ],
    example:
      "Une personne sait qu’un entretien commercial serait utile mais évite d’appeler. Elle s’entraîne d’abord à présenter une seule question à un interlocuteur bienveillant.",
    takeaway:
      "Cherchez une première action assez concrète pour fournir une preuve de capacité.",
    category: "Psychologie",
    bookId: "bandura",
    sourceReference: "Psychological Review, 84(2), 1977, p. 191–215",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-bandura-2",
    title: "Voir un pair réussir peut modifier ce qu’on ose essayer",
    hook: "Un exemple accessible peut compter davantage qu’un modèle exceptionnel.",
    content: [
      "Parmi les sources du sentiment d’efficacité, Bandura décrit l’expérience vicariante : observer quelqu’un peut modifier les attentes sur sa propre capacité. La pertinence du modèle dépend notamment de la manière dont on se compare à lui.",
      "Application proposée : montrez aussi les étapes, les hésitations et les corrections, pas seulement la performance finale. Un modèle trop éloigné peut divertir sans rendre l’action plus accessible ; l’observation ne garantit pas à elle seule le transfert d’une compétence.",
    ],
    example:
      "Un nouveau collègue regarde une personne récemment formée traiter un dossier ordinaire, puis expliquer une erreur corrigée. La tâche devient moins mystérieuse qu’avec une démonstration parfaite d’expert.",
    takeaway:
      "Choisissez des modèles qui rendent le chemin visible, et pas seulement le résultat.",
    category: "Psychologie",
    bookId: "bandura",
    sourceReference: "Psychological Review, 84(2), 1977, p. 191–215",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-bandura-3",
    title: "Un encouragement aide davantage lorsqu’il désigne une prise réelle",
    hook: "Dire à quelqu’un qu’il peut tout faire donne rarement une prochaine action précise.",
    content: [
      "Bandura inclut la persuasion verbale parmi les influences possibles sur le sentiment d’efficacité personnelle. Son effet dépend de sa crédibilité et des expériences qui suivent : un encouragement démenti par des échecs répétés peut rester fragile.",
      "Application proposée : rattachez le retour à une conduite observable et à une difficulté ajustée. Il ne s’agit pas de protéger systématiquement de l’échec, mais de rendre l’apprentissage interprétable plutôt que d’opposer une identité compétente à une identité incapable.",
    ],
    example:
      "Au lieu de promettre une réussite certaine, un formateur souligne que l’introduction est claire, puis propose de travailler une objection à la fois.",
    takeaway:
      "Un retour crédible nomme ce qui fonctionne et la prochaine étape possible.",
    category: "Psychologie",
    bookId: "bandura",
    sourceReference: "Psychological Review, 84(2), 1977, p. 191–215",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-bandura-4",
    title: "La sensation de stress ne mesure pas exactement votre compétence",
    hook: "Un signal corporel peut influencer le jugement que vous portez sur votre capacité à agir.",
    content: [
      "Dans le cadre de Bandura, les états physiologiques et affectifs peuvent contribuer à l’évaluation de sa propre efficacité. Une tension ressentie avant une tâche peut être interprétée comme la preuve d’une incapacité, même si elle ne renseigne pas directement sur la maîtrise réelle.",
      "Application proposée : distinguez le ressenti, l’interprétation et les résultats observables. Ce cadre ne justifie pas d’ignorer un symptôme médical ni de forcer quelqu’un à affronter une situation dangereuse. Il invite à ne pas transformer automatiquement toute activation en verdict.",
    ],
    example:
      "Avant une présentation, votre voix tremble légèrement. Vous vérifiez la structure du propos et les retours du public au lieu d’en déduire que toute l’intervention est ratée.",
    takeaway:
      "Évaluez une capacité à partir de plusieurs indices, pas d’une sensation isolée.",
    category: "Psychologie",
    bookId: "bandura",
    sourceReference: "Psychological Review, 84(2), 1977, p. 191–215",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-deci-ryan-1",
    title: "L’autonomie ne signifie pas travailler sans personne",
    hook: "On peut suivre une règle tout en comprenant et en faisant sien son intérêt.",
    content: [
      "Dans la théorie de l’autodétermination, l’autonomie désigne notamment l’expérience d’agir avec un certain assentiment, plutôt que sous une pression ressentie comme purement extérieure. Elle ne se confond pas avec l’indépendance matérielle ou l’absence d’interdépendance.",
      "Application proposée : expliquez les raisons d’une contrainte et laissez une marge réelle sur sa mise en œuvre. Proposer un choix factice ne suffit pas. La qualité de la motivation dépend aussi des possibilités effectives et de la manière dont la demande est reçue.",
    ],
    example:
      "Une équipe doit respecter un délai réglementaire. Elle discute librement de la répartition des étapes, plutôt que de recevoir une surveillance détaillée de chaque heure.",
    takeaway:
      "Distinguez ce qui doit être fixé de ce qui peut réellement être choisi.",
    category: "Psychologie",
    bookId: "deci-ryan",
    sourceReference: "American Psychologist, 55(1), 2000, p. 68–78",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-deci-ryan-2",
    title: "La motivation dépend aussi du sentiment de progresser",
    hook: "Une activité peut perdre son intérêt lorsqu’on ne sait jamais si l’on apprend.",
    content: [
      "La théorie de l’autodétermination identifie la compétence parmi les besoins psychologiques fondamentaux. Se sentir efficace dans ses interactions ne signifie pas être toujours le meilleur ; cela suppose des défis et des retours permettant de se repérer.",
      "Application proposée : rendez visibles les progrès et les critères d’une tâche sans réduire toute activité à un classement. Un retour utile informe sur la maîtrise ; un contrôle permanent peut au contraire être vécu comme une pression qui change le rapport à l’activité.",
    ],
    example:
      "Une apprentie reçoit des exemples comparés de ses premiers et derniers travaux. Elle observe une progression précise plutôt qu’un rang qui dépend surtout du niveau des autres.",
    takeaway:
      "Donnez des repères de maîtrise, pas seulement des verdicts de classement.",
    category: "Psychologie",
    bookId: "deci-ryan",
    sourceReference: "American Psychologist, 55(1), 2000, p. 68–78",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-deci-ryan-3",
    title: "On s’engage aussi parce qu’on se sent relié",
    hook: "La performance individuelle ne résume pas les conditions de la motivation.",
    content: [
      "Ryan et Deci accordent une place importante au sentiment de relation : se sentir considéré et relié aux autres peut soutenir une implication de meilleure qualité. Ce besoin ne se réduit pas à multiplier les rencontres ou à imposer une convivialité permanente.",
      "Application proposée : observez si chacun peut demander de l’aide et si les contributions reçoivent une attention réelle. Le lien social ne remplace pas la rémunération, l’équité ou une charge de travail supportable ; il fait partie d’un ensemble de conditions.",
    ],
    example:
      "Dans une équipe distante, un point bref permet de poser une difficulté sans devoir justifier son appartenance au groupe. Les échanges deviennent plus utiles qu’une réunion festive obligatoire.",
    takeaway:
      "Construisez des relations où demander de l’aide n’entraîne pas une perte de considération.",
    category: "Psychologie",
    bookId: "deci-ryan",
    sourceReference: "American Psychologist, 55(1), 2000, p. 68–78",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-deci-ryan-4",
    title: "Toutes les récompenses n’ont pas le même effet",
    hook: "Une prime peut être reçue comme une information, une reconnaissance ou une pression.",
    content: [
      "La théorie de l’autodétermination distingue des formes de motivation qui ne se résument pas à avoir ou ne pas avoir envie. Des récompenses vécues comme contrôlantes peuvent, selon le contexte, fragiliser l’intérêt pour une activité initialement intéressante.",
      "Il serait excessif d’en conclure que payer démotive toujours. Application proposée : examinez ce que le dispositif signale, ce qu’il conditionne et comment il modifie l’autonomie perçue. L’effet dépend de la tâche, du type de récompense et de sa présentation.",
    ],
    example:
      "Une équipe de recherche reçoit un budget pour explorer une piste, plutôt qu’une prime attachée à un résultat spectaculaire décidé à l’avance. Les deux dispositifs orientent différemment le travail.",
    takeaway:
      "Évaluez une récompense par le comportement et le sens qu’elle encourage, pas seulement par son montant.",
    category: "Psychologie",
    bookId: "deci-ryan",
    sourceReference: "American Psychologist, 55(1), 2000, p. 68–78",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-prospect-1",
    title: "Une perte et un gain équivalents ne se vivent pas symétriquement",
    hook: "La même somme peut peser différemment selon le point à partir duquel vous la regardez.",
    content: [
      "La théorie des perspectives modélise des choix risqués en termes de gains et de pertes par rapport à un point de référence. Dans ce cadre, la fonction de valeur est généralement plus raide du côté des pertes, ce qui formalise une asymétrie importante.",
      "Cette tendance ne signifie pas qu’une perte ferait toujours exactement deux fois plus mal. Les mesures et les contextes varient. Application proposée : explicitez le point de référence qui transforme une variation en perte ressentie ou en gain espéré.",
    ],
    example:
      "Une baisse de prime est vécue comme une perte de revenu acquis, même si la rémunération finale reste supérieure à celle de l’année précédente.",
    takeaway:
      "Avant de discuter une réaction au risque, identifiez ce qui est considéré comme déjà acquis.",
    category: "Psychologie",
    bookId: "prospect",
    sourceReference: "Econometrica, 47(2), 1979, p. 263–291",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-prospect-2",
    title: "La peur de perdre peut pousser à prendre davantage de risques",
    hook: "Éviter le risque et éviter une perte ne conduisent pas toujours au même choix.",
    content: [
      "Dans certaines situations décrites par la théorie des perspectives, les personnes préfèrent une issue certaine pour les gains mais deviennent plus enclines au risque face à des pertes. Cette inversion dépend du cadrage et des probabilités proposées.",
      "Application proposée : lorsque vous êtes déjà en difficulté, examinez si une option risquée est choisie pour ses perspectives futures ou pour éviter d’accepter une perte certaine. Ce modèle décrit des tendances ; il ne permet pas de diagnostiquer chaque décision individuelle.",
    ],
    example:
      "Après un mauvais trimestre, une équipe mise tout son budget sur une campagne très incertaine pour éviter de reconnaître un objectif manqué, alors qu’un ajustement limité serait plus soutenable.",
    takeaway:
      "Demandez si le risque sert un avenir plausible ou seulement le refus d’un constat.",
    category: "Psychologie",
    bookId: "prospect",
    sourceReference: "Econometrica, 47(2), 1979, p. 263–291",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-prospect-3",
    title: "Une petite probabilité peut occuper une place disproportionnée",
    hook: "Rare ne veut pas dire impossible, mais cela ne dit pas encore combien il faut miser dessus.",
    content: [
      "La théorie des perspectives distingue la probabilité objective et son poids dans la décision. Certains choix suggèrent une surpondération de petites probabilités et d’autres écarts qui ne sont pas une simple lecture fidèle des fréquences.",
      "L’effet dépend de la manière dont le risque est décrit ou appris. Application proposée : comparez explicitement la fréquence, l’enjeu et le coût de protection, plutôt que de laisser l’image d’un événement spectaculaire déterminer seule le jugement.",
    ],
    example:
      "Une garantie coûteuse couvre un incident très rare et limité. Vous estimez le coût possible et les exclusions du contrat avant de décider si la tranquillité promise justifie le prix.",
    takeaway:
      "Écrivez la fréquence et la conséquence sur deux lignes distinctes avant de juger le risque.",
    category: "Psychologie",
    bookId: "prospect",
    sourceReference: "Econometrica, 47(2), 1979, p. 263–291",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-prospect-4",
    title: "Le cadrage change le problème que vous croyez résoudre",
    hook: "Deux descriptions d’une même situation peuvent orienter l’attention vers des enjeux différents.",
    content: [
      "La théorie des perspectives met au centre les points de référence et la façon dont les résultats sont codés en gains ou pertes. La présentation d’un choix peut ainsi modifier le problème psychologique, même lorsque ses résultats économiques paraissent comparables.",
      "Application proposée : reformulez une décision dans plusieurs cadres et vérifiez les conséquences réelles. Cette vérification ne supprime pas les préférences légitimes ; elle distingue ce qui tient aux options de ce qui tient à leur présentation et aux attentes déjà installées.",
    ],
    example:
      "Une offre annonce un supplément pour une option plutôt qu’une remise pour s’en passer. Vous comparez les montants finaux et le service reçu avant de choisir.",
    takeaway:
      "Réécrivez le choix sans vocabulaire de gain ou de perte, puis comparez les résultats.",
    category: "Psychologie",
    bookId: "prospect",
    sourceReference: "Econometrica, 47(2), 1979, p. 263–291",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-festinger-1",
    title: "Une décision peut changer l’histoire que vous racontez",
    hook: "Après avoir choisi, on ne regarde pas toujours les options avec le même regard qu’avant.",
    content: [
      "La théorie de la dissonance cognitive décrit une tension possible entre des cognitions incompatibles, ainsi que des moyens de la réduire. Modifier une attitude, rechercher certaines informations ou réinterpréter un acte peuvent contribuer à restaurer une cohérence.",
      "Ce cadre ne signifie pas que tout changement d’avis est une rationalisation. Application proposée : comparez vos raisons avant et après un engagement, surtout lorsque revenir sur le choix devient coûteux. Les données nouvelles restent une raison légitime de réviser une préférence.",
    ],
    example:
      "Avant un achat, vous hésitez sur l’autonomie du produit. Après l’achat, vous affirmez qu’elle n’a jamais compté, sans nouvelle information sur vos usages.",
    takeaway:
      "Conservez vos critères avant de choisir pour pouvoir distinguer apprentissage et justification après coup.",
    category: "Psychologie",
    bookId: "festinger",
    sourceReference:
      "A Theory of Cognitive Dissonance, Stanford University Press, 1957",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-festinger-2",
    title: "On peut réduire un malaise sans résoudre sa cause",
    hook: "Retrouver une cohérence ressentie n’est pas toujours corriger le problème initial.",
    content: [
      "Dans le cadre de Festinger, plusieurs voies peuvent réduire la dissonance : modifier un comportement, modifier une croyance ou ajouter des justifications. Ces voies ne produisent pas les mêmes conséquences, même si chacune peut diminuer une tension subjective.",
      "Application proposée : lorsqu’une explication vous soulage, demandez ce qu’elle change dans les faits. Ce n’est pas une méthode pour juger à distance la sincérité d’autrui, mais un outil pour examiner vos propres réponses aux contradictions.",
    ],
    example:
      "Vous dites tenir à la confidentialité, mais utilisez un outil intrusif. Dire que tout le monde le fait apaise peut-être le malaise sans réduire l’exposition des données.",
    takeaway:
      "Distinguez le soulagement d’une contradiction de sa résolution pratique.",
    category: "Psychologie",
    bookId: "festinger",
    sourceReference:
      "A Theory of Cognitive Dissonance, Stanford University Press, 1957",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-festinger-3",
    title: "Défendre une décision devient plus facile après s’être exposé",
    hook: "Un engagement public peut augmenter le coût psychologique d’un changement de position.",
    content: [
      "La dissonance cognitive aide à comprendre pourquoi un acte librement accompli peut entrer en tension avec des convictions antérieures. Les conditions d’engagement et les justifications disponibles influencent alors les façons de rétablir une cohérence.",
      "Application proposée : dans une équipe, prévoyez des moments où une hypothèse peut être corrigée sans humiliation. Cette précaution ne prouve pas qu’un désaccord vient forcément de la dissonance ; des intérêts et des différences d’information peuvent aussi expliquer la persistance.",
    ],
    example:
      "Une responsable a défendu un projet devant la direction. Une revue explicitement consacrée aux hypothèses lui permet de modifier le plan sans devoir présenter cette révision comme une faute personnelle.",
    takeaway:
      "Rendez la correction d’un choix compatible avec la préservation de la dignité.",
    category: "Psychologie",
    bookId: "festinger",
    sourceReference:
      "A Theory of Cognitive Dissonance, Stanford University Press, 1957",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-bowlby-1",
    title: "Se sentir en sécurité peut permettre d’explorer",
    hook: "La recherche de proximité et le désir d’autonomie ne sont pas forcément opposés.",
    content: [
      "Bowlby décrit l’attachement comme un système qui contribue à rechercher la proximité d’une figure de protection, notamment lorsque survient une menace. Une disponibilité suffisamment fiable peut permettre à l’enfant de consacrer davantage d’attention à l’exploration.",
      "Ce cadre concerne le développement et ne se réduit pas à des étiquettes de personnalité. Lecture proposée : dans une relation d’apprentissage, une aide accessible peut soutenir l’initiative sans imposer une dépendance permanente. Cette analogie ne constitue pas une évaluation clinique.",
    ],
    example:
      "Une enfant essaie un nouveau jeu tout en vérifiant qu’un adulte de confiance reste accessible. La possibilité de revenir permet d’oser s’éloigner.",
    takeaway:
      "L’autonomie peut se construire à partir d’un appui fiable, pas seulement contre lui.",
    category: "Psychologie",
    bookId: "bowlby",
    sourceReference:
      "Attachment and Loss, vol. 1 : Attachment, 1969 ; deuxième édition, 1982",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-bowlby-2",
    title: "Une réaction relationnelle a aussi une histoire",
    hook: "Un comportement actuel peut être influencé par des attentes construites dans d’autres relations.",
    content: [
      "Bowlby propose que les expériences d’attachement contribuent à des modèles internes des relations et de la disponibilité d’autrui. Ces modèles orientent certaines attentes, sans déterminer mécaniquement chaque conduite ni rester nécessairement immuables.",
      "Application prudente : avant d’attribuer une réaction à un défaut de caractère, examinez aussi la fiabilité du contexte. Il serait abusif de diagnostiquer un style d’attachement sur un message, de ramener toute difficulté à l’enfance ou de blâmer systématiquement les parents.",
    ],
    example:
      "Une personne vérifie souvent qu’un engagement sera tenu. Des changements fréquents et des promesses non suivies peuvent nourrir cette attente dans la relation présente.",
    takeaway:
      "Observez les régularités de la relation avant de transformer un comportement en identité.",
    category: "Psychologie",
    bookId: "bowlby",
    sourceReference:
      "Attachment and Loss, vol. 1 : Attachment, 1969 ; deuxième édition, 1982",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-bowlby-3",
    title: "Une séparation ne se mesure pas seulement à sa durée",
    hook: "La prévisibilité et la qualité du retour peuvent compter dans la manière de vivre une absence.",
    content: [
      "La théorie de Bowlby examine les réactions à la séparation et à l’indisponibilité des figures d’attachement. Elle attire l’attention sur les fonctions de protection et de régulation de la proximité, plutôt que sur une simple quantité abstraite de contact.",
      "Application éducative proposée : annoncer un départ et organiser un retour compréhensible peut aider à rendre la situation plus prévisible. Aucune règle unique ne convient à tous les âges et contextes ; une difficulté persistante demande une appréciation individualisée.",
    ],
    example:
      "Avant une transition de garde, les adultes rendent les étapes et les retrouvailles lisibles, plutôt que de disparaître discrètement dans l’espoir d’éviter toute réaction.",
    takeaway:
      "Rendez les transitions compréhensibles et fiables, sans attendre l’absence totale d’émotion.",
    category: "Psychologie",
    bookId: "bowlby",
    sourceReference:
      "Attachment and Loss, vol. 1 : Attachment, 1969 ; deuxième édition, 1982",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-gross-1",
    title: "Réguler une émotion peut commencer avant son expression",
    hook: "Agir seulement au moment où l’on déborde laisse de côté une partie des options.",
    content: [
      "Le modèle de Gross distingue plusieurs points d’intervention, notamment la sélection d’une situation, sa modification, l’orientation de l’attention, le changement d’interprétation et la modulation d’une réponse. La régulation ne désigne donc pas seulement le contrôle visible d’un visage ou d’une voix.",
      "Application proposée : identifiez le moment où une marge existe encore. Aucune stratégie n’est optimale partout ; éviter systématiquement toute situation inconfortable peut aussi réduire les possibilités d’apprentissage et les relations importantes.",
    ],
    example:
      "Une réunion devient régulièrement tendue. Modifier son ordre du jour et clarifier les décisions attendues peut aider avant même qu’il faille calmer les réactions.",
    takeaway:
      "Cherchez une prise en amont au lieu de compter uniquement sur le contrôle au dernier moment.",
    category: "Psychologie",
    bookId: "gross",
    sourceReference: "Review of General Psychology, 2(3), 1998, p. 271–299",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-gross-2",
    title: "Changer d’interprétation n’est pas inventer une version agréable",
    hook: "Une réévaluation utile cherche une lecture plus ajustée, pas une certitude rassurante sans preuve.",
    content: [
      "Dans le modèle de Gross, la réévaluation cognitive modifie la façon de donner sens à une situation, ce qui peut influencer la réponse émotionnelle. Elle se distingue de la suppression d’une expression déjà engagée.",
      "Application proposée : examinez plusieurs explications compatibles avec les faits. L’objectif n’est pas d’excuser une violence ni de vous convaincre que tout va bien. Selon la situation, l’action, la protection ou la recherche de soutien restent plus appropriées qu’une reformulation intérieure.",
    ],
    example:
      "Un message bref vous paraît hostile. Vous envisagez aussi une contrainte de temps, puis posez une question avant de répondre sur le même ton.",
    takeaway:
      "Une autre interprétation doit rester compatible avec les faits et vos besoins de protection.",
    category: "Psychologie",
    bookId: "gross",
    sourceReference: "Review of General Psychology, 2(3), 1998, p. 271–299",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-gross-3",
    title: "Ne rien montrer ne signifie pas ne rien ressentir",
    hook: "Le contrôle de l’expression et l’évolution de l’émotion sont deux choses différentes.",
    content: [
      "Gross distingue la suppression expressive d’autres stratégies de régulation. Retenir un comportement visible peut être utile dans certaines circonstances, mais cela ne garantit pas une disparition du ressenti ni une résolution de la situation qui l’a provoqué.",
      "Application proposée : après un moment où il fallait contenir une réaction, prévoyez une façon d’examiner ce qui reste à traiter. Les effets varient selon les contextes et les cultures ; exprimer immédiatement toute émotion n’est pas une règle supérieure universelle.",
    ],
    example:
      "Vous restez calme pendant un entretien difficile. Plus tard, vous notez les points à reprendre et demandez un échange, plutôt que de considérer votre silence comme une résolution du désaccord.",
    takeaway:
      "Distinguez la gestion d’un moment de la résolution de ce qu’il révèle.",
    category: "Psychologie",
    bookId: "gross",
    sourceReference: "Review of General Psychology, 2(3), 1998, p. 271–299",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-loftus-1",
    title: "Une question peut modifier ce qu’on croit se rappeler",
    hook: "Demander un souvenir n’est pas toujours une opération neutre.",
    content: [
      "Dans les expériences de Loftus et Palmer, la formulation de questions sur un accident filmé influence notamment les estimations de vitesse et certains souvenirs rapportés. L’étude montre un effet dans un dispositif précis, pas que tout témoignage serait faux.",
      "Application proposée : recueillez d’abord un récit libre avant d’introduire des détails. Une question qui contient déjà une hypothèse peut modifier la réponse ou orienter les reconstructions, surtout lorsqu’il faut combler des incertitudes sur ce qui a été perçu.",
    ],
    example:
      "Après un incident, vous demandez ce que la personne a vu, plutôt que si elle a vu le conducteur dangereux brûler le feu.",
    takeaway:
      "Une bonne question laisse la place à un fait qui ne confirme pas votre hypothèse.",
    category: "Psychologie",
    bookId: "loftus",
    sourceReference:
      "Journal of Verbal Learning and Verbal Behavior, 13(5), 1974, p. 585–589",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-loftus-2",
    title: "Le souvenir n’est pas une vidéo qu’on relance",
    hook: "Se rappeler implique une reconstruction, dont certaines parties peuvent venir après l’événement.",
    content: [
      "Les travaux de Loftus et Palmer illustrent la manière dont une information verbale ultérieure peut interagir avec la mémoire d’un événement. Cela invite à distinguer ce qui a été perçu de ce qui a été proposé ou inféré plus tard.",
      "Cette plasticité n’implique pas que tous les souvenirs sont inutilisables ou manipulables à volonté. Application proposée : conservez les notes initiales et les éléments indépendants, afin de ne pas confondre une version devenue familière avec une observation contemporaine des faits.",
    ],
    example:
      "Plusieurs collègues racontent ensemble une réunion. À force de reprendre une formulation commune, chacun peut perdre la trace de ce qu’il avait réellement entendu lui-même.",
    takeaway:
      "Gardez une trace précoce et distinguez observation, interprétation et information reçue ensuite.",
    category: "Psychologie",
    bookId: "loftus",
    sourceReference:
      "Journal of Verbal Learning and Verbal Behavior, 13(5), 1974, p. 585–589",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-loftus-3",
    title:
      "Une formulation précise peut être plus utile qu’une certitude forte",
    hook: "La qualité d’un récit tient aussi à la distinction entre détail assuré et détail reconstruit.",
    content: [
      "L’étude de Loftus et Palmer invite à examiner les conditions dans lesquelles un souvenir est demandé. Elle ne mesure pas à elle seule toutes les relations entre confiance et exactitude, mais montre pourquoi la procédure de recueil mérite une attention spécifique.",
      "Application proposée : autorisez les réponses incertaines et ne récompensez pas systématiquement les récits les plus détaillés. Un élément non rappelé ne doit pas être complété sous la pression d’une question. L’enquête peut ensuite rechercher une corroboration indépendante.",
    ],
    example:
      "Lors d’un retour d’incident, une personne distingue la direction qu’elle a vue de la vitesse qu’elle estime seulement. Cette séparation rend le témoignage plus exploitable.",
    takeaway:
      "Un récit utile indique aussi les limites de ce qui a été observé.",
    category: "Psychologie",
    bookId: "loftus",
    sourceReference:
      "Journal of Verbal Learning and Verbal Behavior, 13(5), 1974, p. 585–589",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-ebbinghaus-1",
    title: "L’oubli n’a pas une vitesse universelle",
    hook: "Une courbe célèbre ne donne pas le calendrier exact de votre mémoire.",
    content: [
      "Ebbinghaus a étudié l’oubli avec des séries de syllabes et une méthode expérimentale très particulière, notamment sur lui-même. Ses résultats ont rendu mesurables des variations de rétention, mais ne fournissent pas des pourcentages universels pour tout texte et toute personne.",
      "Application proposée : observez ce que vous pouvez rappeler après un délai, puis ajustez les révisions. Le sens du contenu, les connaissances antérieures et les conditions de récupération modifient la trajectoire ; un graphique historique ne remplace pas ces différences.",
    ],
    example:
      "Vous retenez mieux une idée reliée à votre travail qu’une liste arbitraire. Vous testez le rappel au lieu de supposer que les deux seront oubliées à la même vitesse.",
    takeaway:
      "Utilisez une courbe comme un repère de recherche, pas comme un destin personnel.",
    category: "Psychologie",
    bookId: "ebbinghaus",
    sourceReference:
      "Über das Gedächtnis, 1885 ; traduction anglaise Memory, 1913",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-ebbinghaus-2",
    title: "Ne plus rappeler ne veut pas dire repartir de zéro",
    hook: "Une trace peut se manifester autrement que par un souvenir immédiatement accessible.",
    content: [
      "Ebbinghaus utilise notamment l’économie de réapprentissage : le temps ou l’effort requis pour réapprendre un matériel déjà étudié peut être inférieur à celui d’un apprentissage initial, même lorsque le rappel conscient paraît faible.",
      "Application proposée : lorsque vous revenez à un sujet ancien, examinez la rapidité de récupération plutôt que de conclure immédiatement que tout a disparu. Ce principe ne promet pas que toutes les connaissances restent intactes ; il distingue plusieurs façons d’observer la rétention.",
    ],
    example:
      "Vous ne retrouvez plus une formule sans aide, mais la comprenez et l’appliquez bien plus vite lors d’une révision que lors de sa première découverte.",
    takeaway:
      "Évaluez aussi la facilité de réapprentissage, pas seulement le rappel immédiat.",
    category: "Psychologie",
    bookId: "ebbinghaus",
    sourceReference:
      "Über das Gedächtnis, 1885 ; traduction anglaise Memory, 1913",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-ebbinghaus-3",
    title: "La dernière relecture ne dit pas ce qui restera demain",
    hook: "Une performance juste après l’étude peut surestimer la disponibilité future.",
    content: [
      "Les travaux d’Ebbinghaus distinguent les effets de l’apprentissage et les variations observées après des délais. Ils invitent à ne pas confondre une tâche réussie dans le contexte immédiat de l’étude avec une connaissance durablement accessible.",
      "Application proposée : revenez plus tard sans support et cherchez ce qui est récupérable. La répartition optimale des séances dépend du contenu et de l’échéance ; il n’existe pas un intervalle unique valable pour toutes les situations d’apprentissage.",
    ],
    example:
      "Après avoir lu trois fiches, vous choisissez un concept à rappeler le lendemain, puis vérifiez le texte pour corriger les omissions.",
    takeaway:
      "Jugez un apprentissage après un délai, dans les conditions où vous devrez l’utiliser.",
    category: "Psychologie",
    bookId: "ebbinghaus",
    sourceReference:
      "Über das Gedächtnis, 1885 ; traduction anglaise Memory, 1913",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-drucker-1",
    title: "Le client achète un résultat, pas votre organigramme",
    hook: "Une offre peut être parfaitement organisée en interne et rester difficile à comprendre dehors.",
    content: [
      "Drucker place le client au centre de la compréhension de l’entreprise. Ce que l’organisation croit vendre n’est pas nécessairement ce que le client juge précieux ; la valeur se comprend à partir de l’usage et du besoin satisfait.",
      "Application proposée : décrivez l’offre sans vocabulaire de service interne ni liste de composants. Cela ne signifie pas que toute demande exprimée doit être satisfaite ; il faut aussi choisir un public, un problème et un modèle viable pour y répondre.",
    ],
    example:
      "Un cabinet vend des heures de conseil. Son client cherche surtout à préparer une décision sans mobiliser trois semaines de travail interne.",
    takeaway:
      "Formulez l’amélioration recherchée dans la vie du client avant de décrire vos moyens.",
    category: "Business et stratégie",
    bookId: "drucker",
    sourceReference:
      "The Practice of Management, notamment les chapitres sur l’entreprise et ses objectifs, 1954",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-drucker-2",
    title: "Un objectif utile relie les contributions",
    hook: "Donner un chiffre à chacun ne suffit pas à organiser un travail commun.",
    content: [
      "Dans The Practice of Management, Drucker développe une gestion par objectifs qui relie les responsabilités individuelles aux besoins de l’ensemble. Le but n’est pas seulement d’imposer des quotas, mais de permettre une direction et un contrôle cohérents du travail.",
      "Application proposée : expliquez comment chaque objectif contribue à une priorité partagée et quelles autres contraintes doivent être respectées. Un indicateur isolé peut récompenser une performance locale qui dégrade la qualité, la coopération ou l’avenir de l’organisation.",
    ],
    example:
      "Le support réduit son temps moyen de réponse, mais multiplie les réponses incomplètes. Un objectif commun intègre la résolution réelle et les contacts répétés.",
    takeaway:
      "Un objectif doit préciser la contribution attendue, pas seulement le chiffre à atteindre.",
    category: "Business et stratégie",
    bookId: "drucker",
    sourceReference:
      "The Practice of Management, notamment les chapitres sur l’entreprise et ses objectifs, 1954",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-drucker-3",
    title: "Une entreprise a plusieurs horizons à maintenir",
    hook: "Un bon mois peut cacher une organisation qui cesse de préparer la suite.",
    content: [
      "Drucker traite la gestion comme une recherche d’équilibre entre des exigences multiples, dont les résultats présents et les capacités futures. La rentabilité compte, mais elle ne résume pas à elle seule la clientèle, les personnes, l’innovation ou la continuité.",
      "Application proposée : distinguez les indicateurs de résultat des signes qui préparent ces résultats. Il ne s’agit pas d’ajouter des dizaines de tableaux, mais de vérifier qu’une amélioration visible ne consomme pas une capacité plus lente à reconstruire.",
    ],
    example:
      "Une entreprise gagne en marge en coupant toute formation. Quelques mois plus tard, elle ne sait plus prendre en charge les demandes les plus complexes.",
    takeaway:
      "Examinez ce qu’une amélioration immédiate utilise ou affaiblit pour l’avenir.",
    category: "Business et stratégie",
    bookId: "drucker",
    sourceReference:
      "The Practice of Management, notamment les chapitres sur l’entreprise et ses objectifs, 1954",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-drucker-4",
    title: "L’activité n’est pas la même chose que la contribution",
    hook: "Une journée pleine ne dit pas encore ce qui a changé pour le client ou pour l’équipe.",
    content: [
      "La réflexion de Drucker sur les objectifs invite à relier le travail à des résultats attendus, plutôt qu’à sa seule quantité visible. La contribution dépend du besoin auquel une responsabilité répond et des effets produits avec les autres fonctions.",
      "Application proposée : au début d’un projet, précisez le changement observable que vous cherchez et les personnes qui doivent en bénéficier. Certaines contributions restent difficiles à mesurer ; cela demande une appréciation argumentée, pas leur disparition au profit du seul travail facilement comptable.",
    ],
    example:
      "Une équipe produit beaucoup de présentations, mais les décisions restent bloquées. Elle remplace un document supplémentaire par une comparaison claire de deux options et de leurs conséquences.",
    takeaway:
      "Décrivez ce que votre travail doit rendre possible avant de compter ses livrables.",
    category: "Business et stratégie",
    bookId: "drucker",
    sourceReference:
      "The Practice of Management, notamment les chapitres sur l’entreprise et ses objectifs, 1954",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-christensen-1",
    title: "Écouter ses meilleurs clients peut laisser un angle mort",
    hook: "Les demandes les plus rentables aujourd’hui ne montrent pas tout ce qui se prépare ailleurs.",
    content: [
      "Christensen décrit des situations où les processus qui servent bien les clients établis orientent les ressources loin d’offres d’abord moins performantes sur les critères dominants. Un petit marché ou une faible marge peuvent paraître rationnellement peu intéressants.",
      "L’innovation de rupture ne désigne pas toute technologie spectaculaire. Application proposée : examinez aussi les non-clients et les usages pour lesquels une offre plus simple suffit. Cette grille ne garantit pas qu’un entrant modeste deviendra un concurrent majeur.",
    ],
    example:
      "Un logiciel complexe améliore ses fonctions avancées, tandis qu’un outil limité attire des personnes qui renonçaient jusque-là à utiliser la catégorie.",
    takeaway:
      "Cherchez qui votre course à la performance laisse sans solution accessible.",
    category: "Business et stratégie",
    bookId: "christensen",
    sourceReference:
      "The Innovator’s Dilemma, Harvard Business School Press, 1997",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-christensen-2",
    title: "Les critères du marché peuvent changer en cours de route",
    hook: "Une offre moins bonne sur une dimension peut être meilleure pour un autre usage.",
    content: [
      "Dans le cadre de Christensen, une innovation peut commencer en retrait sur les critères valorisés par les clients historiques, tout en offrant une simplicité, un coût ou une accessibilité adaptés à d’autres utilisateurs. Les trajectoires techniques et commerciales peuvent ensuite se déplacer.",
      "Application proposée : ne jugez pas une nouvelle offre seulement avec le tableau de comparaison de votre clientèle actuelle. Mais n’inversez pas non plus le raisonnement : être moins performant ne constitue pas en soi une preuve de potentiel ou de rupture.",
    ],
    example:
      "Un outil mobile ne reproduit pas toutes les fonctions d’un poste de travail, mais permet d’effectuer une tâche sur le terrain sans équipement supplémentaire.",
    takeaway:
      "Évaluez la performance par rapport à une situation d’usage, pas dans l’absolu.",
    category: "Business et stratégie",
    bookId: "christensen",
    sourceReference:
      "The Innovator’s Dilemma, Harvard Business School Press, 1997",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-christensen-3",
    title: "Un projet nouveau peut perdre dans une bonne procédure",
    hook: "Un système de sélection efficace pour l’activité existante peut mal évaluer une autre logique économique.",
    content: [
      "Christensen montre comment les priorités de ressources et les exigences de taille ou de marge peuvent rendre certaines opportunités invisibles à une entreprise installée. Les projets ne sont pas jugés hors contexte : ils passent par des processus façonnés par le modèle dominant.",
      "Application proposée : pour une exploration différente, définissez un budget, des attentes et des critères adaptés à son stade. Une structure séparée peut parfois aider, mais l’isoler ne remplace ni l’apprentissage client ni la construction d’un modèle économique viable.",
    ],
    example:
      "Un test visant cinquante premiers utilisateurs est rejeté parce qu’il ne répond pas aux objectifs commerciaux annuels d’une grande division. Un cadre expérimental aurait évalué un autre type de preuve.",
    takeaway:
      "Adaptez les critères de décision à la nature de l’incertitude explorée.",
    category: "Business et stratégie",
    bookId: "christensen",
    sourceReference:
      "The Innovator’s Dilemma, Harvard Business School Press, 1997",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-schumpeter-1",
    title: "La concurrence ne se joue pas seulement sur le prix",
    hook: "Le concurrent décisif peut changer la manière de répondre au besoin plutôt que vendre moins cher.",
    content: [
      "Schumpeter décrit la destruction créatrice comme un processus de transformation qui renouvelle les structures économiques. De nouveaux biens, procédés, marchés ou modes d’organisation peuvent modifier les conditions de la concurrence, au-delà d’un ajustement marginal des prix.",
      "Cette perspective ne garantit pas que toute nouveauté améliore le sort de tous. Application proposée : surveillez les substituts et les nouveaux usages, pas seulement les offres qui ressemblent déjà à la vôtre. Les coûts de transition et les pertes méritent aussi d’être examinés.",
    ],
    example:
      "Une librairie ne subit pas seulement la remise d’une autre boutique ; les formats numériques modifient aussi l’accès, l’achat et la lecture.",
    takeaway:
      "Cartographiez les autres manières de satisfaire le besoin, même hors de votre catégorie.",
    category: "Business et stratégie",
    bookId: "schumpeter",
    sourceReference: "Capitalism, Socialism and Democracy, chapitre VII, 1942",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-schumpeter-2",
    title: "Une force économique peut devenir une contrainte de changement",
    hook: "Les ressources utiles dans un système ne gardent pas toujours la même valeur lorsque le système change.",
    content: [
      "Le processus décrit par Schumpeter transforme les structures économiques de l’intérieur. Des capacités auparavant avantageuses peuvent perdre de leur importance, tandis que d’autres combinaisons de ressources rendent possibles de nouveaux produits et organisations.",
      "Application proposée : distinguez la valeur actuelle d’un actif et son utilité dans plusieurs scénarios futurs. Cette analyse ne commande pas d’abandonner systématiquement l’existant ; elle évite de confondre un investissement historique important avec une protection durable contre toute transformation.",
    ],
    example:
      "Un réseau de points de vente reste précieux pour certains services, mais ne suffit pas à répondre à une demande de livraison simple et rapide.",
    takeaway:
      "Réévaluez une ressource à partir des usages futurs, pas seulement de ce qu’elle a coûté.",
    category: "Business et stratégie",
    bookId: "schumpeter",
    sourceReference: "Capitalism, Socialism and Democracy, chapitre VII, 1942",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-schumpeter-3",
    title: "L’innovation crée des possibilités et des pertes réelles",
    hook: "Un gain global ne fait pas disparaître les trajectoires bouleversées par une transformation.",
    content: [
      "La destruction créatrice associe le développement de nouvelles activités au déclin d’autres structures. Son intérêt analytique tient précisément à cette dynamique : l’économie se transforme par des processus qui ne distribuent pas leurs effets de manière uniforme.",
      "Application proposée : dans un projet de transformation, documentez les gains attendus mais aussi les compétences déplacées, les transitions et les personnes concernées. Le concept n’est pas une justification morale automatique de toute suppression ni de toute innovation présentée comme inévitable.",
    ],
    example:
      "Une automatisation réduit le traitement manuel. L’organisation prépare les nouvelles tâches et la formation plutôt que de traiter les effets sur le travail comme une simple note de bas de page.",
    takeaway:
      "Une transformation sérieuse décrit aussi qui devra s’adapter et avec quels moyens.",
    category: "Business et stratégie",
    bookId: "schumpeter",
    sourceReference: "Capitalism, Socialism and Democracy, chapitre VII, 1942",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-coase-1",
    title: "Acheter sur le marché a aussi un coût d’organisation",
    hook: "Le prix d’un prestataire ne comprend pas tout le travail nécessaire pour faire fonctionner la relation.",
    content: [
      "Coase interroge l’existence de l’entreprise dans une économie qui pourrait, en principe, coordonner des échanges par les prix. Rechercher un partenaire, négocier, organiser et adapter les contrats génère des coûts qui comptent dans le choix d’une forme de coordination.",
      "Application proposée : comparez une prestation externe au coût complet d’une capacité interne, en incluant le suivi des deux côtés. L’entreprise n’élimine pas les difficultés ; elle remplace certains coûts de transaction par des coûts de coordination administrative.",
    ],
    example:
      "Un service externalise une petite tâche, puis passe plusieurs heures chaque semaine à préciser les demandes, vérifier les livrables et renégocier les exceptions.",
    takeaway:
      "Comparez des modes de coordination complets, pas un tarif externe et un salaire isolés.",
    category: "Business et stratégie",
    bookId: "coase",
    sourceReference: "Economica, 4(16), 1937, p. 386–405",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-coase-2",
    title: "Tout internaliser finit aussi par coûter",
    hook: "Une entreprise peut grandir au-delà de ce qu’elle sait coordonner efficacement.",
    content: [
      "Dans l’analyse de Coase, la coordination interne n’est pas gratuite. À mesure que davantage de transactions sont organisées au sein de l’entreprise, certaines erreurs, difficultés d’information et charges de gestion peuvent augmenter, ce qui contribue à limiter son extension.",
      "Application proposée : pour décider de développer une capacité, examinez qui l’encadrera et comment elle s’articulera aux activités existantes. Réduire la dépendance externe peut être utile, mais ce gain doit être comparé aux nouvelles contraintes créées à l’intérieur.",
    ],
    example:
      "Une petite entreprise recrute pour éviter un fournisseur, sans disposer du temps de supervision ni d’un volume régulier de travail. L’autonomie gagnée peut alors devenir une charge mal absorbée.",
    takeaway:
      "Internaliser signifie aussi construire une capacité de coordination.",
    category: "Business et stratégie",
    bookId: "coase",
    sourceReference: "Economica, 4(16), 1937, p. 386–405",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-coase-3",
    title: "La bonne frontière dépend de la relation concrète",
    hook: "Une activité n’est pas forcément interne ou externe par nature.",
    content: [
      "Coase invite à regarder les coûts relatifs des différentes façons d’organiser les transactions. Ils dépendent des tâches, des informations nécessaires et des possibilités de coordination, pas uniquement d’une préférence générale pour le marché ou pour l’intégration.",
      "Application proposée : réexaminez les décisions lorsque le volume, la technologie ou la stabilité du besoin change. Une solution pertinente au lancement peut devenir peu adaptée à une activité récurrente, et inversement. Cette comparaison doit aussi considérer la qualité et les risques de dépendance.",
    ],
    example:
      "Une traduction ponctuelle est confiée à une spécialiste externe. Lorsque l’entreprise ouvre un service quotidien dans la langue, elle réévalue la nécessité d’une compétence permanente.",
    takeaway:
      "Révisez la frontière d’une activité quand ses conditions de coordination changent.",
    category: "Business et stratégie",
    bookId: "coase",
    sourceReference: "Economica, 4(16), 1937, p. 386–405",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-barney-1",
    title: "Posséder une ressource ne suffit pas à en faire un avantage",
    hook: "Un atout peut être précieux sans vous distinguer des autres.",
    content: [
      "Barney examine les conditions dans lesquelles des ressources peuvent contribuer à un avantage concurrentiel durable. Leur valeur doit être appréciée par rapport aux opportunités et aux menaces, et leur présence chez les concurrents compte aussi.",
      "Application proposée : pour chaque force annoncée, demandez ce qu’elle permet réellement et qui dispose d’un équivalent. Une ressource très coûteuse ou difficile à obtenir ne devient pas automatiquement utile dans le contexte où l’entreprise cherche à l’employer.",
    ],
    example:
      "Une entreprise met en avant son logiciel interne. Si tous les concurrents obtiennent le même résultat avec un outil standard, cet investissement ne constitue pas à lui seul une différenciation.",
    takeaway:
      "Reliez chaque atout à une valeur concrète et à une comparaison pertinente.",
    category: "Business et stratégie",
    bookId: "barney",
    sourceReference: "Journal of Management, 17(1), 1991, p. 99–120",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-barney-2",
    title: "Un avantage peut venir d’une histoire difficile à copier",
    hook: "Certains actifs ne s’achètent pas avec leur simple description.",
    content: [
      "L’approche de Barney souligne notamment le rôle de conditions historiques, d’une causalité difficile à identifier et d’une complexité sociale dans les obstacles à l’imitation. Un concurrent peut voir le résultat sans pouvoir reproduire immédiatement le processus qui l’a rendu possible.",
      "Application proposée : examinez les pratiques, les relations et les apprentissages accumulés derrière une performance. Il ne faut pas transformer cette difficulté en invulnérabilité : d’autres solutions peuvent satisfaire le besoin autrement sans copier les mêmes ressources.",
    ],
    example:
      "Une équipe résout vite des incidents grâce à des années de coopération et de retours d’expérience, pas seulement grâce à un manuel de procédures partagé.",
    takeaway:
      "Cherchez les capacités qui se construisent dans le temps, sans oublier les substituts possibles.",
    category: "Business et stratégie",
    bookId: "barney",
    sourceReference: "Journal of Management, 17(1), 1991, p. 99–120",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-barney-3",
    title: "Une force peut perdre sa valeur sans disparaître",
    hook: "L’existence d’une compétence ne garantit pas que le marché continue à la rémunérer.",
    content: [
      "Dans une analyse fondée sur les ressources, la valeur dépend de leur capacité à répondre aux conditions de l’environnement. Une ressource rare et difficile à imiter peut rester physiquement présente tout en devenant moins pertinente pour les usages et les contraintes actuels.",
      "Application proposée : ne vous contentez pas d’un inventaire annuel des points forts. Confrontez-les aux évolutions du besoin, des alternatives et des coûts. Le fait d’avoir bien exploité un avantage hier ne démontre pas qu’il doit guider tous les investissements de demain.",
    ],
    example:
      "Une expertise de production très spécialisée reste remarquable, mais un changement de matériau déplace la demande vers d’autres procédés.",
    takeaway:
      "Réévaluez la valeur d’une compétence à partir du problème qu’elle résout aujourd’hui.",
    category: "Business et stratégie",
    bookId: "barney",
    sourceReference: "Journal of Management, 17(1), 1991, p. 99–120",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-march-1",
    title: "Devenir meilleur peut empêcher d’apprendre autre chose",
    hook: "L’amélioration d’une solution connue rend parfois les alternatives moins visibles.",
    content: [
      "March distingue l’exploitation de connaissances existantes et l’exploration de nouvelles possibilités. Les retours de l’exploitation sont souvent plus proches et plus prévisibles, ce qui peut attirer les ressources au détriment d’un apprentissage incertain mais important à long terme.",
      "Application proposée : examinez comment les procédures de sélection favorisent les projets déjà mesurables. Il ne s’agit pas de glorifier toute expérimentation, mais de reconnaître que comparer une découverte précoce à une activité mature avec les mêmes critères peut biaiser la décision.",
    ],
    example:
      "Une équipe finance toujours la campagne publicitaire connue et ne teste jamais un autre canal, faute de pouvoir annoncer à l’avance un rendement aussi précis.",
    takeaway:
      "Protégez une place pour les apprentissages dont la valeur ne peut pas encore être chiffrée précisément.",
    category: "Business et stratégie",
    bookId: "march",
    sourceReference: "Organization Science, 2(1), 1991, p. 71–87",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-march-2",
    title: "Une exploration réussie ne ressemble pas toujours à une vente",
    hook: "Un essai peut créer de la connaissance sans produire immédiatement un résultat commercial.",
    content: [
      "Dans le cadre de March, l’exploration porte sur des alternatives, de l’expérimentation et de la recherche. Ses bénéfices sont plus incertains et parfois plus éloignés que ceux de l’exploitation, ce qui complique leur comparaison directe.",
      "Application proposée : définissez à l’avance quelle incertitude un essai doit réduire. Cela évite à la fois de rejeter trop tôt une recherche utile et de prolonger indéfiniment un projet sans apprentissage. Une activité exploratoire doit produire des éléments interprétables.",
    ],
    example:
      "Un prototype révèle que le client visé n’a pas le problème supposé. L’équipe évite plusieurs mois de développement en modifiant son hypothèse.",
    takeaway:
      "Évaluez un essai par la décision qu’il permet de mieux prendre ensuite.",
    category: "Business et stratégie",
    bookId: "march",
    sourceReference: "Organization Science, 2(1), 1991, p. 71–87",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-march-3",
    title: "L’équilibre n’est pas une proportion magique",
    hook: "Répartir les ressources entre aujourd’hui et demain dépend du contexte.",
    content: [
      "March analyse une tension durable plutôt qu’une recette de répartition universelle. Trop d’exploitation peut conduire à une spécialisation fragile ; trop d’exploration peut empêcher de bénéficier des connaissances déjà acquises et de maintenir une activité viable.",
      "Application proposée : ajustez les investissements à la stabilité du marché, aux réserves disponibles et à la qualité des apprentissages. Un pourcentage fixe peut servir de point de discussion, mais ne remplace pas l’examen des risques propres à l’organisation.",
    ],
    example:
      "Une activité très stable améliore son service principal tout en testant quelques alternatives ; une rupture réglementaire peut exiger de revoir temporairement cette répartition.",
    takeaway:
      "Justifiez votre équilibre par les incertitudes réelles plutôt que par un ratio à la mode.",
    category: "Business et stratégie",
    bookId: "march",
    sourceReference: "Organization Science, 2(1), 1991, p. 71–87",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-march-4",
    title: "Les bons résultats peuvent rendre une organisation moins curieuse",
    hook: "Une méthode qui fonctionne fournit aussi des raisons de ne pas en essayer d’autres.",
    content: [
      "March décrit comment les apprentissages et les rendements de l’exploitation peuvent renforcer les choix déjà pratiqués. Une organisation devient plus efficace sur un domaine tout en accumulant moins d’expérience sur les possibilités qu’elle délaisse.",
      "Application proposée : lorsque les résultats sont bons, demandez quelles hypothèses n’ont plus été testées depuis longtemps. Il ne s’agit pas de changer pour le plaisir, mais d’éviter de confondre la supériorité d’une solution et l’absence d’investissement dans les autres.",
    ],
    example:
      "Un canal commercial reçoit toujours les meilleurs vendeurs et les meilleures données. Son avantage apparent ne renseigne pas entièrement sur ce qu’un autre canal pourrait produire avec des moyens comparables.",
    takeaway:
      "Un succès mérite aussi une vérification des alternatives qu’il a cessé de rendre visibles.",
    category: "Business et stratégie",
    bookId: "march",
    sourceReference: "Organization Science, 2(1), 1991, p. 71–87",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-deming-1",
    title: "Une erreur répétée demande d’examiner le système",
    hook: "Remplacer la personne ne corrige pas nécessairement les conditions qui produisent le problème.",
    content: [
      "Deming insiste sur la responsabilité de l’organisation du travail et sur les limites d’une gestion centrée sur les reproches individuels. Des défauts récurrents peuvent venir du procédé, des informations disponibles ou de contraintes qui dépassent la marge d’action de l’opérateur.",
      "Application proposée : avant de demander plus d’attention, cherchez où une erreur devient probable et comment elle pourrait être détectée plus tôt. Cela ne supprime pas toute responsabilité individuelle ; cela évite d’en faire une explication suffisante par défaut.",
    ],
    example:
      "Plusieurs salariés oublient le même document. Une liste de contrôle au moment de l’envoi traite mieux le problème qu’un rappel moral répété à chacun.",
    takeaway:
      "Cherchez les conditions communes derrière les erreurs qui se répètent.",
    category: "Business et stratégie",
    bookId: "deming",
    sourceReference:
      "Out of the Crisis, MIT Center for Advanced Engineering Study, 1986",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-deming-2",
    title: "Une variation ordinaire n’appelle pas toujours une intervention",
    hook: "Réagir à chaque mouvement peut rendre un processus moins stable.",
    content: [
      "Deming distingue l’importance de comprendre la variation d’un système. Des fluctuations peuvent appartenir au fonctionnement courant, tandis que d’autres signalent une cause particulière ; les confondre peut conduire à ajuster sans cesse un processus sur du bruit.",
      "Application proposée : observez une série et son contexte avant de modifier une règle après un seul résultat. L’analyse statistique adaptée reste nécessaire lorsqu’une décision exige de distinguer ces causes ; l’intuition seule ne permet pas toujours de le faire correctement.",
    ],
    example:
      "Un centre de support change les consignes chaque jour après une légère fluctuation du délai moyen, sans tenir compte du volume ni de la variabilité habituelle.",
    takeaway:
      "Avant de corriger, demandez si le signal dépasse réellement la variation attendue.",
    category: "Business et stratégie",
    bookId: "deming",
    sourceReference:
      "Out of the Crisis, MIT Center for Advanced Engineering Study, 1986",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-deming-3",
    title: "Un quota peut déplacer le problème hors du tableau",
    hook: "Atteindre un chiffre ne garantit pas l’amélioration du service qu’il était censé représenter.",
    content: [
      "Dans Out of the Crisis, Deming critique les objectifs numériques isolés et les dispositifs qui demandent un résultat sans améliorer les moyens de l’obtenir. La pression sur une mesure peut favoriser des comportements qui rendent le chiffre meilleur sans améliorer le système.",
      "Application proposée : accompagnez l’indicateur de critères de qualité et examinez les effets sur les autres étapes. Le problème n’est pas toute mesure, mais son utilisation comme substitut à la compréhension du travail et de ses contraintes.",
    ],
    example:
      "Un atelier accélère pour atteindre son volume, puis reporte les contrôles et augmente les retouches. La production affichée progresse, mais les livraisons fiables reculent.",
    takeaway:
      "Mesurez l’effet final sur le système, pas seulement la réussite locale d’un quota.",
    category: "Business et stratégie",
    bookId: "deming",
    sourceReference:
      "Out of the Crisis, MIT Center for Advanced Engineering Study, 1986",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-sarasvathy-1",
    title: "On peut commencer par ses moyens plutôt que par un grand plan",
    hook: "Sous forte incertitude, l’objectif peut se préciser au contact de ce qu’on peut déjà faire.",
    content: [
      "Sarasvathy distingue une logique causale, qui part d’un effet recherché pour sélectionner les moyens, d’une logique d’effectuation, qui part des moyens disponibles pour envisager plusieurs effets possibles. Les deux logiques ne sont pas des camps universellement opposés.",
      "Application proposée : inventoriez vos compétences, vos connaissances et vos relations avant d’attendre une prévision complète du marché. Cette approche ne remplace pas toutes les analyses ; elle aide à agir lorsque les buts et les conditions sont encore en construction.",
    ],
    example:
      "Une spécialiste du dessin connaît plusieurs enseignants. Elle teste un atelier avec eux avant de décider si elle veut créer une école, un outil ou une collection de supports.",
    takeaway:
      "Cherchez une action accessible qui ouvre des options plutôt qu’un plan exigeant des moyens inexistants.",
    category: "Business et stratégie",
    bookId: "sarasvathy",
    sourceReference: "Academy of Management Review, 26(2), 2001, p. 243–263",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-sarasvathy-2",
    title: "Définir une perte acceptable change le premier pas",
    hook: "Il est parfois plus utile de savoir ce qu’on peut risquer que de prédire un rendement précis.",
    content: [
      "Dans l’effectuation, la perte acceptable joue un rôle important : l’engagement est délimité par les moyens que l’entrepreneur peut se permettre de perdre, plutôt que par le seul calcul d’un rendement attendu dans un futur très incertain.",
      "Application proposée : fixez une limite de temps, d’argent et d’exposition personnelle avant un essai. Ce plafond ne rend pas le projet souhaitable à lui seul ; il permet de mener un apprentissage sans transformer une hypothèse fragile en engagement impossible à absorber.",
    ],
    example:
      "Vous consacrez deux week-ends et un budget limité à un atelier pilote, sans engager immédiatement un bail annuel pour un local.",
    takeaway:
      "Définissez un risque supportable avant de chercher à rendre une prévision rassurante.",
    category: "Business et stratégie",
    bookId: "sarasvathy",
    sourceReference: "Academy of Management Review, 26(2), 2001, p. 243–263",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-sarasvathy-3",
    title: "Un partenaire peut aussi transformer l’objectif",
    hook: "Un engagement concret apporte parfois plus qu’une opinion favorable sur votre idée.",
    content: [
      "Dans le cadre de Sarasvathy, les engagements de parties prenantes peuvent contribuer à construire le projet et à réduire certaines incertitudes. Les objectifs évoluent avec les moyens et les contraintes apportés par ces relations, au lieu de rester entièrement fixés au départ.",
      "Application proposée : distinguez une marque d’intérêt d’un engagement qui change les possibilités. Un partenariat doit toutefois être explicite sur les contreparties ; l’ouverture aux propositions ne signifie pas accepter toute direction ni ignorer les rapports de pouvoir.",
    ],
    example:
      "Une association met une salle et un premier public à disposition. Le format de l’offre se précise avec cette ressource concrète, plutôt qu’à partir d’un sondage abstrait supplémentaire.",
    takeaway:
      "Demandez ce qu’un interlocuteur est prêt à engager, et ce que cela transforme dans le projet.",
    category: "Business et stratégie",
    bookId: "sarasvathy",
    sourceReference: "Academy of Management Review, 26(2), 2001, p. 243–263",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-sarasvathy-4",
    title: "Un imprévu peut devenir une ressource sans devenir un miracle",
    hook: "Une déviation n’est pas nécessairement un échec du plan, mais elle demande encore un choix.",
    content: [
      "L’effectuation accorde une place à l’exploitation des contingences : certains événements inattendus peuvent ouvrir de nouveaux chemins. Cela suppose une capacité à les interpréter avec les moyens et les engagements disponibles, plutôt qu’une croyance selon laquelle tout incident serait bénéfique.",
      "Application proposée : après un imprévu, distinguez ce qui est perdu, ce qui reste possible et ce qui apparaît. La flexibilité n’exige pas d’abandonner toutes les limites, notamment les pertes acceptables et les obligations déjà prises envers les partenaires.",
    ],
    example:
      "Un atelier attire surtout un public différent de celui imaginé. Vous examinez son besoin et sa volonté de revenir avant de décider s’il faut adapter l’offre.",
    takeaway:
      "Traitez l’imprévu comme une information à examiner, pas comme un ordre à suivre.",
    category: "Business et stratégie",
    bookId: "sarasvathy",
    sourceReference: "Academy of Management Review, 26(2), 2001, p. 243–263",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-ries-1",
    title: "Un premier produit doit tester quelque chose de précis",
    hook: "Réduire le nombre de fonctionnalités ne suffit pas à construire une expérience utile.",
    content: [
      "Chez Ries, un produit minimum viable sert un apprentissage sur des hypothèses importantes du projet. Sa petite taille n’est pas une fin en soi : il doit permettre d’observer quelque chose qui influence la décision de poursuivre, de modifier ou d’arrêter.",
      "Application proposée : écrivez l’hypothèse, l’observation attendue et l’usage du résultat avant de développer. Un test ne dispense pas du respect de la sécurité, de la confidentialité ou des engagements ; ces exigences ne deviennent pas optionnelles parce que le produit est expérimental.",
    ],
    example:
      "Avant de construire un outil complet, une équipe réalise manuellement le service pour quelques clients et observe s’ils l’utilisent à nouveau.",
    takeaway:
      "Le minimum pertinent est ce qui suffit à tester l’incertitude décisive.",
    category: "Business et stratégie",
    bookId: "ries",
    sourceReference:
      "The Lean Startup, parties « Steer » et « Accelerate », 2011",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-ries-2",
    title: "Un chiffre flatteur peut cacher l’absence de progrès",
    hook: "Plus d’inscrits ne signifie pas forcément que le produit rend un service durable.",
    content: [
      "Ries distingue des mesures qui aident à décider de celles qui offrent surtout une image flatteuse de l’activité. Un total cumulé monte souvent même lorsque les nouveaux utilisateurs ne reviennent pas et que les modifications n’améliorent rien.",
      "Application proposée : observez les comportements par cohortes et reliez les mesures aux hypothèses du produit. Un indicateur simple peut suffire s’il distingue plusieurs décisions possibles ; un tableau sophistiqué reste inutile s’il ne permet pas d’interpréter un changement.",
    ],
    example:
      "Les inscriptions augmentent grâce à la publicité, mais les nouveaux utilisateurs abandonnent après une première visite. Le total masque la difficulté de rétention.",
    takeaway:
      "Choisissez un indicateur qui peut contredire votre récit de progrès.",
    category: "Business et stratégie",
    bookId: "ries",
    sourceReference:
      "The Lean Startup, parties « Steer » et « Accelerate », 2011",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-ries-3",
    title: "Changer de cap ne veut pas dire tout recommencer",
    hook: "Un apprentissage peut conduire à modifier une hypothèse tout en conservant d’autres éléments utiles.",
    content: [
      "Dans The Lean Startup, le pivot est un changement structuré visant à tester une nouvelle hypothèse fondamentale sur le produit, le modèle ou la croissance. Il se distingue d’une suite de modifications sans rapport ni critère de décision.",
      "Application proposée : explicitez ce qui change, ce qui reste et pourquoi les données justifient cette évolution. Un pivot ne devient pas bon par sa seule audace ; il demande un nouveau test et un risque que l’organisation peut encore assumer.",
    ],
    example:
      "Un outil prévu pour des particuliers est surtout utilisé par de petites équipes. L’entreprise teste une offre collective sans reconstruire immédiatement toute sa technologie.",
    takeaway:
      "Un changement de cap utile conserve les apprentissages et formule une nouvelle hypothèse testable.",
    category: "Business et stratégie",
    bookId: "ries",
    sourceReference:
      "The Lean Startup, parties « Steer » et « Accelerate », 2011",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-blue-ocean-1",
    title: "Sortir de la comparaison peut demander de supprimer des choses",
    hook: "Une offre différente n’est pas nécessairement une offre qui en ajoute davantage.",
    content: [
      "Kim et Mauborgne proposent d’examiner les facteurs à éliminer, réduire, augmenter ou créer pour recomposer la proposition de valeur. Le cadre vise à ne pas accepter automatiquement les dimensions de concurrence déjà installées dans une catégorie.",
      "Application proposée : demandez quels coûts et quelles complications servent surtout les habitudes du secteur plutôt que le besoin du public visé. Cette méthode n’est pas une garantie d’espace sans concurrence ; les compromis et la réaction du marché doivent encore être testés.",
    ],
    example:
      "Un service de formation retire des certifications accessoires pour proposer un accompagnement plus court, centré sur une pratique vérifiable et un coût accessible.",
    takeaway:
      "Cherchez ce qui peut être retiré pour rendre la valeur plus claire et plus abordable.",
    category: "Business et stratégie",
    bookId: "blue-ocean",
    sourceReference: "Blue Ocean Strategy, Harvard Business School Press, 2005",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-blue-ocean-2",
    title: "Les non-clients peuvent montrer une autre définition de la valeur",
    hook: "Améliorer l’offre pour les habitués ne révèle pas toujours pourquoi d’autres n’y entrent jamais.",
    content: [
      "Blue Ocean Strategy invite à examiner des publics qui restent en dehors du marché actuel. Leur absence peut venir du prix, de la complexité, d’un usage mal adapté ou d’une raison que les clients existants ne rencontrent plus.",
      "Application proposée : interrogez les personnes qui renoncent ou contournent le service, sans supposer qu’elles attendent seulement une réduction. Leur nombre ne suffit pas à prouver une demande rentable ; il faut comprendre le problème et vérifier qu’une solution serait effectivement adoptée.",
    ],
    example:
      "Une salle de sport cherche les personnes qui n’osent pas y entrer. Elle découvre un besoin d’accompagnement et de simplicité que de nouveaux équipements n’auraient pas résolu.",
    takeaway:
      "Étudiez les raisons de l’absence, pas seulement les préférences des personnes déjà présentes.",
    category: "Business et stratégie",
    bookId: "blue-ocean",
    sourceReference: "Blue Ocean Strategy, Harvard Business School Press, 2005",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
  {
    id: "extended-blue-ocean-3",
    title: "Un positionnement doit se voir dans les choix de l’offre",
    hook: "Se dire différent ne suffit pas si le client rencontre exactement les mêmes compromis.",
    content: [
      "Le canevas stratégique de Kim et Mauborgne compare les facteurs sur lesquels les offres investissent et la valeur qu’elles rendent visible. Il aide à observer si une promesse correspond à un profil réellement distinct ou seulement à un discours différent.",
      "Application proposée : choisissez quelques critères compréhensibles et comparez des expériences concrètes. Le dessin reste une simplification ; il ne remplace pas les coûts, les usages et les preuves d’achat. Son utilité tient aux décisions qu’il rend discutables.",
    ],
    example:
      "Un service promet la simplicité, mais exige autant d’étapes que ses concurrents. Comparer le parcours réel révèle que la différence annoncée n’existe pas encore dans l’usage.",
    takeaway:
      "Vérifiez votre positionnement dans l’expérience du client, pas seulement dans votre présentation.",
    category: "Business et stratégie",
    bookId: "blue-ocean",
    sourceReference: "Blue Ocean Strategy, Harvard Business School Press, 2005",
    verificationStatus: "synthèse originale",
    readingTime: 1,
    createdAt: "2026-11-01T00:00:00.000Z",
  },
];
