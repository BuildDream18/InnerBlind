<template>
	<div>
		
    <topBar></topBar>
			<!-- sidebar -->
	<div class="sidebar-menu">
		<ul>
			<li><a href="#"><i class="fa fa-users"></i> Service</a></li>
			<li><a href="#"><i class="fa fa-line-chart" aria-hidden="true"></i> ROI Calculator</a></li>
			<li><a href="#"><i class="fa fa-cogs" aria-hidden="true"></i> Upgrade Guide</a></li>
			<li><a href="#"><i class="fa fa-desktop"></i> Software Demo</a></li>
		</ul>
	</div>

	<!-- hero area -->
	<section class="soft-define-area home" id="home">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="section-title">
						<h2>Software-Defined Access</h2>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="soft-define-img wow fadeIn">
						<img src="assets/images/soft-define/soft-dif-1.jpg" alt="Softwar Define Access">
					</div>
				</div>
				<div class="col-md-6">
					<div class="soft-define-content">
						<h3>Get network speed, security, and peace of mind</h3>
						<p>Ease your network management worries. Cisco Software-Defined Access (SD-Access) gives you a
							single network fabric. You can set policy-based automation for
							users, devices, and things.</p>
						<p>Provide access to any application, without compromising on security. All while gaining
							awareness of what is hitting your network.</p>
						<p>And with automatic segmentation of users, devices, and applications, you can deploy and
							secure services faster.</p>
					</div>
         <div class="soft-define-btn">
     <v-dialog
      v-model="dialog"
		@keydown.esc="HidePlyr()"
		@keydown.space="HidePlyr()"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <a v-on="on" class="default-btn" style="color:white;">  Watch video</a>
        
        <a href="#" class="second-btn">Read news </a>
      
      </template>
	  
		<vue-plyr>
		<video poster="poster.png" src="video.mp4">
			<source src="assets/images/video.mp4" type="video/mp4" size="720">
			<track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
		</video>
		</vue-plyr>

    </v-dialog>
            
          </div>
				</div>
			</div>
		</div>
	</section>

  <v-app-bar dense v-bind:style="topbarStyle" v-scroll="onScroll">
      <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text class="active"><a href="#pg1">Banifites</a></v-btn>
        <v-btn text><a href="#pg2">InsideCase</a></v-btn>
        <v-btn text><a href="#pg3">Studies</a></v-btn>
        <v-btn text><a href="#pg4">Partners</a></v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
          <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              text
              v-on="on"
            >
              <span class="fa fa-envelope"></span> Contact
              <span class="caret"></span>
            </v-btn>
          </template>
          <v-list>          
              <v-list-item-title>Call Now</v-list-item-title>
              <v-list-item-title>Page 1-2</v-list-item-title>
              <v-list-item-title>Page 1-3</v-list-item-title>
          </v-list>
        </v-menu>
      </div>
      </v-toolbar-items>
    </v-app-bar>


	<!-- pg1 -->
	<div class="hg after-nav" id="pg1">
		<div class="container">
			<!-- section title -->
			<div class="sd-access section-title">
				<h2>What you can do with SD-Access</h2>
			</div>
			<div class="row">
				<!-- single sd-access start-->
				<div class="col-sm-6">
					<div class="single-sd-access">
						<div class="sd-access-img wow fadeIn">
							<img src="assets/images/sd-access/sd-access-1.png" alt="sd-access">
						</div>
						<div class="sd-access-content">
							<h2>Enhance security and compliance</h2>
							<p>
								Use end-to-end segmentation to keep user, device, and application traffic separate
								without redesigning
								the network.
							</p>
						</div>
					</div>
				</div>
				<!-- single sd-access end -->
				<!-- single sd-access start-->
				<div class="col-sm-6">
					<div class="single-sd-access">
						<div class="sd-access-img wow fadeIn">
							<img src="assets/images/sd-access/sd-access-2.png" alt="sd-access">
						</div>
						<div class="sd-access-content">
							<h2>Enhance security and compliance</h2>
							<p>
								Use end-to-end segmentation to keep user, device, and application traffic separate
								without redesigning
								the network.
							</p>
						</div>
					</div>
				</div>
				<!-- single sd-access end -->
				<!-- single sd-access start-->
				<div class="col-sm-6">
					<div class="single-sd-access">
						<div class="sd-access-img wow fadeIn">
							<img src="assets/images/sd-access/sd-access-3.png" alt="sd-access">
						</div>
						<div class="sd-access-content">
							<h2>Enhance security and compliance</h2>
							<p>
								Use end-to-end segmentation to keep user, device, and application traffic separate
								without redesigning
								the network.
							</p>
						</div>
					</div>
				</div>
				<!-- single sd-access end -->
				<!-- single sd-access start-->
				<div class="col-sm-6">
					<div class="single-sd-access">
						<div class="sd-access-img wow fadeIn">
							<img src="assets/images/sd-access/sd-access-4.png" alt="sd-access">
						</div>
						<div class="sd-access-content">
							<h2>Enhance security and compliance</h2>
							<p>
								Use end-to-end segmentation to keep user, device, and application traffic separate
								without redesigning
								the network.
							</p>
						</div>
					</div>
				</div>
				<!-- single sd-access end -->
			</div>
			<div class="row">
				<div class="pg1-btn" style="text-align:center; width:100%">
					<a href="#" class="default-btn" style="color:white;margin-right: 20px;">Read More</a>
					<a href="#" class="second-btn">Read More</a>
				</div>
			</div>
		</div>

	</div>

	<!-- call to action area -->
	<section class="cta-area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="section-title text-white">
						<h2>SD-Access: A to Z</h2>
					</div>
					<div class="cta-content text-center">
						<p>Get a deep dive on SD-Access, and learn how it powers intent-based networking.</p>
						<a href="#" class="read-btn">Read E-Book</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- csd-access-area -->
	<div class="csd-access-area " id="pg2">

		<div class="container">
			<div class="row">
				<!-- seciton title -->
				<div class="section-title">
					<h2>Components of SD-Access</h2>
				</div>
				<div class="row">
					<!-- csd-access-content -->
					<div class="col-lg-3 col-sm-6">
						<div class="csd-access-content">
							<h2><a href="#">Wireless</a></h2>
							<p>Optimize, personalize, and secure your wireless network</p>
						</div>
					</div>
					<!-- csd-access-content end-->
					<!-- csd-access-content -->
					<div class="col-lg-3 col-sm-6">
						<div class="csd-access-content">
							<h2><a href="#">Switches</a></h2>
							<p>Get a single fabric to help simplify and secure your digital-ready network.</p>
						</div>
					</div>
					<!-- csd-access-content end-->
					<!-- csd-access-content -->
					<div class="col-lg-3 col-sm-6">
						<div class="csd-access-content">
							<h2><a href="#">Routers</a></h2>
							<p>Provide access to applications, services, and integrated technologies.</p>
						</div>
					</div>
					<!-- csd-access-content end-->
					<!-- csd-access-content -->
					<div class="col-lg-3 col-sm-6">
						<div class="csd-access-content">
							<h2><a href="#">Cisco DNA Center</a></h2>
							<p>Manage SD-Access with a central dashboard across the entire network.</p>
						</div>
					</div>
					<!-- csd-access-content end-->
					<!-- csd-access-content -->
					<div class="col-lg-3 col-sm-6">
						<div class="csd-access-content">
							<h2><a href="#">Identity Services Engine (ISE)</a></h2>
							<p>Simplify delivery of identify-based policy for users and devices​.</p>
						</div>
					</div>
					<!-- csd-access-content end-->
					<!-- csd-access-content -->
					<div class="col-lg-3 col-sm-6">
						<div class="csd-access-content">
							<h2><a href="#">Cisco DNA subscriptions</a></h2>
							<p>Help to easily buy, manage, and upgrade your network and infrastructure software.</p>
						</div>
					</div>
					<!-- csd-access-content end-->
					<!-- csd-access-content -->
					<div class="col-lg-3 col-sm-6">
						<div class="csd-access-content">
							<h2><a href="#">Services</a></h2>
							<p>Explore the services we offer for <a href="#">switches, routers, and wireless.</a></p>
						</div>
					</div>
					<!-- csd-access-content end-->
					<!-- csd-access-content -->
					<div class="col-lg-3 col-sm-6">
						<div class="csd-access-content">
							<h2><a href="#">DevNet</a></h2>
							<p>Extend automation across the enterprise with open APIs​</p>
						</div>
					</div>
					<!-- csd-access-content end-->
				</div>
				<!-- csd-access-btn-area -->
				<div class="csd-access-btn" style="text-align:center; width:100%">
					<a href="#" class="default-btn" style="color:white;margin-right: 20px;">Read More</a>
					<a href="#" class="second-btn">Read More</a>
				</div>
			</div>
		</div> <!-- container -->

		<!-- csd-flexibility -->
		<div class="csd-flexibility">
			<div class="container">
				<div class="csd-flexibility-title">
					<h2>Increase flexibility with Cisco DNA software subscriptions</h2>
				</div>
				<div class="csd-flexibility-content">
					<p>Choose from three subscription tiers—Cisco DNA Essentials, Cisco DNA Advantage, and Cisco DNA
						Premier. Our
						flexible software suites are designed to address your automation and segmentation requirements
						with rich
						security.</p>
					<p>Subscriptions are available in 3-, 5-, and 7-year terms. All include Cisco Software Support
						Service (SWSS).
					</p>
				</div>
				<!-- csd-access-btn-area -->
				<div class="csd-flexibility-btn" style="text-align:center; width:100%">
					<a href="#" class="default-btn" style="color:white;margin-right: 20px;">Read More</a>
					<a href="#" class="second-btn">Read More</a>
				</div>
			</div>
		</div>
	</div>

	<!-- getstart area -->
	<section class="get-start-area">
		<div class="container">
			<div class="row">
				<div class="col-sm-6">
					<div class="single-start">
						<div class="start-img wow fadeIn">
							<img src="assets/images/get-start/start-img-1.jpg" alt="">
						</div>
						<div class="success-content">
							<h3>Children’s Hospital</h3>
							<p>The hospital delivers excellent patient care by securely connecting and managing
								thousands of network devices.</p>
							<a href="#" class="success-link">Watch Video <i class="fa fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="single-start">
						<div class="start-img wow fadeIn">
							<img src="assets/images/get-start/start-img-2.jpg" alt="">
						</div>
						<div class="success-content">
							<h3>Children’s Hospital</h3>
							<p>The hospital delivers excellent patient care by securely connecting and managing
								thousands of network devices.</p>
							<a href="#" class="success-link">Watch Video <i class="fa fa-angle-right"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- success area -->
	<section class="success-area" id="pg3">
		<div class="container">
			<div class="section-title">
				<h2>SD-Access success stories</h2>
			</div>
			<div class="row">
				<div class="col-sm-4">
					<div class="single-success">
						<div class="success-img wow fadeIn">
							<img src="assets/images/success/success-img-1.jpg" alt="">
						</div>
						<div class="success-content">
							<h3>Children’s Hospital</h3>
							<p>The hospital delivers excellent patient care by securely connecting and managing
								thousands of network devices.</p>
							<a href="#" class="success-link">Watch Video <i class="fa fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="single-success">
						<div class="success-img wow fadeIn">
							<img src="assets/images/success/success-img-2.jpg" alt="">
						</div>
						<div class="success-content">
							<h3>Children’s Hospital</h3>
							<p>The hospital delivers excellent patient care by securely connecting and managing
								thousands of network devices.</p>
							<a href="#" class="success-link">Watch Video <i class="fa fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="single-success">
						<div class="success-img wow fadeIn">
							<img src="assets/images/success/success-img-3.jpg" alt="">
						</div>
						<div class="success-content">
							<h3>Children’s Hospital</h3>
							<p>The hospital delivers excellent patient care by securely connecting and managing
								thousands of network devices.</p>
							<a href="#" class="success-link">Watch Video <i class="fa fa-angle-right"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-center">
					<div class="see-all-btn">
						<a href="#">See all </a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- cadentic about -->
	<div class="cadentic-about-area">
		<div class="container">
			<!-- about title -->
			<div class="cadentic-about-title">
				<h2>About Cisco Software-Defined Access​(SD-Access)</h2>
			</div>
			<!-- cadentic about content -->
			<div class="cadentic-about-content">
				<ul>
					<li>Cisco SD-Access helps organizations enable policy-based automation from the edge to the cloud.
					</li>
					<li>SD-Access gives network architects and administrators the tools to orchestrate key business
						functions,
						such as: user mobility, secure segmentation, user onboarding, Internet of Things (IoT)
						integration, guest
						access, context-based troubleshooting, and data center and cloud integration.</li>
					<li>Administrators can also now execute full network lifecycle tasks, including design,
						provisioning,
						operations, and assurance with Cisco DNA Center.</li>
					<li>You can set network access in minutes for any user or device, to any application, without
						compromising on
						security</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="partnar-area" id="pg4">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="section-title">
						<h2 class="text-left">For partners</h2>
					</div>
					<div class="partnar-content">
						<p>Are you a Cisco partner? <a href="#">Log in</a> to see additional resources.</p>
						<p>Looking for a solution from a Cisco partner? Connect with our <a href="#">partner recosystem.</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>


	<!-- footer -->
    <footer class="secfooter" style="background:#E6F5FF;" >
    <div class="secpage">
        <v-container>
    <v-row>
      <v-col cols="sm">
      <a href="">TERMS & CONDITION</a>
      <a href="">ABOUT US</a></v-col>
      <v-col cols="sm">
      <a href="">CONTACT US</a>
      <a href="">DIRECTORS</a>  </v-col>
      <v-col cols="sm">
      <a href="">DEVELOPERS</a>
      <a href="">OUR CLIENTS</a>  </v-col>
      <v-col cols="sm">
      <a href="">CORPORATE ACTION</a>
      <a href="">NATURE & MODE OF WORK</a>   </v-col>
    </v-row>
  </v-container>
     </div>
     <div class="divide40"></div>
       <div class="socialico">
      
      <a class="wow rollIn" data-wow-duration="2.5s" data-wow-delay=".2s" href="" style="background:#26a6d1;"><i class="fa fa-twitter"></i></a>
      <a class="wow rollIn" data-wow-duration="2s" data-wow-delay=".2s" href="" style="background:#3b5998;"><i class="fa fa-facebook"></i></a>
      <a class="wow rollIn" data-wow-duration="1.5s" data-wow-delay=".2s" href="" style="background:#007ab9;"><i class="fa fa-linkedin"></i></a>
      <a class="wow rollIn" href="" style="background:#b81a7e;"><i class="fa fa-instagram"></i></a>
      
      </div>

    </footer>

	<!-- copyright -->
	<div class="copyright">
		<p>2019 Copyright</p>
	</div>

	</div>
</template>
<script>
    import topBar from './shared/topBar.vue'
	export default {
      components: { topBar },
	  data: () => ({
	    offsetTop: 0,
	    topbarStyle: 'background: rgb(230, 245, 255); padding: 30px 75px; border-color: rgb(255, 255, 255); position: static; top: 0px; left: 0px; right: 0px; z-index: 100;',
	  }),
	  methods: {
		HidePlyr(){
			this.dialog = false
		},
	    onScroll (){
	      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
	      if (this.offsetTop >= 780 ) {
	        this.topbarStyle = "background: rgb(230, 245, 255); padding: 30px 75px; border-color: rgb(255, 255, 255); position: fixed; top: 0px; left: 0px; right: 0px; z-index: 100;"
	      }else{
	        this.topbarStyle = "background: rgb(230, 245, 255); padding: 30px 75px; border-color: rgb(255, 255, 255); position: static; top: 0px; left: 0px; right: 0px; z-index: 100;"
	      }
	    }
	  }
	};


</script>