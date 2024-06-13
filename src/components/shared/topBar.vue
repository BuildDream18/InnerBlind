<template>
<div>
      <v-container fluid id="vertmenu-sec"  style="padding-bottom:20px; padding-top:20px; background: rgb(230, 245, 255);">
        <v-row>
      <v-col cols="sm" class="vert-menu">
        <div class="humberger">
             <div class=" barss"  @click="toggleHumberger" v-bind:class="{ 'animate_bars' : animate }">
                <div class="barss1"> <hr /> </div>
                <div class="barss2"> <hr /> </div>
                <div class="barss3"> <hr /> </div>
            </div>
            <!--            verticle menu start           -->
        <div class="tab3">
          <div data-child="false" class="tab__header left-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__header-1 tab__header--active" @click="currentTabHeader">Dtabase Administration</div>
          <div class="tab__header-2" @click="currentTabHeader">Cloude</div>
          <div class="tab__header-3" @click="currentTabHeader">Migration</div>
          <div class="tab__header-4" @click="currentTabHeader">Directors info</div>
          <div class="tab__header-5" @click="currentTabHeader">Nature & Mode Of Work</div>
          <div class="tab__header-6" @click="currentTabHeader">Hardwar and Networking Component</div>
          <div class="tab__header-7" @click="currentTabHeader">Staffing</div>
          <div class="tab__header-8" @click="currentTabHeader">Corporate Training on Oracle</div>
          <div class="tab__header-9" @click="currentTabHeader">Corporate Training on Redhat</div>
          </div>
      <!--            Tab 1           -->
      <div class="tab__content">
      <div class="tab__content-1 tab__content--active top">
        <div class="tab">
        <div data-child="true" class="tab__header middle-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__header-1 inner tab__header--active" @click="currentInnerTabHeader">E-Business suit</div>
          <div class="tab__header-2 inner" @click="currentInnerTabHeader">Single Sign in</div>
          <div class="tab__header-3 inner" @click="currentInnerTabHeader">Golden Gate</div>
          <div class="tab__header-4 inner" @click="currentInnerTabHeader">Open Source</div>
        </div>
        <div class="tab__content right-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__content-1 tcrs tab__content--active">Sub Tab Content 1</div>
          <div class="tab__content-2 tcrs">Sub Tab Content 2</div>
          <div class="tab__content-3 tcrs">Sub Tab Content 3</div>
          <div class="tab__content-4 tcrs">Sub Tab Content 4</div>
        </div>
        </div>
      </div>
      <!--            Tab 2           -->
      <div class="tab__content-2 top">
        <div class="tab">
        <div data-child="true" class="tab__header middle-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__header-1 inner tab__header--active" @click="currentInnerTabHeader">Sub Tab 2 1</div>
          <div class="tab__header-2 inner" @click="currentInnerTabHeader">Sub Tab 2 2</div>
          <div class="tab__header-3 inner" @click="currentInnerTabHeader">Sub Tab 2 3</div>
          <div class="tab__header-4 inner" @click="currentInnerTabHeader">Sub Tab 2 4</div>
        </div>
        <div class="tab__content right-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__content-1 tcrs tab__content--active">Sub Tab Content 2 1</div>
          <div class="tab__content-2 tcrs">Sub Tab Content 2 2</div>
          <div class="tab__content-3 tcrs">Sub Tab Content 2 3</div>
          <div class="tab__content-4 tcrs">Sub Tab Content 2 4</div>
        </div>
        </div>
      </div>
      <!--            Tab 3           -->
      <div class="tab__content-3 top">
        <div class="tab">
        <div data-child="true" class="tab__header middle-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__header-1 inner tab__header--active" @click="currentInnerTabHeader">Sub Tab 3 1</div>
          <div class="tab__header-2 inner" @click="currentInnerTabHeader">Sub Tab 3 2</div>
          <div class="tab__header-3 inner" @click="currentInnerTabHeader">Sub Tab 3 3</div>
        </div>
        <div class="tab__content right-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__content-1 tcrs tab__content--active">Sub Tab Content 3 1</div>
          <div class="tab__content-2 tcrs">Sub Tab Content 3 2</div>
          <div class="tab__content-3 tcrs">Sub Tab Content 3 3</div>
        </div>
        </div>
      </div>
      <!--            Tab 4           -->
      <div class="tab__content-4 top">
        <div class="tab">
        <div data-child="true" class="tab__header middle-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__header-1 inner tab__header--active" @click="currentInnerTabHeader">Sub Tab 4 1</div>
          <div class="tab__header-2 inner" @click="currentInnerTabHeader">Sub Tab 4 2</div>
          <div class="tab__header-3 inner" @click="currentInnerTabHeader">Sub Tab 4 3</div>
        </div>
        <div class="tab__content right-side" v-bind:style="animate ? 'display:block' : '' ">
          <div class="tab__content-1 tcrs tab__content--active">Sub Tab Content 4 1</div>
          <div class="tab__content-2 tcrs">Sub Tab Content 4 2</div>
          <div class="tab__content-3 tcrs">Sub Tab Content 4 3</div>
        </div>
        </div>
      </div>
      </div>
