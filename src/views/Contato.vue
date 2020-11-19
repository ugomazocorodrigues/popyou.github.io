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

    <v-row>
      <span class="text-h4 verde--text ml-8 my-2">CONTATO</span>
    </v-row>
    <v-row class="ml-5">
      <v-col cols="4">
        <v-row
          align="center"
          class="mt-4"
          v-for="(redeSocial, i) in redesSociais"
          :key="i"
        >
          <v-btn
            :class="`mr-3 white--text`"
            :color="redeSocial.color"
            fab
            small
            elevation="none"
            @click="clickFooter(redeSocial.action)"
          >
            <v-icon>{{ redeSocial.icone }}</v-icon>
          </v-btn>
          <span>{{ redeSocial.label }}</span>
        </v-row>
        <v-row class="mt-10">
          <v-icon large class="black--text mr-3">mdi-phone</v-icon>
          <span class="black--text">+55 (11) 5229-3454</span>
        </v-row>
        <v-row class="mt-3">
          <v-icon large class="black--text mr-3">mdi-email-outline</v-icon>
          <span class="black--text">sac@popyou.com.br</span>
        </v-row>
      </v-col>
      <v-col cols="7">
        <v-form ref="form">
          <v-row no-gutters>
            <v-col>
              <v-text-field
                v-model="contato.titulo"
                label="título"
                outlined
                dense
                :rules="rules.rules1"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-text-field
                v-model="contato.email"
                label="e-mail"
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-text-field
                v-model="contato.telefone"
                label="telefone"
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-textarea
                v-model="contato.mensagem"
                label="mensagem"
                auto-grow
                maxlength="500"
                rows="5"
                counter
                dense
                outlined
                :rules="rules.rules2"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row justify="end" no-gutters class="mt-2">
            <v-btn class="verde white--text" @click="clickEnviar()">
              Enviar
            </v-btn>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contato: {
        titulo: "",
        email: "",
        telefone: "",
        mensagem: "",
      },
      snackbar: {
        text: "",
        color: "",
        timeout: 3000,
        show: false,
      },
      redesSociais: [
        {
          img: require("@/assets/facebook.png"),
          icone: "mdi-facebook",
          action: "https://www.facebook.com",
          color: "#2EC4B6",
          label: "Siga-nos no Facebook",
        },
        {
          img: require("@/assets/instagram.png"),
          icone: "mdi-instagram",
          action: "https://www.instagram.com",
          color: "#FF5154",
          label: "Siga-nos no Instagram",
        },
        {
          img: require("@/assets/twitter.png"),
          icone: "mdi-twitter",
          action: "https://www.twitter.com",
          color: "#FFC71F",
          label: "Siga-nos no Twitter",
        },
      ],
      rules: {
        rules1: [(value) => value.length > 0 || "campo obrigatório"],
        rules2: [(value) => value.length > 0 || "campo obrigatório"],
      },
    };
  },

  methods: {
    clickEnviar() {
      if (this.$refs.form.validate()) {
        this.contato.titulo = "";
        this.contato.email = "";
        this.contato.telefone = "";
        this.contato.mensagem = "";
        this.$refs.form.resetValidation();

        this.snackbar.text = "Enviado com sucesso";
        this.snackbar.color = "verde";
        this.snackbar.show = true;
      }
    },
  },
};
</script>

<style>
</style>