<template lang="html">
  <b-nav class="d-flex justify-content-around" id="colorNav">
    <b-nav-item class="p-2">logo</b-nav-item>

    <div class="d-flex flex-row">
      <b-nav-item class="p-2"> shop </b-nav-item>
      <b-nav-item class="p-2"> about </b-nav-item>
    </div>

    <b-nav-item class="p-2">
      <i class="fas fa-cart-arrow-down"></i>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="stylus" scoped>

#colorNav li a
  color
</style>
