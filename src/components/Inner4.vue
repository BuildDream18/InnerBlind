<template>
	<div>
    <topBar></topBar>
    
	<div>
		
			<!-- sidebar -->
	<div class="sidebar-menu">
		<ul>
			<li><a href="#"><i class="fa fa-users"></i> Service</a></li>
			<li><a href="#"><i class="fa fa-line-chart" aria-hidden="true"></i> ROI Calculator</a></li>
			<li><a href="#"><i class="fa fa-cogs" aria-hidden="true"></i> Upgrade Guide</a></li>
			<li><a href="#"><i class="fa fa-desktop"></i> Software Demo</a></li>
		</ul>
	</div>

	<!-- video banner -->
      <v-row no-gutters>
      <v-col cols="8">
        <video autoplay loop muted>
        <source src="assets/images/cdst-header-2019-06-20.mp4" type="video/mp4">
      </video>
      </v-col>
      <v-col cols="4">
        <div class="banner-content" style="padding-top: 8em;">
            <div class="banner-title">
              <p>Cadentic</p>
              <h3>Digital systems & technology</h3>
            </div>
            <div class="banner-btn">
              <a href="#">Navigate the Shift to Digital</a>
            </div>
            <div class="banner-text">
              <h3>MODERNIZE <span>YOUR</span> CORE <span>IT</span></h3>
              <p>Future-proof your technology landscape by implementing a simple, modern and secure IT
                backbone.</p>
            </div>
            </div>
      </v-col>
    </v-row>


	<!-- nav -->
	<v-app-bar dense   v-bind:style="topbarStyle"  v-scroll="onScroll">
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn text class="nav-link-btn"><a href="#innovation" class="white-link">Innovation</a></v-btn>
	<v-btn text class="nav-link-btn"><a href="#testimonail" class="white-link">Testimonail</a></v-btn>
	<v-btn text class="nav-link-btn"><a href="#about" class="white-link">About</a></v-btn>
	<v-btn text class="nav-link-btn"><a href="#Offerings" class="white-link">Offerings</a></v-btn>
	<v-btn text class="nav-link-btn"><a href="#Partners" class="white-link">Partners</a></v-btn>
	<v-btn text class="nav-link-btn"><a href="#work" class="white-link">work</a></v-btn>
	<v-btn text class="nav-link-btn"><a href="#contact" class="white-link">Contact</a></v-btn>
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
		<span class="white-link">
          <span class="fa fa-envelope"></span> 
          <span>Contact</span>
          <span class="caret"></span>
      </span>
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

	<!-- innovation-area -->
	<section class="innovation-area" id="innovation">
		<div class="innovation-top-area"></div>
		<div class="container">
			<div class="main-innovation">
				<div class="row">
					<div class="col-md-5">
						<div class="innovation-title">
							<h2>ACCELERATE INNOVATION {{offsetTop}}</h2>
						</div>
						<div class="innovation-social-icon">
							<a href="#"><i class="fa fa-envelope"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-linkedin"></i></a>
						</div>
					</div>
					<div class="col-md-7">

						<div class="innovation-content-title">
							<h2>Update your enterprise IT and application environment to support the needs of business
								today and tomorrow.</h2>
						</div>
						<div class="innovation-content">
							<p>The IT challenges of running a digital enterprise can be overwhelming. Legacy technology
								investments are no longer enough to meet your business’s ever-increasing demands. And
								moving to new technologies and applications, whether on-premise or off, presents a
								unique set of business risks.</p>
							<p>Cognizant can help. Let us partner with you to modernize your core IT infrastructure. By
								creating an actionable reference architecture that charts the course from “as is” to “to
								be,” we’ll help you transform your applications and infrastructure from a
								business-limiting state to a growth-enabling one.</p>
							<p>With Cognizant behind you, you can accelerate innovation by moving applications to the
								cloud, enabling rapid new application development and deepening security.</p>
							<div class="innovation-btn">
								<a href="#" class="default-btn" style="color:white;"> Learn More</a>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>
	</section>

 <v-carousel height="auto" hide-delimiters>
    <v-carousel-item>
      <v-sheet
        tile
      >
        <v-row>
          		<div class="item">
			<div class="video-img">
				<img src="assets/images/inner4-video/video-1.jpg" alt="">
				<div class="video-content">
					<h2>How Cambridge assignment Modernize Its core </h2>
				</div>
				<div class="video-play-btn">
					<a class="play-btn" @click="showVideo(1)"><i class="fa fa-play-circle-o"></i></a>
				</div>
				<div class="video-area">
					<span class="video-close" @click="showVideo(0)" v-bind:style="displayVideo === 1 ? 'display:block' : '' ">X</span>
					<iframe src="https://www.youtube.com/embed/Ly4mZtRNynE" frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen v-bind:style="displayVideo === 1 ? 'display:block' : '' "></iframe>

				</div>
			</div>
			</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
        <v-carousel-item>
      <v-sheet
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          		<div class="item">
			<div class="video-img">
				<img src="assets/images/inner4-video/video-1.jpg" alt="">
				<div class="video-content">
					<h2>How Cambridge assignment Modernize Its core </h2>
				</div>
				<div class="video-play-btn">
					<a class="play-btn" @click="showVideo(2)" ><i class="fa fa-play-circle-o"></i></a>
				</div>
				<div class="video-area">
					<span class="video-close" @click="showVideo(0)" v-bind:style="displayVideo === 2 ? 'display:block' : '' ">X</span>
					<iframe src="https://www.youtube.com/embed/Ly4mZtRNynE" frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen v-bind:style="displayVideo === 2 ? 'display:block' : '' "></iframe>

				</div>
			</div>
			</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
	</div>

	<!-- inner4 testimonial  -->
	<div class="inner-testimonial-area">
		      <v-container>
		  <v-carousel height="auto"  style="background:red;">
		    <v-carousel-item>
		      <v-sheet
		        tile
		      >
		        <v-row align="center" justify="center">
		          <v-col cols="sm">
						<div class="testimonial-img">
							<img src="assets/images/inner4-testimonial/testimonial-1.png" alt="">
						</div>
		          </v-col>
		          <v-col cols="sm">		          	
						<div class="testimonial-title">
							<h2>Cognizant Named Leader in Next-Gen ADM Services</h2>
							<p>Cognizant has been named a market leader in Next-Gen Application Development and
								Maintenance (ADM) services by ISG, a leading global technology research and advisory
								firm.</p>
						</div>
						<div class="testimonial-btn">
							<ul>
								<li><a href="#" class="default-btn" style="color:white;">Read more</a></li>
							</ul>
						</div>
		          </v-col>
		        </v-row>
		      </v-sheet>
		    </v-carousel-item>
		     <v-carousel-item>
		      <v-sheet
		        tile
		      >
		        <v-row>
		          <v-col cols="sm" align="center" justify="center">
						<div class="testimonial-img">
							<img src="assets/images/inner4-testimonial/testimonial-2.png" alt="">
						</div>
		          </v-col>
		          <v-col cols="sm">		          	
						<div class="testimonial-title">
							<h2>Cognizant Named Leader in Next-Gen ADM Services</h2>
							<p>Cognizant has been named a market leader in Next-Gen Application Development and
								Maintenance (ADM) services by ISG, a leading global technology research and advisory
								firm.</p>
						</div>
						<div class="testimonial-btn">
							<ul>
								<li><a href="#" class="default-btn white-link">View more</a></li>
								<li><a href="#" class="default-btn white-link">View more</a></li>
								<li><a href="#" class="default-btn white-link">View more</a></li>
							</ul>
						</div>
		          </v-col>
		        </v-row>
		      </v-sheet>
		    </v-carousel-item>
		  </v-carousel>
		    </v-container>
	</div>


	<!-- vartical nav -->
	<section id="about">
		<div class="section-title what-we text-center">
			<h2>what we do</h2>
		</div>
		<div class="vartical-nav">
			<div class="container">
				<div class="tab">
					<button class="tablinks active" onmouseover="openCity(event, 'tab-1')">MODERNIZE YOUR CORE</button>
					<button class="tablinks" onmouseover="openCity(event, 'tab-2')">DEPLOY APPLICATION
						AUTOMATION</button>
					<button class="tablinks" onmouseover="openCity(event, 'tab-3')">EVOLVE YOUR APPROACH TO
						CLOUD</button>
					<button class="tablinks" onmouseover="openCity(event, 'tab-4')">SECURE YOUR ENTERPRISE</button>
					<button class="tablinks" onmouseover="openCity(event, 'tab-5')">ENGINEER YOUR DIGITAL
						FUTURE</button>
				</div>

				<div id="tab-1" class="tabcontent" style="display: block">
					<h3>Today’s business demands more from your IT infrastructure.</h3>
					<p>Customers, internal and external, are demanding richer, better experiences than businesses can
						deliver today from their existing applications and infrastructure. Clients have been tinkering
						at
						the edge for years to increase core performance, but they’re confronting the fact that these
						incremental efforts, while necessary, are no longer reaping the needed rewards.
					</p>
						<p>
							A new level of resiliency and agility is required to compete effectively in the market.
							Organizations must reimagine their core and modernize to ensure they are fit for purpose and
							can
							meet customer demands, while managing the risks associated with wholesale transformation.
						</p>
					
					<a href="#" class="tabcontent-btn">LEARN MORE</a>
				</div>

				<div id="tab-2" class="tabcontent">
					<h3>Rethink business and IT processes and strategies with integrated automation, and offer unique
						customer experiences that power growth.</h3>
					<p>As old economic models continue to give way to new digital businesses, you need to automate to
						remain
						competitive and drive new value. Automation enhances the very core of your business, unlocking
						intelligent new capabilities across the enterprise. It’s a whole different approach to business.
					</p>
					<p>Cognizant follows this approach. Our HiveCenterTM is an integrated automation ecosystem that
						delivers best-in-class automation across a continuum of systems that think, do and
						learn—accelerating new digital capabilities that drive value for your business.</p>
					<a href="#" class="tabcontent-btn">LEARN MORE</a>
				</div>

				<div id="tab-3" class="tabcontent">
					<h3>Realize the promise of digital transformation at speed and scale.</h3>
					<p>Today’s companies must transform and modernize their application and infrastructure to fulfill
						the
						demands for better customer experience and faster time to market. The catalyst: cloud. It opens
						doors to new operating models and offerings that enable you to meet increased demand for agility
						and
						security at scale. But how do you best deploy cloud for digital transformation?
					</p>
					<p>Enter Cognizant. We help businesses deploy cloud within their digital transformation journeys to
						meet
						business objectives and drive growth. Count on us to help you realize the benefit of the cloud
						in a
						risk-mitigated fashion.</p>
					<a href="#" class="tabcontent-btn">LEARN MORE</a>
				</div>

				<div id="tab-4" class="tabcontent">
					<h3>Moving to next-gen big data, blockchain, IoT, AI and cloud? Get ready to tackle larger and more
						complex security risks.</h3>
					<p>As digital technologies proliferate and grow more complex and uncertain, how do you safeguard
						your
						data, employees and customers against cyber threats that are as sophisticated as those
						technologies?
						A security breach can cause serious damage to your business, so it’s critical to take measures
						to
						reduce your risks and protect your assets.
					</p>
					<p>Cognizant has answers. We’ll show you how to build a strong prevention initiative, as well as a
						solid
						response and recovery plan in the event of a security breach. The result for you? By expanding
						the
						scope of your security initiative, you gain visibility and actionable intelligence, and make
						more
						efficient use of your own resources. That leads directly to faster containment of potential
						threats
						to your enterprise.</p>
					<a href="#" class="tabcontent-btn">LEARN MORE</a>
				</div>

				<div id="tab-5" class="tabcontent">
					<h3>A superior customer experience. Quick prototyping. Faster time-to-market. These are the
						must-haves
						of the digital era. </h3>
					<p>Insight powers the next generation of digital apps, seamlessly replacing traditional service
						strategies with greater speed and value to engage customers more directly, easily and precisely.
					</p>
					<p>Cognizant Softvision’s Digital Engineering provides just that. Bridging the gap between designers
						and
						engineers, we offer you next-gen domain and software engineering expertise on one platform,
						delivering insights-driven solutions that fuse advanced human-science with fast engineering
						practices. That enables you to embrace new digital technologies by gaining greater agility, an
						always-ready, scalable cloud infrastructure, and enhanced productivity—all within a dynamic
						ecosystem. </p>
					<p>The result: concept-to-code that’s faster-to-market, and that emphasizes customers above all.</p>
					<a href="#" class="tabcontent-btn">LEARN MORE</a>
				</div>


				<div class="clearfix"></div>
			</div>
		</div>
	</section>

	<!-- innovation-OFFERINGS-area -->
	<section class="innovation-area" id="Offerings">
		<div class="innovation-top-area text-center">
			<h2 class="offerings-title">OFFERINGS</h2>
		</div>
		<div class="container">
			<div class="main-innovation">
				<div class="row">
					<div class="col-md-5">
						<div class="innovation-title">
							<h2>LEADING TRANSFORMATIVE CHANGE</h2>
						</div>
						<div class="innovation-social-icon">
							<a href="#"><i class="fa fa-envelope"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-linkedin"></i></a>
						</div>
					</div>
					<div class="col-md-7">
						<div class="innovation-content">
							<p>Digital success requires not only keeping pace with change, but driving it—regardless of
								legacy technical debt, complex processes or security threats. Leading your organization
								to a market-leading future means rethinking ways to simplify, modernize and secure your
								IT infrastructure in these areas.</p>
						</div>
					</div>
				</div> <!-- row -->

			</div>
			<div class="row">
				<!-- OFFERINGS box  -->
				<!-- single offering box start-->
				<div class="col-md-6">
					<div class="offerings-box">
						<div class="offerings-img">
							<img src="assets/images/offering/offering-1.jpg" alt="">
						</div>
						<div class="offerings-content">
							<h3><a href="#">APPLICATION SERVICES </a></h3>
							<p>Build applications that deliver the digital experiences customers want.</p>
						</div>
					</div>
				</div>
				<!-- single offering box end -->
				<!-- single offering box start-->
				<div class="col-md-6">
					<div class="offerings-box">
						<div class="offerings-img">
							<img src="assets/images/offering/offering-2.jpg" alt="">
						</div>
						<div class="offerings-content">
							<h3><a href="#">INFRASTRUCTURE SERVICES </a></h3>
							<p>Transform your IT backbone to create an always-on business.</p>
						</div>
					</div>
				</div>
				<!-- single offering box end -->
				<!-- single offering box start-->
				<div class="col-md-6">
					<div class="offerings-box">
						<div class="offerings-img">
							<img src="assets/images/offering/offering-3.jpg" alt="">
						</div>
						<div class="offerings-content">
							<h3><a href="#">ENTERPRISE APPLICATION SERVICES </a></h3>
							<p>Streamline your back office and improve operational agility and employee connections.</p>
						</div>
					</div>
				</div>
				<!-- single offering box end -->
				<!-- single offering box start-->
				<div class="col-md-6">
					<div class="offerings-box">
						<div class="offerings-img">
							<img src="assets/images/offering/offering-4.jpg" alt="">
						</div>
						<div class="offerings-content">
							<h3><a href="#">QUALITY ENGINEERING & ASSURANCE </a></h3>
							<p>Employ an end-to-end approach where high quality meets high speed</p>
						</div>
					</div>
				</div>
				<!-- single offering box end -->
			</div> <!-- row -->
		</div>
	</section>

	<!-- our partners start  -->
	<div class="ourpartners-area" id="Partners">
		<div class="container">
			<!-- partners title -->
			<div class="ourpartners-title">
				<h2>OUR PARTNERS</h2>
				<p>Cognizant’s strategic alliances with the world's leading technology companies provides you with an
					ecosystem of options based on dominant technology platforms. These partnerships demonstrate our
					commitment to helping you simplify, modernize and secure your customer engagements across physical
					and digital channels.</p>
			</div>
			<div class="row">
				<!-- single partner start-->
				<div class="col-md-6 col-lg-4">
					<div class="partner-box">
						<div class="partner-img">
							<img src="assets/images/partner/partner-2.png" alt="">
						</div>
						<div class="partner-content">
							<h3> Amazon Web Services</h3>
							<p>Cognizant is a Premier Google Cloud Partner. This partnership brings you innovations in
								AI, machine learning, cloud-native platforms, as well as joint solutions powered by
								next-gen accelerators such as TensorFlow, DialogFlow, Kubernetes, APIs, microservices
								and containers. Agile platforms empower rapid ideation to meet emerging human needs with
								real-time, intelligent insights and global reach.</p>
						</div>
					</div>
				</div>
				<!-- single partner end-->
				<!-- single partner start-->
				<div class="col-md-6 col-lg-4">
					<div class="partner-box">
						<div class="partner-img">
							<img src="assets/images/partner/partner-1.png" alt="">
						</div>
						<div class="partner-content">
							<h3>Google Cloud </h3>
							<p>Cognizant is a Premier Google Cloud Partner. This partnership brings you innovations in
								AI, machine learning, cloud-native platforms, as well as joint solutions powered by
								next-gen accelerators such as TensorFlow, DialogFlow, Kubernetes, APIs, microservices
								and containers. Agile platforms empower rapid ideation to meet emerging human needs with
								real-time, intelligent insights and global reach.</p>
						</div>
					</div>
				</div>
				<!-- single partner end-->
				<!-- single partner start-->
				<div class="col-md-6 col-lg-4">
					<div class="partner-box">
						<div class="partner-img">
							<img src="assets/images/partner/partner-3.png" alt="">
						</div>
						<div class="partner-content">
							<h3>IBM</h3>
							<p>Cognizant is a Premier Google Cloud Partner. This partnership brings you innovations in
								AI, machine learning, cloud-native platforms, as well as joint solutions powered by
								next-gen accelerators such as TensorFlow, DialogFlow, Kubernetes, APIs, microservices
								and containers. Agile platforms empower rapid ideation to meet emerging human needs with
								real-time, intelligent insights and global reach.</p>
						</div>
					</div>
				</div>
				<!-- single partner end-->
			</div>
		</div>
	</div>

	<!-- featured work -->
	<section class="featured-work" id="work">
		<div class="container">
			<div class="section-title purple-text text-center">
				<h2>FEATURED WORK</h2>
			</div>
			<div class="row">
				<div class="col-md-4 col-sm-6">
					<div class="single-featured-work bg-1">
						<a href="#" class="featured-wrapper" title="Speedy Quality for a Smart Home Solution">
							<div class="featured-tag">
								<span><i class="fa fa-leaf" aria-hidden="true"></i> UTILITIES</span>
							</div>
							<div class="featured-title">
								<h2>Speedy Quality for a Smart Home Solution</h2>
							</div>
							<div class="featured-footer">
								<p><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span> <span
										class="view">View</span></p>
							</div>
						</a>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-featured-work bg-1">
						<a href="#" class="featured-wrapper"
							title="Delivery Agile IT Infrastructure With Industry-Leading Resilience">
							<div class="featured-tag">
								<span><i class="fa fa-umbrella" aria-hidden="true"></i> INSURANCE</span>
							</div>
							<div class="featured-title">
								<h2>Delivery Agile IT Infrastructure With Industry-Leading Resilience</h2>
							</div>
							<div class="featured-footer">
								<p><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span> <span
										class="view">View</span></p>
							</div>
						</a>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-featured-work bg-1">
						<a href="#" class="featured-wrapper"
							title="Driving Business Agility Through Data Center Consolidation and Cloud Transformation">
							<div class="featured-tag">
								<span><i class="fa fa-book" aria-hidden="true"></i> MEDIA & ENTERTAINMENT</span>
							</div>
							<div class="featured-title">
								<h2>Driving Business Agility Through Data Center Consolidation and Cloud Transformation
								</h2>
							</div>
							<div class="featured-footer">
								<p><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span> <span
										class="view">View</span></p>
							</div>
						</a>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-featured-work bg-1">
						<a href="#" class="featured-wrapper"
							title="A Global Approach to Applications Management Transformation">
							<div class="featured-tag">
								<span><i class="fa fa-search-plus" aria-hidden="true"></i> INFORMATION SERVICES</span>
							</div>
							<div class="featured-title">
								<h2>A Global Approach to Applications Management Transformation</h2>
							</div>
							<div class="featured-footer">
								<p><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span> <span
										class="view">View</span></p>
							</div>
						</a>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-featured-work bg-1">
						<a href="#" class="featured-wrapper"
							title="On the Path to Faster Growth and Expansion With Global Cloud">
							<div class="featured-tag">
								<span><i class="fa fa-desktop" aria-hidden="true"></i> CONSUMER GOODS</span>
							</div>
							<div class="featured-title">
								<h2>On the Path to Faster Growth and Expansion With Global Cloud</h2>
							</div>
							<div class="featured-footer">
								<p><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span> <span
										class="view">View</span></p>
							</div>
						</a>
					</div>
				</div>
				<div class="col-md-4 col-sm-6">
					<div class="single-featured-work bg-1">
						<a href="#" class="featured-wrapper"
							title="Enabling Digital Transformation With SAP on Cloud for a Leading Supply Chain Firm">
							<div class="featured-tag">
								<span><i class="fa fa-plane" aria-hidden="true"></i> TRANSPORTATION & LOGISTICS</span>
							</div>
							<div class="featured-title">
								<h2>Enabling Digital Transformation With SAP on Cloud for a Leading Supply Chain Firm
								</h2>
							</div>
							<div class="featured-footer">
								<p><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span> <span
										class="view">View</span></p>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 text-center">
					<div class="view-all-btn">
						<a  class="white-link" href="#">VIEW ALL  <span><i class="fa fa-play" aria-hidden="true"></i></span></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- latast thinking -->
	<section class="thinking-area">
		<div class="container">
			<div class="section-title purple-text text-center">
				<h2>LATEST THINKING</h2>
			</div>
			   <v-container>
		  <v-carousel height="330px"  style="background:red;">
		    <v-carousel-item>
		      <v-sheet
		      >
		        <v-row >
		        	<v-col cols="sm">
					<div class="thinking-wrapper bg-1">
						<div class="single-think">
							<div class="think-tag"><span><i class="fa fa-book" aria-hidden="true"></i> E-book</span>
							</div>
							<div class="thinking-text">
								<h4><a href="#">achieving digital dexterity</a></h4>
								<p>Here's how 21 organizations world wide are taking the right...</p>
							</div>
							<div class="thinking-footer">
								<a href="#"><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span>
									<span class="view">View</span></a>
							</div>
						</div>
					</div>
				</v-col>
				<v-col cols="sm">
					<div class="thinking-wrapper bg-2">
						<div class="single-think">
							<div class="think-tag"><span><i class="fa fa-book" aria-hidden="true"></i> E-book</span>
							</div>
							<div class="thinking-text">
								<h4><a href="#">virtual digital surrogates & blockchain: the...</a></h4>
								<p>amid a lack of user0center design and standard protocols...</p>
							</div>
							<div class="thinking-footer">
								<a href="#"><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span>
									<span class="view">View</span></a>
							</div>
						</div>
					</div>
				</v-col>
				<v-col cols="sm">
					<div class="thinking-wrapper bg-3">
						<div class="single-think">
							<div class="think-tag"><span><i class="fa fa-book" aria-hidden="true"></i> E-book</span>
							</div>
							<div class="thinking-text">
								<h4><a href="#">the journey to intelligent ERP</a></h4>
								<p>tapping open-source integration to cut production planning...</p>
							</div>
							<div class="thinking-footer">
								<a href="#"><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span>
									<span class="view">View</span></a>
							</div>
						</div>
					</div>
				</v-col>
		        </v-row>
		      </v-sheet>
		    </v-carousel-item>
		    <v-carousel-item>
		      <v-sheet
		      >
		        <v-row >
		        	<v-col cols="sm">
					<div class="thinking-wrapper bg-1">
						<div class="single-think">
							<div class="think-tag"><span><i class="fa fa-book" aria-hidden="true"></i> E-book</span>
							</div>
							<div class="thinking-text">
								<h4><a href="#">achieving digital dexterity</a></h4>
								<p>Here's how 21 organizations world wide are taking the right...</p>
							</div>
							<div class="thinking-footer">
								<a href="#"><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span>
									<span class="view">View</span></a>
							</div>
						</div>
					</div>
				</v-col>
				<v-col cols="sm">
					<div class="thinking-wrapper bg-2">
						<div class="single-think">
							<div class="think-tag"><span><i class="fa fa-book" aria-hidden="true"></i> E-book</span>
							</div>
							<div class="thinking-text">
								<h4><a href="#">virtual digital surrogates & blockchain: the...</a></h4>
								<p>amid a lack of user0center design and standard protocols...</p>
							</div>
							<div class="thinking-footer">
								<a href="#"><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span>
									<span class="view">View</span></a>
							</div>
						</div>
					</div>
				</v-col>
				<v-col cols="sm">
					<div class="thinking-wrapper bg-3">
						<div class="single-think">
							<div class="think-tag"><span><i class="fa fa-book" aria-hidden="true"></i> E-book</span>
							</div>
							<div class="thinking-text">
								<h4><a href="#">the journey to intelligent ERP</a></h4>
								<p>tapping open-source integration to cut production planning...</p>
							</div>
							<div class="thinking-footer">
								<a href="#"><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span>
									<span class="view">View</span></a>
							</div>
						</div>
					</div>
				</v-col>
		        </v-row>
		      </v-sheet>
		    </v-carousel-item>
		    <v-carousel-item>
		      <v-sheet
		      >
		        <v-row >
		        	<v-col cols="sm">
					<div class="thinking-wrapper bg-1">
						<div class="single-think">
							<div class="think-tag"><span><i class="fa fa-book" aria-hidden="true"></i> E-book</span>
							</div>
							<div class="thinking-text">
								<h4><a href="#">achieving digital dexterity</a></h4>
								<p>Here's how 21 organizations world wide are taking the right...</p>
							</div>
							<div class="thinking-footer">
								<a href="#"><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span>
									<span class="view">View</span></a>
							</div>
						</div>
					</div>
				</v-col>
				<v-col cols="sm">
					<div class="thinking-wrapper bg-2">
						<div class="single-think">
							<div class="think-tag"><span><i class="fa fa-book" aria-hidden="true"></i> E-book</span>
							</div>
							<div class="thinking-text">
								<h4><a href="#">virtual digital surrogates & blockchain: the...</a></h4>
								<p>amid a lack of user0center design and standard protocols...</p>
							</div>
							<div class="thinking-footer">
								<a href="#"><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span>
									<span class="view">View</span></a>
							</div>
						</div>
					</div>
				</v-col>
				<v-col cols="sm">
					<div class="thinking-wrapper bg-3">
						<div class="single-think">
							<div class="think-tag"><span><i class="fa fa-book" aria-hidden="true"></i> E-book</span>
							</div>
							<div class="thinking-text">
								<h4><a href="#">the journey to intelligent ERP</a></h4>
								<p>tapping open-source integration to cut production planning...</p>
							</div>
							<div class="thinking-footer">
								<a href="#"><span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span>
									<span class="view">View</span></a>
							</div>
						</div>
					</div>
				</v-col>
		        </v-row>
		      </v-sheet>
		    </v-carousel-item>
		  </v-carousel>
		    </v-container>
		</div>
	</section>

	<!-- event area -->
	<section class="event-area">
		<div class="news">
			<div class="container">
				<div class="section-title text-center purple-text">
					<h2>NEWS</h2>
				</div>
				<div class="row">
					<div class="col-md-4 col-sm-6">
						<div class="event-content">
							<span>CHECK US OUT</span>
							<h3>See all Cognizant News</h3>
							<p>Stay on top of what's happening across Cognizant.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="event">
			<div class="container">
				<div class="section-title text-center purple-text">
					<h2>EVENTS</h2>
				</div>
				<div class="row">
					<div class="col-md-4 col-sm-6">
						<div class="event-content">
							<span>SAVE THE DATE</span>
							<h3>View all Cognizant Events</h3>
							<p>Come out and meet us at these upcoming events.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="contact-area" id="contact">
		<div class="container">
			<div class="section-title text-center purple-text">
				<h2>TAKE THE FIRST STEP</h2>
				<p>Let's talk about how digital can work for your business.</p>
			</div>
			<form action="">
				<div class="row">
					<div class="col-md-4 mb-50">
						<input type="email" id="name" name="name" placeholder="Enter your name">
						<label for="name">Name*</label>
					</div>
					<div class="col-md-4 mb-50">
						<input type="email" id="email" placeholder="Enter your Email">
						<label for="email">email*</label>
					</div>
					<div class="col-md-4 mb-50">
						<input type="email" id="organizations" placeholder="Enter your Email">
						<label for="organizations">organization*</label>
					</div>
					<div class="col-md-4 mb-50">
						<input type="email" id="contact" placeholder="Enter your Email">
						<label for="contact">contact number*</label>
					</div>
					<div class="col-md-4 mb-50">
						<select>
							<option>REGION</option>
							<option>North America</option>
							<option>South America</option>
							<option>Europe</option>
							<option>India</option>
							<option>Bangladesh</option>
						</select>
					</div>
					<div class="col-md-4 mb-50">
						<select>
							<option>INQUIRY TYPE</option>
							<option>Aliancs</option>
							<option>Alumnni</option>
							<option>Career Seeker</option>
							<option>Media</option>
						</select>
					</div>
					<div class="col-md-12 mb-50">
						<textarea placeholder="Messege"></textarea>
					</div>
					<div class="col-md-12 text-center">
						<button type="submit" class="submit-btn">submit</button>
					</div>
				</div>
			</form>
		</div>
	</section>


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
      components: {  topBar },
	  data: () => ({
	    offsetTop: 0,
	    topbarStyle: 'background:#4d41b3;  border-bottom:1px solid #fff;',
	    displayVideo: 0,
	  }),
	  methods: {
	    onScroll (){
	      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
	      if (this.offsetTop >= 660 ) {
	        this.topbarStyle = "background:#4d41b3;  border-bottom:1px solid #fff; position: fixed; top: 0px; left: 0px; right: 0px; z-index: 100;"
	      }else{
	        this.topbarStyle = "background:#4d41b3;  border-bottom:1px solid #fff;"
	      }
	    },
	    showVideo(num){
	    	this.displayVideo = num
	    }
	  }

	};
</script>