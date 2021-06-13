<template>
  <div>
    <h1>events</h1>
    
    <EventCard 
    v-for="(event, index) in events"
    :key='index'
    :event='event'
    :data-index="index"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  head() {
    return {
      title: "list ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "out page description",
        },
      ],
    };
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("events/fetchEvents");
    } catch (e) {
      error({
        statusCode: 503,
        message: "unable to fetch",
      });
    }
  },
  computed: {
    ...mapState({
      events: (state) => state.events.events,
    }),
  },
};
</script>

<style lang="css" scoped>
</style>
