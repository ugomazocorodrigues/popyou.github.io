<template>
  <div>
    <v-snackbar
      v-model="snackbar.show"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      top
      text
    >
      {{ snackbar.text }}
    </v-snackbar>

    <v-row class="ma-2">
      <v-col cols="2">
        <v-card flat>
          <v-card-title class="grey lighten-4">ORDENAR</v-card-title>
          <v-card-text> </v-card-text>
        </v-card>
        <v-sheet class="grey lighten-3" rounded="lg">
          <v-list color="transparent">
            <v-list-item
              v-for="(ordem, i) in ordens"
              :key="i"
              link
              @click="clickOrdenar(i)"
            >
              <v-list-item-content>
                <v-list-item-title>{{ ordem.label }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>

        <v-card flat>
          <v-card-title class="grey lighten-4 mt-8">FILTRAR</v-card-title>
          <v-card-text> </v-card-text>
        </v-card>
        <v-sheet class="grey lighten-3" rounded="lg">
          <v-list color="transparent">
            <v-list-item
              v-for="(grupo, i) in grupos"
              :key="i"
              link
              @click="clickFiltrar(grupo)"
            >
              <v-list-item-content>
                <v-list-item-title>{{ grupo }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="white" height="100%" rounded="lg">
          <v-row justify="center" align="start" no-gutters>
            <v-card
              v-for="(produto, i) in produtosSearch"
              :key="i"
              flat
              tile
              max-width="269"
              class="ma-5"
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
                <v-btn color="amarelo" large @click="clickComprar(produto.id)"
                  >comprar</v-btn
                >
              </v-row>
            </v-card>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ordemSelecionada: 0,
      ordens: [
        { label: "A - Z", campo: "nome", sentido: 1 },
        { label: "Z - A", campo: "nome", sentido: -1 },
        { label: "menor preço", campo: "preco", sentido: 1 },
        { label: "maior preço", campo: "preco", sentido: -1 },
        { label: "mais vendidos", campo: "vendas", sentido: -1 },
      ],
      snackbar: {
        text: "",
        color: "",
        timeout: 3000,
        show: false,
      },
    };
  },

  computed: {
    search() {
      return this.$store.state.search
        ? this.$store.state.search.toLowerCase()
        : "";
    },

    produtosSearch() {
      const campo = this.ordens[this.ordemSelecionada].campo;
      const sentido = this.ordens[this.ordemSelecionada].sentido;

      return this.$store.state.produtos
        .filter((produto) => produto.nome.toLowerCase().includes(this.search))
        .sort((a, b) => (a[campo] > b[campo] ? sentido : -sentido));
    },

    grupos() {
      return [
        ...new Set(this.$store.state.produtos.map((produto) => produto.grupo)),
      ].sort();
    },
  },

  methods: {
    clickOrdenar(i) {
      this.ordemSelecionada = i;
    },

    clickFiltrar(grupo) {
      this.$store.state.search = grupo;
    },

    clickComprar(id) {
      const item = {
        id,
        quantidade: 1,
      };

      this.$store.state.carrinho.itens.push(item);
      const produto = this.$store.state.produtos.find(
        (produto) => produto.id == id
      );

      this.snackbar.text = `${produto.nome} adicionado ao carrinho!`;
      this.snackbar.color = "verde";
      this.snackbar.show = true;
    },
  },
};
</script>

<style>
</style>