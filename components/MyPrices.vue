<template>
            <div class="container py-3">
                      <h3 class="heading">{{title}}</h3>
                      <template v-for="(myPriceItem, key) in myPrices">
                        <div class="row exp-grid1 mt-5 wthree" v-if="key%2==0">
                          <div class="col-md-9 mb-md-0 mb-4">
                            {{myPriceItem.text}}
                          </div>  
                          <div class="col-md-3 exp1 wthree">
                                        <h4>{{myPriceItem.price}}</h4>
                                        <h5>{{myPriceItem.timing}}</h5>
                          </div>
                        </div>
                        <div class="row exp-grids mt-5 wthree" v-else>
                                <div class="col-md-3 exp">
                                        <h4>{{myPriceItem.price}}</h4>
                                        <h5>{{myPriceItem.timing}}</h5>
                                </div>
                                <div class="col-md-9 mt-md-0 mt-4 wthree">
                                   {{myPriceItem.text}}
                                </div>
                        </div>
                      </template>
            </div>
</template>
    
<script type="text/babel">
    export default{
        props: ['myPrices', 'title'],
        data() {
            return {
                
            }           
        },
        created(){
            console.log("Service created");
            //console.log(myStatistica);
        },
    }
</script>