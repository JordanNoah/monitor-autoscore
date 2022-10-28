<template>
    <span>
        {{status}}
        <v-icon v-if="status.process == 'Processed'">

        </v-icon>
        <v-icon v-else>

        </v-icon>
    </span>
</template>

<script>
export default {
    props:{
        status : Object
    }
}
</script>