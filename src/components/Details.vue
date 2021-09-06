<template>
  <div class="details">
    <Board title="Unresolved tickets" view="View details" note="Group" group="Support" :is-tickets="true"/>
    <Board title="Tasks" view="View all" note="Today" :is-task="true"/>
  </div>
</template>

<script>
import Board from "./Board";
export default {
  name: "Details",
  components: { Board },
}
</script>

<style lang="sass" scoped>
.details
  display: flex
  justify-content: space-between

</style>