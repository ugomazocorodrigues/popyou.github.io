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
      },
      {
        id: 2,
        nome: "Camiseta Ghostbusters",
        grupo: "camiseta",
        img: require("@/assets/ghostbustersCamiseta.png"),
        preco: 40.0,
        vendas: 2,
      },
      {
        id: 3,
        nome: "Caderno The Good Place",
        grupo: "caderno",
        img: require("@/assets/notebookTheGoodPlace.png"),
        preco: 15.0,
        vendas: 2,
      },
      {
        id: 4,
        nome: "Caneca Ghostbusters",
        grupo: "caneca",
        img: require("@/assets/mugGhostbusters.png"),
        preco: 10.0,
        vendas: 4,
      },
      {
        id: 5,
        nome: "Camiseta Scooby-Doo",
        grupo: "camiseta",
        img: require("@/assets/camisetaScooby.png"),
        preco: 40.0,
        vendas: 4,
      },
      {
        id: 6,
        nome: "Caderno The Nightmare Before Christmas",
        grupo: "caderno",
        img: require("@/assets/cadernoChristmas.png"),
        preco: 20.0,
        vendas: 4,
      },
      {
        id: 7,
        nome: "Caderno Star Wars Customizável",
        grupo: "caderno",
        img: require("@/assets/cadernoStarWars.png"),
        preco: 25.0,
        vendas: 5,
      },
      {
        id: 8,
        nome: "Capinha de iPhone 6 Customizável",
        grupo: "capinha",
        img: require("@/assets/caseCustomizavel.png"),
        preco: 30.0,
        vendas: 1,
      },
      {
        id: 9,
        nome: "Caneca Customizável",
        grupo: "caneca",
        img: require("@/assets/mugCustomizável.png"),
        preco: 10.0,
        vendas: 1,
      },
      {
        id: 10,
        nome: "Caderno Steven Universe Customizável",
        grupo: "caderno",
        img: require("@/assets/notebookStevenUniverseCustomizavel.png"),
        preco: 25.0,
        vendas: 3,
      },
      {
        id: 11,
        nome: "Camiseta Customizável",
        grupo: "camiseta",
        img: require("@/assets/camisetaCustomizavel.png"),
        preco: 40.0,
        vendas: 1,
      },
      {
        id: 12,
        nome: "Caderno Malevola",
        grupo: "caderno",
        img: require("@/assets/cadernoMalevola.png"),
        preco: 20.0,
        vendas: 1,
      },
      {
        id: 13,
        nome: "Caneca Julie and The Phantoms",
        grupo: "caneca",
        img: require("@/assets/mugJulie.png"),
        preco: 10.0,
        vendas: 3,
      },
      {
        id: 14,
        nome: "Caneca The Nightmare Before Christmas Customizável",
        grupo: "caneca",
        img: require("@/assets/mugChristmasCustomizavel.png"),
        preco: 15.0,
        vendas: 2,
      },
      {
        id: 15,
        nome: "Caneca Sunset Curve",
        grupo: "caneca",
        img: require("@/assets/mugSunsetCurve.png"),
        preco: 10.0,
        vendas: 3,
      },
      {
        id: 16,
        nome: "Camiseta Conan Gray Checkmate",
        grupo: "camiseta",
        img: require("@/assets/camisetaConan.png"),
        preco: 10.0,
        vendas: 5,
      },
      {
        id: 17,
        nome: "Camiseta Julie and The Phantoms",
        grupo: "camiseta",
        img: require("@/assets/camisetaPhamtons.png"),
        preco: 10.0,
        vendas: 5,
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
