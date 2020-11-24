<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs" divider=">" large />
    <v-row class="ml-8">
      <span class="text-h4 verde--text">SOBRE NÓS</span>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <p>
          O projeto foi totalmente criado e pensado por estudantes de Design
          para colocar o consumidor como centro da experiência da cultura pop e
          geek.
        </p>
        <p>
          Baseado no desejo dos criadores, a loja foi criada dando a
          possibilidade do usuário colocar sua personalidade nos produtos ou
          apenas utilizar um dos nossos artigos exclusivos.
        </p>
        <p>
          Nós pensamos em tudo para que fosse o mais divertido, colorido e
          prático para pessoas de todas as idades mergulharem em suas melhores
          ideias.
        </p>
      </v-col>
    </v-row>
    <v-row class="ml-8">
      <span class="text-h5 verde--text">SUSTENTABILIDADE</span>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <p>
          Além da nossa visão para o usuário, contribuímos para o mundo. Todas
          as nossas embalagens são biodegradáveis e não utilizamos nada que
          prejudique o ecossistema.
        </p>
      </v-col>
    </v-row>
  </div>
</template>


<script>
export default {
  name: "SobreNos",

  data() {
    return {
      breadcrumbs: [
        {
          text: "HOME",
          disabled: false,
          href: "/",
        },
        {
          text: "SOBRE NÓS",
          disabled: true,
          href: "/sobrenos",
        },
      ],
    };
  },
};
</script>

<style>
</style>