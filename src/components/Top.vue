<template>
  <div class="top">
    <div class="top__bar">
      <div class="top__title">{{ title }}</div>
      <div class="top__information">
        <div class="top__icon top__icon--search"></div>
        <div class="top__icon top__icon--notification"></div>
        <div class="top__line"></div>
        <div class="top__data">
          <div class="top__name">Jones Ferdinand</div>
          <div class="top__frame">
            <div class="top__photo"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="sass" scoped>
.top
  padding-top: 30px
  padding-bottom: 53px

  &__bar
    display: flex
    align-items: center
    justify-content: space-between

  &__title
    font-weight: 800
    font-size: 24px
    line-height: 30px
    letter-spacing: 0.3px

  &__information
    display: flex
    align-items: center

  &__icon
    width: 16px
    height: 16px
    background-repeat: no-repeat
    background-position: center
    background-size: auto
    margin-right: 30px
    cursor: pointer

    &--search
      background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%226.5%22%20cy%3D%226.5%22%20r%3D%225.75%22%20stroke%3D%22%23C5C7CD%22%20stroke-width%3D%221.5%22%2F%3E%3Cpath%20d%3D%22M11%2011l4%204%22%20stroke%3D%22%23C5C7CD%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E")

    &--notification
      background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2218%22%20height%3D%2219%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%2019a2%202%200%20002-2H6a2%202%200%20002%202zm6.73-4.678c-.603-.65-1.732-1.625-1.732-4.822%200-2.428-1.703-4.372-3.999-4.849V4a1%201%200%2010-1.998%200v.651c-2.296.477-3.999%202.42-3.999%204.849%200%203.197-1.13%204.173-1.733%204.822A.976.976%200%20001%2015a1%201%200%20001.003%201h11.994A1%201%200%200015%2015a.976.976%200%2000-.27-.678z%22%20fill%3D%22%23C5C7CD%22%2F%3E%3C%2Fsvg%3E")

  &__icon:hover.top__icon--search
    background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%226.5%22%20cy%3D%226.5%22%20r%3D%225.75%22%20stroke%3D%22%233751FF%22%20stroke-width%3D%221.5%22%2F%3E%3Cpath%20d%3D%22M11%2011l4%204%22%20stroke%3D%22%233751FF%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E")

  &__icon:hover.top__icon--notification
    background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2218%22%20height%3D%2219%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%2019a2%202%200%20002-2H6a2%202%200%20002%202zm6.73-4.678c-.603-.65-1.732-1.625-1.732-4.822%200-2.428-1.703-4.372-3.999-4.849V4a1%201%200%2010-1.998%200v.651c-2.296.477-3.999%202.42-3.999%204.849%200%203.197-1.13%204.173-1.733%204.822A.976.976%200%20001%2015a1%201%200%20001.003%201h11.994A1%201%200%200015%2015a.976.976%200%2000-.27-.678z%22%20fill%3D%22%233751FF%22%2F%3E%3C%2Fsvg%3E")

  &__line
    height: 32px
    width: 1px
    background-color: #DFE0EB
    margin-right: 32px

  &__data
    display: flex
    align-items: center

  &__name
    font-weight: 700
    font-size: 14px
    line-height: 20px
    letter-spacing: 0.2px
    margin-right: 14px
    cursor: pointer

  &__frame
    width: 44px
    height: 44px
    border-radius: 50%
    border: 2px solid #DFE0EB
    position: relative
    cursor: pointer

  &__photo
    width: 36px
    height: 36px
    background-image: url("../../public/img/header.png")
    background-size: contain
    background-position: center
    background-repeat: no-repeat
    border-radius: 50%
    position: absolute
    top: 2px
    left: 2px
</style>
