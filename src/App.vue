<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html {
  background-color: #000;
}

body {
  margin: 0;
  background-color: #fff;
  color: #000;
  background-color: #3fd991;
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
}

* {
  box-sizing: border-box;
  outline: none;
  user-select: none;
}

p, h1, h2, h3, button, li, ol, input, textarea, label, span, select {
  font-family: 'Source Code Pro', monospace;
}

hr {
  display: block;
  border: none;
  border-top: 1px solid #000;
  margin: 20px 0;
}

a {
  text-decoration: underline;
  cursor: pointer;
  color: inherit;
}

h1 {
  font-size: 30px;
}

section {
  margin: 0 20px 40px 20px;
}

.little-header {
  width: 100%;
  max-width: 550px;
  padding: 20px 0;
  margin: auto;
}

.little-header h1,
.little-header p {
  text-transform: uppercase;
  margin: 0;
  display: inline-block;
  background-color: #f9e784;
}

.little-header p {
  margin-top: 5px;
}

.little-content {
  width: 100%;
  max-width: 550px;
  padding: 40px;
  margin: auto;
  border-radius: 3px;
  box-shadow: 2px 2px 0 #000;
  background-color: #fff;
  margin-bottom: 50px;
}

.big-header {
  width: 100%;
  max-width: 840px;
  padding: 20px 0;
  margin: auto;
}

.big-header h1,
.big-header p {
  text-transform: uppercase;
  margin: 0;
  display: inline-block;
  background-color: #f9e784;
}

.big-header p {
  margin-top: 5px;
}

.big-content {
  width: 100%;
  max-width: 840px;
  padding: 40px;
  margin: auto;
  border-radius: 3px;
  box-shadow: 2px 2px 0 #000;
  background-color: #fff;
}

.big-content *:first-child,
.little-content *:first-child {
  margin-top: 0;
}

button {
  margin-top: 10px;
  background-color: #fff;
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
  border: 1px solid #3fd991;
  border-radius: 3px;
  box-shadow: 1px 1px 0px #3fd991;
  margin-right: 10px;
}

button:hover,
button:focus {
  background-color: #fafafa;
}

button:active {
  box-shadow: .5px .5px 0px #3fd991;
}

form label {
  display: block;
  margin-top: 15px;
  margin-bottom: 1px;
  font-size: 12px;
  text-transform: uppercase;
}

form label .client-validation-warning {
  color: #e74835;
}

form label.client-invalid-label {
  color: #e74835;
}

form input,
form select {
  display: block;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #000;
  border-radius: 3px;
  width: 100%;
}

form input.client-invalid-input,
form select.client-invalid-input {
  border-color: #e74835;
}

select {
  cursor: pointer;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  background-color: #fff;
}

form input:focus,
form select:focus {
  background-color: #fafafa;
  border: 1px solid #000;
  box-shadow: 1px 1px 0 #000;
}

form input.client-invalid-input:focus,
form select.client-invalid-input:focus {
  border-color: #e74835;
  box-shadow: 1px 1px 0 #e74835;
}

form button {
  margin-top: 20px;
  background-color: #fff;
  color: #000;
  padding: 12px 20px;
  font-size: 13px;
  cursor: pointer;
  border: 1px solid #3fd991;
  border-radius: 3px;
  box-shadow: 1px 1px 0px #3fd991;
  margin-right: 10px;
}

form button:hover,
form button:focus {
  background-color: #fafafa;
}

form button:active {
  box-shadow: .5px .5px 0px #3fd991;
}

button.disabled {
  pointer-events: none;
  opacity: .5;
}

/* Loading Animation */

.spinner {
  text-align: center;
}

.spinner > div {
  width: 8px;
  height: 8px;
  background-color: #000;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}

.tiny {
  font-size: 11px;
  margin: 0;
  margin-top: 2px;
}
</style>
