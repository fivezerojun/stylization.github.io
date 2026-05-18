<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  wide: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="section-block" :class="{ 'is-wide': wide }">
    <div class="section-inner">
      <h2>{{ title }}</h2>
      <div class="section-content">
        <slot />
      </div>
    </div>
  </section>
</template>
