<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs" divider=">" large />
    <v-snackbar
      v-model="snackbar.show"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      top
      tile
      text
      elevation="0"
    >
      {{ snackbar.text }}
    </v-snackbar>
    <v-row>
      <v-col class="ml-12">
        <v-row>
          <img :src="produto.img" alt="" height="586" />
        </v-row>
        <v-row class="my-6">
          <ul>
            <li v-for="(caracteristica, i) in produto.caracteristicas" :key="i">
              {{ caracteristica }}
            </li>
          </ul>
        </v-row>
      </v-col>

      <v-col class="ml-8">
        <v-row class="pr-6">
          <span class="text-h4">{{ produto.nome }}</span>
        </v-row>
        <v-row>
          <span class="text-h5 my-6">{{ formataValor(produto.preco) }}</span>
        </v-row>
        <v-row justify="start">
          <v-col cols="8">
            <v-text-field
              v-show="produto.propriedades.seuNome"
              v-model="seuNome"
              label="Seu Nome"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row v-show="produto.propriedades.tamanho">
          <v-col>
            <v-row class="mb-2">
              <span>TAMANHO</span>
            </v-row>
            <v-row>
              <v-item-group>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    active-class="verde--text"
                    :input-value="active"
                    @click="toggle"
                    class="mr-1"
                  >
                    PP
                  </v-chip>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    active-class="verde--text"
                    :input-value="active"
                    @click="toggle"
                    class="mr-1"
                  >
                    P
                  </v-chip>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    active-class="verde--text"
                    :input-value="active"
                    @click="toggle"
                    class="mr-1"
                  >
                    M
                  </v-chip>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    active-class="verde--text"
                    :input-value="active"
                    @click="toggle"
                    class="mr-1"
                  >
                    G
                  </v-chip>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    active-class="verde--text"
                    :input-value="active"
                    @click="toggle"
                    class="mr-1"
                  >
                    2G
                  </v-chip>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-chip
                    active-class="verde--text"
                    :input-value="active"
                    @click="toggle"
                    class="mr-1"
                  >
                    3G
                  </v-chip>
                </v-item>
              </v-item-group>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <!-- quantidade -->
        </v-row>
        <v-row v-show="produto.propriedades.cor">
          <v-col>
            <v-row>
              <span class="my-3">COR</span>
            </v-row>
            <v-row>
              <v-item-group>
                <v-item v-slot="{ active, toggle }">
                  <v-btn
                    color="black"
                    outlined
                    active-class="verde--text"
                    :input-value="active"
                    @click="toggle"
                    fab
                    elevation="0"
                    medium
                    class="mr-2"
                  >
                  </v-btn>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-btn
                    color="grey"
                    active-class="verde--text"
                    :input-value="active"
                    @click="toggle"
                    fab
                    elevation="0"
                    medium
                    class="mr-2"
                  >
                  </v-btn>
                </v-item>
                <v-item v-slot="{ active, toggle }">
                  <v-btn
                    color="black"
                    active-class="verde--text"
                    :input-value="active"
                    @click="toggle"
                    fab
                    elevation="0"
                    medium
                    class="mr-2"
                  >
                  </v-btn>
                </v-item>
              </v-item-group>
            </v-row>
          </v-col>
        </v-row>
        <v-row v-show="produto.propriedades.carregarImagem" class="my-6">
          <v-btn rounded outlined>CARREGAR IMAGEM</v-btn>
        </v-row>

        <v-row>
          <v-col fab cols="8"></v-col>
          <v-col>
            <v-btn
              elevation="none"
              color="amarelo"
              x-large
              @click.stop="clickComprar(produto.id)"
              >comprar</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mb-12">
      <span class="text-h3">VEJA TAMBÉM</span>
    </v-row>
    <v-row justify="center" align="center">
      <v-sheet class="white" height="100%" rounded="lg">
        <v-row justify="center" align="center" no-gutters>
          <v-card
            v-for="(produto, i) in produtosRecomendados"
            :key="i"
            flat
            tile
            max-width="269"
            class="ma-5"
            @click="clickProduto(produto.id)"
          >
            <v-img :src="produto.img" height="293"></v-img>
            <v-row class="ma-2" justify="center">
              <v-card-text
                align="center"
                justify="center"
                class="text-h6 black--text"
                >{{ produto.nome }}</v-card-text
              >
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
              <v-btn
                color="amarelo"
                large
                @click.stop="clickComprar(produto.id)"
                >comprar</v-btn
              >
            </v-row>
          </v-card>
        </v-row>
      </v-sheet>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Produto",

  data() {
    return {
      breadcrumbs: [
        {
          text: "HOME",
          disabled: false,
          to: "/",
        },
        {
          text: "BUSCA",
          disabled: false,
          to: "/busca",
        },
        {
          text: "PRODUTO",
          disabled: true,
          to: "/produto",
        },
      ],
      snackbar: {
        text: "",
        color: "",
        timeout: 3000,
        show: false,
      },
      seuNome: "",
      quantidade: "",
    };
  },

  computed: {
    produto() {
      return this.$store.state.produtos.find(
        (produto) => produto.id == this.$route.params.id
      );
    },

    // Fora de escopo
    produtosRecomendados() {
      return this.$store.state.produtos
        .filter((produto) => produto.grupo == this.produto.grupo)
        .slice(0, 3);
    },
  },

  methods: {
    // Fora de escopo
    formataValor(valor, simbolo = "R$") {
      return `${simbolo} ${valor.toFixed(2).replace(".", ",")}`;
    },

    // itens() {
    //   return this.$store.state.carrinho.itens.map((item) => {
    //     const produto = this.$store.state.produtos.find(
    //       (produto) => produto.id == item.id
    //     );

    //     const itemProduto = {
    //       id: item.id,
    //       quantidade: item.quantidade,
    //       nome: produto.nome,
    //       img: produto.img,
    //       preco: produto.preco,
    //     };

    //     return itemProduto;
    //   });
    // },

    // Fora de escopo
    clickQuantidadeItemMenos(i) {
      this.$store.state.carrinho.itens[i].quantidade--;
    },

    // Fora de escopo
    clickQuantidadeItemMais(i) {
      this.$store.state.carrinho.itens[i].quantidade++;
    },

    // Fora de escopo
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

    clickProduto(id) {
      this.$router.push(`/produto/${id}`);
    },
  },
};
</script>

<style>
</style>