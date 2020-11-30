<template>
  <v-app>
    <v-app-bar app color="white" flat tile>
      <div class="d-flex align-center">
        <v-img
          alt="PopYou"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="128"
          @click="$router.push('/')"
        />
      </div>

      <v-btn text class="ml-8 black--text" @click="clickProdutos()"
        >produtos</v-btn
      >
      <v-btn text class="ml-3 black--text" @click="$router.push('/contato')"
        >contato</v-btn
      >
      <v-btn text class="ml-3 black--text" @click="$router.push('/sobrenos')"
        >sobre nós</v-btn
      >

      <v-spacer />

      <v-text-field
        v-model="$store.state.search"
        class="mt-8"
        type="search"
        solo
        clearable
        placeholder="busca"
        outlined
        tile
        flat
        @keyup.enter="$router.push('/busca')"
      >
        <template v-slot:append>
          <v-btn icon class="ml-4" @click="$router.push('/busca')">
            <v-icon class="black--text" large>mdi-magnify</v-icon>
          </v-btn>
        </template>
      </v-text-field>
      <v-badge
        :content="$store.state.carrinho.itens.length"
        :value="$store.state.carrinho.itens.length"
        color="black"
        overlap
        bottom
      >
        <v-btn icon @click="mostrarCarrinho = !mostrarCarrinho" class="ml-4">
          <v-icon class="black--text" large>mdi-cart-outline</v-icon>
        </v-btn>
      </v-badge>
      <v-btn icon @click="$router.push('/perfil')">
        <i src="./assets/perfil.svg"></i>
        <v-icon class="black--text" large>mdi-account-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="mostrarCarrinho" app width="400" right>
      <Carrinho v-model="mostrarCarrinho" />
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- /// FOOTER -->
    <v-footer color="black" padless class="my-4">
      <v-container class="pl-0">
        <v-row>
          <v-col cols="6">
            <v-row class="mt-8">
              <img
                src="@/assets/logo2.png"
                alt="Pop You Store Logo"
                width="90%"
              />
            </v-row>
            <v-row align="center" class="mt-8 mb-8">
              <v-col cols="6">
                <v-btn
                  v-for="(redeSocial, i) in redesSociais"
                  :key="i"
                  :class="`mr-8 white--text`"
                  :color="redeSocial.color"
                  fab
                  @click="clickFooter(redeSocial.action)"
                >
                  <v-icon x-large>{{ redeSocial.icone }}</v-icon>
                  <!-- <v-img>{{ redeSocial.img }}</v-img> -->
                  <!-- <i :src="redeSocial.img"></i> -->
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-icon class="white--text mr-3">mdi-phone</v-icon>
                  <span class="white--text">+55 (11) 5229-3454</span>
                </v-row>
                <v-row class="mt-3 mb-">
                  <v-icon class="white--text mr-3">mdi-email-outline</v-icon>
                  <span class="white--text">sac@popyou.com.br</span>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" class="pl-12">
            <v-row justify="start" class="mt-8">
              <span class="text-h4 white--text ml-12">INSTITUCIONAL</span>
            </v-row>
            <v-row justify="end">
              <v-col>
                <v-btn text class="ml-6 white--text" @click="$router.push('/')"
                  >home</v-btn
                >
              </v-col>
              <v-col>
                <v-btn
                  text
                  class="ml-6 white--text"
                  @click="$router.push('/Sobrenos')"
                  >sobre nós</v-btn
                >
              </v-col>
            </v-row>
            <v-row justify="space-around">
              <v-col>
                <v-btn
                  text
                  class="ml-6 white--text"
                  @click="$router.push('/Contato')"
                  >contato</v-btn
                >
              </v-col>
              <v-col>
                <v-btn
                  text
                  class="ml-6 white--text"
                  @click="$router.push('/Privacidade')"
                  >privacidade</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Carrinho from "@/components/Carrinho.vue";
export default {
  name: "App",
  components: { Carrinho },

  data() {
    return {
      mostrarCarrinho: false,
      redesSociais: [
        {
          img: require("@/assets/facebook.png"),
          icone: "mdi-facebook",
          action: "https://www.facebook.com",
          color: "#2EC4B6",
        },
        {
          img: require("@/assets/instagram.png"),
          icone: "mdi-instagram",
          action: "https://www.instagram.com",
          color: "#FF5154",
        },
        {
          img: require("@/assets/twitter.png"),
          icone: "mdi-twitter",
          action: "https://www.twitter.com",
          color: "#FFC71F",
        },
      ],
    };
  },

  methods: {
    clickProdutos() {
      this.$store.state.search = "";
      this.$router.push("/busca");
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

.v-application {
  font-family: Montserrat, sans-serif !important;
}
</style>