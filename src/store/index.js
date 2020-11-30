import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: "",
    produtos: [
      {
        id: 1,
        nome: "Caneca Chilling Sabrina",
        grupo: "caneca",
        img: {
          src: require("@/assets/mugSabrina.png"),
          alt: "Caneca Chilling Sabrina",
        },
        preco: 15.0,
        vendas: 1,
        propriedades: {
          seuNome: false,
          tamanho: false,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "Pode ser levado ao microondas",
          "Cerâmica",
          "Impressão em alta definição",
          "Não sai ao lavar",
          "Capacidade: 325 ml"
        ]
      },
      {
        id: 2,
        nome: "Camiseta Ghostbusters",
        grupo: "camiseta",
        img: {
          src: require("@/assets/ghostbustersCamiseta.png"),
          alt: "Camiseta Ghostbusters",
        },
        preco: 40.0,
        vendas: 2,
        propriedades: {
          seuNome: false,
          tamanho: true,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "100% algodão",
          "Fabricação 100% brasileira",
          "Manga curta"
        ]
      },
      {
        id: 3,
        nome: "Caderno The Good Place",
        grupo: "caderno",
        img: {
          src: require("@/assets/notebookTheGoodPlace.png"),
          alt: "Caderno The Good Place",
        },
        preco: 15.0,
        vendas: 2,
        propriedades: {
          seuNome: false,
          tamanho: false,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "Capa dura",
          "Com espiral",
          "96 folhas sem pauta",
          "Formato A5 (148mm x 210mm)"
        ]
      },
      {
        id: 4,
        nome: "Caneca Ghostbusters",
        grupo: "caneca",
        img: {
          src: require("@/assets/mugGhostbusters.png"),
          alt: "Caneca Ghostbusters",
        },
        preco: 10.0,
        vendas: 4,
        propriedades: {
          seuNome: false,
          tamanho: false,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "Pode ser levado ao microondas",
          "Cerâmica",
          "Impressão em alta definição",
          "Não sai ao lavar",
          "Capacidade: 325 ml"
        ]
      },
      {
        id: 5,
        nome: "Camiseta Scooby-Doo",
        grupo: "camiseta",
        img: {
          src: require("@/assets/camisetaScooby.png"),
          alt: "Camiseta Scooby-Doo",
        },
        preco: 40.0,
        vendas: 4,
        propriedades: {
          seuNome: false,
          tamanho: true,
          carregarImagem: false,
          cor: true
        },
        caracteristicas: [
          "100% algodão",
          "Fabricação 100% brasileira",
          "Manga curta"
        ]
      },
      {
        id: 6,
        nome: "Caderno The Nightmare Before Christmas",
        grupo: "caderno",
        img: {
          src: require("@/assets/cadernoChristmas.png"),
          alt: "Caderno The Nightmare Before Christmas",
        },
        preco: 20.0,
        vendas: 4,
        propriedades: {
          seuNome: false,
          tamanho: false,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "Capa dura",
          "Com espiral",
          "96 folhas sem pauta",
          "Formato A5 (148mm x 210mm)"
        ]
      },
      {
        id: 7,
        nome: "Caderno Star Wars Customizável",
        grupo: "caderno",
        img: {
          src: require("@/assets/cadernoStarWars.png"),
          alt: "Caderno Star Wars Customizável",
        },
        preco: 25.0,
        vendas: 5,
        propriedades: {
          seuNome: true,
          tamanho: false,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "Capa dura",
          "Com espiral",
          "96 folhas sem pauta",
          "Formato A5 (148mm x 210mm)"
        ]
      },
      {
        id: 8,
        nome: "Capinha de iPhone 6 Customizável",
        grupo: "capinha",
        img: {
          src: require("@/assets/caseCustomizavel.png"),
          alt: "Capinha de iPhone 6 Customizável",
        },
        preco: 30.0,
        vendas: 1,
        propriedades: {
          seuNome: false,
          tamanho: false,
          carregarImagem: true,
          cor: false
        },
        caracteristicas: [
          "Pode ser levado ao microondas",
          "Cerâmica",
          "Impressão em alta definição",
          "Não sai ao lavar",
          "Capacidade: 325 ml"
        ]
      },
      {
        id: 9,
        nome: "Caneca Customizável",
        grupo: "caneca",
        img: {
          src: require("@/assets/mugCustomizável.png"),
          alt: "Caneca Customizável",
        },
        preco: 10.0,
        vendas: 1,
        propriedades: {
          seuNome: false,
          tamanho: false,
          carregarImagem: true,
          cor: false
        },
        caracteristicas: [
          "Pode ser levado ao microondas",
          "Cerâmica",
          "Impressão em alta definição",
          "Não sai ao lavar",
          "Capacidade: 325 ml"
        ]
      },
      {
        id: 10,
        nome: "Caderno Steven Universe Customizável",
        grupo: "caderno",
        img: {
          src: require("@/assets/notebookStevenUniverseCustomizavel.png"),
          alt: "Caderno Steven Universe Customizável",
        },
        preco: 25.0,
        vendas: 3,
        propriedades: {
          seuNome: true,
          tamanho: false,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "Capa dura",
          "Com espiral",
          "96 folhas sem pauta",
          "Formato A5 (148mm x 210mm)"
        ]
      },
      {
        id: 11,
        nome: "Camiseta Customizável",
        grupo: "camiseta",
        img: {
          src: require("@/assets/camisetaCustomizavel.png"),
          alt: "Camiseta Customizável",
        },
        preco: 40.0,
        vendas: 1,
        propriedades: {
          seuNome: false,
          tamanho: true,
          carregarImagem: true,
          cor: true
        },
        caracteristicas: [
          "100% algodão",
          "Fabricação 100% brasileira",
          "Manga curta"
        ]
      },
      {
        id: 12,
        nome: "Caderno Malevola",
        grupo: "caderno",
        img: {
          src: require("@/assets/cadernoMalevola.png"),
          alt: "Caderno Malevola",
        },
        preco: 20.0,
        vendas: 1,
        propriedades: {
          seuNome: false,
          tamanho: false,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "Capa dura",
          "Com espiral",
          "96 folhas sem pauta",
          "Formato A5 (148mm x 210mm)"
        ]
      },
      {
        id: 13,
        nome: "Caneca Julie and The Phantoms",
        grupo: "caneca",
        img: {
          src: require("@/assets/mugJulie.png"),
          alt: "Caneca Julie and The Phantoms",
        },
        preco: 10.0,
        vendas: 3,
        propriedades: {
          seuNome: false,
          tamanho: false,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "Pode ser levado ao microondas",
          "Cerâmica",
          "Impressão em alta definição",
          "Não sai ao lavar",
          "Capacidade: 325 ml"
        ]
      },
      {
        id: 14,
        nome: "Caneca The Nightmare Before Christmas Customizável",
        grupo: "caneca",
        img: {
          src: require("@/assets/mugChristmasCustomizavel.png"),
          alt: "Caneca The Nightmare Before Christmas Customizável",
        },
        preco: 15.0,
        vendas: 2,
        propriedades: {
          seuNome: true,
          tamanho: false,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "Pode ser levado ao microondas",
          "Cerâmica",
          "Impressão em alta definição",
          "Não sai ao lavar",
          "Capacidade: 325 ml"
        ]
      },
      {
        id: 15,
        nome: "Caneca Sunset Curve",
        grupo: "caneca",
        img: {
          src: require("@/assets/mugSunsetCurve.png"),
          alt: "Caneca Sunset Curve",
        },
        preco: 10.0,
        vendas: 3,
        propriedades: {
          seuNome: false,
          tamanho: false,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "Pode ser levado ao microondas",
          "Cerâmica",
          "Impressão em alta definição",
          "Não sai ao lavar",
          "Capacidade: 325 ml"
        ]
      },
      {
        id: 16,
        nome: "Camiseta Conan Gray Checkmate",
        grupo: "camiseta",
        img: {
          src: require("@/assets/camisetaConan.png"),
          alt: "Camiseta Conan Gray Checkmate",
        },
        preco: 40.0,
        vendas: 5,
        propriedades: {
          seuNome: false,
          tamanho: true,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "100% algodão",
          "Fabricação 100% brasileira",
          "Manga curta"
        ]
      },
      {
        id: 17,
        nome: "Camiseta Julie and The Phantoms",
        grupo: "camiseta",
        img: {
          src: require("@/assets/camisetaPhamtons.png"),
          alt: "Camiseta Julie and The Phantoms",
        },
        preco: 40.0,
        vendas: 5,
        propriedades: {
          seuNome: false,
          tamanho: true,
          carregarImagem: false,
          cor: false
        },
        caracteristicas: [
          "100% algodão",
          "Fabricação 100% brasileira",
          "Manga curta"
        ]
      },
    ],
    carrinho: {
      itens: [
        // {
        //   id: 2,
        //   quantidade: 1,
        // },
        // {
        //   id: 10,
        //   quantidade: 2,
        // },
        // {
        //   id: 15,
        //   quantidade: 3,
        // },
      ]
    }
  },

  mutations: {
  },

  actions: {
  },

  modules: {
  }
})
