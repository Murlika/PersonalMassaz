<template>
	<div class="container py-3">
		<h3 class="heading">{{title}}</h3>
		<div class="test-grids">
			<!-- testimonials -->
			<div class=" clients">
				<div class="sreen-gallery-cursual">
					<div id="owl-demo" class="owl-carousel">
						 <div class="item-owl" v-for="myTestimonialsItem in myTestimonials">
							<div class="test-image">
								<img :src="myTestimonialsItem.image" alt=" " class="img-fluid">
							</div>
							<div class="test-review">
							  <h5>{{myTestimonialsItem.name}}</h5>
							   <p> <span><i class="fa fa-quote-left" aria-hidden="true"></i></span>{{myTestimonialsItem.text}}<span><i class="fa fa-quote-right" aria-hidden="true"></i></span></p>
							  <p class="date">{{myTestimonialsItem.date}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- //testimonials -->
		</div>
	</div>
  
</template>

<script type="text/babel">
    require('../js/owl.carousel.js')
     
    export default{
        props: ['myTestimonials', 'title'],
        data() {
            return {
                
            }           
        },
        mounted () {
            $(window).on('load', function(){
                  $("#owl-demo").owlCarousel({
			items : 1,
			lazyLoad : true,
			autoPlay : true,
			navigation : false,
			navigationText :  false,
			pagination : true,
		  });
		});
        },
        created(){
            console.log("Testimonials created");
            //console.log(myStatistica);
        },
    }
</script>