</div>
        </div>
      </v-col>
      <v-col cols="6" class="vert-search">
          <div class="search-animated">
            <form action="">
            <input type="text" class="input" placeholder="What are you looking for?">
            <div class="sub-ico">
            <input type="submit" value="" class="close-btn">
            <i class="fa fa-search"></i>
            </div>
            </form>
          </div>
      </v-col>
      <v-col cols="sm">
        <div class="logo-div">
        <a href=""><img src="assets/images/logo.png" alt="" /></a>
        </div>
      </v-col>
</v-row>
    </v-container>
</div>
</template>
<script>
export default {
  data: () => ({
    animate: false,
    tabHeaderActive: false,
    removeClass: false,
    rightSide: '1',
    prev: '1',
    leftSideTabs: 9,
    innerTabHeaders: 4
  }),
  methods: {
    toggleHumberger(){
      this.animate = !this.animate
  },
  currentTabHeader(tab){
    let clicked = tab.target.classList[0].split('-')[1]
    if(this.rightSide !== clicked && clicked <= this.innerTabHeaders) { //
      this.rightSide = clicked
    }
    
    for(let i = 1; i <= this.leftSideTabs; i++){ // loop through the tabs
      let tabHeader = this.$el.querySelector('.tab__header-'+i);
      if(tabHeader.classList.contains('tab__header--active')){ // if tab__header has tab__header--active class, remove it
        if(tabHeader.classList[0].split('-')[1] <= this.innerTabHeaders){
          this.prev = tabHeader.classList[0].split('-')[1]
        }
        tabHeader.classList.remove('tab__header--active')
      }
    }
    tab.target.classList.add('tab__header--active') // add tab__header--active class to clicked tab
    let tabContent = this.$el.querySelector('.top.tab__content-'+this.rightSide)
    if(tabContent !== null){
      tabContent.classList.add('tab__content--active') // add active to tab
    }
    // content tabs of clicked
    if(this.prev !== this.rightSide){
      this.$el.querySelector('.top.tab__content-'+this.prev).classList.remove('tab__content--active')// remove active from previous tab tab
    }
  },
  currentInnerTabHeader(tab){
    let tcrsTabs = 4
    let clicked = tab.target.classList[0].split('-')[1]
    for (let i = 1; i<=this.innerTabHeaders; i++) {
      let innerTabHeader = this.$el.querySelector('div.tab__content-'+ this.rightSide +'.top.tab__content--active div.tab div.tab__header.middle-side div.tab__header-'+ i +'.inner')
        if(innerTabHeader !== null){
          if(innerTabHeader.classList.contains('tab__header--active')){
          innerTabHeader.classList.remove('tab__header--active')
        }
      }
    }
    tab.target.classList.add('tab__header--active')
    // tab__content-1 tcrs
    for (let i = 1; i<=tcrsTabs; i++) {
      let tcrsTab = this.$el.querySelector('div.tab__content-'+ this.rightSide +'.top.tab__content--active div.tab div.tab__content.right-side div.tab__content-'+ i +'.tcrs')
      if(tcrsTab !== null){
        if(tcrsTab.classList.contains('tab__content--active')){
        tcrsTab.classList.remove('tab__content--active')
      }
      }
    }
    let rightSideTabcontent = this.$el.querySelector('div.tab__content-'+ this.rightSide +'.top.tab__content--active div.tab div.tab__content.right-side div.tab__content-'+ clicked +'.tcrs')
    if(rightSideTabcontent !== null){
      rightSideTabcontent.classList.add('tab__content--active')
    }
  }
}
}
</script>
