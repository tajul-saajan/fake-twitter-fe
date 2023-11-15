<script lang="ts" setup>
const props = defineProps({
  letter: {
    required: true,
    type: String
  }
})
</script>

<template>
  <main>
    <div
      class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl"
    >
      <span>{{ props.letter.toUpperCase() }}</span>
    </div>
  </main>
</template>

<style scoped></style>
