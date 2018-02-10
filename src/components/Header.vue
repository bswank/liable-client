<template>
  <div style="text-align: center;">
    <div class="notice"><span>This project is in the beta testing phase. Report issues on <a target="_blank" href="https://github.com/bswank/liable/issues">GitHub</a>.</span></div>
    <header style="text-align: left;">
      <div>
        <router-link v-if="!$store.state.isUserLoggedIn" tag="span" to="/">liable</router-link>
        <router-link v-if="$store.state.isUserLoggedIn" tag="span" to="/goals">liable</router-link>
        <nav>
          <ul>
            <router-link tag="li" to="/goals" v-if="$store.state.isUserLoggedIn">Goals</router-link>
            <router-link tag="li" to="/account" v-if="$store.state.isUserLoggedIn">Account</router-link>
            <router-link tag="li" to="/register" v-if="!$store.state.isUserLoggedIn">Register</router-link>
            <router-link tag="li" to="/login" v-if="!$store.state.isUserLoggedIn">Login</router-link>
            <li @click="logout()" v-if="$store.state.isUserLoggedIn">Log Out</li>
          </ul>
        </nav>
      </div>
      <div style="clear: both;"></div>
    </header>
    <UserFlashes />
  </div>
</template>

<script>
import UserFlashes from '@/components/UserFlashes'
// import UserService from '@/services/UserService'
import flash from '@/assets/flashes'
export default {
  name: 'Header',
  components: {
    UserFlashes
  },
  methods: {
    async logout () {
      this.notices = []
      try {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push('/login')
        // await UserService.logout()
      } catch (err) {
        flash.error(err)
      }
    }
  }
}
</script>

<style scoped>
header {
  position: relative;
  padding: 20px;
  background-color: #000;
  overflow: auto;
  color: #fff;
}

header span {
  display: inline-block;
  padding-top: 8px;
  font-size: 14px;
  cursor: pointer;
}

nav {
  float: right;
}

nav ul {
  list-style: none;
  margin: 0;
}

nav ul li {
  display: inline-block;
  margin-left: 0px;
  padding: 10px 8px;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 3px;
}

nav ul li:hover {
  background-color: #232323;
}

nav ul li:active {
  background-color: #3fd991;
  color: #000;
}

.notice {
  background-color: #343434;
  color: #fff;
  padding: 10px;
  font-size: 11px;
}
</style>
