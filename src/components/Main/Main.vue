<template>
  <div
    class="relative h-screen flex items-center justify-center"
    :class="{animation_on: isEffect}"
  >
    <FilmEffect :isEffect="isEffect" />
    <ToggleEffect @onClick="toggleEffect" :isEffect="isEffect" />
    <div class="page">
      <h1 class="page__title">DMYAVL</h1>
      <h2 class="page__subtitle">Front-end разработчик</h2>
      <ul class="page__social_list">
        <li>
          <Social link="https://t.me/dmyavl">
            <template v-slot:icon>
              <Telegram />
            </template>
          </Social>
        </li>
        <li>
          <Social link="https://vk.com/dmyavl" :reverse="true">
            <template v-slot:icon>
              <Vk />
            </template>
          </Social>
        </li>
        <li>
          <Social link="mailto:webdev1232@gmail.com">
            <template v-slot:icon>
              <Email />
            </template>
          </Social>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import './Main.sass';
import Social from '../Social/Social.vue';
import ToggleEffect from '../ToggleEffect/ToggleEffect.vue';
import FilmEffect from '../FilmEffect/FilmEffect.vue';
import Telegram from '../../svg/Telegram.vue';
import Email from '../../svg/Email.vue';
import Vk from '../../svg/Vk.vue';
import {ref} from 'vue';

const initialIsEffect =
  localStorage.getItem('effect') === null
    ? true
    : localStorage.getItem('effect') === 'true';

console.log({initialIsEffect});

const isEffect = ref(initialIsEffect);

const toggleEffect = () => {
  localStorage.setItem('effect', !isEffect.value);
  isEffect.value = !isEffect.value;
};
</script>
