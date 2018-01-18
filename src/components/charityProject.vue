<template lang="html">
  <div class="project-container">

    <div class="image-container">
        <img :src="projectData.url">
    </div>
    <div class="info-container">
      <div class="project-text">
        <p class="title uppercase bold">{{projectData.title}}</p>
        <div class="row-aligned">
          <label class="text-label uppercase" for="mission">{{text.mission}}</label>
          <p class="text mission-height"> {{projectData.mission}}</p>
        </div>
        <div class="row-aligned">
          <label class="text-label uppercase" for="approach">{{text.approach}}</label>
          <p class="text approach-height">{{projectData.approach}}</p>
        </div>
      </div>
      <div class="donation-container">

        <button v-if="metamaskAvailable"
                @click="makeDonation"
                type="button" name="button"
                class="uppercase button bold">
            {{text.button}}
        </button>

        <a class="button uppercase bold" :href="projectData.website">{{text.website}}</a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'charity-project',

  data: () => ({
    text: {
      mission: 'mission:',
      approach: 'approach:',
      button: 'donate',
      website: 'visit website',
    },
  }),

  computed: {
    metamaskAvailable() {
      if (typeof window.web3 !== 'undefined') return true;
      return false;
    },
  },

  props: ['projectData'],

  methods: {
    makeDonation() {
      const web3 = window.web3;
      const address = this.projectData.address;
      web3.eth.sendTransaction({
        to: address,
        value: web3.toWei('1', 'ether'),
      }, (err) => {
        // eslint-disable-next-line
        console.log(err);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.project-container {
  width: 380px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid #F0F8FF;
}

.image-container {
  width: 380px;
  height: 200px;
  background-color: #ffffff;
  padding-bottom: 10px;
  border-radius: 10px 10px 0 0;
}

img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 10px 10px 0 0;
}

.info-container {
  background-color: #FFFFFF;
  padding: 20px 10px 20px 10px;
  border-radius: 0 0 10px 10px;
  border-top: 1px solid #F0F8FF;
}

.row-aligned {
  display: flex;
  padding-bottom: 25px;
}

.project-text {
  p {
    margin: 0;
  }
  p.title {
    color: #E9633B;
    font-size: 18px;
    height: 50px;
    padding-bottom: 20px;
  }

  .text-label {
    width: 100px;
    color: #63AA9C;
    padding-right: 10px;
    text-align: left;
    font-weight: 300;
  }

  p.text {
    width: 300px;
    margin: 0;
    text-align: left;
    color: #221E1D;
  }
}

.mission-height {
  height: 70px;
}

.approach-height {
  height: 190px;
}
.donation-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding-top: 20px;
  .button {
    border-radius: 17px;
    padding: 10px 0 10px 0;
    background-color: #63AA9C;
    color: #ffffff;
    border: none;
    outline: 0;
    font-size: 11px;
    width: 110px;
  }
  a {
    text-decoration: none;
  }
}

</style>
