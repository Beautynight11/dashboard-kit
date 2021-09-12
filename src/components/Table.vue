<template>
  <div class="table">
    <div class="table__page">
      <div class="table__top">
        <div class="table__title">{{ heading }}</div>
        <div class="table__filters">
          <div class="table__sort">
            <div class="table__icon table__icon--sort"></div>
            <Sort
              :items="sortOptions"
              :get-id="getId"
            />
          </div>
          <div class="table__filter">
            <div class="table__icon table__icon--filter"></div>
            <FilterForTable
              :handle-filter="handleFilter"
            />
          </div>
        </div>
      </div>
      <div class="table__content">
        <TableBody :items="itemsPage" :headings="headings" />
      </div>
      <TableFooter
        :total="items.length"
        :page="page"
        :size="size"
        :size-list="sizeList"
        :change-size="changeSize"
        :go-to-next-page="goToNextPage"
        :go-to-prev-page="goToPrevPage"
      />
    </div>
    <div class="table-window__filter"></div>
  </div>
</template>

<script>
import TableBody from "@/components/TableBody";
import TableFooter from "@/components/TableFooter";
import Sort from "@/components/Sort";
import FilterForTable from "@/components/FilterForTable";

const SIZES = [3, 8, 15, 20];

export default {
  name: "Table",
  components: { FilterForTable, Sort, TableFooter, TableBody },
  data() {
    return {
      size: SIZES[0],
      sizeList: SIZES,
      page: 0,
      isFilter: false
    };
  },
  computed: {
    itemsPage() {
      const start = this.page * this.size;
      const end = start + this.size;
      return this.items.slice(start, end);
    }
  },
  methods: {
    changeSize(selectedSize) {
      this.size = selectedSize;
      this.page = 0;
    },
    goToNextPage() {
      this.page++;
    },
    goToPrevPage() {
      this.page--;
    }
  },
  props: {
    heading: {
      type: String,
      required: false,
      default: "Table"
    },
    headings: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    sortOptions: {
      type: Array,
      require: true
    },
    getId: {
      type: Function,
      require: true
    },
    handleFilter: {
      type: Function,
      require: true
    },
  }
};
</script>

<style lang="sass" scoped>
.table
  background-color: #FFF
  border: 1px solid #DFE0EB
  border-radius: 8px

  &__page
    padding: 32px

  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 48px

  &__title
    font-size: 19px
    line-height: 24px
    letter-spacing: 0.4px
    font-weight: 700

  &__filters
    display: flex
    align-items: center
    font-weight: 600
    font-size: 14px
    line-height: 20px
    letter-spacing: 0.2px
    color: #4B506D

  &__sort
    margin-right: 32px
    display: flex
    align-items: center
    cursor: pointer

  &__filter
    display: flex
    align-items: center
    cursor: pointer

  &__icon
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    width: 16px
    height: 16px
    margin-right: 8px

    &--sort
      background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2212%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M.129%202.268L2.316.125a.444.444%200%2001.618%200l2.187%202.143c.276.27.08.732-.31.732H3.501v8.571a.433.433%200%2001-.438.429h-.874a.433.433%200%2001-.438-.429V3H.438c-.39%200-.584-.462-.31-.732zm6.434-.554h7A.433.433%200%200014%201.286V.429A.433.433%200%200013.562%200h-7a.433.433%200%2000-.437.429v.857c0%20.236.196.428.438.428zm-.438%203v-.857c0-.237.196-.428.438-.428h5.25c.241%200%20.437.191.437.428v.857a.433.433%200%2001-.438.429h-5.25a.433.433%200%2001-.437-.429zm0%206.857v-.857c0-.236.196-.428.438-.428h1.75c.241%200%20.437.192.437.428v.857a.433.433%200%2001-.438.429h-1.75a.433.433%200%2001-.437-.429zm0-3.428v-.857c0-.237.196-.429.438-.429h3.5c.241%200%20.437.192.437.429v.857a.433.433%200%2001-.438.428h-3.5a.433.433%200%2001-.437-.428z%22%20fill%3D%22%23C5C7CD%22%2F%3E%3C%2Fsvg%3E")

    &--filter
      background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11.437%200H.563c-.5%200-.752.606-.398.96L4.5%205.295v4.83c0%20.184.09.355.24.46l1.875%201.313a.563.563%200%2000.885-.461V5.295L11.835.96a.563.563%200%2000-.398-.96z%22%20fill%3D%22%23C5C7CD%22%2F%3E%3C%2Fsvg%3E")

.table-window__filter
  display: none

.table--active
  display: flex

.table__page--active
  flex: 0 1 80%
  width: 80%
  border-right: 1px solid #DFE0EB

.table-window__filter--active
  display: block
  flex: 0 1 20%
  width: 20%
</style>
