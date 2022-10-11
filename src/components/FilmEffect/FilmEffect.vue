<template>
  <video v-if="isEffect" class="film_effect" autoplay muted loop id="myVideo">
    <source src="/film_effect.mp4" type="video/mp4" />
  </video>
</template>

<script setup>
import './FilmEffect.sass';

defineProps({
  isEffect: {
    type: Boolean,
    required: true
  }
});
</script>
