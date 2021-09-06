<template>
  <div class="table-body">
    <table class="table-body__table">
      <tr class="table-body__row">
        <th
            class="table-body__heading"
            v-for="heading in headings"
            :key="heading.name"
            :class="heading.cn"
          >
            {{ heading.name }}
        </th>
        <th class="table-body__heading"></th>
      </tr>
      <tr
          class="table-body__information"
          v-for="item in items"
          :key="item.name"
      >
        <td class="table-body__details">
          <div class="table-body__photo">
            <div
              class="table-body__img"
              :style="{ 'background-image':`url( ${ item.photo } )`}"
            ></div>
          </div>
          <div class="table-body__data">
            {{ item.data }}
            <div class="table-body__span">{{ item.info }}</div >
          </div>
        </td>
        <td class="table-body__name">
          {{ item.name }}
          <div class="table-body__span">{{ item.release }}</div >
        </td>
        <td class="table-body__date">
          {{ item.date }}
          <div class="table-body__span">{{ item.time }}</div >
        </td>
        <td class="table-body__priority">
          <div
              class="table-body__frame"
              :style="getPriorityColor(item)"
          >
            <span>{{ item.priority }}</span>
          </div>
        </td>
        <td class="table-body__params">
          <button class="table-body__btn"></button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableBody",
  computed: {
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    headings: {
      type: Array,
      required: true
    }
  },
  methods: {
    getPriorityColor(item) {
      let color = '#CCC';
      const priority = item.priority.toLowerCase();
      if (priority === 'high') {
        color = '#F12B2C';
      }
      if (priority === 'normal') {
        color = '#29CC97';
      }
      if (priority === 'low') {
        color = '#FEC400';
      }
      return `background-color: ${color}`;
    },

  },
}
</script>

<style lang="sass" scoped>
.table-body
  margin-left: -32px
  width: calc(100% + 64px)

  &__table
    width: 100%
    border-collapse: collapse

  &__heading
    font-weight: bold
    font-size: 14px
    line-height: 18px
    letter-spacing: 0.2px
    color: #9FA2B4
    text-align: left
    border-bottom: 1.5px solid #DFE0EB
    padding-bottom: 12px

    &:first-child
      padding-left: 32px

    &:last-child
      padding-right: 32px

    &--details
      width: 45%

    &__custom
      width: 22%

    &--date
      width: 16%

    &--priority
      width: 12%

  &__heading:last-child
    width: 5%

  &__information
    font-weight: 600
    font-size: 14px
    line-height: 20px
    letter-spacing: 0.2px
    cursor: pointer

  &__details
    display: flex
    padding: 24px 0

  &__photo
    width: 44px
    height: 44px
    border-radius: 50%
    margin-right: 24px

  &__img
    width: 100%
    height: 100%
    //background-image: url("../../public/img/all/photo.png")
    background-size: cover
    background-repeat: no-repeat
    background-position: center

  &__span
    font-size: 12px
    line-height: 16px
    letter-spacing: 0.1px
    color: #C5C7CD
    margin-top: 4px

  td
    border-bottom: 1px solid #DFE0EB

    &:first-child
      padding-left: 32px

    &:last-child
      padding-right: 32px

  &__frame
    height: 23px
    border-radius: 100px
    display: inline-block

    span
      padding: 5px 12px
      text-transform: uppercase
      font-weight: 700
      font-size: 11px
      line-height: 14px
      letter-spacing: 0.5px
      color: #FFF

  &__btn
    background-image: url("data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%2216%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2%204c1.1%200%202-.9%202-2s-.9-2-2-2-2%20.9-2%202%20.9%202%202%202zm0%202C.9%206%200%206.9%200%208s.9%202%202%202%202-.9%202-2-.9-2-2-2zm0%206c-1.1%200-2%20.9-2%202s.9%202%202%202%202-.9%202-2-.9-2-2-2z%22%20fill%3D%22%23C5C7CD%22%2F%3E%3C%2Fsvg%3E")
    background-position: center
    background-repeat: no-repeat
    background-size: contain
    height: 16px
    border: none
    background-color: #FFF
    cursor: pointer
    z-index: 10
    outline: none

</style>