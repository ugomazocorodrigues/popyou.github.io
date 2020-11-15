<template>
  <v-row class="ma-2">
    <v-col cols="2">
      <v-card flat>
        <v-card-title class="grey lighten-4"> ORDENAR POR </v-card-title>
        <v-card-text> </v-card-text>
      </v-card>
      <v-sheet class="grey lighten-3 mt-8" rounded="lg">
        <v-list color="transparent">
          <v-list-item v-for="n in 5" :key="n" link>
            <v-list-item-content>
              <v-list-item-title> List Item {{ n }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="my-2"></v-divider>

          <v-list-item link color="grey lighten-4">
            <v-list-item-content>
              <v-list-item-title> Refresh </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-col>

    <v-col>
      <v-sheet class="grey lighten-3" height="100%" rounded="lg">
        <v-row justify="center" no-gutters>
          <v-card
            v-for="(produto, i) in produtosSearch"
            flat
            tile
            max-width="269"
            class="ma-5"
            :key="i"
          >
            <v-img :src="produto.img" height="293"></v-img>
            <v-row class="ma-2" justify="center">
              <v-card-title>{{ produto.nome }}</v-card-title>
            </v-row>
            <v-row justify="center">
              <v-card-title class="">
                R$
                {{
                  produto.preco.toFixed(2).toString().replace(".", ",")
                }}</v-card-title
              >
            </v-row>
            <v-row justify="center" class="mb-4">
              <v-btn color="#FFC71F" large>COMPRAR</v-btn>
            </v-row>
          </v-card>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      produtos: [
        {
          id: 1,
          nome: "Caneca Chilling Sabrina",
          img: require("@/assets/mugSabrina.png"),
          preco: 15.0,
        },
        {
          id: 2,
          nome: "Camiseta Ghostbusters",
          img: require("@/assets/ghostbustersCamiseta.png"),
          preco: 40.0,
        },
        {
          id: 3,
          nome: "Caderno The Good Place",
          img: require("@/assets/notebookTheGoodPlace.png"),
          preco: 15.0,
        },
        {
          id: 4,
          nome: "Caneca Ghostbusters",
          img: require("@/assets/mugSabrina.png"),
          preco: 10.0,
        },
        {
          id: 5,
          nome: "Camiseta Scooby-Doo",
          img: require("@/assets/ghostbustersCamiseta.png"),
          preco: 40.0,
        },
        {
          id: 6,
          nome: "Caderno The Nightmare Before Christmas",
          img: require("@/assets/notebookTheGoodPlace.png"),
          preco: 20.0,
        },
        {
          id: 7,
          nome: "Caderno Star Wars Customizável",
          img: require("@/assets/mugSabrina.png"),
          preco: 25.0,
        },
        {
          id: 8,
          nome: "Capinha de iPhone 6 Customizável",
          img: require("@/assets/ghostbustersCamiseta.png"),
          preco: 30.0,
        },
        {
          id: 9,
          nome: "Caneca Customizável",
          img: require("@/assets/notebookTheGoodPlace.png"),
          preco: 10.0,
        },
        {
          id: 10,
          nome: "Caderno Steven Universe Customizável",
          img: require("@/assets/mugSabrina.png"),
          preco: 25.0,
        },
        {
          id: 11,
          nome: "Camiseta Customizável",
          img: require("@/assets/ghostbustersCamiseta.png"),
          preco: 40.0,
        },
        {
          id: 12,
          nome: "Caderno Malevola",
          img: require("@/assets/notebookTheGoodPlace.png"),
          preco: 20.0,
        },
        {
          id: 13,
          nome: "Caneca Julie and The Phantoms",
          img: require("@/assets/mugSabrina.png"),
          preco: 10.0,
        },
        {
          id: 14,
          nome: "Caneca The Nightmare Before Christmas Customizável",
          img: require("@/assets/ghostbustersCamiseta.png"),
          preco: 15.0,
        },
        {
          id: 15,
          nome: "Caneca Sunset Curve",
          img: require("@/assets/notebookTheGoodPlace.png"),
          preco: 10.0,
        },
        {
          id: 16,
          nome: "Camista Conan Gray Checkmate",
          img: require("@/assets/notebookTheGoodPlace.png"),
          preco: 10.0,
        },
        {
          id: 17,
          nome: "Camista Julie and The Phantoms",
          img: require("@/assets/notebookTheGoodPlace.png"),
          preco: 10.0,
        },
      ],
    };
  },
  computed: {
    search() {
      return this.$store.state.search
        ? this.$store.state.search.toLowerCase()
        : "";
    },
    produtosSearch() {
      if (!this.search) {
        return this.produtos;
      } else {
        return this.produtos.filter((produto) =>
          produto.nome.toLowerCase().includes(this.search)
        );
      }
    },
  },
};
</script>

<style>
</style>