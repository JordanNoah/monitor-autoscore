<template>
    <v-container fluid>
        <v-row>
          <v-col cols="4">
            <v-select :items="exist_config.institutions" item-text="fullname" item-value="id" hide-details dense outlined label="Institucion"></v-select>
          </v-col>
          <v-col>
            <v-select :items="exist_config.status" item-text="process" item-value="id" hide-details dense outlined label="Estado"></v-select>
          </v-col>
          <v-col>
            <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" label="Rango de fecha" readonly
                  v-bind="attrs" v-on="on" hide-details dense outlined></v-text-field>
              </template>
              <v-date-picker v-model="date" scrollable range>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class="mt-2">
            <v-data-table :headers="headers" :items="autoscore.rows" :options.sync="options" :server-items-length="autoscore.count" :loading="loading" @click:row="openDialogAutoscore" :sort-by="defaultsort" sort-desc>
              <template v-slot:[`item.date_to_grade`] = "{ item }">
                {{changeDateIso(item.date_to_grade)}}
              </template>
              <template v-slot:[`item.process_status.process_abbreviation`] = "{ item }">
                <Status :status="item.process_status" />
              </template>
            </v-data-table>
          </v-col>
        </v-row>
        <WatchMoreEventQueue />
      </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data:()=>({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        modal:false,
        autoscore:[],
        exist_config:{
            institutions:null,
            status:null
        },
        page:1,
        loading:false,
        options: {},
        headers:[
            { text: 'Id', align:'start', value:'id' , },
            { text: 'User id', align:'start', value:'user_id'},
            { text: 'Course id', align:'start', value:'course_id'},
            { text: 'Source', align:'start', value:'source'},
            { text: 'Component', align:'start', value:'component'},
            { text: 'Activity id', align:'start', value:'activity_id'},
            { text: 'Score to assign', align:'start', value:'score_to_assign'},
            { text: 'Date to grade', align:'start', value:'date_to_grade'},
            { text: 'Item number', align:'start', value:'item_number'},
            { text: 'Status', align:'center', value:'process_status.process_abbreviation'}
        ],
        defaultsort:'id'
    }),
    mounted: async function () {
      var responseInstitution = await axios.get('http://192.168.2.140:3000/institutions').catch((e) => {throw new Error(e.message)})
      this.exist_config.institutions = responseInstitution.data

      var responseStatus = await axios.get('http://192.168.2.140:3000/process_status').catch((e) => {throw new Error(e.message)})
      this.exist_config.status = responseStatus.data
    },
    components: {
        WatchMoreEventQueue:() => import('@/components/WatchMoreAutscore.vue'),
        Status:() => import('@/components/Status.vue')
    },
    methods:{
      changeDateIso(date){
        var isodate = new Date(date)
        return `${isodate.getDate()}/${(isodate.getMonth()+1)}/${isodate.getFullYear()} ${isodate.getHours()}:${isodate.getMinutes()}:${isodate.getSeconds()}`
      },
      async autoscoreData(){
        //this.options.page = this.options.page - 1
        var optionPagination = JSON.parse(JSON.stringify(this.options))
        optionPagination.page = optionPagination.page - 1
        var responseAutoscore = await axios.get('http://192.168.2.140:3000/autoscores',{
          params:{
            options:optionPagination
          }
        }).catch((e) => {throw new Error(e.message)})
        this.autoscore = responseAutoscore.data
        console.log(this.autoscore);
      },
      openDialogAutoscore(value){
        this.$router.push({name:'autoscore',params:{idAutoscore:value.id}}).catch((e)=>{console.log(e);})
        this.$store.commit('autoscore_view_more_selected', value)
      }
    },
    watch:{
        options: {
            async handler () {
              await this.autoscoreData()
              if (this.$route.params.idAutoscore != undefined) {
                console.log(this.autoscore);
                var autoscorefilter = this.autoscore.rows.find(x => x.id == this.$route.params.idAutoscore)
                this.$store.commit('autoscore_view_more_selected', autoscorefilter)
              }
            },
            deep: true,
        }
    }
}
</script>