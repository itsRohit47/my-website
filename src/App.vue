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
        <router-link to="/" class="route current">Home - its me</router-link>
        <router-link to="/resume" class="route">Resumes</router-link> 
        <router-link to="/my-work" class="route">My work</router-link>
        <router-link to="/experience" class="route">Experience</router-link>
        <router-link to="/blogs" class="route">Blog</router-link>
        <router-link to="/plans" class="route">What's next</router-link>
        <router-link to="/inspirations" class="route">What's the kick</router-link>
     </nav>
     <div class="view">
        <router-view></router-view>
     </div>
    </div>
  </div>
 
</template>

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
  border: 1px solid rgb(192, 188, 188);
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
  font-family: 'Varela Round', sans-serif;
  color: black;
}

/* .current{
  border-right: 7px solid rgb(0, 0, 0);
  border-radius: 3px;
} */

.route:visited {
  text-decoration: none;
  color: black;
}

.route:hover {
  color: rgb(82, 82, 82);
}

/* .main-content{
  display: flex;
} */

.view{
  margin: 10px 30px 10px 30px;
}
</style>
