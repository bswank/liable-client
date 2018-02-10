<template>
  <footer>
    <div class="constrict">
      <div class="col">
        <span><a target="_blank" href="https://github.com/bswank">Code on GitHub</a></span>
        <span><router-link tag="a" to="/privacy">Privacy Policy</router-link></span>
      </div>
      <div class="closing">
        <span><a target="_blank" href="https://twitter.com/briansw">Made by @briansw</a> | 0.1.0</span><br>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
footer {
  display: block;
  width: 100%;
  background-color: #000;
  padding: 40px 20px;
  color: #fff;
}

footer a {
  text-decoration: none;
  cursor: pointer;
}

footer a:hover {
  text-decoration: underline;
}

.constrict {
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.col {
  text-align: center;
}

.col span {
  font-size: 12px;
  padding: 10px;
  background-color: #121212;
  border-radius: 3px;
}

.closing span {
  display: block;
  font-size: 12px;
  font-weight: 300;
  padding: 20px 20px 0 20px;
  color: #3fd991;
  text-align: center;
}
</style>
