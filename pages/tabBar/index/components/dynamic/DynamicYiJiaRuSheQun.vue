<template>
  <div class="dynamic-item">
    <text>动态条目：已加入社群</text>
    <text>{{obj}}</text>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.dynamic-item {
  width: 100%;
}
</style>