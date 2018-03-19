<template>
  <div class="hero">
    {{ health }}
  </div>
</template>

<script>
export default {
  data() {
    return {
        health: 100
    }
  }
}
</script>

<style lang="scss">
  .hero {
    font-weight: bold;
  }
</style>
