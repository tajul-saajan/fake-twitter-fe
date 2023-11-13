<script lang="ts" setup>
import { ChatDotRound, Histogram, Promotion, RefreshRight } from '@element-plus/icons-vue'
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
        <div class="text-lg font-semibold">Full Name</div>
        <div class="ml-2 font-light text-gray-400">@username</div>
        <div class="ml-2 font-light text-gray-400">. 12h</div>
      </div>
      <pre>
loreddfklfdkldffm
gkjsfgdnbdfuij
            </pre
      >
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
