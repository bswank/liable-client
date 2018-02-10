<template>
  <section>

    <div class="little-header">
      <h1>Set a Goal</h1>
      <div></div>
      <p><small>Start your journey here</small></p>
    </div>

    <form @submit.prevent="create" autocomplete="off">

      <div class="little-content step-one">
        <h2>What do you want to accomplish?</h2>
        <p class="description">In a phrase, describe your goal. For instance, <span class="example">blog weekly</span>, <span class="example">bench 200 lbs</span>, <span class="example">stop gambling online</span>, etc.</p>
        <label :class="{'input': false, 'client-invalid-label': errors.has('title') }" for="description">Description</label>
        <input :class="{'input': true, 'client-invalid-input': errors.has('title') }" type="text" name="title" v-validate="'required'" v-model="title" placeholder="Describe your goal">
        <label for="goalType">Type/Duration</label>
        <select name="goalType" v-model="goalType">
          <option value="Perpetual">Perpetual</option>
          <option value="One Time">One Time</option>
        </select>
        <label v-if="goalType === 'One Time'" for="endDate">Deadline</label>
        <input v-if="goalType === 'One Time'" type="date" v-model="endDate">
        <button type="button" class="on-to-step-two">Next</button>
      </div>

      <div class="little-content step-two">
        <h2>Who should keep your accountable?</h2>
        <p v-if="goalType === 'Perpetual'" class="description">Choose a friend, coach, spouse, pastor, or other trusted individual and choose how often they should check in with you.</p>
        <p v-if="goalType === 'One Time'" class="description">Choose a friend, coach, spouse, pastor, or other trusted individual. They'll be prompted to check in on {{moment(endDate).format('MM/DD/YYYY') + '.' || 'your end date.'}}</p>
        <label :class="{'input': false, 'client-invalid-label': errors.has('apFirstName') }" for="apFirstName">First Name</label>
        <input :class="{'input': true, 'client-invalid-input': errors.has('apFirstName') }" name="apFirstName" v-validate="'required'" type="text" v-model="apFirstName" placeholder="Burt">
        <label :class="{'input': false, 'client-invalid-label': errors.has('apEmail') }" for="apEmail">Email Address</label>
        <input :class="{'input': true, 'client-invalid-input': errors.has('apEmail') }" name="apEmail" v-validate="'required|email'" type="text" v-model="apEmail" placeholder="burt.macklin@fbi.gov">
        <label v-if="goalType === 'Perpetual'" for="frequency">Check-in Frequency</label>
        <select v-if="goalType === 'Perpetual'" name="frequency" v-model="frequency">
          <option value="day">Daily</option>
          <option value="week">Weekly</option>
          <option value="month">Monthly</option>
        </select>
        <button type="button" class="back-to-step-one">Back</button>
        <button type="button" class="on-to-step-three">Next</button>
      </div>

      <div class="little-content step-three">
        <h2>Finally, set an incentive.</h2>
        <p class="description">As a little motivation, set an amount you'll be charged if your accountability partner reports you've come up short.</p>
        <label v-if="$store.state.user.paymentSource" for="incentive">Incentive (optional)</label>
        <input v-if="$store.state.user.paymentSource" type="number" v-model="incentive" placeholder="$20">
        <label v-if="!$store.state.user.paymentSource" for="incentive" class="needCard">Incentive (optional)</label>
        <input v-if="!$store.state.user.paymentSource" class="needCard" type="number" v-model="incentive" placeholder="$20">
        <p v-if="!$store.state.user.paymentSource"><small>You must <router-link to="/account">set a payment method</router-link> before using the incentive feature.</small></p>
        <button type="button" class="back-to-step-two">Back</button>
        <button type="submit" id="create">Create Goal</button>
      </div>

    </form>

  </section>
</template>

<script>
import GoalService from '@/services/GoalService'
import flash from '@/assets/flashes'
import h from '@/assets/helpers'
export default {
  name: 'Register',
  data () {
    return {
      title: '',
      apFirstName: '',
      apEmail: '',
      frequency: 'week',
      goalType: 'Perpetual',
      endDate: '',
      incentive: null
    }
  },
  methods: {
    async create () {
      const endDateDate = new Date(this.endDate.replace(/-/g, '/').replace(/T.+/, ''))
      let incentive
      if (this.incentive) {
        incentive = parseFloat(this.incentive)
      }
      h.indicateLoading('create')
      try {
        if (this.goalType === 'oneTime' && endDateDate < Date.now()) {
          flash.error('End Date must be in the future.')
          h.indicateDone('create', 'Create Goal')
        } else {
          if (!this.$store.state.user.stripeCustomerId) {
            this.incentive = undefined
          }
          await GoalService.create({
            title: this.title,
            accountabilityPartnerFirstName: this.apFirstName,
            accountabilityPartnerEmail: this.apEmail,
            accountabilityFrequency: this.frequency,
            incentive: incentive || undefined,
            planner: this.$store.state.user._id,
            goalType: this.goalType,
            endDate: endDateDate || undefined
          })
          this.$router.push('/goals')
          flash.success(['Nice! Get on it.'])
          h.indicateDone('create', 'Create Goal')
        }
      } catch (err) {
        flash.error(err)
        h.indicateDone('create', 'Create Goal')
      }
    }
  },
  mounted () {
    document.querySelector('.on-to-step-two').addEventListener('click', () => {
      document.querySelector('.step-one').style.display = 'none'
      document.querySelector('.step-two').style.display = 'block'
    })

    document.querySelector('.on-to-step-three').addEventListener('click', () => {
      document.querySelector('.step-two').style.display = 'none'
      document.querySelector('.step-three').style.display = 'block'
    })

    document.querySelector('.back-to-step-one').addEventListener('click', () => {
      document.querySelector('.step-two').style.display = 'none'
      document.querySelector('.step-one').style.display = 'block'
    })

    document.querySelector('.back-to-step-two').addEventListener('click', () => {
      document.querySelector('.step-three').style.display = 'none'
      document.querySelector('.step-two').style.display = 'block'
    })
  }
}
</script>

<style scoped>
h2 {
  font-size: 18px;
  margin: 0 0 10px 0;
}

p.description {
  font-size: 14px;
  padding-bottom: 0px;
  margin: 0;
}

.step-two,
.step-three {
  display: none;
}

.needCard {
  opacity: .3;
  pointer-events: none;
}

.back-to-goals {
  margin-top: 0;
  margin-bottom: 15px;
  padding: 8px 16px;
}
</style>
