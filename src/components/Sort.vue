<template>
  <div class="sort">
    <div class="sort__title" @click="isSort = !isSort">Sort</div>
    <div class="sort__panel" v-if="isSort">
      <div class="sort__by">Sort by:</div>
      <div
        class="sort__name"
        @click="isSort = !isSort; getId(item)"
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sort",
  data() {
    return {
      isSort: false,
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
    // id: {
    //   type: String,
    //   require: true
    // }
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
    top: 20px
    left: 0

  &__by
    padding: 5px 10px
    border-bottom: 1px solid #DFE0EB
    cursor: default

  &__name
    padding: 5px 12px
    border-bottom: 1px solid #DFE0EB
    cursor: pointer

    
</style>