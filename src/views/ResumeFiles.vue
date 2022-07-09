<script>
import ResumeItem from '../components/ResumeItem.vue'

export default {
  components: {
    ResumeItem
  }
}
</script>

<template>
<div>
  <section>
    <br>
    <h1>Professional roles</h1>
  </section>
  <div class="resume-item">
    <ResumeItem title="Networking Roles" des="The description will be added soon"></ResumeItem>
    <ResumeItem title="Programming roles" des="The description will be added soon"></ResumeItem>
    <ResumeItem title="Programming roles" des="The description will be added soon"></ResumeItem>
    <ResumeItem title="Programming roles" des="The description will be added soon"></ResumeItem>
  </div>
  <section>
    <br><br>
    <h1>Casual roles</h1>
  </section>
  <div class="resume-item">
    <ResumeItem title="Crew Member" des="The description will be added soon"></ResumeItem>
    <ResumeItem title="Console operator" des="The description will be added soon"></ResumeItem>
  </div>
</div>
</template>

<style scoped>
div{
  margin: 20px;
}

.resume-item{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
}

@media (min-width: 1100px) and (max-width: 1600px) {
  .resume-item{
    grid-template-columns: 1fr 1fr 1fr;
  }

  div{
    margin: 10px;
  }
}

@media (min-width: 700px) and (max-width: 1100px) {
  .resume-item{
    grid-template-columns: 1fr 1fr;
  }

  div{
    margin: 7px;
  }
}

@media (min-width: 300px) and (max-width: 700px) {
  .resume-item{
    grid-template-columns: 1fr;
  }

  div{
    margin: 7px;
  }
}

</style>