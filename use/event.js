import { reactive, computed, toRefs, onMounted } from "@nuxtjs/composition-api";
export default function useEventSpace() {
  const event = reactive({
    capacity: 4,
    attending: ["Tim", "Bob", "Joe"],
    spacesLeft: computed(() => {
      return event.capacity - event.attending.length;
    })
  });

  function increaceCapacity() {
    event.capacity++;
  }

  return { ...toRefs(event), increaceCapacity };
}
