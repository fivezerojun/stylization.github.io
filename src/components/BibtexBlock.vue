<script setup>
import { ref } from 'vue'
import { Check, CopyDocument } from '@element-plus/icons-vue'

const props = defineProps({
  bibtex: {
    type: String,
    required: true
  }
})

const copied = ref(false)

async function copyBibtex() {
  await navigator.clipboard.writeText(props.bibtex)
  copied.value = true
  window.setTimeout(() => {
    copied.value = false
  }, 1800)
}
</script>

<template>
  <div class="bibtex-block">
    <el-button class="copy-button" size="small" round @click="copyBibtex">
      <el-icon>
        <component :is="copied ? Check : CopyDocument" />
      </el-icon>
      <span>{{ copied ? 'Copied' : 'Copy' }}</span>
    </el-button>
    <pre id="bibtex"><code>{{ bibtex }}</code></pre>
  </div>
</template>
