<script setup>
import css from './Main.module.sass'
import Social from '../Social/Social.vue'
import Telegram from '../../svg/Telegram.vue'
import Email from '../../svg/Email.vue'
import Vk from '../../svg/Vk.vue'
</script>

<template>
  <div :class="css.page">
    <h1 :class="css.page__title">DMYAVL</h1>
    <ul :class="css.page__social_list">
      <li>
        <Social link="telegram">
          <template v-slot:icon>
            <Telegram />
          </template>
        </Social>
      </li>
      <li>
        <Social link="vk">
          <template v-slot:icon>
            <Vk />
          </template>
        </Social>
      </li>
      <li>
        <Social link="email">
          <template v-slot:icon>
            <Email />
          </template>
        </Social>
      </li>
    </ul>
  </div>
</template>
