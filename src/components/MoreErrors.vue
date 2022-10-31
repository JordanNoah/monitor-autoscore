<template>
    <v-card outlined>
        <v-card-title>
            Errors
        </v-card-title>
        <v-data-table dense :headers="headers" :items="errors"></v-data-table>
    </v-card>
</template>
<script>
    export default {
        data: () => ({
            errors: [],
            headers: [{
                    text: 'Id',
                    align: 'start',
                    value: 'id'
                },
                {
                    text: 'Message',
                    value: 'message'
                },
                {
                    text: 'Reference',
                    value: 'reference'
                },
                {
                    text: 'Created at',
                    value: 'createdAt'
                },
                {
                    text: 'Updated at',
                    value: 'updatedAt'
                }
            ],
        }),
        mounted:function(){
            console.log("?");
        }
    }
</script>