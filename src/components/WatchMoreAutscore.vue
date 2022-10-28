<template>
    <v-dialog v-model="dialog" @click:outside="removeSelecteAutoscore">
        <v-card>
            <v-card-title>
                {{autoscore.uuid}}
                <v-spacer></v-spacer>
                <Status :status="autoscore.process_status" />
            </v-card-title>
            {{autoscore}}
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    data:()=>({
        autoscore:{}
    }),
    computed:{
        dialog(){
            return this.$store.state.autoscore_view_more != null ? true : false
        },
        autoscoreSelect(){
            return this.$store.state.autoscore_view_more
        }
    },
    components:{
        Status: () => import('@/components/Status.vue')
    },
    watch:{
        dialog(newvalue){
            if(newvalue){
                this.getAutoscore()
            }
            console.log(newvalue);
        }
    },
    methods:{
        removeSelecteAutoscore(){
            this.$store.commit('autoscore_view_more_removed')
            this.$router.push({name:'autoscore'})
        },
        async getAutoscore(){
            var response = await axios.get(`http://192.168.2.140:3000/autoscore/${this.autoscoreSelect.uuid}`).catch((e)=>{console.error(e.message);})
            this.autoscore = response.data
            console.log(response);
        }
    }
}
</script>