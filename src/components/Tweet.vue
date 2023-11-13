<script lang="ts" setup>
import { ChatDotRound, Histogram, Promotion, RefreshRight } from '@element-plus/icons-vue'
import type { PropType } from 'vue'
import type { Tweet } from '@/types/tweet'
import useDateHelper from '@/composables/useDateHelper'
const props = defineProps({
  tweet: {
    type: Object as PropType<Tweet>,
    required: true
  }
})

const { formatTimeDiffForHumans } = useDateHelper()
</script>

<template>
  <div class="flex flex-row border rounded border-gray-700 p-2">
    <div class="w-2/12">
      <div
        class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl"
      >
        <span>X</span>
      </div>
    </div>
    <div class="w-10/12 flex flex-col">
      <div class="flex">
        <div class="text-lg font-semibold">{{ props.tweet.created_by.user_name }}</div>
        <div class="ml-2 font-light text-gray-400">@{{ props.tweet.created_by.user_name }}</div>
        <div class="ml-2 font-light text-gray-400">
          . {{ formatTimeDiffForHumans(props.tweet.created_at) }}
        </div>
      </div>
      <div class="py-1">{{ props.tweet.content }}</div>
      <div class="flex justify-around items-center">
        <div>
          <el-icon><ChatDotRound /></el-icon>
          <span class="font-light text-gray-300 ml-1">22k</span>
        </div>
        <div>
          <el-icon><RefreshRight /></el-icon>
          <span class="font-light text-gray-300 ml-1">2.3k</span>
        </div>
        <div>
          <el-icon><Promotion /></el-icon>
          <span class="font-light text-gray-300 ml-1">597</span>
        </div>
        <div>
          <el-icon><Histogram /></el-icon>
          <span class="font-light text-gray-300 ml-1">188k</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
