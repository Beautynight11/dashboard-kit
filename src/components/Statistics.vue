<template>
  <div class="statistics">
    <div class="statistics__cards">
      <div class="statistics__card statistics__card--unresolved">
        <div class="statistics__title">Unresolved</div>
        <div class="statistics__number">60</div>
      </div>
      <div class="statistics__card statistics__card--overdue">
        <div class="statistics__title">Overdue</div>
        <div class="statistics__number">16</div>
      </div>
      <div class="statistics__card statistics__card--open">
        <div class="statistics__title">Open</div>
        <div class="statistics__number">43</div>
      </div>
      <div class="statistics__card statistics__card--hold">
        <div class="statistics__title">On hold</div>
        <div class="statistics__number">64</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistics"
};
</script>

<style lang="sass" scoped>
.statistics
  padding-bottom: 30px

  &__cards
    display: flex
    align-items: center

  &__card
    margin-right: 30px
    padding: 24px 32px
    border: 1px solid #DFE0EB
    border-radius: 8px
    flex: 0 1 25%
    cursor: pointer
    background-color: #FFF

    &--hold
      margin: 0

  &__title
    color: #9FA2B4
    font-size: 19px
    line-height: 24px
    text-align: center
    letter-spacing: 0.4px
    font-weight: 700
    margin-bottom: 17px
    transition: 300ms color

  &__number
    font-size: 40px
    line-height: 50px
    text-align: center
    letter-spacing: 1px
    font-weight: 700

  &__card
    transition: 300ms border-color, 300ms color
    &:hover
      color: #3751FF
      border: 1px solid #3751FF

  &__card:hover &__title
    color: #3751FF
</style>
