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
    <h1>Professional roles</h1>
  </section>
  <div class="resume-item">
    <ResumeItem title="Networking Roles" des="The description will be added soon"></ResumeItem>
    <ResumeItem title="Programming roles" des="The description will be added soon"></ResumeItem>
  </div>
  <section>
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
  margin: 30px;
}

.resume-item{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}


</style>