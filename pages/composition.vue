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
import { ref, computed } from "@nuxtjs/composition-api";
export default {
  setup() {
    const capacity = ref(3);
    const attending = ref(["Tim", "Bob", "Joe"]);

    const spacesLeft = computed(() => {
      return capacity.value - attending.value.length;
    });

    function increaceCapacity() {
      capacity.value++;
    }

    return { capacity, increaceCapacity, attending, spacesLeft };
  },
};
</script>

<style lang="scss" scoped>
</style>