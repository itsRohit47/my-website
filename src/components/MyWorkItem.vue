<script>
export default {
  props: ['title', 'file'],
  data: function () {
    return {
      des: '',
      show: true
  }},
  methods: {
  loadTxt(){
  let t = this.file + '.txt';
  let a = this.title
  this.show = !this.show
  fetch(t) 
  .then(function(response) {
    return response.text();
    })
    .then(function(data) {
      // console.log(t)
      document.getElementById(a).innerHTML = data;
    })
    },
  hideTxt(){
    let a = this.title
    document.getElementById(a).innerHTML = '';
    this.show = !this.show
  }}}


</script>

<template>
  <div>
    <section>
      <h1>{{title}}</h1>
    </section>
    <br>
    <div class="btn-div">
    <button v-if="show" @click="loadTxt">Show description</button>
    <button v-if="!show" @click="hideTxt">Hide description</button>
    </div>
    
    <p :id="title" >{{des}}</p>
  </div>
</template>


<style scoped>
div:nth-child(1)
{
    background-color: white;
    border: 1px solid rgb(184, 184, 184);
    border-radius: 10px;
    width: 70vw;
    height: max-content;
    padding: 20px;
    margin-bottom: 20px;
}

section{
  display: flex;
  align-items: center;
  justify-content: space-around;
}

p{
  margin-top: 20px;
  font-size: 20px;
}

.btn-div{
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

