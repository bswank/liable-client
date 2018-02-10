<template>
  <div>
    <div class="little-header">
      <h1>Check-in</h1>
      <div></div>
      <p><small>Let us know how things are going</small></p>
    </div>
    <div class="little-content">
      <div v-if="goal">
        <p>Did {{goal.planner.firstName}} accomplish his/her goal?</p>
        <button @click="checkin('yes')">Yes</button>
        <button @click="checkin('no')">No</button>
      </div>
    </div>
  </div>
</template>

<script>
import GoalService from '@/services/GoalService'
import flash from '@/assets/flashes'
export default {
  name: 'Checkin',
  data () {
    return {
      goal: null
    }
  },
  methods: {
    async checkin (result) {
      try {
        const response = await GoalService.checkin({
          token: this.$route.params.token,
          result: result
        })
        flash.success(response.data)
        document.querySelector('.little-content').innerHTML = `<p><strong>Thanks for doing your part! Remember, reporting accurately helps make liable a useful service for the person you're keeping accountable. Keep it up!</strong></p>`
      } catch (err) {
        flash.error(err)
      }
    }
  },
  async mounted () {
    try {
      const response = await GoalService.getGoalForCheckin({ token: this.$route.params.token })
      this.goal = response.data
    } catch (err) {
      flash.error(err)
    }
  }
}
</script>

<style scoped>

</style>
