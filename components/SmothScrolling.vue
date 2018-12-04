<template>
</template>

<script type="text/babel">
  require('../js/SmoothScroll.min.js')
  require('../js/move-top.js')
  require('../js/easing.js')
        
  export default{
        props: [],
        data() {
            return {
                
            }           
        },
        mounted () {
            $(window).on('load', function(){
                $(".scroll").click(function(event){		
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
			});
		});
                /*
                        var defaults = {
                        containerID: 'toTop', // fading element id
                        containerHoverID: 'toTopHover', // fading element hover id
                        scrollSpeed: 1200,
                        easingType: 'linear' 
                        };
                */

                $().UItoTop({ easingType: 'easeOutQuart' });
        },
        created(){
            console.log("SmothScrolling created");
            //console.log(myStatistica);
        },
  }
</script>