<template>
    <v-card outlined>
        <v-container>
            <p class="text-h4 font-weight-bold">To moodle</p>
            <div class="mb-1">
                <span class="font-weight-bold">
                    Uuid:
                </span>
                {{autoscore.uuid}}
            </div>
            <div class="mb-1">
                <span class="font-weight-bold">
                    User id:
                </span>
                {{autoscore.user_id}}
            </div>
            <div class="mb-1">
                <span class="font-weight-bold">
                    Course id:
                </span>
                {{autoscore.course_id}}
            </div>
            <div class="mb-1">
                <span class="font-weight-bold">
                    Source:
                </span>
                {{autoscore.source}}
            </div>
            <div class="mb-1">
                <span class="font-weight-bold">
                    Component
                </span>
                {{autoscore.component}}
            </div>
            <div class="mb-1">
                <span class="font-weight-bold">
                    Activity id:
                </span>
                {{autoscore.activity_id}}
            </div>
            <div class="mb-1">
                <span class="font-weight-bold">
                    Score to assign:
                </span>
                {{autoscore.score_to_assign}}
            </div>
            <div class="mb-1">
                <span class="font-weight-bold">
                    Date to grade:
                </span>
                {{$global.convert_date((autoscore.date_to_grade))}}
            </div>
            <div class="mb-1">
                <span class="font-weight-bold">
                    Item number:
                </span>
                {{autoscore.item_number}}
            </div>
            <div class="mb-1">
                <span class="font-weight-bold">
                    User id:
                </span>
                {{autoscore.user_id}}
            </div>
            <div class="mb-1">
                <span class="font-weight-bold">
                    Created at:
                </span>
                {{$global.convert_date((autoscore.createdAt))}}
            </div>
            <div class="mb-1">
                <span class="font-weight-bold">
                    Updated at:
                </span>
                {{$global.convert_date((autoscore.updatedAt))}}
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