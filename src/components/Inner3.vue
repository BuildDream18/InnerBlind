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

  <section id="topextsec">

    <div class="leftext col-lg-4 col-md-4 col-sm-4">
      <div class="imgext1">
        <img src="assets/images/img1.png" alt="" />
      </div>
      <div class="imgextt2">
        <img src="assets/images/img2.png" alt="" />
      </div>

    </div>




    <div class="rightext col-lg-7 col-md-7 col-sm-7">
      <h2>Would you like to change the default language?</h2>
      <a href="">Select Now</a>
      <a href="">No Thanks</a>

    </div>
    <div class="rightico col-lg-1 col-md-1 col-sm-1">
      <i class="clo fa fa-close"></i>
    </div>

    <hr />

    <nav class="extnav">

      <ul>
        <li><a href="#topsolu">Top Solution</a></li>
        <li class="bdr"><a href="">Partners Info</a></li>
        <li class="bdr"><a href="">Whats New</a></li>
        <li class="bdr"><a href="">Happy Clients</a></li>
        <li class="bdr"><a href="">Other Division</a></li>

      </ul>

    </nav>

  </section>


  <!-- hero area -->
  <section class="soft-define-area home" id="home" style="background: rgb(230, 245, 255);" >
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
            <div class="long-text">
              <p>Ease your network management worries. Cisco Software-Defined Access (SD-Access) gives you
                a
                single network fabric. You can set policy-based automation for
                users, devices, and things. <br> <br>
                Provide access to any application, without compromising on security. All while gaining
                awareness of what is hitting your network. <br> <br>
                And with automatic segmentation of users, devices, and applications, you can deploy and
                secure services faster.</p>
            </div>
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

  <v-app-bar dense  v-bind:style="topbarStyle" v-scroll="onScroll">
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




<div class="hg content" id="pg1" style="height:500px; transition:2s; background:#E6F5FF;
        ">
        <h3 style='font-size: 2vw; color: #000'>Ndedge Informatics Private Limited offers</h3>
          <ul type="disc" style="list-style-type: disc;" >
            <li>a full range of Oracle database administration configuration and support including or excluding real application cluster and dataguard.</li>
            <li>Oracle cloud infrastructure configuration and support.</li>
            <li>Virtual environment to cloud migration by Ravello. </li>
            <li>BP for XaaS, DB2,laaS,Paas, and SaaS-enabled business environments , </li>
            <li>Setting up or implementing on-premise environments with Oracle data appliances,   </li>
            <li>zero downtime migration for Oracle databases,</li>
            <li> licensing for different OS, like Oracle Solaris and Oracle Linux ,Easy to use architecture for Oracle E-business suite,</li>
            <li>On-premise to cloud migration,</li>
            <li>Providing server hardware and network components from different vendors, Oracle Partners Network.</li>
            <li>Support and configuration oracle sign-on.</li>
            
          </ul>
          
          <h4 style="margin-bottom:30px;font-size: 1.5vw; padding-bottom: 20px; color: #000">Ndedge Informatics Private Limited has a solid client base that spans across several industries; in our focus market segment we have accumulated an enviable list of clients because of our customer centric approach. </h4>
        
        
        </div>
        <div class="hg content" id="pg2" style="padding-top: 100px; height:500px; transition:2s; font-size:2vw;background:#E6F5FF;
        ">
        
          
          
          <h4 style='font-size: 1.5vw; padding-top: 50px; color: #000'>Ndedge Informatics Private Limited competitive advantage and source of value to our esteemed client stems not only from our expertise in rendering IT professional services, but from several aspect of our business model which consist of </h4>
          
          
          <ul type="disc" style="list-style-type: disc;" >
            <li>technology and business competency centers, </li>
            <li>rigorous programme and project management, </li>
            <li>state of the art computing and communication infrastructure, client-centric approach account management,</li>
            <li>Innovative offshore development approach and business continuity preparedness.We remain focus on our prime objective which is delivering high quality solutions to our clients </li>
            
          </ul>
          
        
        
        </div>

      <section>
         <v-container>
    <v-row>
      <v-col cols="sm">        
          <div class="cardWrap"> <a class="card" href="/page/show/ai-jobs-data-science">
