<template>
  <div id="app">
    <div class="top-bar">
      <div class="name">
        <h1>Rohit Bajaj {{SmallCheck()}}</h1>
      </div>
      <div v-if="large" class="contact">
        <a href="mailto:rohitbajaj13@yahoo.com" target="_blank" class="social"><i><img class="icon" src="../src/icons/email-icon.svg" alt=""></i></a>
        <a href="tel:0466605652" class="social"><i><img class="icon" src="../src/icons/call-icon.svg" alt=""></i></a>
        <a href="https://github.com/Rohit-bajaj47" target="_blank" class="social"><i><img class="icon" src="../src/icons/github-icon.svg" alt=""></i></a>
        <a href="https://www.facebook.com/profile.php?id=100075982823186" target="_blank" class="social"><i><img class="icon" src="../src/icons/facebook-icon.svg" alt=""></i></a>
        <a href="https://www.linkedin.com/in/rohit~bajaj/" target="_blank" class="social" style="margin-right: 100px"><i><img class="icon" src="../src/icons/linkedin-icon.svg" alt=""></i></a>
      </div>
    </div>

    <div class="main-content">
      <nav v-if="large" class="side-bar">
        <router-link to="/"  class="route" :class="{ current: isHome }">Home</router-link>
        <router-link to="/resume" class="route"  :class="{ current: isResume }" @click="activate">Resumes</router-link> 
        <router-link to="/my-work" class="route" :class="{ current: isWork }">My work</router-link>
        <router-link to="/experience" class="route" :class="{ current: isExperience }">Experience</router-link>
        <router-link to="/blogs" class="route" :class="{ current: isBlogs }">Blog</router-link>
        <router-link to="/plans" class="route" :class="{ current: isPlan }">What's next</router-link>
     </nav>
    <nav v-if="small" class="side-bar-small">
      <button class="outside-buttons" @click="ToogleSidebar"><i><img src="../src/icons/menu.svg" id="menu" ></i></button>
      <div v-if="sidebar" class="small-menu">
        <div class="inside-buttons"><button class="outside-buttons" @click="ToogleSidebar"><i><img src="../src/icons/close.svg" id="close" ></i></button></div>
        <div class="items-small">
        <router-link to="/"  class="route" :class="{ current: isHome }">Home</router-link>
        <router-link to="/resume" class="route"  :class="{ current: isResume }">Resumes</router-link> 
        <router-link to="/my-work" class="route" :class="{ current: isWork }">My work</router-link>
        <router-link to="/experience" class="route" :class="{ current: isExperience }">Experience</router-link>
        <router-link to="/blogs" class="route" :class="{ current: isBlogs }">Blog</router-link>
        <router-link to="/plans" class="route" :class="{ current: isPlan }">What's next</router-link>
        </div>
      </div>
      <div class="wrapper-connect">
      <button class="outside-buttons" @click="ToogleConnect"><i><img src="../src/icons/connect.svg" id="menu" ></i></button>
      <div v-if="connect" class="connect-small">
        <a href="mailto:rohitbajaj13@yahoo.com" target="_blank" class="social"><i><img class="icon" src="../src/icons/email-icon.svg" alt=""></i></a>
        <a href="tel:0466605652" class="social"><i><img class="icon" src="../src/icons/call-icon.svg" alt=""></i></a>
        <a href="https://github.com/Rohit-bajaj47" target="_blank" class="social"><i><img class="icon" src="../src/icons/github-icon.svg" alt=""></i></a>
        <a href="https://www.facebook.com/profile.php?id=100075982823186" target="_blank" class="social"><i><img class="icon" src="../src/icons/facebook-icon.svg" alt=""></i></a>
        <a href="https://www.linkedin.com/in/rohit~bajaj/" target="_blank" class="social"><i><img class="icon" src="../src/icons/linkedin-icon.svg" alt=""></i></a>
      </div>
      </div>
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
      sidebar: false,
      connect: false,
      small: true,
      isHome: false,
      isResume: false,
      isWork: false,
      isExperience: false,
      isBlogs: false,
      isPlan: false,
      isInspire: false,
      large: false
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
  },
  ToogleSidebar(){this.sidebar = !this.sidebar; this.connect = false},
  ToogleConnect(){this.connect = !this.connect},
  SmallCheck(){if (window.innerWidth<700) {
    this.small = true;
    this.large = false
  } else {
    this.small = false;
    this.large = true}
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
  background-color: rgb(245, 245, 245);
  position: relative;
  /* background-color: rgb(233, 233, 233); */
}

#app{
  display: flex;
  flex-direction: column;
}

.top-bar{
  display: flex;
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
  padding: 10px 250px 10px 250px;
}

.side-bar-small{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
}

.outside-buttons{
  outline: none;
  border: none;
  /* padding: 5px; */
  border-radius: 10px;
  box-shadow: 1px 3px 11px 2px rgba(0, 0, 0, 0.034);
}

.inside-buttons{
  display: flex;
  justify-content: end;
  padding: 10px;
  height: max-content;
}

#menu{
  width: 40px;
}

.wrapper-connect{
    position: relative;
}

#close{
  width: 40px;
}

.small-menu{
  position: absolute;
  background-color: white;
  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr;
  border-top-right-radius:  5px;
  border-bottom-right-radius:  5px;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 50vw;
  box-shadow: 1px 3px 11px 2px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.items-small{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.connect-small{
  position: absolute;
  background-color: white;
  top: 51px;
  left: -300px;
  height: max-content;
  width: max-content;
  border-radius: 10px;
  box-shadow: 1px 3px 11px 2px rgba(0, 0, 0, 0.192);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;


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
  /* color: rgb(82, 82, 82); */
  background-color: rgba(187, 187, 187, 0.459);
}

.view{
  margin: 20px 90px 10px 60px;
}

@media (min-width: 1300px) and (max-width: 1400px) {
.side-bar{
  padding: 10px 180px 10px 180px;
}}

@media (min-width: 1000px) and (max-width: 1300px) {
.side-bar{
  padding: 10px 120px 10px 120px;
}

.route{
    font-size: 20px;
}}

@media (min-width: 700px) and (max-width: 1000px) {
.side-bar{
  padding: 10px 20px 10px 20px;
}
.route{
    font-size: 20px;
}}


@media (min-width: 200px) and (max-width: 500px) {
  .view{
    padding: 5px 10px 5px 10px;
    margin: 0px 10px 0px 10px;
  }
}


</style>
