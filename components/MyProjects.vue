<template>
	<div class="container py-3">
		<h3 class="heading">{{Title}}</h3>
		<div class="row gallery_grid-more project-grids w3ls">
		  
                        <template v-for="myProjectItem in myProjects">
                           <div class="col-md-3 p-0 pr-2 col-sm-3 col-6 agileits_w3layouts_gallery_grid1 hover14 column">
                              <div class="w3_agile_gallery_effect">
                                     <a :href="myProjectItem.image" data-lightbox="example-set" :data-title="myProjectItem.text">
                                            <figure>
                                               <img :src="myProjectItem.image" :alt="myProjectItem.title" class="img-responsive" />
                                            </figure>
                                     </a>
                              </div>
                            </div>                             

                          </template>


                            
                </div>
	</div>
</template>

<script type="text/babel">
    
    export default{
        props: ['myProjects', 'Title'],
        data() {
            return {
            }           
        },
        mounted () {
            
        },
        created(){
            console.log("Projects created");
        }, 
       
    }
</script>