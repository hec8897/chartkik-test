<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1>윈윈 비즈 데모 (Win-Win Biz Demo)</h1>
        <ul>
          <li><router-link to="/chartjs">chart Demo</router-link></li>
        </ul>
      </div>
    </div>
  </section>
</template>
 
<script>
export default {
  name: 'home'
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  h1, h2 {
    
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
    text-decoration: underline;
  }
</style>
 