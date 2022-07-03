<script>
import MyWorkItem from '../components/MyWorkItem.vue'

export default {
  components: {
    MyWorkItem
  }
}
</script>

<template>
    <div>
        <p>You can view detailed description of some of the valauble works i did in the field of Information Technoloy as a part of university assignments.</p>
        <br>
        <div>
            <!-- <MyWorkItem title="Working With Wireshark"></MyWorkItem> -->
            <MyWorkItem title="Working with Wireshark" file="wireshark"></MyWorkItem>
        </div>
    </div>
</template>

<style scoped>
p{
    font-size: 22px;
    border-bottom: 1px solid rgb(180, 180, 180);
}


</style>