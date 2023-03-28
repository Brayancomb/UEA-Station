<template>
  <button class="buttonPlayer">
    <img class="buttonPlayer__icon" :src="path" :alt="icon" />
  </button>
</template>

<script setup lang="ts">
const { icon } = defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: '1.5rem'
  },
  marginX: {
    type: String,
    default: '1rem'
  }
})

const path = `/images/${icon}.png`
</script>

<style lang="scss" scoped>
.buttonPlayer {
  display: flex;
  border-radius: 50%;
  align-items: center;
  padding: v-bind(size);
  justify-content: center;
  margin-left: v-bind(marginX);
  margin-right: v-bind(marginX);
  background: transparent;
  color: rgba(223,190,106,0.7);
  transition: all 0.7s ease-out;
  background: linear-gradient(270deg, rgb(255, 120, 78), rgb(251, 89, 0), rgba(34,34,34,0), rgba(34,34,34,0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  margin: 0.625rem;
  border: none;
  border: 1px solid rgba(223,190,106,0.3);

  @media screen and (max-width: 1200px) {
    padding: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  &__icon {
    width: v-bind(size);
    height: v-bind(size);

    @media screen and (max-width: 1200px) {
      width: 1rem;
      height: 1rem;
    }
  }
}

.buttonPlayer:hover {
  color: #fff;
  border: 1px solid rgba(223,190,106,0);
  background-position: 99% 50%;
}
</style>