<div class="front blue-p-blue"> <img class="img-responsive" src="assets/CraftedImages/data-science-500x500.png" alt="Artificial Intelligence Data Scientist" title="Artificial Intelligence Data Scientist">
<p>Data Science</p>
</div>
<div class="back p-blue-d-gray"> <img class="img-responsive" src="assets/CraftedImages/data-science-500x500.png" alt="Artificial Intelligence Data Scientist" title="Artificial Intelligence Data Scientist">
<div>
<p>Data Science</p>
<button class="button">I'm Interested</button>
</div>
</div>
</a> </div>
      </v-col>
      <v-col cols="sm">        
          <div class="cardWrap"> <a class="card" href="/page/show/ai-jobs-ai-software">
<div class="front blue-p-blue"> <img class="img-responsive" src="assets/CraftedImages/01-new-systems-engineer-ai-500.png" alt="">
<p>Artificial Intelligence Software</p>
</div>
<div class="back p-blue-d-gray"> <img class="img-responsive" src="assets/CraftedImages/01-new-systems-engineer-ai-500.png" alt="">
<div>
<p>Artificial Intelligence Software</p>
<button class="button">I'm Interested</button>
</div>
</div>
</a> </div>
      </v-col>
      <v-col cols="sm">        
          <div class="cardWrap"> <a class="card" href="/page/show/ai-jobs-ai-hardware">
<div class="front blue-p-blue"> <img class="img-responsive" src="assets/CraftedImages/new-ai-hardware-thum-500x500.png" alt="Artificial Intelligence Hardware Engineer" title="Artificial Intelligence Hardware Engineer">
<p>Artificial Intelligence Hardware</p>
</div>
<div class="back p-blue-d-gray"> <img class="img-responsive" src="assets/CraftedImages/new-ai-hardware-thum-500x500.png" alt="Artificial Intelligence Hardware Engineer" title="Artificial Intelligence Hardware Engineer">
<div>
<p>Artificial Intelligence Hardware</p>
<button class="button">I'm Interested</button>
</div>
</div>
</a> </div>
      </v-col>
      <v-col cols="sm">        
          <div class="cardWrap"> <a class="card" href="/page/show/ai-jobs-ai-business">
<div class="front blue-p-blue"> <img class="img-responsive" src="assets/CraftedImages/ai-business-500x500.png" alt="Artificial Intelligence Business Specialist" title="Artificial Intelligence Business Specialist">
<p>Artificial Intelligence Business</p>
</div>
<div class="back p-blue-d-gray"> <img class="img-responsive" src="assets/CraftedImages/ai-business-500x500.png" alt="Artificial Intelligence Business Specialist" title="Artificial Intelligence Business Specialist">
<div>
<p>Artificial Intelligence Business</p>
<button class="button">I'm Interested</button>
</div>
</div>
</a> </div>
      </v-col>
    </v-row>
  </v-container>

           <v-container>
    <v-row>
      <v-col cols="sm">        
          <div class="cardWrap"> <a class="card" href="/page/show/ai-jobs-ai-research">
<div class="front blue-p-blue"> <img class="img-responsive" src="assets/CraftedImages/ai-research-500x500.png" alt="Artificial Intelligence Research Scientist" title="Artificial Intelligence Research Scientist">
<p>Artificial Intelligence Research</p>
</div>
<div class="back p-blue-d-gray"> <img class="img-responsive" src="assets/CraftedImages/ai-research-500x500.png" alt="Artificial Intelligence Research Scientist" title="Artificial Intelligence Research Scientist">
<div>
<p>Artificial Intelligence Research</p>
<button class="button">I'm Interested</button>
</div>
</div>
</a> </div>
      </v-col>
      <v-col cols="sm">        
          <div class="cardWrap"> <a class="card" href="/page/show/ai-jobs-ai-internships">
