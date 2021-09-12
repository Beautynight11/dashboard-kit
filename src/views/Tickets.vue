<template>
  <div class="tickets">
    <Table
      heading="All tickets"
      :items="finalItems"
      :headings="headings"
      :sort-options="sortOptions"
      :get-id="getId"
      :handle-filter="handleFilter"
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
      sortOptions: ["details", "name", "date", "priority"],
      id: "",
      filter: {}
    };
  },
  computed: {
    ...mapState({
      people: "people"
    }),
    finalItems() {
      return this.sortItems(this.filterItems(this.people));
    }
  },
  methods: {
    getId(el) {
      this.id = el;
    },
    handleFilter(data) {
      this.filter = data;
    },
    sortItems(items) {
      let newArray = [...items];
      if (this.id) {
        newArray.sort((a, b) => {
          let prev;
          let next;
          if (this.id === "details") {
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
    },
    filterItems(items) {
      return items.filter(item => {
        const matchingSearch = this.filter.search
          ? item.data
              .toLowerCase()
              .includes(this.filter.search?.toLowerCase()) ||
            item.name.toLowerCase().includes(this.filter.search?.toLowerCase())
          : true;
        const matchingDate =
          this.filter.date?.length === 2 && !this.filter.date.includes(null)
            ? new Date(item.date)?.valueOf() >=
                this.filter.date[0]?.valueOf() &&
              new Date(item.date)?.valueOf() <= this.filter.date[1]?.valueOf()
            : true;
        const matchingPriority = this.filter.priority
          ? item.priority
              .toLowerCase()
              .includes(this.filter.priority?.toLowerCase())
          : true;
        return matchingSearch && matchingDate && matchingPriority;
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.tickets
  padding-bottom: 100px
</style>
