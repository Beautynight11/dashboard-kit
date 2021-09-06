<template>
  <div class="tickets">
    <Table heading="All tickets" :items="people" :headings="headings" />
  </div>
</template>

<script>
import Table from "@/components/Table";
import { mapState } from "vuex";

export default {
  name: "Tickets",
  components: { Table },
  data() {
    return {
      headings: [
        {
          name: "Ticket details",
          cn: "table-body__heading--details"
        },
        {
          name: "Customer name",
          cn: "table-body__heading--custom"
        },
        {
          name: "Date",
          cn: "table-body__heading--date"
        },
        {
          name: "Priority",
          cn: "table-body__heading--priority"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      people: "people"
    })
  }
};
</script>

<style lang="sass" scoped>
.tickets
  padding-bottom: 100px
</style>
