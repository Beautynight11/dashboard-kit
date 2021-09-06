<template>
  <div class="tasks">
   <Task
       v-for="elem in task"
       :key="elem.name"
       :name="elem.name"
       :class-note="elem.class"
       :note="elem.note"
   />
  </div>
</template>

<script>
import Task from "./Task";

export default {
  name: "Tasks",
  components: { Task },
  data() {
    return {
      task: [
        {
          name: "Finish ticket update",
          note: 'Urgent',
          class: 'task__note--is-urgent'
        },
        {
          name: "Create new ticket example",
          note: 'New',
          class: 'task__note--is-new'
        },
        {
          name: "Update ticket report",
          note: 'Default',
          class: 'task__note--is-default'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.tasks
  padding-bottom: 1px
</style>