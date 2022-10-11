<template>
  <button class="toggle_effect" @click="toggleEffect">
    {{ isEffect ? 'Выключить' : 'Включить' }} эффект
  </button>
</template>

<script setup>
import './ToggleEffect.sass';

const emit = defineEmits(['onClick']);

defineProps({
  isEffect: {
    type: Boolean,
    required: true
  }
});

const toggleEffect = () => {
  emit('onClick');
};
</script>
