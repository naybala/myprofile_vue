<template>
  <div
    class="scroll-progress"
    :style="{ width: `${progress * 100}%` }"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import { useScrollProgress } from '~/composables/useScrollProgress'

const { progress } = useScrollProgress()
</script>
