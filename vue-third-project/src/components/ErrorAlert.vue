<template>
  <dialog>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: white;
  padding: 1rem;
}
</style>
