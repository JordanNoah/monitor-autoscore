<template>
    <span>
        <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
                <v-icon v-if="status.process_abbreviation == 'WAITING_TO_SEND'" small v-on="on" v-bind="attrs">
                    fas fa-truck-loading
                </v-icon>
                <v-icon v-else-if="status.process_abbreviation == 'UPDATED'" color="success" small v-on="on" v-bind="attrs">
                    fas fa-pen-square
                </v-icon>
                <v-icon v-else-if="status.process_abbreviation == 'INTERNAL_ERROR'" color="error" small v-on="on" v-bind="attrs">
                    fas fa-database
                </v-icon>
                <v-icon v-else-if="status.process_abbreviation == 'SENDED'"  small v-on="on" v-bind="attrs">
                    fas fa-shipping-fast
                </v-icon>
                <v-icon v-else-if="status.process_abbreviation == 'SUCCESSFUL_MOODLE'" color="success" small v-on="on" v-bind="attrs">
                    fas fa-database
                </v-icon>
                <v-icon v-else-if="status.process_abbreviation == 'MOODLE_ERROR'" small v-on="on" v-bind="attrs" color="warning">
                    fas fa-university
                </v-icon>
                <v-icon v-else-if="status.process_abbreviation == 'EXISTING_GRADE'" small v-on="on" v-bind="attrs">
                    fas fa-exclamation
                </v-icon>
            </template>
            <span>
                {{status.process}}
            </span>
        </v-tooltip>
    </span>
</template>

<script>
export default {
    props:{
        status : Object
    }
}
</script>