<template>
  <div class="overview">
    <Statistics />
    <Graph />
    <Details />
  </div>
</template>

<script>
import Statistics from "../components/Statistics";
import Graph from "../components/Graph";
import Details from "../components/Details";

export default {
  name: "Overview",
  components: {
    Details,
    Graph,
    Statistics
  }
};
</script>

<style lang="sass" scoped></style>