<div class="front blue-p-blue"> <img class="img-responsive" src="assets/CraftedImages/new-ai-internship-new-thum-500x500.png" alt="Artificial Intelligence Intern" title="Artificial Intelligence Intern">
<p>Artificial Intelligence Internships</p>
</div>
<div class="back p-blue-d-gray"> <img class="img-responsive" src="assets/CraftedImages/new-ai-internship-new-thum-500x500.png" alt="Artificial Intelligence Intern" title="Artificial Intelligence Intern">
<div>
<p>Artificial Intelligence Internships  </p>
<button class="button">I'm Interested</button>
</div>
</div>
</a> </div>
      </v-col>
      <v-col cols="sm">        
          <div class="cardWrap"> <a class="card" href="/page/show/ai-jobs-ai-residency">
<div class="front blue-p-blue"> <img class="img-responsive" src="assets/CraftedImages/01-new-ai-residency-sm-ai-500.png" alt="Artificial Intelligence Residency Program" title="Artificial Intelligence Residency Program">
<p>Artificial Intelligence Residency</p>
</div>
<div class="back p-blue-d-gray"> <img class="img-responsive" src="assets/CraftedImages/01-new-ai-residency-sm-ai-500.png" alt="Artificial Intelligence Residency Program" title="Artificial Intelligence Residency Program">
<div>
<p>Artificial Intelligence Residency</p>
<button class="button">I'm Interested</button>
</div>
</div>
</a> </div>
      </v-col>
    </v-row>
  </v-container>
        
      </section>

<div class="dark-blue-bg-container" id="pg4" style='margin-left: 5%; margin-right: 7%'>
<div class="sticky-menu-scroll-container"> <span id="AJobLikeMineSection" class="sticky-Id-menu"></span> </div>
<div class="container">
<div class="row">
<div id='long-thing'>
<h2 class="h1 clear-headline text-center">A Job Like Mine</h2>
</div>
</div>
</div>
</div>

<section class="job_like_mine" style='background:#E6F5FF; margin-left: 5.8%; margin-right: 7.8%; background: #E6F5FF;'>
<div class="">
         <v-container>
    <v-row no-gutters>
      <v-col cols="sm">        
          <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
<div class="flipper property-items">
<div class="front center-block text-center itemS" style="min-height: 618px; background: url(&quot;assets/CraftedImages/hongi-job-like-mine-md.jpg&quot;) center top / cover no-repeat;">
<div class="bottom_block"> <span class="name">Hong </span>
<p class="designation"> Artificial Intelligence Director </p>
</div>
</div>
<div class="back text-center itemS" style="min-height: 618px;">
<div class="back-logo center-block img-circle "><img src="assets/CraftedImages/hong-job-like-mine-sm.jpg" class="img-responsive" alt="img"></div>
<span class="name" >Hong</span>
<p class="designation" style='font-size: 1.2vw'> Artificial Intelligence Director </p>
<p class="details" style='font-size: 1.2vw'>"I am working in a very exciting and innovative area. My team is
working on research that might one day bring robot technology to life and help
achieve greater human freedom. "</p>
</div>
</div>
</div>
      </v-col>
      <v-col cols="sm">        
          <div class="flip-container hover" ontouchstart="this.classList.toggle('hover');">
<div class="flipper property-items">
<div class="front center-block text-center itemS" style="min-height: 618px; background: url(&quot;assets/CraftedImages/jiong-job-like-mine-md.jpg&quot;) center top / cover no-repeat;">
<div class="bottom_block"> <span class="name">Jiong</span>
<p class="designation" > Artificial Intelligence Software Architect</p>
</div>
</div>
<div class="back text-center itemS" style="min-height: 618px;">
<div class="back-logo center-block img-circle"><img src="assets/CraftedImages/jiong-job-like-mine-sm.jpg" class="img-responsive" alt="img"></div>
<span class="name">Jiong</span>
<p class="designation" style='font-size: 1.2vw'> Artificial Intelligence Software Architect </p>
<p class="details" style='font-size: 1.2vw'>Right now I am working on the most exciting Artificial Intelligence-related software at
Intel. This is a really complex area but having the chance to work on cutting-edge
technologies that are relevant to everyday life keeps me passionate about my work." </p>
</div>
</div>
</div>
      </v-col>
      <v-col cols="sm">        
          <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
