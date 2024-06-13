<template>
  <div>
    <topBar></topBar>
	<div class="sidebar-menu">
		<ul>
			<li><a href="#"><i class="fa fa-users"></i> Service</a></li>
			<li><a href="#"><i class="fa fa-line-chart" aria-hidden="true"></i> ROI Calculator</a></li>
			<li><a href="#"><i class="fa fa-cogs" aria-hidden="true"></i> Upgrade Guide</a></li>
			<li><a href="#"><i class="fa fa-desktop"></i> Software Demo</a></li>
		</ul>
	</div>
          <topSwiper></topSwiper>
  <v-app-bar dense v-bind:style="topbarStyle" v-scroll="onScroll">
      <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text class="active"><a href="#anchor5">Testimonial</a></v-btn>
        <v-btn text><a href="#anchor4">whycon</a></v-btn>
        <v-btn text><a href="#anchor3">Whats New?</a></v-btn>
        <v-btn text><a href="#anchor2">Happy Clients</a></v-btn>
        <v-btn text><a href="#anchor1">Other Division</a></v-btn>
        <v-btn text><a href="#anchor0">Take the first step</a></v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      
    </v-app-bar>
        				<span  id="anchor5"></span>

    	<section class="testimonialsec" style="margin-top: 50px;">
		<div class="heading"><h2 style="color:#555;">Testimonial</h2></div>		
		
			  <v-container class="grey lighten-5">
			    <v-row>
			      <v-col cols="sm">
			      	  <v-carousel 
      delimiter-icon="mdi-minus" cycle :show-arrows="false"  class="crpr wow slideInLeft">
					    <v-carousel-item>
					      <v-sheet>
					        <v-row>
					          				  <div class="item testimon active">
				<span class="stick" ></span><h3>Testimonials</h3>
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
				dolor</p>
				<a href="#">Read more</a>
				  </div>
					        </v-row>
					      </v-sheet>
					    </v-carousel-item>
					        <v-carousel-item>
					      <v-sheet>
					        <v-row>
					           <div class="item testimon">
				<span class="stick" ></span><h3>Testimonials</h3>
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
				dolor</p>
				<a href="#">Read more</a>
				  </div>
					        </v-row>
					      </v-sheet>
					    </v-carousel-item>
					        <v-carousel-item>
					      <v-sheet>
					        <v-row>
					           <div class="item testimon">
				<span class="stick" ></span><h3>Testimonials</h3>
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
				dolor</p>
				<a href="#">Read more</a>
				  </div>
					        </v-row>
					      </v-sheet>
					    </v-carousel-item>
					  </v-carousel>

			      </v-col>
			      <v-col cols="sm">
				  <v-carousel   delimiter-icon="mdi-minus"  :show-arrows="false" cycle class="crpr wow slideInRight">

				    <v-carousel-item>
				      <v-sheet>
				        <v-row>
				         <div class="item testimon">
				<span class="stick" ></span><h3>Testimonials</h3>
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
				dolor</p>
				<a href="#">Read more</a>
				  </div>  
				        </v-row>
				      </v-sheet>
				    </v-carousel-item>
				        <v-carousel-item>
				      <v-sheet>
				        <v-row>
				           <div class="item testimon">
				<span class="stick" ></span><h3>Testimonials</h3>
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
				dolor</p>
				<a href="#">Read more</a>
				  </div>
				        </v-row>
				      </v-sheet>
				    </v-carousel-item>
				        <v-carousel-item>
				      <v-sheet>
				        <v-row>
				           <div class="item testimon">
				<span class="stick" ></span><h3>Testimonials</h3>
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
				dolor</p>
				<a href="#">Read more</a>
				  </div>
				        </v-row>
				      </v-sheet>
				    </v-carousel-item>
				  </v-carousel>
			      	
			      </v-col>
			    </v-row>
			  </v-container>
	
		</section>
        				<span  id="anchor4"></span>

    <section style="margin-top: 50px" id="whycon">
      <v-container>
        <v-row>
          <v-col cols="4">
            <div class="whyconleft wow slideInLeft">
              <h2>Why Cadentic</h2>
              <img src="assets/images/bg4 - Copy.jpg" alt />
            </div>
          </v-col>

          <v-col cols="8">
            <div class="whyconright wow slideInRight">
              <v-row>
                <v-col cols="sm">
                  <div class="concon">
                    <i class="fa fa-user-plus"></i>
                    <h3>Specialized Services</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                    <a href>Read more</a>
                  </div>
                </v-col>
                <v-col cols="sm">
                  <div class="concon">
                    <i class="fa fa-hotel"></i>
                    <h3>Specialized Services</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                    <a href>Read more</a>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="sm">
                  <div class="concon">
                    <i class="fa fa-male"></i>
                    <h3>Specialized Services</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                    <a href>Read more</a>
                  </div>
                </v-col>
                <v-col cols="sm">
                  <div class="concon">
                    <i class="fa fa-briefcase"></i>
                    <h3>Specialized Services</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                    <a href>Read more</a>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
	
				<span  ref="whatsNew"   id="anchor3"></span>
    <section id="pg3" style="padding-top: 150px;" class="whats-new-area">
	<div class="container">
		<div class="whats-slide-position">
	<!-- section title -->
	<div class="whats-new-title">
		<h2 class="wow bounceInDown">Whats New</h2>
	</div>   

	<!-- swiper -->
      <swiper :options="swiperOptionh" v-if="showBehindWhatsNew">
		 <swiper-slide> <div class="blog-container" data-hash="first"> <i class="fa  fa-times" @click="revealBehind"></i> <div class="banner-bl-slide"> <div id="myCarousel5" class="carousel slide" data-ride="carousel"> <swiper :options="swiperOptionInner"> <swiper-slide><div class="item "> <img src="assets/images/banner1.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner2.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner3.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner4.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner5.jpg"></div></swiper-slide> <div class="swiper-pagination" slot="pagination"></div></swiper> </div></div><div class="cont"> <h2>Hello world</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor</p><a href="#">Read More</a><a href="#">Get Quote</a> </div><div class="banner"> <img src="assets/images/5042_banner_2.jpg" alt=""/> </div></div></swiper-slide>
		 <swiper-slide> <div class="blog-container" data-hash="first"> <i class="fa  fa-times" @click="revealBehind"></i> <div class="banner-bl-slide"> <div id="myCarousel5" class="carousel slide" data-ride="carousel"> <swiper :options="swiperOptionInner"> <swiper-slide><div class="item "> <img src="assets/images/banner1.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner2.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner3.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner4.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner5.jpg"></div></swiper-slide> <div class="swiper-pagination" slot="pagination"></div></swiper> </div></div><div class="cont"> <h2>Hello world</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor</p><a href="#">Read More</a><a href="#">Get Quote</a> </div><div class="banner"> <img src="assets/images/5042_banner_2.jpg" alt=""/> </div></div></swiper-slide>
		 <swiper-slide> <div class="blog-container" data-hash="first"> <i class="fa  fa-times" @click="revealBehind"></i> <div class="banner-bl-slide"> <div id="myCarousel5" class="carousel slide" data-ride="carousel"> <swiper :options="swiperOptionInner"> <swiper-slide><div class="item "> <img src="assets/images/banner1.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner2.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner3.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner4.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner5.jpg"></div></swiper-slide> <div class="swiper-pagination" slot="pagination"></div></swiper> </div></div><div class="cont"> <h2>Hello world</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor</p><a href="#">Read More</a><a href="#">Get Quote</a> </div><div class="banner"> <img src="assets/images/5042_banner_2.jpg" alt=""/> </div></div></swiper-slide>
		 <swiper-slide> <div class="blog-container" data-hash="first"> <i class="fa  fa-times" @click="revealBehind"></i> <div class="banner-bl-slide"> <div id="myCarousel5" class="carousel slide" data-ride="carousel"> <swiper :options="swiperOptionInner"> <swiper-slide><div class="item "> <img src="assets/images/banner1.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner2.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner3.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner4.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner5.jpg"></div></swiper-slide> <div class="swiper-pagination" slot="pagination"></div></swiper> </div></div><div class="cont"> <h2>Hello world</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor</p><a href="#">Read More</a><a href="#">Get Quote</a> </div><div class="banner"> <img src="assets/images/5042_banner_2.jpg" alt=""/> </div></div></swiper-slide>
		 <swiper-slide> <div class="blog-container" data-hash="first"> <i class="fa  fa-times" @click="revealBehind"></i> <div class="banner-bl-slide"> <div id="myCarousel5" class="carousel slide" data-ride="carousel"> <swiper :options="swiperOptionInner"> <swiper-slide><div class="item "> <img src="assets/images/banner1.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner2.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner3.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner4.jpg"></div></swiper-slide> <swiper-slide><div class="item "> <img src="assets/images/banner5.jpg"></div></swiper-slide> <div class="swiper-pagination" slot="pagination"></div></swiper> </div></div><div class="cont"> <h2>Hello world</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor</p><a href="#">Read More</a><a href="#">Get Quote</a> </div><div class="banner"> <img src="assets/images/5042_banner_2.jpg" alt=""/> </div></div></swiper-slide>

        
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>



  <v-carousel hide-delimiters  v-else>

    <v-carousel-item>
      <v-sheet>
        <v-row style="background: #e6f5ff;">
          		<div class="item whats-new-carousel" @click="revealBehind">
			<div class="whats-img">
				<img src="assets/images/bg1.jpg" alt="">
			</div>
			<div class="whats-content">
				<h3>Lorem ipsum dolor sit amet, consectetur adipiscing <i class="fa fa-arrow-right"></i></h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna.</p>
			</div>
		</div>
          <div class="item whats-new-carousel" @click="revealBehind">
			<div class="whats-img">
				<img src="assets/images/bg2.jpg" alt="">
			</div>
			<div class="whats-content">
				<h3>Lorem ipsum dolor sit amet, consectetur adipiscing <i class="fa fa-arrow-right"></i></h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna.</p>
			</div>
		</div>
          <div class="item whats-new-carousel" @click="revealBehind">
			<div class="whats-img">
				<img src="assets/images/bg5.jpg" alt="">
			</div>
			<div class="whats-content">
				<h3>Lorem ipsum dolor sit amet, consectetur adipiscing <i class="fa fa-arrow-right"></i></h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna.</p>
			</div>
		</div>
          <div class="item whats-new-carousel" @click="revealBehind">
			<div class="whats-img">
				<img src="assets/images/bg4.jpg" alt="">
			</div>
			<div class="whats-content">
				<h3>Lorem ipsum dolor sit amet, consectetur adipiscing <i class="fa fa-arrow-right"></i></h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna.</p>
			</div>
		</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
 <v-carousel-item>
      <v-sheet>
        <v-row style="background: #e6f5ff;">
          		<div class="item whats-new-carousel" @click="revealBehind">
			<div class="whats-img">
				<img src="assets/images/bg1.jpg" alt="">
			</div>
			<div class="whats-content">
				<h3>Lorem ipsum dolor sit amet, consectetur adipiscing <i class="fa fa-arrow-right"></i></h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna.</p>
			</div>
		</div>
          <div class="item whats-new-carousel" @click="revealBehind">
			<div class="whats-img">
				<img src="assets/images/bg2.jpg" alt="">
			</div>
			<div class="whats-content">
				<h3>Lorem ipsum dolor sit amet, consectetur adipiscing <i class="fa fa-arrow-right"></i></h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna.</p>
			</div>
		</div>
          <div class="item whats-new-carousel" @click="revealBehind">
			<div class="whats-img">
				<img src="assets/images/bg5.jpg" alt="">
			</div>
			<div class="whats-content">
				<h3>Lorem ipsum dolor sit amet, consectetur adipiscing <i class="fa fa-arrow-right"></i></h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna.</p>
			</div>
		</div>
          <div class="item whats-new-carousel" @click="revealBehind">
			<div class="whats-img">
				<img src="assets/images/bg4.jpg" alt="">
			</div>
			<div class="whats-content">
				<h3>Lorem ipsum dolor sit amet, consectetur adipiscing <i class="fa fa-arrow-right"></i></h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna.</p>
			</div>
		</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>

  </v-carousel>
					
