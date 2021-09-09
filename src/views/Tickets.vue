<template>
  <div class="tickets">
    <Table
      heading="All tickets"
      :items="doSorting"
      :headings="headings"
      :sorting="sorting"
      :get-id="getId"
    />
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
      ],
      sorting: ['details', 'name', 'date', 'priority'],
      id: '',
    };
  },
  computed: {
    ...mapState({
      people: "people"
    }),
    doSorting() {
      let newArray = [...this.people];
      if (this.id) {
        newArray.sort((a, b) => {
          let prev;
          let next;
          if (this.id === 'details') {
            prev = a.data;
            next = b.data;
          } else {
            prev = a[this.id];
            next = b[this.id];
          }
          if (prev > next) return 1;
          if (prev < next) return -1;
          return 0;
        });
      }
      return newArray;
    }
  },
  methods: {
    getId(el) {
      this.id = el;
    },
  }
};
</script>

<style lang="sass" scoped>
.tickets
  padding-bottom: 100px
</style>
