<template>
  <div
    class="filter"
    @click="isFilter = true"
    v-click-outside="onClickOutsideConfig"
  >
    <div class="filter__title">Filter</div>
    <form class="filter__panel" v-if="isFilter" @submit.prevent="handleSubmit">
      <div class="filter__params">
        <div class="filter-data">
          <div class="filter-data__name">
            Details
          </div>
          <input
            class="filter-data__input filter-style"
            type="text"
            v-model="search"
          />
        </div>
        <div class="filter-date">
          <div class="filter-date__name">Date</div>
          <div class="filter-date__block">
            <date-picker
              input-class="date-field filter-style"
              v-model="date"
              range
            />
          </div>
        </div>
        <div class="filter-priority">
          <div class="filter-priority__name">
            Priority
          </div>
          <select class="filter-priority__list filter-style" v-model="priority">
            <option
              class="filter-priority__item"
              v-for="item in select"
              :key="item"
            >
              {{ item }}</option
            >
          </select>
        </div>
      </div>
      <div class="filter__btn">
        <button type="submit" class="filter__button">
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import vClickOutside from "v-click-outside";

export default {
  name: "FilterForTable",
  components: { DatePicker },
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      isFilter: false,
      search: "",
      date: null,
      priority: "",
      onClickOutsideConfig: {
        handler: this.onClickOutside,
        middleware: this.onClickOutsideMiddleware,
        events: ["dblclick", "click"],
        isActive: true,
        detectIFrame: true,
        capture: false
      },
      select: ["High", "Low", "Normal"]
    };
  },
  computed: {},
  methods: {
    onClickOutside() {
      this.isFilter = false;
    },
    onClickOutsideMiddleware(event) {
      return event.target.closest(".mx-datepicker-popup") === null;
    },
    handleSubmit() {
      this.handleFilter({
        search: this.search,
        date: this.date,
        priority: this.priority
      });
      this.isFilter = false;
    }
  },
  props: {
    handleFilter: {
      type: Function,
      require: true
    }
  }
};
</script>

<style lang="sass" scoped>
.filter
  position: relative

  &__panel
    width: 400px
    position: absolute
    top: 40px
    right: -32px
    border: 1px solid #DFE0EB
    padding: 20px 32px
    background-color: #FFF
    box-shadow: 0 4px 10px 0 rgba(34, 60, 80, 0.2)
    border-radius: 8px

    &:before
      content: ''
      width: 10px
      height: 10px
      border-style: solid
      border-width: 0  15px 15px 15px
      border-color: transparent transparent #ffffff transparent
      position: absolute
      top: -15px
      right: 30px
      z-index: 1

    &:after
      content: ''
      width: 10px
      height: 10px
      border-style: solid
      border-width: 0  15px 15px 15px
      border-color: transparent transparent #DFE0EB transparent
      position: absolute
      top: -16px
      right: 30px

  &__params
    font-size: 16px
    color: #7d7d7d

.filter-date
  &__name
    margin-bottom: 10px

  &__block
    width: 100%


.filter-priority
  margin-bottom: 30px
  &__name
    margin-bottom: 10px
    margin-top: 20px

.filter
  &__btn
    display: flex
    justify-content: center

  &__button
    padding: 10px 15px
    background-color: #FFF //#3751FF
    font-size: 16px
    border-radius: 8px
    border: 1px solid #ccc
    cursor: pointer
    font-weight: 600
    color: #4B506D
    margin-bottom: 10px
    outline: none

    &:hover
      background-color: #3751FF
      color: #FFF
      border: 1px solid #3751FF

.filter-style
  width: 100%
  height: 34px
  padding: 6px 30px 6px 10px
  border: 1px solid #ccc
  border-radius: 4px
  font-size: 14px
  color: #4B506D
  font-family: "Mulish", sans-serif
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%)
  outline: none
  margin-bottom: 20px

  &:hover
    border-color: #3751FF

  &:focus
    border-color: #3751FF

::v-deep .date-field
  width: calc(100% + 14px)
  height: 34px
  padding: 6px 30px 6px 10px
  border: 1px solid #ccc
  border-radius: 4px
  font-size: 14px
  color: #4B506D
  font-family: "Mulish", sans-serif
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%)
  outline: none

  &:hover
    border-color: #3751FF

  &:focus
    border-color: #3751FF

  i
    right: 0
</style>
