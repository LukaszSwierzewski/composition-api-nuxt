<template>
    <div>

       <div>Space left:  {{spacesLeft}} out of {{capacity}}</div>
        <div> capacity: {{ capacity }}</div>
        <button @click='increaceCapacity'>add one</button>

         <h1>Attending</h1>

         <ul>
             <li v-for='(name, index) in attending' :key=index>{{name}}</li>
         </ul>
    </div>
   

</template>

<script>
import useEvent from "@/use/event.js";
import { onMounted } from "@nuxtjs/composition-api";
export default {
  setup() {
    const { capacity, attending, spacesLeft, increaceCapacity } = useEvent();
    onMounted(() => {
      console.log("blabla");
    });
    return { capacity, attending, spacesLeft, increaceCapacity };
  },
};
</script>

<style lang="scss" scoped>
</style>