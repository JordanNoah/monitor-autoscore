<template>
  <v-app>
    <v-app-bar app dark dense elevation="0">
      <span>
        Gestor de autoscore
      </span>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon small class="mx-2" v-bind="attrs" v-on="on">
            <v-icon small v-if="!runCron">
              fas fa-server
            </v-icon>
            <v-icon small v-else-if="runCron" color="primary">
              fas fa-circle-notch fa-spin
            </v-icon>
          </v-btn>
        </template>
        <v-list two-line>
          <v-list-item v-for="(item, i) in crons" :key="i">
            <v-list-item-icon>
              <v-icon>
                {{item.icon}}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{item.title}}
              </v-list-item-title>
              <v-list-item-subtitle>
                something
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      
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
    mounted:function(){
      this.socket.on('cron_status',(status)=>{
        this.$store.commit('change_cron_state',status)
      })
    },

    computed: {
      crons(){
        return this.$store.state.crons
      },
      runCron(){
        return this.$store.state.crons.some(el => el.running == true)
      }
    }
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