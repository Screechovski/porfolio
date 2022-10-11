<template>
  <a :class="css.social" :href="link">
    <i :class="css.social__icon">
      <slot name="icon" />
    </i>
  </a>
</template>

<script setup>
import css from './Social.module.sass'

defineProps({
  link: {
    type: String,
    required: true,
  },
})
</script>
