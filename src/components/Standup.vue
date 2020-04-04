<template>
  <li class="todo__list--item">
      <h2>
          <strong><i>{{item.author}}</i></strong>
      </h2>
      <ul class="item__list">
          <li>
              <h6><strong>What did you complete yesterday?</strong></h6>
              <p>{{item.done}}</p>
          </li>
          <li>
              <h6><strong>What do you commit to do today?</strong></h6>
              <p>{{item.todo}}</p>
          </li>
          <li>
              <h6><strong>Any blockers?</strong></h6>
              <p>{{item.blockers}}</p>
          </li>
      </ul>
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

.item__list{
    li{
        padding: 10px;
        border: 1px solid #DDD;
        border-radius: 8px;
        margin-bottom: 5px;
    }
}

</style>