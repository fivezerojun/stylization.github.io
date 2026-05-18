<script setup>
defineProps({
  figure: {
    type: Object,
    required: true
  },
  size: {
    type: String,
    default: 'default'
  },
  compact: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <figure class="figure-block" :class="[`figure-${size}`, { compact }]">
    <img :src="figure.src" :alt="figure.alt" loading="lazy" />
    <figcaption v-if="figure.caption">{{ figure.caption }}</figcaption>
  </figure>
</template>
