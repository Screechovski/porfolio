<template>
  <a class="social" :href="link" target="_blank" rel="noopener noreferrer">
    <i :class="`social__icon ${reverse ? 'social__icon_reverse' : ''}`">
      <slot name="icon" />
    </i>
  </a>
</template>

<script setup>
import './Social.sass';

defineProps({
  link: {
    type: String,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>
