<template>
  <div>
    <div class="banner">
      <h1>Follow through.</h1>
      <div>
        <h2>Create better habits, destroy bad ones, and follow through on your decisions with the help of your friends and a little incentive.</h2>
      </div>
      <router-link tag="button" to="/register">Get Started &rarr;</router-link>
    </div>
    <!-- <div class="main-content-container">
      <div class="main-content how-master">
        <span class="join-us">Join <strong>229</strong> others who have pledged <strong>$32,050</strong> to reach their goals.</span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  max-width: 840px;
  padding: 140px 40px;
  margin: auto;
}

@media (max-width: 560px) {
  .banner {
    padding: 80px 40px;
  }
}

.banner h1 {
  font-size: 50px;
  font-weight: 500;
  background-color: #f9e784;
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  display: inline-block;
  margin-top: 0;
}

@media (max-width: 560px) {
  .banner h1 {
    font-size: 30px;
  }
}

.banner h2 {
  font-weight: 400;
  font-size: 20px;
  line-height: 2;
  background-color: #f9e784;
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  display: inline;
}

@media (max-width: 560px) {
  .banner h2 {
    font-size: 16px;
  }
}

.banner button {
  background-color: #f9e784;
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  color: #000;
  border: none;
  border-radius: 3px;
  padding: 20px 40px;
  margin-top: 30px;
  cursor: pointer;
  box-shadow: 1px 1px 0px #000;
}

.banner button:active {
  box-shadow: .5px .5px 0px #000;
}

.main-divider-container {
  background-color: #000;
  color: #fff;
}

.main-divider {
  width: 100%;
  max-width: 840px;
  padding: 80px 40px;
  margin: auto;
  padding: 60px 40px;
}

span.join-us {
  font-size: 18px;
  line-height: 1.5;
}

span.join-us strong {
  background-color: #3fd991;
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
  color: #000;
}

.main-content-container {
  background-color: #f9e784;
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  color: #000;
}

.main-content {
  width: 100%;
  max-width: 840px;
  padding: 80px 40px;
  margin: auto;
}

.main-content h2 {
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 0;
}

.main-content p {
  margin-top: 5px;
  margin-bottom: 30px;
}

.how-master ol.how {
  list-style: none;
  margin: 0;
  padding: 0;
}

.how-master ol.how li {
  border-radius: 3px;
  margin-bottom: 20px;
  overflow: auto;
}

.how-master ol.how li .step {
  display: block;
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-bottom: 1px solid #f9e784;
  font-size: 18px;
}

.how-master ol.how li .content {
  padding: 20px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
}
</style>
