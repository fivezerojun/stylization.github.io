<script setup>
defineProps({
  group: {
    type: Object,
    required: true
  },
  minColumnWidth: {
    type: String,
    default: '180px'
  },
  promptLabel: {
    type: String,
    default: 'Text prompt'
  }
})
</script>

<template>
  <section class="video-group">
    <p v-if="group.title" class="text-prompt">
      <span class="prompt-label">{{ promptLabel }}</span>
      <span class="prompt-text">&ldquo;{{ group.title }}&rdquo;</span>
    </p>
    <div
      class="video-grid"
      :class="{ 'is-centered': group.items.length <= 2 }"
      :style="{ '--video-card-width': minColumnWidth }"
      tabindex="0"
      aria-label="Scrollable video comparison"
    >
      <article
        v-for="item in group.items"
        :key="`${group.title || 'group'}-${item.label}`"
        class="video-cell"
        :class="{ highlight: item.highlight }"
      >
        <video controls muted playsinline preload="metadata">
          <source :src="item.src" type="video/mp4" />
        </video>
        <p>{{ item.label }}</p>
      </article>
    </div>
  </section>
</template>
