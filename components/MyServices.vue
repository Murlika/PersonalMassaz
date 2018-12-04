<template>
  <div class="container py-3">
		<h3 class="heading">{{title}}</h3>
		<div class="row service-grids">
                  <template v-for="myServiceItem in myServices">
                    	<div class="col-lg-4 col-md-6 agile w3-icon-grid1"  :key="myServiceItem.id">
				<h3><i class="fas mr-2 " v-bind:class="myServiceItem.icon"  aria-hidden="true"></i> {{myServiceItem.title}}</h3>
                                <div v-html="myServiceItem.text"></div>
			</div>
                  </template>
                </div>
  </div>
</template>
    
<script type="text/babel">
    export default{
        props: ['myServices', 'title'],
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