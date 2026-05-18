<script setup>
import AppFooter from './components/AppFooter.vue'
import BibtexBlock from './components/BibtexBlock.vue'
import FigureBlock from './components/FigureBlock.vue'
import ProjectHeader from './components/ProjectHeader.vue'
import SectionBlock from './components/SectionBlock.vue'
import VideoGrid from './components/VideoGrid.vue'
import YoutubeEmbed from './components/YoutubeEmbed.vue'
import {
  comparisonGroups,
  inbetweenGroups,
  limitationGroup,
  project,
  styleTransferGroup
} from './data/project'
</script>

<template>
  <ProjectHeader :project="project" />

  <main>
    <FigureBlock :figure="project.teaser" size="hero" />

    <SectionBlock title="Abstract">
      <p>{{ project.abstract }}</p>
    </SectionBlock>

    <SectionBlock title="Video">
      <YoutubeEmbed :src="project.youtubeEmbed" title="Project video" />
    </SectionBlock>

    <SectionBlock title="Pipeline">
      <p>{{ project.pipeline.text }}</p>
      <FigureBlock :figure="project.pipeline" size="wide" compact />
    </SectionBlock>

    <SectionBlock title="Comparison on Unsupervised Styles" wide>
      <p v-html="project.comparisonIntro" />
      <template v-for="group in comparisonGroups" :key="group.title">
        <p v-if="group.note" class="section-note">{{ group.note }}</p>
        <VideoGrid :group="group" />
      </template>
    </SectionBlock>

    <SectionBlock title="Additional Application: Style Transfer" wide>
      <p>Our approach enables motion style transfer while ensuring superior preservation of content.</p>
      <VideoGrid :group="styleTransferGroup" min-column-width="150px" />
    </SectionBlock>

    <SectionBlock title="Additional Application: Stylized Motion In-Between" wide>
      <p>
        Our approach also allows for stylized motion in-between.
        <span class="keyframe-label">Orange</span> frames represent keyframes, and
        <span class="generated-label">purple</span> frames represent generated results.
      </p>
      <template v-for="group in inbetweenGroups" :key="group.title">
        <VideoGrid :group="group" min-column-width="260px" />
        <p class="section-note">{{ group.after }}</p>
      </template>
    </SectionBlock>

    <SectionBlock title="Limitations" wide>
      <p>If the style characteristics conflict with the content texts, our method prioritizes the content.</p>
      <VideoGrid :group="limitationGroup" min-column-width="260px" />
    </SectionBlock>

    <SectionBlock title="BibTeX">
      <BibtexBlock :bibtex="project.bibtex" />
    </SectionBlock>
  </main>

  <AppFooter />
  <el-backtop :right="32" :bottom="32" />
</template>
