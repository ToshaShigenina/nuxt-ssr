<template>
  <div class="loader">
    Загрузка...
  </div>
</template>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: #DDDCDC;
  user-select: none;
}
</style>