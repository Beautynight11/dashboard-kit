<template>
  <div class="board">
    <div class="board__information">
      <div class="board__top">
        <div class="board__title">{{ title }}</div>
        <div class="board__view">{{ view }}</div>
      </div>
      <div class="board__note">
        {{ note }}
        <span>{{ group }}</span>
      </div>
      <div class="board__tickets" v-if="isTickets === true">
        <UnresolvedTicket />
      </div>
      <div class="board__task" v-if="isTask === true">
        <div class="board__new">
          <div class="task__name">Create new task</div>
          <button class="task__btn"></button>
        </div>
        <Tasks />
      </div>
    </div>
  </div>
</template>

<script>
import UnresolvedTicket from "./Unresolved-ticket";
import Tasks from "./Tasks";

export default {
  name: "Board",
  components: { Tasks, UnresolvedTicket },
  props: {
    title: {
      required: true,
      type: String
    },
    view: {
      required: true,
      type: String
    },
    note: {
      required: true,
      type: String
    },
    group: {
      required: false,
      type: String
    },
    isTask: {
      required: false,
      type: Boolean
    },
    isTickets: {
      required: false,
      type: Boolean
    }
  }
};
</script>

<style lang="sass" scoped>
.board
  flex: 0 1 546px
  max-width: 546px
  padding-bottom: 30px

  &__new
    border-bottom: 1px solid #DFE0EB
    display: flex
    align-items: center
    justify-content: space-between
    padding: 20px 0
    font-weight: 600
    font-size: 14px
    line-height: 20px
    letter-spacing: 0.2px
    color: #C5C7CD

  &__information
    padding: 32px 32px 0 32px
    background-color: #FFF
    border: 1px solid #DFE0EB
    border-radius: 8px

  &__top
    display: flex
    align-items: center
    justify-content: space-between

  &__title
    font-size: 19px
    line-height: 24px
    letter-spacing: 0.4px
    font-weight: 700
    margin-bottom: 10px

  &__view
    cursor: pointer
    font-weight: 600
    font-size: 14px
    line-height: 20px
    text-align: right
    letter-spacing: 0.2px
    color: #3751FF

  &__note
    font-size: 12px
    line-height: 16px
    letter-spacing: 0.1px
    color: #9FA2B4
    margin-bottom: 16px

    span
      font-weight: 600
      font-size: 12px
      line-height: 15px
      letter-spacing: 0.1px
      color: #4B506D

  &__table
    display: flex
    align-items: center

  &__task
    margin-left: -32px
    width: calc(100% + 64px)

  &__new
    padding: 18px 32px

.task
  &__name
    cursor: pointer

  &__btn
    border: 1px solid #F0F1F7
    background-color: #F0F1F7
    cursor: pointer
    position: relative
    width: 24px
    height: 24px
    border-radius: 8px

    &:before
      content: ''
      width: 2px
      background-color: #9FA2B4
      position: absolute
      top: 6px
      height: 10px
      margin-left: -1px
      border-radius: 8px

    &:after
      content: ''
      width: 2px
      background-color: #9FA2B4
      transform: rotate(90deg)
      position: absolute
      top: 6px
      height: 10px
      margin-left: -1px
      border-radius: 8px
</style>
