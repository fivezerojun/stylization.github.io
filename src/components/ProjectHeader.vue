<script setup>
import { computed } from 'vue'
import { Document, Files, HomeFilled, SuccessFilled, VideoCamera } from '@element-plus/icons-vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const iconMap = {
  Document,
  Files,
  VideoCamera
}

const home = {
  name: 'My Blog',
  link: 'https://fivezerojun.github.io/'
}

const projectLink = import.meta.env.BASE_URL

const affiliationText = computed(() =>
  props.project.affiliations.map((item) => `${item.id} ${item.name}`).join('   ')
)
</script>

<template>
  <header class="project-header">
    <el-affix :offset="0" class="site-nav-affix">
      <el-menu default-active="1" class="site-nav" mode="horizontal" :ellipsis="false">
        <el-menu-item index="0">
          <el-icon :size="20"><HomeFilled /></el-icon>
          <a :href="home.link"> {{ home.name }} </a>
        </el-menu-item>

        <el-menu-item index="1">
          <el-icon :size="20"><SuccessFilled /></el-icon>
          <a :href="projectLink"> Project </a>
        </el-menu-item>
      </el-menu>
    </el-affix>

    <div class="news-alert-shell">
      <el-alert :title="project.news" type="success" />
    </div>

    <div class="header-inner">
      <p class="venue">{{ project.venue }}</p>
      <h1>{{ project.title }}</h1>
      <p class="subtitle">{{ project.subtitle }}</p>

      <div class="authors" aria-label="Authors">
        <a
          v-for="author in project.authors"
          :key="author.name"
          :href="author.homepage || undefined"
          :class="{ disabled: !author.homepage }"
          target="_blank"
          rel="noreferrer"
        >
          <span>{{ author.name }}</span>
          <sup>{{ author.affiliations.join(',') }}</sup>
        </a>
      </div>

      <p class="affiliations">{{ affiliationText }}</p>

      <div class="resource-links">
        <a
          v-for="link in project.links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noreferrer"
        >
          <el-button color="#3e6259" round>
            <el-icon :size="18">
              <component :is="iconMap[link.icon]" />
            </el-icon>
            <span>{{ link.label }}</span>
          </el-button>
        </a>
      </div>
    </div>
  </header>
</template>
