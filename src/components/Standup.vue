<template>
  <li class="todo__list--item">
      <h2>{{item.author}}</h2>
      <p>What did you complete yesterday? <strong>{{item.done}}</strong></p>
      <p>What do you commit to do today? 
          <strong>{{item.todo}}</strong>
      </p>
      <p>Any Blockers?
          <strong>{{item.blockers}}</strong>
      </p>
  </li>
</template>

<script>
export default {
  name: 'Standup',
  props: {
      item: {
          type: Object,
      }
  }
}
</script>

<style lang="scss">

</style>