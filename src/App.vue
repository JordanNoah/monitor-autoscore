<template>
  <v-app>
    <v-app-bar app dark dense elevation="0">
      <span>
        Gestor de autoscore
      </span>
      <v-spacer></v-spacer>
      <v-icon small :color="socket.connected ? 'success' : 'error'">
        fas fa-circle
      </v-icon>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import io from 'socket.io-client'
  export default {
    name: 'App',
    watch: {
      socket:{
        handler(){
          console.log(this.socket);
        },
        deep:true
      }
    },

    data: () => ({
      socket : io(process.env.VUE_APP_URL_API)
    }),
  };
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to{
  opacity: 0;
  transform: translateX(-50px);
}
</style>