</div>
</div>
</section>	
				<span  id="anchor2"></span>
<section id="pg4" style="padding-top: 150px"  class="secclients" >


	<div class="heading wow bounceInDown"><h2 style="color:#555;">Happy CLients</h2></div>
		<v-carousel hide-delimiters height="120px">
		<v-carousel-item>
			<v-sheet>
			<v-row style="background:rgb(230, 245, 255) none repeat scroll 0% 0%;">
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
			</v-row>
			</v-sheet>
		</v-carousel-item>
			<v-carousel-item>
			<v-sheet>
			<v-row>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
				<div class="padcl">
					<div class="cl-single"></div>
				</div>
			</v-row>
			</v-sheet>
		</v-carousel-item>
		</v-carousel>


</section>
<span id="anchor1"></span>
<section class="secclients" >
</section>

<section id="pg5" class="otdivision" style="background:#e6f5ff;" >
			<v-expansion-panels accordion>
<v-expansion-panel>
<v-expansion-panel-header style="text-align:center">
	<h2 style="color:#555; ">Other Division</h2>
</v-expansion-panel-header>
<v-expansion-panel-content>

<v-carousel height="100px"  hide-delimiters>
	<v-carousel-item>
	<v-sheet>
		<v-row>
			<div class="divislide owl-carousel">
			<div class="divi-single"> </div>
			<div class="divi-single"> </div>
			<div class="divi-single"> </div>
			</div>
			<div class="divislide owl-carousel">
			<div class="divi-single"> </div>
			<div class="divi-single"> </div>
			<div class="divi-single"> </div>
			</div>
			<div class="divislide owl-carousel">
			<div class="divi-single"> </div>
			<div class="divi-single"> </div>
			<div class="divi-single"> </div>
			</div>
		</v-row>
	</v-sheet>
	</v-carousel-item>
			<v-carousel-item>
	<v-sheet>
		<v-row>
			<div class="divislide owl-carousel">
			<div class="divi-single"> </div>
			<div class="divi-single"> </div>
			<div class="divi-single"> </div>
			</div>
			<div class="divislide owl-carousel">
			<div class="divi-single"> </div>
			<div class="divi-single"> </div>
			<div class="divi-single"> </div>
			</div>
			<div class="divislide owl-carousel">
			<div class="divi-single"> </div>
			<div class="divi-single"> </div>
			<div class="divi-single"> </div>
			</div>
		</v-row>
	</v-sheet>
	</v-carousel-item>
