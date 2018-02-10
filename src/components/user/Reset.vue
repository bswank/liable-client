<template>
  <div>
    <UserNotices :notices="notices"></UserNotices>
    <div v-if="user">
      <h1>Reset Password</h1>
      <h2>Hey, Brian – ya dummy. Reset your password.</h2>
      <form @submit.prevent="update">
        <label for="password">Password</label>
        <input type="password" v-model="password">
        <label for="passwordConfirm">Confirm Password</label>
        <input type="password" v-model="passwordConfirm">
        <button>Reset Password</button>
      </form>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService'
import flash from '@/assets/flashes'
export default {
  name: 'Login',
  data () {
    return {
      password: '',
      passwordConfirm: '',
      user: null
    }
  },
  methods: {
    async update () {
      try {
        const response = await UserService.update({
          token: this.$route.params.token,
          password: this.password,
          passwordConfirm: this.passwordConfirm
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        flash.success(['Password Reset + Signed In'])
      } catch (err) {
        flash.error(err)
      }
    }
  },
  async mounted () {
    try {
      this.user = await UserService.reset({ token: this.$route.params.token })
    } catch (err) {
      flash.error(err)
    }
  }
}
</script>

<style scoped>

</style>
