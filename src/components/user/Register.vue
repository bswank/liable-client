<template>
  <section>
    <div class="little-header">
      <h1>Register</h1>
      <div></div>
      <p><small>Sign up &amp; change your life</small></p>
    </div>
    <div class="little-content">
      <form @submit.prevent="register" class="register-form">
        <div class="group form-left">
          <label :class="{'input': false, 'client-invalid-label': errors.has('firstName') }" for="firstName" class="first-line">First Name</label>
          <input :class="{'input': true, 'client-invalid-input': errors.has('firstName') }" name="firstName" v-validate="'required'" type="text" v-model="firstName" placeholder="Burt" required>
        </div>
        <div class="group form-right">
          <label :class="{'input': false, 'client-invalid-label': errors.has('lastName') }" for="lastName" class="first-line second-item">Last Name</label>
          <input :class="{'input': true, 'client-invalid-input': errors.has('lastName') }" name="lastName" v-validate="'required'" type="text" v-model="lastName" placeholder="Macklin" required>
        </div>
        <div style="clear: both;"></div>
        <div class="email">
          <label :class="{'input': false, 'client-invalid-label': errors.has('email') }" for="email">Email</label>
          <input :class="{'input': true, 'client-invalid-input': errors.has('email') }" name="email" v-validate="'email|required'" type="email" v-model="email" placeholder="burt.macklin@fbi.gov" required>
        </div>
        <div style="clear: both;"></div>
        <div class="group form-left">
          <label :class="{'input': false, 'client-invalid-label': errors.has('password') }" for="password">Password</label>
          <input :class="{'input': true, 'client-invalid-input': errors.has('password') }" name="password" v-validate="'required'" type="password" v-model="password" placeholder="*********" required>
        </div>
        <div class="group form-right">
          <label :class="{'input': false, 'client-invalid-label': errors.has('passwordConfirm') }" for="passwordConfirm">Confirm</label>
          <input :class="{'input': true, 'client-invalid-input': errors.has('passwordConfirm') }" name="passwordConfirm" v-validate="'required'" type="password" v-model="passwordConfirm" placeholder="*********" required>
        </div>
        <button id="register">Register</button>
      </form>
    </div>
  </section>
</template>

<script>
import UserService from '@/services/UserService'
import flash from '@/assets/flashes'
import h from '@/assets/helpers'
export default {
  name: 'Register',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    async register () {
      h.indicateLoading('register')
      try {
        const response = await UserService.register({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('/goals')
        flash.success(['Registered + Signed In'])
        h.indicateDone('register', 'Register')
      } catch (err) {
        flash.error(err)
        h.indicateDone('register', 'Register')
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
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
