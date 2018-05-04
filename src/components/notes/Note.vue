<template>

  <div class="col-md-3">
    <div class="panel">
      <slot></slot>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .panel {
    background-color: rgba(188, 161, 215, .5);
    height: 50px;
  }
  .panel:hover {
    background-color: rgba(188, 161, 215, 1);
  }
</style>
