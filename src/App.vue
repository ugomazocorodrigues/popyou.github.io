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

      <v-btn text class="ml-8 black--text" @click="$router.push('/produtos')"
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

      <v-btn icon class="ml-4">
        <v-icon class="black--text" large>mdi-cart-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <i src="./assets/perfil.svg"></i>
        <v-icon class="black--text" large>mdi-account-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- /// FOOTER -->
    <v-footer color="black" padless class="my-4">
      <v-container class="pl-0">
        <v-row>
          <v-col cols="6">
            <v-row justify="space-around" class="mt-8">
              <v-img src="@/assets/logo2.png" width="30%"></v-img>
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
            <v-row justify="center" class="mt-8">
              <span class="text-h4 white--text">INSTITUCIONAL</span>
            </v-row>
            <v-row justify="end">
              <v-col>
                <v-btn text class="ml-8 white--text" @click="$router.push('/')"
                  >home</v-btn
                >
              </v-col>
              <v-col>
                <v-btn
                  text
                  class="ml-8 white--text"
                  @click="$router.push('/Sobrenos')"
                  >sobre nós</v-btn
                >
              </v-col>
            </v-row>
            <v-row justify="space-around">
              <v-col>
                <v-btn
                  text
                  class="ml-8 white--text"
                  @click="$router.push('/Contato')"
                  >contato</v-btn
                >
              </v-col>
              <v-col>
                <v-btn text class="ml-8 white--text" @click="$router.push('/')"
                  >dúvidas frequentes</v-btn
                >
              </v-col>
            </v-row>
            <v-row justify="space-around">
              <v-col>
                <v-btn text class="ml-8 white--text" @click="$router.push('/')"
                  >trocas e devoluções</v-btn
                >
              </v-col>
              <v-col>
                <v-btn text class="ml-8 white--text" @click="$router.push('/')"
                  >privacidade</v-btn
                >
              </v-col>
            </v-row>
            <v-row justify="space-around">
              <v-col>
                <v-btn text class="ml-8 white--text" @click="$router.push('/')"
                  >segurança</v-btn
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
export default {
  name: "App",

  components: {},

  data() {
    return {
      carrossel: [
        {
          src: "./assets/banner1.png",
        },
        {
          src: "./assets/bannerHalloween.png",
        },
        {
          src: "./assets/bannerPopCaixinhas.png",
        },
      ],
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
};
</script>
