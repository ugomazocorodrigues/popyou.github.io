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
      <v-col>
        <!-- <v-img :src="this.$store.state.produto.img" height="293"></v-img> -->
      </v-col>
      <v-col>
        <v-row>
          <span class="text-h4 verde--text ml-8 my-2">CARRINHO</span>
        </v-row>
        <v-divider class="mr-12"></v-divider>
        <v-row>
          <v-col cols="7">
            <span class="text-h6 ml-8 my-2">PRODUTO</span>
          </v-col>

          <v-col cols="3" align="end">
            <span class="text-h6 ml-8 my-2">SUBTOTAL</span>
          </v-col>
        </v-row>
        <v-divider class="mr-12"></v-divider>
        <div v-for="(item, i) in itens" :key="i" class="mt-2">
          <v-row>
            <v-col cols="2">
              <v-img :src="item.img" max-height="100" max-width="100"></v-img>
            </v-col>
            <v-col cols="6">
              <span>#{{ item.id }} {{ item.nome }} </span>
            </v-col>
            <v-col cols="3" align="end">
              <span>
                {{ formataValor(item.preco * item.quantidade) }}
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2" align="center">
              {{ formataValor(item.preco) }}
            </v-col>
            <v-col cols="6">
              <v-btn
                :disabled="$store.state.carrinho.itens[i].quantidade <= 1"
                icon
                @click="clickQuantidadeItemMenos(i)"
              >
                <v-icon class="black--text">mdi-minus</v-icon>
              </v-btn>
              <span class="mx-2">{{ item.quantidade }}</span>
              <v-btn
                :disabled="$store.state.carrinho.itens[i].quantidade >= 10"
                icon
                @click="clickQuantidadeItemMais(i)"
              >
                <v-icon class="black--text">mdi-plus</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="3">
              <v-btn icon @click="clickDeletarItem(i)">
                <v-icon class="red--text">mdi-delete-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider class="mr-12"></v-divider>
        </div>
        <v-row>
          <v-col cols="8">
            <span>SUBTOTAL (sem frete):</span>
          </v-col>
          <v-col cols="3" align="end">
            <span>{{ formataValor(carrinhoSubtotal) }} </span>
          </v-col>
        </v-row>
        <v-divider class="mr-12"></v-divider>
        <v-row>
          <v-col cols="6">
            <v-text-field label="Seu CEP" outlined dense></v-text-field>
          </v-col>
          <v-col>
            <v-btn
              elevation="none"
              text
              class="ml-0 amarelo"
              @click="clickCalcularFrete()"
              >calcular frete</v-btn
            >
          </v-col>
        </v-row>
        <v-row v-show="valorFrete">
          <v-col cols="8">
            <span>Frete:</span>
          </v-col>
          <v-col cols="3">
            <span>R$ {{ valorFrete }}</span>
          </v-col>
        </v-row>
        <v-divider class="mr-12"></v-divider>
        <v-row>
          <v-col cols="8">
            <span>TOTAL:</span>
          </v-col>
          <v-col cols="3" align="end">
            <span>{{ formataValor(carrinhoTotal) }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" />
          <v-col cols="3">
            <v-btn
              elevation="none"
              class="amarelo"
              @click="clickFinalizarCompra()"
              >finalizar compra</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
  
  <script>
export default {
  name: "Carrinho",

  data() {
    return {
      breadcrumbs: [
        {
          text: "HOME",
          disabled: false,
          href: "/",
        },
        {
          text: "CARRINHO",
          disabled: true,
          href: "/carrinho",
        },
      ],
      valorFrete: 0,
      snackbar: {
        text: "",
        color: "",
        timeout: 3000,
        show: false,
      },
    };
  },

  computed: {
    itens() {
      return this.$store.state.carrinho.itens.map((item) => {
        const produto = this.$store.state.produtos.find(
          (produto) => produto.id == item.id
        );

        const itemProduto = {
          id: item.id,
          quantidade: item.quantidade,
          nome: produto.nome,
          img: produto.img,
          preco: produto.preco,
        };

        return itemProduto;
      });
    },

    carrinhoSubtotal() {
      return this.itens.reduce(
        (valorTotal, item) => valorTotal + item.quantidade * item.preco,
        0
      );
    },

    carrinhoTotal() {
      return this.carrinhoSubtotal + this.valorFrete;
    },
  },

  methods: {
    // Fora de escopo
    formataValor(valor, simbolo = "R$") {
      return `${simbolo} ${valor.toFixed(2).replace(".", ",")}`;
    },

    // Fora de escopo
    clickQuantidadeItemMenos(i) {
      this.$store.state.carrinho.itens[i].quantidade--;
    },

    // Fora de escopo
    clickQuantidadeItemMais(i) {
      this.$store.state.carrinho.itens[i].quantidade++;
    },

    // Fora de escopo
    clickDeletarItem(i) {
      this.$store.state.carrinho.itens.splice(i, 1);
    },

    // Fora de escopo
    clickCalcularFrete() {
      this.valorFrete = 10;
    },

    // Fora de escopo
    clickFinalizarCompra() {
      this.$store.state.carrinho.itens = [];
      this.snackbar.text = "Compra realizada com sucesso";
      this.snackbar.color = "verde";
      this.snackbar.show = true;
    },
  },
};
</script>
  
  <style>
</style>