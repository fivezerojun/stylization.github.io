<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Video'
  }
})
</script>

<template>
  <div class="youtube-embed">
    <iframe
      :src="src"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>
</template>
