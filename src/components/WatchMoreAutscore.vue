<template>
    <v-dialog v-model="dialog" @click:outside="removeSelecteAutoscore">
        <v-card>
            <v-card-title>
                {{autoscore.uuid}}
                <v-spacer></v-spacer>
                <Status :status="autoscore.process_status" v-if="Object.keys(autoscore).length != 0" class="mx-2" />
                <UnitCron :status='autoscore' v-if="Object.keys(autoscore).length != 0" />
            </v-card-title>
            <v-card-text>
                <v-container v-if="Object.keys(autoscore).length != 0">
                    <v-row>
                        <v-col>
                            <MoreFromMoodle :autoscore="autoscore" v-if="Object.keys(autoscore).length != 0"/>
                        </v-col>
                        <v-col>
                            <MoreToMoodel :autoscore="autoscore" v-if="Object.keys(autoscore).length != 0"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <MoreErrors />
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import axios from 'axios';
    export default {
        data: () => ({
            autoscore: {}
        }),
        computed: {
            dialog() {
                if (this.$route.params.idAutoscore != null) {
                    this.getAutoscoreErrors()
                    this.getAutoscore()
                }
                return this.$store.state.autoscore_view_more != null ? true : false
            },
            autoscoreSelect() {
                return this.$store.state.autoscore_view_more
            }
        },
        components: {
            Status: () => import('@/components/Status.vue'),
            UnitCron: () => import('@/components/UnitCron.vue'),
            MoreToMoodel: () => import('@/components/MoreToMoodle.vue'),
            MoreFromMoodle: () => import('@/components/MoreFromMoodle.vue'),
            MoreErrors:() => import('@/components/MoreErrors.vue')
        },
        watch: {
            dialog(newvalue) {
                if (newvalue) {
                    console.log("?????");
                    this.getAutoscoreErrors()
                    this.getAutoscore()
                }
                console.log(newvalue);
            }
        },
        methods: {
            removeSelecteAutoscore() {
                this.$store.commit('autoscore_view_more_removed')
                this.$router.push({
                    name: 'autoscore'
                })
            },
            async getAutoscore() {
                var response = await axios.get(`http://192.168.2.140:3000/autoscore/${this.autoscoreSelect.uuid}`)
                    .catch((e) => {
                        console.error(e.message);
                    })
                this.autoscore = response.data
                console.log(response);
            },
            async getAutoscoreErrors(){
                var response = await axios.get(`http://192.168.2.140:3000/autoscore/error/${this.autoscoreSelect.grade_receiver.id}`)
                console.log(response);
            }
        }
    }
</script>