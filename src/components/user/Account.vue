<template>
  <section>
    <div class="little-header">
      <h1>Account</h1>
      <div></div>
      <p><small>Edit your deets</small></p>
    </div>
    <div class="little-content">
      <h2>Profile</h2>
      <form class="register-form" @submit.prevent="edit">
        <div class="group form-left">
          <label for="firstName" class="first-line">First Name</label>
          <input type="text" v-model="firstName" placeholder="Burt">
        </div>
        <div class="group form-right">
          <label for="lastName" class="first-line second-item">Last Name</label>
          <input type="text" v-model="lastName" placeholder="Macklin">
        </div>
        <div style="clear: both;"></div>
        <div class="email">
          <label for="email">Email</label>
          <input type="email" v-model="email" placeholder="burt.macklin@fbi.gov">
        </div>
        <div style="clear: both;"></div>
        <div class="group form-left">
          <label for="password">New Password</label>
          <input type="password" v-model="password" placeholder="*********">
        </div>
        <div class="group form-right">
          <label for="passwordConfirm">Confirm</label>
          <input type="password" v-model="passwordConfirm" placeholder="*********">
        </div>
        <button id="update">Update</button>
      </form>
      <h2>Payment Method</h2>
      <div v-if="paymentSource" class="current-payment-method">
        <p><small>{{paymentSource.cardType}} Ending: {{paymentSource.lastFour}} Expiring: {{paymentSource.expirationMonth}}/{{paymentSource.expirationYear}}</small></p>
      </div>
      <form id="card-form">
        <label v-if="paymentSource" for="card">Update Debit/Credit Card <span id="card-errors"></span></label>
        <label v-if="!paymentSource" for="card">Debit/Credit Card <span id="card-errors"></span></label>
        <div id="card-element"></div>
        <button id="save">Save</button>
        <span v-if="paymentSource"><small><a @click="removeCard()">Remove Card</a></small></span>
      </form>
    </div>
  </section>
</template>

<script>
import UserService from '@/services/UserService'
import flash from '@/assets/flashes'
import h from '@/assets/helpers'
export default {
  name: 'Account',
  data () {
    return {
      firstName: this.$store.state.user.firstName,
      lastName: this.$store.state.user.lastName,
      email: this.$store.state.user.email,
      password: '',
      passwordConfirm: '',
      newCard: {},
      paymentSource: this.$store.state.user.paymentSource
    }
  },
  methods: {
    async edit () {
      try {
        const response = await UserService.edit({
          _id: this.$store.state.user._id,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password || this.$store.state.user.password,
          passwordConfirm: this.passwordConfirm || this.$store.state.user.password
        })
        this.$store.dispatch('setUser', response.data)
        flash.success(['Account Updated'])
      } catch (err) {
        flash.error(err)
      }
    },
    async updateCard () {
      h.indicateLoading('save')
      try {
        const response = await UserService.updateCard(this.newCard)
        this.$store.dispatch('setUser', response.data)
        this.paymentSource = response.data.paymentSource
        flash.success(['Card Updated'])
        h.indicateDone('save', 'Save')
      } catch (err) {
        flash.error(err)
        h.indicateDone('save', 'Save')
      }
    },
    async removeCard () {
      h.indicateLoading('save')
      try {
        const response = await UserService.removeCard()
        this.$store.dispatch('setUser', response.data)
        this.paymentSource = response.data.paymentSource
        flash.success(['Card Removed'])
        h.indicateDone('save', 'Save')
      } catch (err) {
        flash.error(err)
        h.indicateDone('save', 'Save')
      }
    }
  },
  mounted () {
    // eslint-disable-next-line
    const stripe = Stripe('pk_live_fqGAd2YQXckn2HQw9bJzFXk0')

    const elements = stripe.elements({
      fonts: [
        {
          family: 'Monospace',
          weight: 400
        }
      ]
    })

    const card = elements.create('card', {
      style: {
        base: {
          fontFamily: 'Monospace'
        }
      }
    })

    card.mount('#card-element')

    card.addEventListener('change', ({error}) => {
      const displayError = document.getElementById('card-errors')
      if (error) {
        displayError.textContent = `(${error.message})`
      } else {
        displayError.textContent = ''
      }
    })

    const form = document.getElementById('card-form')
    form.addEventListener('submit', async (event) => {
      event.preventDefault()
      const {token, error} = await stripe.createToken(card)
      if (error) {
        const errorElement = document.getElementById('card-errors')
        errorElement.textContent = `(${error.message})`
      } else {
        stripeTokenHandler(token)
      }
    })

    const stripeTokenHandler = (token) => {
      this.newCard = token
      this.updateCard()
    }
  }
}
</script>

<style scoped>
#card-element {
  display: block;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #000;
  border-radius: 3px;
  width: 100%;
}

#card-element.focused {
  background-color: #fafafa;
  border: 1px solid #000;
  box-shadow: 1px 1px 0 #000;
}

.label-top {
  margin-top: 15px;
}

span#card-errors {
  color: #e74835;
}

.current-payment-method p {
  display: inline-block;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  padding: 8px 12px 10px 12px;
  border-radius: 3px;
}

.remove-card i {
  float: right;
  margin-left: 20px;
}

.register-form .group {
  width: calc(50% - 10px);
  float: left;
  padding: 0;
}

.register-form .group.form-left {
  margin-right: 10px;
}

.register-form .group.form-right {
  margin-left: 10px;
}

@media (max-width: 500px) {
  .register-form .group {
    width: 100%;
    float: none;
    padding: 0;
  }

  .register-form .group.form-left {
    margin-right: 0;
  }

  .register-form .group.form-right {
    margin-left: 0;
  }

  .register-form .group label.first-line.second-item {
    display: block;
    margin-top: 15px;
  }
}

.register-form .group label {
  display: block;
  margin-top: 15px;
}

.register-form .group label.first-line {
  display: block;
  margin-top: 0;
}

.register-form .group.email {
  width: 100%;
  float: none;
  clear: both;
  margin: 0;
}

.email {
  margin-top: 15px;
}
</style>
