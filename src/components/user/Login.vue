<template>
  <section>
    <div class="little-header">
      <h1>Login</h1>
      <div></div>
      <p><small>Log in to liable with your email address &amp; password</small></p>
    </div>
    <div class="little-content">
      <div class="login">
        <form @submit.prevent="login">
          <label for="email">Email </label>
          <input type="email" v-model="email" name="email" placeholder="burt.macklin@fbi.gov">
          <label for="password">Password</label>
          <input type="password" v-model="password" placeholder="*********">
          <button id="login">Log In</button>
          <span><small><a class="password-forgot-trigger">Password Reset</a></small></span>
        </form>
      </div>
      <div class="password-forgot">
        <form @submit.prevent="forgot">
          <label for="Email">Email</label>
          <input type="email" v-model="forgottenPasswordEmail" placeholder="burt.macklin@fbi.gov">
          <button id="forgot">Reset Password</button>
          <span><small><a class="login-trigger">Login</a></small></span>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import UserService from '@/services/UserService'
import flash from '@/assets/flashes'
import h from '@/assets/helpers'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      forgottenPasswordEmail: null
    }
  },
  methods: {
    async login () {
      h.indicateLoading('login')
      try {
        const response = await UserService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('/goals')
        h.indicateDone('login', 'Log In')
      } catch (err) {
        flash.error(err)
        h.indicateDone('login', 'Log In')
      }
    },
    async forgot () {
      h.indicateLoading('forgot')
      try {
        const response = await UserService.forgot({
          email: this.forgottenPasswordEmail
        })
        flash.success([response.data])
        h.indicateDone('forgot', 'Reset Password')
      } catch (err) {
        flash.error(err)
        h.indicateDone('forgot', 'Reset Password')
      }
    }
  },
  mounted () {
    document.querySelector('.password-forgot-trigger').addEventListener('click', () => {
      document.querySelector('.login').style.display = 'none'
      document.querySelector('.password-forgot').style.display = 'block'
    })
    document.querySelector('.login-trigger').addEventListener('click', () => {
      document.querySelector('.password-forgot').style.display = 'none'
      document.querySelector('.login').style.display = 'block'
    })
  }
}
</script>

<style scoped>
.password-forgot {
  display: none;
}
</style>