</v-carousel>

</v-expansion-panel-content>
</v-expansion-panel>
</v-expansion-panels>
</section>
<span id="anchor0"></span>
	<section class="contact-area" style="padding-top: 300px" id="contact">
		<div class="container">
			<div class="section-title text-center purple-text">
				<h2>TAKE THE FIRST STEP</h2>
				<p>Let's talk about how digital can work for your business.</p>
			</div>
			<form action="">
				<div class="row stepRow">
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

<footer class="secfooter">
      <div class="socialico">
        <a
          class="wow rollIn"
          data-wow-duration="2.5s"
          data-wow-delay=".2s"
          href
          style="background:#26a6d1;"
        >
          <i class="fa fa-twitter"></i>
        </a>
        <a
          class="wow rollIn"
          data-wow-duration="2s"
          data-wow-delay=".2s"
          href
          style="background:#3b5998;"
        >
          <i class="fa fa-facebook"></i>
        </a>
        <a
          class="wow rollIn"
          data-wow-duration="1.5s"
          data-wow-delay=".2s"
          href
          style="background:#007ab9;"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a class="wow rollIn" href style="background:#b81a7e;">
          <i class="fa fa-instagram"></i>
        </a>
      </div>
    </footer>
    <div class="copyright">
      <p>2019 Copyright</p>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import topSwiper from "./shared/swiperCarousel.vue";
