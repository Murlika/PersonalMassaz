<template>
       <div class="container py-3">
		<h3 class="heading">{{aboutMe.title}}</h3>
		<div class="row about-grids">
			<div class="col-lg-4">
                                <div v-html="aboutMe.text"></div>
				<a :href="aboutMe.link"> {{aboutMe.linktext}} <span class="fa ml-2 fa-download"></span> </a>	
			</div>
			<div class="col-lg-4 col-md-6 my-lg-0 my-5">
				<img src="images/img.jpg" alt="" class="img-fluid" />
			</div>
			<div class="col-lg-4 bar-grids">
				<div class="wthree_skills">
                                  <template v-for="skillItem in aboutMe.skills">
                                        <h6>{{skillItem.text}}<span> {{skillItem.value}}% </span></h6>
					<div class="progress">
						<div class="progress-bar progress-bar-striped active" :style="`width: ${skillItem.value}%`">
						</div>
					</div>
                                  </template>
				</div>
			</div>
		</div>
	</div> 
</template>

<script type="text/babel">
    export default{
        props: ['aboutMe'],
        data() {
            return {
                
            }           
        },
        created(){
            console.log("About created");
            //console.log(myStatistica);
        },
    }
</script>