<template>
  <section v-if="activeGoals && completedGoals">
    <div class="big-header">
      <h1>Goals</h1>
      <div></div>
      <p><small>Active &amp; Completed Goals</small></p>
    </div>
    <div class="big-content">

      <h2>Active Goals <router-link tag="button" to="/goals/create" class="create">+ New Goal</router-link><div style="clear:both;"></div></h2>
      <p v-if="!activeGoals.length"><small>No active goals to show.</small></p>
      <!-- eslint-disable-next-line -->
      <div v-for="goal in activeGoals">
        <div class="goal-container">
          <div class="goal">
            <h3>{{goal.title}}</h3>
            <span :class="`goal-menu goal-details-${goal._id}-trigger`"><i class="material-icons">keyboard_arrow_down</i></span>
          </div>
          <div :class="`goal-details goal-details-${goal._id}`">
            <span v-if="goal.goalType" class="detail-item">Goal Type: {{goal.goalType}}</span>
            <span v-if="goal.endDate" class="detail-item">Deadline: {{moment(goal.endDate).format('MM/DD/YYYY')}}</span>
            <span v-if="!goal.endDate" class="detail-item">Next Check: {{moment(goal.nextCheck).format('MM/DD/YYYY')}}</span>
            <span class="detail-item">Accountability Partner: {{goal.accountabilityPartnerFirstName}} ({{goal.accountabilityPartnerEmail}})</span>
            <span v-if="goal.incentive" class="detail-item">Incentive Amount: ${{goal.incentive}}</span>
            <!-- <button>Edit</button> -->
            <!-- <button>Complete</button> -->
          </div>
        </div>
      </div>

      <h2>Completed Goals</h2>
      <p v-if="!completedGoals.length"><small>No completed goals to show.</small></p>
      <!-- eslint-disable-next-line -->
      <div v-for="goal in completedGoals">
        <div class="goal-container">
          <div class="goal">
            <h3>{{goal.title}}</h3>
            <span :class="`goal-menu goal-details-${goal._id}-trigger`"><i class="material-icons">keyboard_arrow_down</i></span>
          </div>
          <div :class="`goal-details goal-details-${goal._id}`">
            <span v-if="goal.goalType" class="detail-item">Goal Type: {{goal.goalType}}</span>
            <span v-if="goal.endDate" class="detail-item">Ended On: {{moment(goal.endDate).format('MM/DD/YYYY')}}</span>
            <span class="detail-item">Accountability Partner: {{goal.accountabilityPartnerFirstName}} ({{goal.accountabilityPartnerEmail}})</span>
            <span v-if="goal.incentive" class="detail-item">Incentive Amount: ${{goal.incentive}}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import GoalService from '@/services/GoalService'
import flash from '@/assets/flashes'
export default {
  name: 'Register',
  data () {
    return {
      allGoals: [],
      activeGoals: [],
      completedGoals: []
    }
  },
  methods: {
    async list () {
      try {
        this.allGoals = await GoalService.list()
        for (var i = 0; i < this.allGoals.data.length; i++) {
          if (this.allGoals.data[i].completed === true) {
            this.completedGoals.push(this.allGoals.data[i])
          } else {
            this.activeGoals.push(this.allGoals.data[i])
          }
        }
      } catch (err) {
        flash.error(err)
      }
    }
  },
  async mounted () {
    await this.list()
    const goals = this.allGoals.data
    for (let i = 0; i < goals.length; i++) {
      const tr = document.querySelector(`.goal-details-${goals[i]._id}-trigger`)
      const de = document.querySelector(`.goal-details-${goals[i]._id}`)
      if (tr) {
        tr.addEventListener('click', () => {
          if (de.style.display === 'block') {
            de.style.display = 'none'
            tr.classList.remove('expanded')
          } else {
            tr.classList.add('expanded')
            de.style.display = 'block'
          }
        })
      }
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  text-decoration: underline;
  margin-top: 40px;
}

h2 button.create {
  float: right;
  margin-right: 0;
}

h2:first-child {
  margin-top: 0;
}

.goal-container {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.goal {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.goal h3 {
  margin: 0;
  font-size: 14px;
  padding: 14px;
  line-height: 1.4;
}

.goal .goal-menu {
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
}

.goal .goal-menu.expanded i {
  transform: rotate(180deg);
}

.goal-details {
  padding: 15px;
  font-size: 13px;
  display: none;
}

.goal-details .detail-item {
  display: block;
  margin-bottom: 10px;
}

.goal-details .detail-item:last-child {
  margin-bottom: 0;
}
</style>
