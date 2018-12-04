<template>
      <div class="social mb-4">
              <ul>
                      <li v-if="sosial.facebook"><a href="#"><i class="fab mr-2 fa-facebook-f"></i></a></li>
                      <li v-if="sosial.twitter"><a href="#"><i class="fab mr-2 fa-twitter"></i></a></li>
                      <li v-if="sosial.googleplus"><a href="#"><i class="fab mr-2 fa-google-plus"></i></a></li>
                      <li v-if="sosial.pinterest"><a href="#"><i class="fab mr-2 fa-pinterest"></i></a></li>
                      <li v-if="sosial.vk"><a href="#"><i class="fab mr-2 fa-vk"></i></a></li>
              </ul>
      </div>
</template>

<script type="text/babel">
    export default{
        props: ['sosial'],
        data() {
            return {
                
            }           
        },
        created(){
            console.log("Sosial created");
            //console.log(myStatistica);
        },
    }
</script>