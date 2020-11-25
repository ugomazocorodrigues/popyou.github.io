  <template>
  <div>
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

    <v-card flat>
      <v-card-title>
        <span class="text-h4 verde--text my-2">CARRINHO</span>
        <v-spacer></v-spacer>
        <v-btn @click="$emit('input', false)" icon class="black--text">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider class="mx-4"></v-divider>
      <v-row no-gutters>
        <v-col cols="7">
          <v-card-title>PRODUTO</v-card-title>
        </v-col>
        <v-col cols="5">
          <v-card-title>SUBTOTAL</v-card-title>
        </v-col>
      </v-row>
      <v-divider class="mx-4"></v-divider>
      <div v-for="(item, i) in itens" :key="i" no- class="mt-2 ml-4">
        <v-row>
          <v-col cols="3">
            <v-img :src="item.img" max-height="200" max-width="200"></v-img>
          </v-col>
          <v-col cols="5">
            <span>#{{ item.id }} {{ item.nome }} </span>
          </v-col>
          <v-col cols="3" align="end">
            <span>
              {{ formataValor(item.preco) }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" align="center">
            {{ formataValor(item.preco * item.quantidade) }}
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
            <v-btn icon @click="clickDeletarItem(i)" justify="end">
              <v-icon class="red--text">mdi-delete-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider class="mr-5"></v-divider>
      </div>
      <v-row class="mt-1">
        <v-col cols="7" class="ml-4">
          <span>SUBTOTAL (sem frete):</span>
        </v-col>
        <v-col cols="3" align="end">
          <span>{{ formataValor(carrinhoSubtotal) }} </span>
        </v-col>
      </v-row>
      <v-divider class="mx-4"></v-divider>
      <v-row class="ml-2 mt-2">
        <v-col cols="5">
          <v-text-field
            label="Seu CEP"
            maxlength="9"
            outlined
            dense
          ></v-text-field>
        </v-col>

        <v-col>
          <v-btn
            elevation="none"
            text
            class="ml-2 amarelo"
            @click="clickCalcularFrete()"
            >calcular frete</v-btn
          >
        </v-col>
      </v-row>
      <v-row v-show="valorFrete" class="ml-2">
        <v-col cols="8">
          <span>Frete:</span>
        </v-col>
        <v-col cols="3">
          <span>R$ {{ valorFrete }}</span>
        </v-col>
      </v-row>
      <v-divider class="mx-4"></v-divider>
      <v-row class="ml-3">
        <v-col cols="8">
          <span>TOTAL:</span>
        </v-col>
        <v-col cols="3" align="end">
          <span>{{ formataValor(carrinhoTotal) }}</span>
        </v-col>
      </v-row>
      <v-row class="ml-4">
        <v-col cols="4" />
        <v-col cols="4" class="ml-3">
          <v-btn
            elevation="none"
            class="amarelo"
            @click="clickFinalizarCompra()"
            >finalizar compra</v-btn
          >
        </v-col>
      </v-row>

      <v-card-actions> </v-card-actions>
    </v-card>
  </div>
</template>
  
  <script>
export default {
  name: "Carrinho",
  props: { value: Boolean },

  data() {
    return {
      mostrarCarrinho: false,
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