<template>
  <div>
    <topextsec></topextsec>
    <mainPageTopBar></mainPageTopBar>

    <!-- Tab panes -->
    <section class="backgrounds" v-click-outside="resetClickClass">
      <div class="horizontal-menu">
        <nav class="horizon-nav">
          <ul>
            <li class="num1" @click="()=>{toSlide(1);bgli(1);}">
              <a v-bind:class="{'bgli':clickClass === 1}">Prduct & Services</a>
            </li>
            <li class="num2" @click="()=>{toSlide(2);bgli(2);}">
              <a v-bind:class="{'bgli':clickClass === 2}">Tools</a>
            </li>
            <li class="num3" @click="()=>{toSlide(3);bgli(3);}">
              <a v-bind:class="{'bgli':clickClass === 3}">Sequrity</a>
            </li>
            <li class="num4" @click="()=>{toSlide(4);bgli(4);}">
              <a v-bind:class="{'bgli':clickClass === 4}">Comunity</a>
            </li>
            <li class="num5" @click="()=>{toSlide(5);bgli(5);}">
              <a v-bind:class="{'bgli':clickClass === 5}">Customer portal</a>
            </li>
            <li class="num6" @click="()=>{toSlide(6);bgli(6);}">
              <a v-bind:class="{'bgli':clickClass === 6}">Sign in</a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- swiper -->
      <swiper
        :options="swiperOptionX"
        ref="mySwiper"
        v-bind:style="showSwiper ? 'display:block' : 'display:none' "
      >
        <swiper-slide v-for="index in 7" :key="index">
          <tabbedSlide></tabbedSlide>
        </swiper-slide>
      </swiper>
    </section>

    <topSwiper></topSwiper>

    <div id="topsolusec" style="height:120px">
      <swiper :options="swiperOption" style="background:#4d41b3;">
        <swiper-slide>
          <div class="imgcrts"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="imgcrts1"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="imgcrts2"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="imgcrts3"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="imgcrts4"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="imgcrts5"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="imgcrts6"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="imgcrts7"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="imgcrts8"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="imgcrts9"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="imgcrts10"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>

    <section class="videointro">
      <!-- <v-col cols="sm">
			
      </v-col>-->

      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          max-width="50%"
          @keydown.esc="HidePlyr()"
          @keydown.space="HidePlyr()"
        >
          <v-card>
            <vue-plyr>
              <video poster="poster.png" src="video.mp4">
                <source src="assets/images/video.mp4" type="video/mp4" size="720" />
              </video>
            </vue-plyr>
          </v-card>
        </v-dialog>
      </v-row>

      <v-container>
        <v-row>
          <v-col cols="sm">
            <h2>ERP, EPM Cloud Lay Foundation for 'Zero-Touch'</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip dolor
            </p>
            <p>ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
            <button style="background: #ffffff; padding: 8px;" @click.stop="dialog = true">See video</button>
          </v-col>

          <v-col cols="sm">
            <vue-plyr>
              <video poster="poster.png" src="video.mp4">
                <source src="assets/images/video.mp4" type="video/mp4" size="720" />
              </video>
            </vue-plyr>
          </v-col>
        </v-row>
      </v-container>
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
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import topextsec from "./shared/topextsec.vue";
import mainPageTopBar from "./shared/mainPageTopBar.vue";
import tabbedSlide from "./shared/tabbedSlide.vue";
import topSwiper from "./shared/top_swiper.vue";

export default {
  name: "carrousel",
  data() {
    return {
      dialog: false,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
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
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionX: {
        slidesPerView: 1,
        loop: true
      },
      swiperOption1: {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 2500,
          reverseDirection: true
        }
      },
      swiperOptionInner: {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      swiperOptionh: {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    topextsec,
    mainPageTopBar,
    swiper,
    swiperSlide,
    tabbedSlide,
    topSwiper
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    HidePlyr() {
      this.dialog = false;
    },
    revealBehind() {
      this.showBehindWhatsNew = !this.showBehindWhatsNew;
    },
    toSlide(i) {
      this.$refs.mySwiper.swiper.slideTo(i, 900);
    },
    bgli(num) {
      if (this.clickClass !== num) {
        this.clickClass = num;
        this.showSwiper = true;
      }
    },
    resetClickClass() {
      this.clickClass = 0;
      this.showSwiper = false;
    }
  },
  directives: {
    "click-outside": {
      bind(el, binding, vnode) {
        var vm = vnode.context;
        var callback = binding.value;

        el.clickOutsideEvent = function(event) {
          if (!(el == event.target || el.contains(event.target))) {
            return callback.call(vm, event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      }
    }
  }
};
</script>