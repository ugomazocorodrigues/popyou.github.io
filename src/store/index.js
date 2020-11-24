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
        img: require("@/assets/mugSabrina.png"),
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
        img: require("@/assets/ghostbustersCamiseta.png"),
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
        img: require("@/assets/notebookTheGoodPlace.png"),
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
        img: require("@/assets/mugGhostbusters.png"),
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
        img: require("@/assets/camisetaScooby.png"),
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
        img: require("@/assets/cadernoChristmas.png"),
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
        img: require("@/assets/cadernoStarWars.png"),
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
        img: require("@/assets/caseCustomizavel.png"),
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
        img: require("@/assets/mugCustomizável.png"),
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
        img: require("@/assets/notebookStevenUniverseCustomizavel.png"),
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
        img: require("@/assets/camisetaCustomizavel.png"),
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
        img: require("@/assets/cadernoMalevola.png"),
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
        img: require("@/assets/mugJulie.png"),
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
        img: require("@/assets/mugChristmasCustomizavel.png"),
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
        img: require("@/assets/mugSunsetCurve.png"),
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
        img: require("@/assets/camisetaConan.png"),
        preco: 10.0,
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
        img: require("@/assets/camisetaPhamtons.png"),
        preco: 10.0,
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
