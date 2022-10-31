<template>
        <v-card outlined>
                <v-container>
                        <p class="text-h4 font-weight-bold">From moodle</p>
                        <div class="mb-1">
                                <span class="font-weight-bold">
                                        Id:
                                </span>
                                <span>
                                        {{autoscore.grade_receiver.id}}
                                </span>
                        </div>
                        <div class="mb-1">
                                <span class="font-weight-bold">
                                        Uuid:
                                </span>
                                <span>
                                        {{autoscore.grade_receiver.uuid}}
                                </span>
                        </div>
                        <div class="mb-1">
                                <span class="font-weight-bold">
                                        Fired at:
                                </span>
                                <span>
                                        {{$global.convert_date((autoscore.grade_receiver.fired_at))}}
                                </span>
                        </div>
                        <div class="mb-1">
                                <span class="font-weight-bold">
                                        Assigment:
                                </span>
                                <span>
                                        {{autoscore.grade_receiver.assignment}}
                                </span>
                        </div>
                        <div class="mb-1">
                                <span class="font-weight-bold">
                                        Fullname:
                                </span>
                                <span>
                                        {{autoscore.institution.fullname}}
                                </span>
                        </div>
                        <div class="mb-1">
                                <span class="font-weight-bold">
                                        Modality:
                                </span>
                                <span>
                                        {{autoscore.grade_receiver.modality}}
                                </span>
                        </div>
                        <div class="mb-1">
                                <span class="font-weight-bold">
                                        Created at:
                                </span>
                                <span>
                                        {{$global.convert_date((autoscore.grade_receiver.createdAt))}}
                                </span>
                        </div>
                        <div class="mb-1">
                                <span class="font-weight-bold">
                                        Updated at:
                                </span>
                                <span>
                                        {{$global.convert_date((autoscore.grade_receiver.updatedAt))}}
                                </span>
                        </div>
                </v-container>
        </v-card>
</template>

<script>
export default {
    props:{
        autoscore:Object
    }
}
</script>