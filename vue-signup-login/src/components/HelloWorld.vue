<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
    Welcome to the website this will help to connect with Data.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
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
}*/
p {
  font-weight: bold;
    font-size: 2rem;
    margin-bottom: 4rem;
} 
</style>
