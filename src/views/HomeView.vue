<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { ChatDotRound, Histogram, Promotion, RefreshRight } from '@element-plus/icons-vue'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <main>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" :stretch="true">
      <el-tab-pane label="For You" name="first">
        <div class="flex flex-row border rounded border-gray-700 p-2">
          <div class="w-2/12">
            <div
              class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl"
            >
              <span>T</span>
            </div>
          </div>
          <div class="w-10/12 flex flex-col">
            <div>
              <input
                class="w-full h-full min-h-[96px] border border-gray-800 rounded-2xl bg-[#16181C]"
                type="textarea"
              />
            </div>
            <div class="flex">
              <div class="flex-grow"></div>
              <button class="mt-2 px-4 py-1 bg-[#1DB9F0] border rounded-2xl border-gray-800">
                Post
              </button>
            </div>
          </div>
        </div>

        <!--  tweet data. @todo replace with real data  -->
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
            </pre>
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
      </el-tab-pane>

      <el-tab-pane label="Following" name="second">Following</el-tab-pane>
    </el-tabs>
  </main>
</template>