<div class="flipper property-items">
<div class="front center-block justify-center itemS" style="min-height: 618px; background: url(&quot;assets/CraftedImages/gadi-job-like-mine-md.jpg&quot;) center top / cover no-repeat;">
<div class="bottom_block"> <span class="name">Gadi</span>
<p class="designation"> Vice President&nbsp;and Architecture General Manager</p>
</div>
</div>
<div class="back text-center itemS" style="min-height: 618px;">
<div class="back-logo center-block img-circle "><img src="assets/CraftedImages/gadi-job-like-mine-sm.jpg" class="img-responsive" alt="img"></div>
<span class="name">Gadi</span>
<p class="designation" style='font-size: 1vw'> Vice President&nbsp;and Architecture General Manager</p>
<p class="details" style='font-size: 0.95vw; margin-top: -2%'>Artificial Intelligence is changing the world. It defines the next
age of computing, it transforms almost every sector of the economy, and it
redefined the interaction between people and the digital world. The next wave of
innovation is expected to bring human-like intelligence to our interactions with
everything around us – with cars, our phone or PC, the medical environment
and more. Intel is in a unique position in the industry and having tight
interactions between data scientists, Artificial Intelligence algorithm ninjas and computer architects
is key for highly effective and efficient solutions. There are very few places in
the world where this happens and Intel is one of them. </p>
</div>
</div>
</div>
      </v-col>
    </v-row>
  </v-container>
</div>
</section>


