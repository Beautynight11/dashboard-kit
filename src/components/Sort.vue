<template>
  <div class="sort">
    <div
      class="sort__title"
      @click="isSort = !isSort;"
      v-click-outside="onClickOutside"
    >
      Sort
    </div>
    <div class="sort__panel" v-if="isSort">
      <div class="sort__by">Sort by</div>
      <div
        class="sort__name"
        @click="
          isSort = !isSort;
          getId(item);
        "
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import "vue2-datepicker/index.css";
import vClickOutside from "v-click-outside";

export default {
  name: "Sort",
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      isSort: false
    };
  },
  methods: {
    onClickOutside() {
      this.isSort = false;
    }
  },
  props: {
    items: {
      type: Array,
      require: true
    },
    getId: {
      type: Function,
      require: true
    },
  }
};
</script>

<style lang="sass" scoped>
.sort
  position: relative
  &__panel
    background-color: #FFF
    border: 1px solid #DFE0EB
    border-radius: 8px
    font-size: 12px
    position: absolute
    top: 40px
    left: -12px
    box-shadow: 0 4px 10px 0 rgba(34, 60, 80, 0.2)

  &__by
    padding: 5px 12px
    border-bottom: 1px solid #DFE0EB
    cursor: default
    color: #7d7d7d
    font-size: 11px

  &__name
    padding: 5px 12px
    border-bottom: 1px solid #DFE0EB
    cursor: pointer
    font-size: 14px
</style>
