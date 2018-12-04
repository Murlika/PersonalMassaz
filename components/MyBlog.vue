<template>
             <div class="container py-3">
                      <h3 class="heading">{{title}}</h3>
                      <div class="row blog-grids">
                              <div class="col-lg-7">
                                      <h4 class="left-grid-blog">{{myNewsText.h4Text}}</h4>
                                      <p class="left-grid-blog">{{myNewsText.text}}</p>
                                      <div class="row">
                                              <div class="col-md-6 pr-md-0 w3ls">
                                                      <div class="blog-grid1">
                                                              <h5>{{myNews[0].date}}</h5>
                                                              <h4>{{myNews[0].title}}</h4>
                                                              <p>{{myNews[0].text}}</p>
                                                      </div>
                                              </div>
                                              <div class="col-md-6 mt-md-0 mt-3 w3ls">
                                                      <div class="blog-grid1">
                                                              <h5>{{myNews[1].date}}</h5>
                                                              <h4>{{myNews[1].title}}</h4>
                                                              <p>{{myNews[1].text}}</p>
                                                      </div>
                                              </div>
                                      </div>
                              </div>
                              <div class="col-lg-5 mt-lg-0 mt-5 blog-grid1 w3ls">
                                      <h5>{{myNews[2].date}}</h5>
                                      <h4>{{myNews[2].title}}</h4>
                                      <p>{{myNews[2].text}}</p>
                              </div>
                      </div>
              </div>
</template>
    
<script type="text/babel">
    export default{
        props: ['myNews','myNewsText','title'],
        data() {
            return {
                
            }           
        },
        created(){
            console.log("blog created");
            //console.log(myStatistica);
        },
    }
</script>