<section id="card-blocks" class="brand-lightest-gray">
  
  <div class="container" style='padding-top: 90px; width: 90%; background:#E6F5FF;'>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-md-12"><br>
            <br>
            <h2 class="text-center headline blue-heading" style='font-size: 4vw; color: #000'>Explore Your Career Tracks</h2>
            <h3 class="text-center blue-heading" style='
            font-size: 1.7vw; 
            color: #54555E;
      font-family: "Hua Extralight";
            '>Discover your next career. Select your field and share your information with us, and we'll connect you to the opportunity that's right for you.</h3>
            <br>
            <br>
          </div>
        </div>

  <v-container>
    <v-row>
      <v-col cols="sm">
            <div class="hover-menu"> <a href="https://jobs.intel.com/page/show/software-jobs" class="overlay-btn" aria-label="I'm interested in Software Careers"></a> <img src="assets/CraftedImages/rf-desig.jpg" alt="SOFTWARE" class="img-responsive"> <span></span>
              <div class="profile">
                <h3> Software </h3>
                <button class="btn btn-success"> I'm interested </button> </div>
            </div>
      </v-col>
      <v-col cols="sm">
        <div class="hover-menu"> <a href="https://jobs.intel.com/page/show/ai-jobs" class="overlay-btn" aria-label="I'm interested in Artificial Intelligence Careers"></a> <img src="assets/CraftedImages/hardware-research-developmen.jpg" alt="Artificial Intelligence" class="img-responsive"> <span></span>
              <div class="profile">
                <h3>Artificial Intelligence</h3>
                <button class="btn btn-success"> I'm interested </button> </div>
            </div>
      </v-col>
      <v-col cols="sm">
         <div class="hover-menu"> <a href="https://jobs.intel.com/page/show/it-jobs-career" class="overlay-btn" aria-label="I'm interested in Information Technology Careers"></a> <img src="assets/CraftedImages/org-design.jpg" alt="Information Technology" class="img-responsive"> <span></span>
              <div class="profile">
                <h3>Information Technology</h3>
                <button class="btn btn-success">I'm interested </button> </div>
            </div>
      </v-col>
      <v-col cols="sm">
        <div class="hover-menu"> <a href="https://jobs.intel.com/page/show/manufacturing-facilities-jobs" class="overlay-btn" aria-label="I'm interested in Manufacturing and Facilities Careers"></a> <img src="assets/CraftedImages/research-development-internships.jpg" alt="Manufacturing and Facilities" class="img-responsive"> <span></span>
              <div class="profile">
                <h3>Manufacturing and Facilities</h3>
                <button class="btn btn-success"> I'm interested </button> </div>
            </div>
      </v-col>
    </v-row>
  </v-container>

    <v-container>
    <v-row justify="center">
      <v-col cols="3">
           <div class="hover-menu"> <a href="https://jobs.intel.com/page/show/soc-design-jobs" class="overlay-btn" aria-label="I'm interested in SoC Design Careers"></a> <img src="assets/CraftedImages/ai-business.jpg" alt="SoC Design" class="img-responsive"> <span></span>
              <div class="profile">
                <h3>SoC Design</h3>
                <button class="btn btn-success"> I'm interested </button> </div>
            </div>
      </v-col>
      <v-col cols="3">
        <div class="hover-menu"> <a href="https://jobs.intel.com/page/show/smg-jobs" class="overlay-btn" aria-label="I'm interested in Sales and Marketing Careers"></a> <img src="assets/CraftedImages/laser-engineer.jpg" alt="Sales and Marketing" class="img-responsive"> <span></span>
              <div class="profile">
                <h3>Sales and Marketing</h3>
                <button class="btn btn-success"> I'm interested </button> </div>
            </div>
      </v-col>
      <v-col cols="3">
        <div class="hover-menu"> <a href="https://jobs.intel.com/page/show/business-jobs" class="overlay-btn" aria-label="I'm interested in Business Careers"></a> <img src="assets/CraftedImages/graphics-software.jpg" alt="Business" class="img-responsive"> <span></span>
              <div class="profile">
                <h3>Business</h3>
                <button class="btn btn-success"> I'm interested </button> </div>
            </div>
      </v-col>
    </v-row>
  </v-container>

      <v-container>
    <v-row>
      <v-col cols="sm">
        <div class="hover-menu"> <a href="https://jobs.intel.com/page/show/graphics-jobs" class="overlay-btn" aria-label="I'm interested in Graphics Careers"></a> <img src="assets/CraftedImages/digital-design.jpg" alt="Graphics" class="img-responsive"> <span></span>
              <div class="profile">
                <h3>Graphics</h3>
                <button class="btn btn-success"> I'm interested </button> </div>
            </div>
      </v-col>
      <v-col cols="sm">
        <div class="hover-menu"> <a href="https://jobs.intel.com/page/show/silicon-photonics-jobs" class="overlay-btn" aria-label="I'm interested in Silicon Photonics Careers"></a> <img src="assets/CraftedImages/business-talent.jpg" alt="Silicon Photonics" class="img-responsive"> <span></span>
              <div class="profile">
                <h3>Silicon Photonics</h3>
                <button class="btn btn-success"> I'm interested </button> </div>
            </div>
      </v-col>
      <v-col cols="sm">
        <div class="hover-menu"> <a href="https://jobs.intel.com/page/show/hardware-jobs" class="overlay-btn" aria-label="I'm interested in Hardware Careers"></a> <img src="assets/CraftedImages/manufacturing-process-enginee.jpg" alt="Hardware" class="img-responsive"> <span></span>
              <div class="profile">
                <h3>Hardware</h3>
                <button class="btn btn-success"> I'm interested </button> </div>
            </div>
      </v-col>
      <v-col cols="sm">
         <div class="hover-menu"> <a href="https://jobs.intel.com/page/show/connectivity-jobs" class="overlay-btn" aria-label="I'm interested in Connectivity Careers"></a> <img src="assets/CraftedImages/data-analyst.jpg" alt="Connectivity" class="img-responsive"> <span></span>
              <div class="profile">
                <h3>Connectivity</h3>
                <button class="btn btn-success"> I'm interested </button> </div>
            </div>
      </v-col>
    </v-row>
  </v-container>    
      </div>
    </div>
  </div>
</section>




    <!--END-#My changes -->

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
      topbarStyle: 'background: rgb(230, 245, 255); padding: 30px 75px; border-color: rgb(255, 255, 255); position: static; top: 0px; left: 0px; right: 0px; z-index: 100;',
      dialog: false,
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

    }
</script>