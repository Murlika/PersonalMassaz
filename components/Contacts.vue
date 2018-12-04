<template>
  	<div class="container py-3">
		<h3 class="heading">{{title}}</h3>
		<div class="row contact-grids">
			<div class="col-lg-5 contact-left">
				<h4 class="mb-4">{{myContacts.h1Text}}</h4>
				<div class="row">
					<div class="col-1 pr-0 icon">
						<i class="fa fa-envelope-open" aria-hidden="true"></i>
					</div>
					<div class="col-11">
						<h5>{{myContacts.mailText}}</h5>
						<p><a href="#">{{myContacts.mail}}</a></p>
					</div>
					<div class="col-1 pr-0 icon mt-4">
						<i class="fa fa-phone" aria-hidden="true"></i>
					</div>
					<div class="col-11 mt-4">
						<h5>{{myContacts.phoneText}}</h5>
						<p> {{myContacts.phone}}</p>
					</div>
					<div class="col-1 pr-0 icon mt-4">
						<i class="fa fa-map-marker" aria-hidden="true"></i>
					</div>
					<div class="col-11 mt-4">
						<h5>{{myContacts.addrText}}</h5>
						<p>{{myContacts.adress}}</p>
					</div>
				</div>
			</div>
			<div class="col-lg-7 mt-lg-0 mt-5 contact-right">
				<h4 class="mb-4">{{myContacts.askme}}</h4>
				<form action="#" method="post">
					<label><i class="fa mr-2 fa-user" aria-hidden="true"></i> Имя</label>
					<input type="text" name="Name" value="Имя" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required="">
					<div class="clearfix"></div>
					<label><i class="fas mr-2 fa-envelope-open" aria-hidden="true"></i>Email</label>
					<input type="email" name="Email" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required="">
					<div class="clearfix"></div>
					<label><i class="fas mr-2 fa-phone" aria-hidden="true"></i>Телефон</label>
					<input type="text" name="Phone" value="Телефон" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Phone';}" required="">
					<div class="clearfix"></div>
					<label><i class="fas mr-2 fa-edit" aria-hidden="true"></i>Ваш вопрос</label>
					<textarea name="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'думаю...';}" required="">Message...</textarea>
					<input type="submit" value="Послать">
				</form>
			</div>
		</div>
	</div>

  
</template>

<script type="text/babel">

    
    export default{
        props: ['myContacts', 'title'],
        data() {
            return {
                
            }           
        },
        created(){
            console.log("Contacts created");
            //console.log(myStatistica);
        },
    }
</script>