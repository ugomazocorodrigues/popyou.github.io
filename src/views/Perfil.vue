<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs" divider=">" large />
    <v-row class="ml-8">
      <span class="text-h4 verde--text">MINHA CONTA</span>
    </v-row>
    <v-row class="ml-5">
      <v-col cols="4" class="ml-4">
        <v-row class="my-2">
          <span class="text-h5">DADOS PESSOAIS</span>
        </v-row>
        <v-row class="my-1 mt-4">
          <span>{{ usuario.nome }}</span>
        </v-row>
        <v-row class="my-1">
          <span>{{ usuario.email }}</span>
        </v-row>
        <v-row class="my-1">
          <span>{{ usuario.celular }}</span>
        </v-row>
        <v-row class="my-1">
          <span>{{ usuario.endereco }}</span>
        </v-row>
        <v-row class="my-4">
          <span>Editar Dados</span>
        </v-row>
      </v-col>
      <v-col cols="7">
        <v-row class="my-2 mb-4">
          <span class="text-h5">MEUS PEDIDOS</span>
        </v-row>
        <v-row v-for="(pedido, i) in pedidos" :key="i" class="my-2" no-gutters>
          <v-col cols="1">
            <span>{{ pedido.id }}</span>
          </v-col>
          <v-col cols="1">
            <span>{{ pedido.data }}</span>
          </v-col>
          <v-col cols="2" align="end">
            <span>R$ {{ pedido.valor }}</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>


<script>
export default {
  name: "Perfil",

  data() {
    return {
      breadcrumbs: [
        {
          text: "HOME",
          disabled: false,
          href: "/",
        },
        {
          text: "PERFIL",
          disabled: true,
          href: "/perfil",
        },
      ],
      usuario: {
        nome: "Lara",
        email: "larazinha@gmail.com",
        celular: "+55 (11) 95228-2404",
        endereco: "Rua das rosas, 234, Apto 20",
      },
      pedidos: [
        { id: "1", data: "01/11/2020", valor: "1500" },
        { id: "2", data: "15/11/2020", valor: "310" },
        { id: "3", data: "25/11/2020", valor: "250" },
      ],
    };
  },
};
</script>

<style>
</style>