import topBar from "./shared/topBar.vue";


export default {
    name: 'carousel',
    data() {
      return {
		dialog: false,
		colors: [
			'primary',
			'secondary',
			'yellow darken-2',
			'red',
			'orange',
        ],
      
	    offsetTop: 0,

	    topbarStyle: 'background: rgb(230, 245, 255); padding: 30px 75px; border-color: rgb(255, 255, 255); position: static; top: 0px; left: 0px; right: 0px; z-index: 100;',
        
      	showBehindWhatsNew: false,
      	showMainMenu: true,
        clickClass: 0,
	    showSwiper: false,
         swiperOption: {
          slidesPerView: 5,
          spaceBetween: 20,
          slidesPerGroup: 5,
          loop: true,
          loopFillGroupWithBlank: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
		    swiperOptionX: {
           slidesPerView: 1,
          loop: true,
        },
        swiperOption1: {
          direction: 'vertical',
          loop: true,
          autoplay: {
            delay: 2500,
            reverseDirection: true,
        }
        },
        swiperOptionInner:{
        	 spaceBetween: 30,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        swiperOptionh:{
        	 spaceBetween: 30,
          centeredSlides: true,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    components: { 
		swiper,
        swiperSlide,
        topSwiper,
        topBar
     },
     computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
	},
    // mounted() {
    //   this.swiper.slideTo(3, 1000, false)
    // },
    methods:{
		
    	toSlide(i) {      
			this.$refs.mySwiper.swiper.slideTo(i, 900)
		}, 
		bgli(num){
			if(this.clickClass !== num){
				this.clickClass = num
				this.showSwiper = true
			}
        },

        revealBehind() {
      this.showBehindWhatsNew = !this.showBehindWhatsNew;
    },
        onScroll (){
            let top = this.$refs.whatsNew.offsetTop
            
            this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
            if(top){
                if(this.offsetTop<(top-550) || this.offsetTop > (top+ 800)){
                
                this.showBehindWhatsNew = false;
            }
            }
            
	      if (this.offsetTop >= 780 ) {
	        this.topbarStyle = "background: rgb(230, 245, 255); padding: 30px 75px; border-color: rgb(255, 255, 255); position: fixed; top: 0px; left: 0px; right: 0px; z-index: 100;"
	      }else{
	        this.topbarStyle = "background: rgb(230, 245, 255); padding: 30px 75px; border-color: rgb(255, 255, 255); position: static; top: 0px; left: 0px; right: 0px; z-index: 100;"
	      }
	    }
    },
	directives:{
		'click-outside':{
			bind(el, binding, vnode) {
					var vm = vnode.context;
					var callback = binding.value;

					el.clickOutsideEvent = function (event) {
						if (!(el == event.target || el.contains(event.target))) {
							return callback.call(vm, event);
						}
					};
					document.body.addEventListener('click', el.clickOutsideEvent);
				},
				unbind(el) {
					document.body.removeEventListener('click', el.clickOutsideEvent);
				}

			}
	}
}
</script>
<style lang="scss">
    .v-carousel__controls__item{
        background: rgba(0,0,0,.0) !important;
		span{
		    background: rgba(0,0,0,.0) !important;
       i{
		    background: rgba(0,0,0,.0) !important;
		&:hover{
        background: rgba(0,0,0,.0) !important;
		}
	   }
		}
        
    }
    .stepRow label{
        font-size: 0.875rem !important;
        font-weight: bold !important;
    }
    .stepRow select{
        font-size: 0.875rem !important;
        font-weight: bold !important;
    }
    .stepRow textarea{
        font-size: 0.875rem !important;
        font-weight: bold !important;
    }
</style>