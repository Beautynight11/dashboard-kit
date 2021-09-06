<template>
  <div class="app">
    <div class="app__nav">
      <Menu />
    </div>
    <div class="app__desk">
      <div class="app__pages">
        <Top :title="title" />
        <transition>
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "./components/Top";
import Menu from "./components/Menu";

const DEFAULT_TITLE = "Title";

export default {
  components: { Top, Menu },
  data() {
    return {
      title: DEFAULT_TITLE
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        const newTitle = to.name || DEFAULT_TITLE;
        document.title = newTitle;
        this.title = newTitle;
      }
    }
  }
};
</script>

<style lang="sass">
@font-face
  font-family: 'Mulish'
  font-style: normal
  font-weight: 300
  src: local('Mulish-Italic'), url('../fonts/Mulish-Italic.ttf') format('truetype')

@font-face
  font-family: 'Mulish'
  font-style: normal
  font-weight: 400
  src: local('Mulish-Regular'), url('../fonts/Mulish-Regular.ttf') format('truetype')

@font-face
  font-family: 'Mulish'
  font-style: normal
  font-weight: 500
  src: local('Mulish-Medium'), url('../fonts/Mulish-Medium.ttf') format('truetype')

@font-face
  font-family: 'Mulish'
  font-style: normal
  font-weight: 600
  src: local('Mulish-SemiBold'), url('../fonts/Mulish-SemiBold.ttf') format('truetype')

@font-face
  font-family: 'Mulish'
  font-style: normal
  font-weight: 700
  src: local('Mulish-Bold'), url('../fonts/Mulish-Bold.ttf') format('truetype')

@font-face
  font-family: 'Mulish'
  font-style: normal
  font-weight: 800
  src: local('Mulish-ExtraBold'), url('../fonts/Mulish-ExtraBold.ttf') format('truetype')

@font-face
  font-family: 'Mulish'
  font-style: normal
  font-weight: 900
  src: local('Mulish-Black'), url('../fonts/Mulish-Black.ttf') format('truetype')

html
  box-sizing: border-box
  position: relative
  -moz-user-select: none
  -ms-user-select: none
  -khtml-user-select: none
  -webkit-user-select: none
  -webkit-touch-callout: none


*, *::before, *::after
  box-sizing: inherit


body
  font-family: 'Mulish', sans-serif
  font-weight: 400
  margin: 0
  box-sizing: border-box
  color: #252733
  background-color: #fff
  position: relative
  padding: 0

.app
  position: relative
  background-color: #F7F8FC

  &__desk
    padding-left: 255px
    min-height: 100vh

  &__pages
    width: 100%
    padding-left: 30px
    padding-right: 30px
    margin-right: auto
    margin-left: auto

.menu
  position: fixed
</style>
