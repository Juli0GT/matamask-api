<template lang="html">
    <div class="project-container">

        <div class="image-container">
            <img :src="projectData.url">
        </div>

        <div class="info-container">

            <div class="project-text">

                <p class="title uppercase bold">{{projectData.title}}</p>
                <div class="row-aligned">

                    <label class="text-label uppercase"
                           for="mission">
                        {{text.mission}}
                    </label>

                    <p class="text mission-height"> {{projectData.mission}}</p>
                </div>

                <div class="row-aligned">
                    <label class="text-label uppercase" for="approach">{{text.approach}}</label>
                    <p class="text approach-height">{{projectData.approach}}</p>
                </div>
            </div>

          <div v-if="amountDonationOpen === false">


              <p class="amount-text center-align">
                  Help us, or visit our website for more information.
              </p>

              <div class="buttons-container confirm-buttons">

                  <button v-if="metamaskAvailable"
                          @click="openInsertAmount"
                          type="button" name="button"
                          class="uppercase button bold">
                      {{text.button.donate}}
                  </button>

                  <a class="button uppercase bold" :href="projectData.website">{{text.website}}</a>

              </div>

          </div>

          <div v-if="amountDonationOpen">

              <div class="donation-amount">
                   <p class="amount-text left-align">
                      Insert the amount of ETH you want to donate:
                   </p>

                   <input class="input-line"
                          type="amount"
                          name="amount"
                          placeholder="ETH"
                          v-model="ethAmount">
              </div>

              <div class="buttons-container confirm-buttons">

                  <button v-if="metamaskAvailable"
                          @click="makeDonation"
                          :disabled="disableDonate"
                          type="button" name="button"
                          class="uppercase button bold">
                      {{text.button.confirm}}
                  </button>

                  <button v-if="metamaskAvailable"
                          @click="cancelInsertAmount"
                          type="button" name="button"
                          class="uppercase button bold">
                      {{text.button.cancel}}
                  </button>

              </div>

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
      website: 'visit website',
      amount: 'amount',
      button: {
        donate: 'donate',
        confirm: 'confirm',
        cancel: 'cancel',
      },
    },
    amountDonationOpen: false,
    ethAmount: 'ETH',
  }),

  computed: {
    metamaskAvailable() {
      if (typeof window.web3 !== 'undefined') return true;
      return false;
    },
    disableDonate() {
      return !this.ethAmount || this.ethAmount === '0';
    },
  },

  props: ['projectData'],

  methods: {
    makeDonation() {
      const web3 = window.web3;
      const address = this.projectData.address;
      web3.eth.sendTransaction({
        to: address,
        value: web3.toWei(this.ethAmount, 'ether'),
      }, (err) => {
        // eslint-disable-next-line
        console.log(err);
      });
      this.cancelInsertAmount();
    },
    openInsertAmount() {
      this.ethAmount = 0;
      this.amountDonationOpen = true;
    },
    cancelInsertAmount() {
      this.amountDonationOpen = false;
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
  padding-top: 20px;
  border-radius: 0 0 10px 10px;
  border-top: 1px solid #F0F8FF;
}

.row-aligned {
  display: flex;
  padding-bottom: 25px;
}

.project-text {
  padding: 0 10px;
  border-bottom: 1px solid #F0F8FF;

  p {
    margin: 0;
  }
  p.title {
    color: #E9633B;
    font-size: 18px;
    height: 50px;
    padding-bottom: 20px;
  }

  p.text {
    width: 300px;
    margin: 0;
    text-align: left;
    color: #221E1D;
  }
}

.text-label {
  width: 100px;
  color: #63AA9C;
  padding-right: 10px;
  text-align: left;
  font-weight: 300;
}

.mission-height {
  height: 70px;
}

.approach-height {
  height: 190px;
}

.donation-amount {
  display: flex;
}

.donate-buttons {
  height: 110px;
}

.confirm-buttons {
  height: 66px;
}

.buttons-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  .button {
    border-radius: 17px;
    padding: 10px 0 10px 0;
    background-color: #63AA9C;
    color: #ffffff;
    border: none;
    outline: 0;
    font-size: 11px;
    width: 110px;
    cursor: pointer;
  }
  button.button:disabled {
      background-color: #D0D1E3;
      color: #FFFFFF;
      cursor: initial;
  }
  a {
    text-decoration: none;
  }
}

p.amount-text {
  font-size: 14px;
  padding: 0 10px;
}

.center-align {
  text-align: center;
  color: #de9494;
}

.left-align {
  text-align: center;
}

.input-line {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #FFD381;
  font-size: 14px;
  width: 40px;
  height: 27px;
  margin-top: 5px;
  margin-left: 7px;
}

</style>
