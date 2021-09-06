<template>
  <div class="task">
    <div class="task__info">
      <form class="task__input">
        <input class="task__checkbox"
               type="checkbox"
               :id="`input${id}`"
               @click="value = !value"
        />
        <label :for="`input${id}`" class="task__label">
          {{ name }}
        </label>
      </form>
      <div
          class="task__note"
          :class="classNote"
      >
        {{ note }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  computed: {
  },
  data() {
    return {
      id: null,
      value: true,
    }
  },
  mounted () {
    this.id = this._uid
  },
  props: {
    name: {
      required: true,
      type: String
    },
    note: {
      required: true,
      type: String
    },
    classNote: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
.task
  border-bottom: 1px solid #DFE0EB

  &:last-child
    border: none

  &__info
    display: flex
    align-items: center
    justify-content: space-between
    padding: 18px 32px

  &__label
    font-weight: 600
    font-size: 14px
    line-height: 20px
    letter-spacing: 0.2px
    color: #000
    cursor: pointer
    vertical-align: middle

    &:before
      content: ''
      color: #000
      display: inline-block
      margin-right: 15px
      position: relative
      text-align: center
      text-indent: 0
      width: 20px
      height: 20px
      background: #FFF
      border: 2px solid #C5C7CD
      border-image: initial
      vertical-align: middle
      border-radius: 50%

  &__input
    display: flex
    align-items: center

  &__checkbox
    display: none

    &:checked + .task__label:before
      content: ""
      width: 20px
      height: 20px
      background-size: contain
      background-position: center
      background-repeat: no-repeat
      background-color: #3751FF
      border: 2px solid #3751FF
      background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%229%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%205l2.93%202.93a.1.1%200%2000.14%200L11%201%22%20stroke%3D%22%23fff%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E")

  &__note
    font-weight: 700
    font-size: 11px
    line-height: 14px
    letter-spacing: 0.5px
    text-transform: uppercase
    padding: 5px 12px
    border-radius: 8px

    &--is-urgent
      background-color: #FEC400
      color: #FFF

    &--is-new
      background-color: #29CC97
      color: #FFF

    &--is-default
      background-color: #F0F1F7
      color: #9FA2B4
</style>