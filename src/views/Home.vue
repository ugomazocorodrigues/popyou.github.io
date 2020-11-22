<template>
  <div>
    <v-carousel
      cycle
      height="100%"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(carrossel, i) in carrossels"
        :key="i"
        :src="carrossel.img"
      >
      </v-carousel-item>
    </v-carousel>

    <v-container>
      <v-row class="mt-12" justify="space-between" no-gutters>
        <v-card flat tile max-width="269">
          <v-img
            src="@/assets/mugSabrina.png"
            height="293"
            @click="clickBusca('caneca')"
          ></v-img>
          <v-row justify="center">
            <v-card-title> CANECAS </v-card-title>
          </v-row>
        </v-card>
        <v-card flat tile max-width="269">
          <v-img
            src="@/assets/ghostbustersCamiseta.png"
            height="293"
            @click="clickBusca('camiseta')"
          ></v-img>
          <v-row justify="center">
            <v-card-title> CAMISETAS </v-card-title>
          </v-row>
        </v-card>
        <v-card flat tile max-width="269">
          <v-img
            src="@/assets/notebookTheGoodPlace.png"
            height="293"
            @click="clickBusca('caderno')"
          ></v-img>
          <v-row justify="center">
            <v-card-title> CADERNOS </v-card-title>
          </v-row>
        </v-card>
      </v-row>
      <v-row class="mt-12 mb-12">
        <v-img src="@/assets/popTranqueiras.png"></v-img>
      </v-row>
      <v-row class="mt-12 mb-12">
        <v-img src="@/assets/popBrusinhas.png"></v-img>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {
      carrossels: [
        {
          id: 1,
          nome: "Banner Crie do zero",
          img: require("@/assets/banner1.png"),
        },
        {
          id: 2,
          nome: "Banner Halloween",
          img: require("@/assets/bannerHalloween.png"),
        },
        {
          id: 3,
          nome: "Banner Pop Caixinhas",
          img: require("@/assets/bannerPopCaixinhas.png"),
        },
      ],
    };
  },

  methods: {
    clickBusca(busca) {
      this.$store.state.search = busca;
      this.$router.push("/busca");
    },
  },
};
</script>

<style>
</style>