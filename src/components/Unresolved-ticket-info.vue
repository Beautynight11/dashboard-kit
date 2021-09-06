<template>
  <div class="UnresolvedTicket">
    <div class="UnresolvedTicket__content">
      <div class="UnresolvedTicket__name">{{ name }}</div>
      <div class="UnresolvedTicket__number">{{ number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnresolvedTicketInfo",
  props: {
    name: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped lang="sass">
.UnresolvedTicket
  border-bottom: 1px solid #DFE0EB
  margin-left: -32px
  width: calc(100% + 64px)

  &:last-child
    border: none

  &__content
    padding: 20px 32px
    font-weight: 600
    font-size: 14px
    line-height: 20px
    letter-spacing: 0.2px
    display: flex
    align-items: center
    justify-content: space-between

  &__number
    color: #9FA2B4
</style>
