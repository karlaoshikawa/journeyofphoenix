interface InformationSection {
  title: string;
  image?: string;
  link?: string;
  description?: string;
  descriptionModal?: string;
  imagesModal?: string[];
}

const informations: Record<string, InformationSection> = {
  guilda: {
    title: "Guilda das Guerreiras de Fogo",
    image: "/guilda.png",
    link: "/guilda",
    description:
      "A Guilda das Guerreiras de Fogo é composta por mulheres destemidas.",
    descriptionModal:
      "Elas dominam as chamas para proteger seu povo, enfrentam desafios com coragem, e são conhecidas por sua força, determinação e habilidade em combate.",
  },
  guardianSpirit: {
    title: "Espírito Guardião",
    image: "/fenix.jpg",
    description: "Invocar a Fênix é uma habilidade lendária.",
    descriptionModal:
      "A Fênix é um símbolo de renascimento e poder. Ao invocá-la, as Guerreiras de Fogo canalizam uma energia imensa, capaz de transformar o campo de batalha e inspirar aliados.",
  },
  members: {
    title: "Membros",
    image: "/members/members.png",
    description:
      "A Guilda das Guerreiras de Fogo é composta por mulheres destemidas.",
    descriptionModal:
      "Mulheres corajosas que compartilham a mesma determinação e força. Juntas, elas formam uma equipe unida e poderosa, pronta para enfrentar qualquer desafio.",
    imagesModal: [
      "/members/fire-01.jpg",
      "/members/fire-02.jpg",
      "/members/fire03.jpg",
      "/members/fire04.jpg",
    ],
  },
  perfil: {
    title: "Ember Cindria",
    image: "/perfil.png",
    description: "Ember Cindria é uma guerreira destemida.",
    descriptionModal:
      "Ela é conhecida por sua habilidade em controlar o fogo, sua determinação inabalável e sua coragem em batalhas.",
  },
  skills: {
    title: "Skills",
    image: "/power.jpg",
    description: "Habilidades únicas das Guerreiras de Fogo.",
    descriptionModal:
      "Seus poderes incluem a capacidade de criar explosões de fogo, formar barreiras flamejantes, e canalizar energia térmica para aumentar sua força e velocidade em batalha.",
  },
  lastbattles: {
    title: "Últimas Batalhas",
    image: "/ember-battle-03.jpg",
    description: "Histórico das batalhas mais recentes das Guerreiras de Fogo.",
    descriptionModal:
      "As últimas batalhas mostram a coragem e a estratégia das Guerreiras de Fogo, enfrentando inimigos formidáveis e superando desafios com maestria. Cada vitória reforça sua reputação como defensoras lendárias.",
    imagesModal: [
      "/ember-battle.jpg",
      "/ember-battle-02.jpg",
      "/ember-battle-03.jpg",
    ],
  },
};

export default informations;
