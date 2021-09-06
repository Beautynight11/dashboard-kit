<template>
  <div class="unresolvedTicket">
    <UnresolvedTicketInfo
      v-for="item in tickets"
      :key="item.name"
      :name="item.name"
      :number="item.number"
    />
  </div>
</template>

<script>
import UnresolvedTicketInfo from "./Unresolved-ticket-info";

export default {
  name: "UnresolvedTicket",
  components: { UnresolvedTicketInfo },
  props: {},
  data() {
    return {
      tickets: [
        {
          name: "Waiting on Feature Request",
          number: 4238
        },
        {
          name: "Awaiting Customer Response",
          number: 1005
        },
        {
          name: "Awaiting Developer Fix",
          number: 914
        },
        {
          name: "Pending",
          number: 281
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped></style>
