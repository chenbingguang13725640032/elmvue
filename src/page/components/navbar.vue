<template>
  <header class="navbar">
      <slot></slot>
  </header>
</template>

<script>
export default {
    name:"navbar",
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .navbar{
        height: 1.625rem;
        background-color: var(--color);
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding:.5rem;
        align-items: center;
        font-size: .75rem;
        color: white;
    }
</style>