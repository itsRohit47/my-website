<script>
export default {
  props: ['title', 'des']
}
</script>

<template>
  <div>
    <section><h2>{{title}}</h2></section>
    <p>{{des}}</p>
    <section>
      <button>Download</button>
    </section>
  </div>
</template>

<style scoped>
div{
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  width: 300px;
  height: 250px;
  padding: 10px;
  margin-bottom: 20px;
  text-align: left;
  border: 1px solid rgb(211, 211, 211);
  background-color: white;
  border-radius: 10px;
  font-family: 'Varela Round', sans-serif;
}

p{
  padding: 10px;
}

section{
  display: flex;
  align-items: center;
  justify-content: center;
}

button{
  padding: 10px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 5px;
  background-color: rgb(0, 0, 0);
  color: white;
}


</style>