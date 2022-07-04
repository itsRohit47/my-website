<template>
  <div id="app">
    <div class="top-bar">
      <div class="name">
        <h1>Rohit Bajaj</h1>
      </div>
      <div class="contact">
        <a href="mailto:rohitbajaj13@yahoo.com" target="_blank" class="social"><i><img class="icon" src="../src/icons/email-icon.svg" alt=""></i></a>
        <a href="tel:0466605652" class="social"><i><img class="icon" src="../src/icons/call-icon.svg" alt=""></i></a>
        <a href="https://github.com/Rohit-bajaj47" target="_blank" class="social"><i><img class="icon" src="../src/icons/github-icon.svg" alt=""></i></a>
        <a href="https://www.facebook.com/profile.php?id=100075982823186" target="_blank" class="social"><i><img class="icon" src="../src/icons/facebook-icon.svg" alt=""></i></a>
        <a href="https://www.linkedin.com/in/rohit~bajaj/" target="_blank" class="social" style="margin-right: 100px"><i><img class="icon" src="../src/icons/linkedin-icon.svg" alt=""></i></a>
      </div>
    </div>

    <div class="main-content">
      <nav class="side-bar">
        <router-link to="/"  class="route" :class="{ current: isHome }">Home</router-link>
        <router-link to="/resume" class="route"  :class="{ current: isResume }" @click="activate">Resumes</router-link> 
        <router-link to="/my-work" class="route" :class="{ current: isWork }">My work</router-link>
        <router-link to="/experience" class="route" :class="{ current: isExperience }">Experience</router-link>
        <router-link to="/blogs" class="route" :class="{ current: isBlogs }">Blog</router-link>
        <router-link to="/plans" class="route" :class="{ current: isPlan }">What's next</router-link>
        <router-link to="/inspirations" class="route" :class="{ current: isInspire }">What's the kick</router-link>
     </nav>
     <div class="view">
        <router-view></router-view>
     </div>
    </div>
  </div>
 
</template>

<script>
export default {
  data: function () {
    return {
      isHome: false,
      isResume: false,
      isWork: false,
      isExperience: false,
      isBlogs: false,
      isPlan: false,
      isInspire: false,
  }},
  methods: { 
  activate() {
    this.isHome = false;
    this.isResume = false;
    this.isWork = false;
    this.isExperience = false;
    this.isBlogs = false;
    this.isPlan = false;
    this.isInspire = false;
  }}}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Goldman&family=Varela+Round&display=swap');

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Varela Round', sans-serif;
}

body{
  background-color: rgb(233, 233, 233);
}

#app{
  display: flex;
  flex-direction: column;
}

.top-bar{
  /* height: 15vh; */
  display: flex;
  /* border: 1px solid rgb(192, 188, 188); */
  border-radius: 10px;
  padding: 20px 10px 20px 10px;
  margin: 5px;
}

.name{
  font-family: 'Goldman', cursive;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
}

.contact{
  display: flex;
  flex-grow: 3;
  align-items: center;
  justify-content: right;
  /* border: 1px solid black; */
}

.icon{
  height: 25px;
  width: 25px;
}

.social{
  margin: 0px 20px 0px 20px;
}

.side-bar{
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid rgb(192, 188, 188);
  margin: 10px;
  padding: 20px 10px 20px 10px;
}

.route{
  /* margin-top: 60px; */
  text-decoration: none;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  color: black;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
}

.current{
    box-shadow: 1px 3px 11px 2px rgba(0, 0, 0, 0.1);
}

.route:visited {
  text-decoration: none;
  color: black;
}

.route:hover {
  color: rgb(82, 82, 82);
  background-color: rgba(187, 187, 187, 0.459);
}

/* .main-content{
  display: flex;
} */

.view{
  margin: 10px 30px 10px 30px;
}
</style>
