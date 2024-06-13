<template>
  <div>
    <v-alert
      border="left"
      close-text="Close Alert"
      color="deep-purple accent-4"
      dark
      dismissible
      id="topextsec"
    >
      <v-row no-gutter>
        <v-col cols="4">
          <div class="imgext1">
            <img src="/assets/images/img1.png" alt />
          </div>

          <div class="imgextt2">
            <img src="/assets/images/img2.png" alt />
          </div>
        </v-col>

        <v-col cols="sm">
          <div class="white--text rightext">
            <h2>Would you like to change the default language?</h2>
            <a href class="white--text">Select Now</a>
            <a href class="white--text">No Thanks</a>
          </div>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

  <script>
export default {
  data: () => ({}),
  mounted: function() {
    this.fadeIn();
  },
  methods: {
    fadeIn() {
      let topextsec = document.getElementById("topextsec");
      window.setTimeout(function() {
        topextsec.style.display = "block";
      }, 3000);
    },
    close(e) {
      if (e.target.classList.contains("v-icon")) {
        let topextsec = document.getElementById("topextsec");
        topextsec.style.display = "none";
        this.fadeIn();
      }
    }
  }
};
</script>