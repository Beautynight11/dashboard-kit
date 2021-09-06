<template>
  <div class="table-footer">
    <div class="table-footer__result">
      <div class="table-footer__title">Rows per page:</div>
      <div class="table-footer__number">{{ size }}</div>
      <div class="table-footer__choose">
        <button class="table-footer__chBtn" @click="isChoice = !isChoice" />
        <div class="table-footer__amount" v-show="isChoice">
          <div
            class="table-footer__num"
            v-for="value in sizeList"
            :key="value"
            @click="
              changeSize(value);
              isChoice = !isChoice;
            "
          >
            {{ value }}
          </div>
        </div>
      </div>
    </div>
    <div class="table-footer__pages">
      <div class="table-footer__page">{{ current }} of {{ total }}</div>
    </div>
    <div class="table-footer__btns">
      <button
        :disabled="page === 0"
        class="table-footer__btn table-footer__btn--left"
        @click="goToPrevPage"
      />
      <button
        class="table-footer__btn table-footer__btn--right"
        @click="goToNextPage"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TableFooter",
  computed: {
    current() {
      const first = this.page * this.size;
      const last = first + this.size;
      return `${first + 1} - ${last > this.total ? this.total : last}`;
    }
  },
  data() {
    return {
      isChoice: false
    };
  },
  props: {
    total: {
      type: Number,
      required: true
    },
    sizeList: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    changeSize: {
      type: Function,
      required: true
    },
    goToNextPage: {
      type: Function,
      required: false
    },
    goToPrevPage: {
      type: Function,
      required: false
    },
    page: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="sass" scoped>
.table-footer
  padding-top: 27px
  display: flex
  align-items: center
  justify-content: flex-end
  font-size: 14px
  font-weight: 400
  line-height: 20px
  text-align: right
  letter-spacing: 0.3px
  color: #9FA2B4

  &__result
    display: flex
    align-items: center

  &__title
    margin-right: 8px

  &__number
    color: #4B506D
    margin-right: 4px

  &__choose
    position: relative
    margin-right: 65px
    outline: none

  &__chBtn
    background-image: url("data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M.984.5h6.03c.417%200%20.626.504.33.8L4.33%204.315a.47.47%200%2001-.663%200L.653%201.299A.468.468%200%2001.983.5z%22%20fill%3D%22%239FA2B4%22%2F%3E%3C%2Fsvg%3E")
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    padding: 2.5px 4.5px
    cursor: pointer
    background-color: #FFF
    border: none
    position: absolute
    top: 50%
    margin-top: -1px

  &__amount
    position: absolute
    top: 14px
    left: -12px
    background-color: #FFF
    border: 1px solid #DFE0EB
    text-align: center

  &__num
    font-size: 12px
    border-bottom: 1px solid #DFE0EB
    padding: 2px 10px
    color: #4B506D
    cursor: pointer


    //&:after
    //  content: ''
    //  position: absolute
    //  width: 20px
    //  height: 40px
    //  border: 1px solid #DFE0EB

  &__pages
    margin-right: 24px

  &__btns
    display: flex

  &__btn
    background-position: center
    background-repeat: no-repeat
    background-size: contain
    width: 6px
    height: 12px
    cursor: pointer
    border: none
    background-color: #FFF
    padding: 6px 9px
    outline: none

    &--left
      background-image: url("data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%2214%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2013L1.07%207.07a.1.1%200%20010-.14L7%201%22%20stroke%3D%22%239FA2B4%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E")
      margin-right: 12px

    &--right
      background-image: url("data:image/svg+xml,%3Csvg%20width%3D%228%22%20height%3D%2214%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%2013l5.93-5.93a.1.1%200%20000-.14L1%201%22%20stroke%3D%22%239FA2B4%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E")
</style>
