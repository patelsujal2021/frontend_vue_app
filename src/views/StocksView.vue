<template>
    <div>
        <div>
            <h1>Stocks</h1>
        </div>
        <div>
            <easy-data-table :headers="headers" :items="stocks" />
        </div>
    </div>
</template>

<script>
    export default {
        name:"StocksView",
        data(){
            return{
                headers:[
                    { text: "Name", value: "item_name", sortable: true },
                    { text: "Code", value: "item_code", sortable: true },
                    { text: "Quantity", value: "quantity", sortable: true },
                    { text: "Location", value: "location", sortable: true },
                    { text: "Store Name", value: "store.name", sortable: true },
                    { text: "In Stock", value: "in_stock", sortable: true }
                ],
                stocks:[]
            }
        },
        mounted() {
            this.get_stocks();
        },
        methods:{
            get_stocks(){
                this.$store.dispatch('stock/get_stocks',{}).then(response=>{
                    if(response.data.success == true){
                        this.stocks = response.data.data.stocks;
                    }
                }).catch(error=>{
                    console.log(error);
                });
            }
        }
    }
</script>

<style>
    @media (min-width: 1024px) {
        .about {
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
    }
</style>
