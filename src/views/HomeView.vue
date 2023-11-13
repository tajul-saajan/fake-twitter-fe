<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import DefaultLayout from '@/layouts/default.vue'
import Tweet from '@/components/Tweet.vue'
import { useTweetStore } from '@/stores/tweetStore'

const activeName = ref('first')
const tweetStore = useTweetStore()
const tweets = ref([] as any)
const paginationData = ref({} as any)

onMounted(async () => {
  const { data, ...pag } = await tweetStore.getTimelineData()
  console.log(tweets.value)
  tweets.value = data
  paginationData.value = pag
})

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <main>
    <default-layout>
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
          <!--          <Tweet />-->
          <!--          <Tweet />-->
          <div v-if="tweets.length > 0">
            <Tweet v-for="t in tweets" :key="t.id" :tweet="t" />
          </div>
        </el-tab-pane>

        <el-tab-pane label="Following" name="second">Following</el-tab-pane>
      </el-tabs>
    </default-layout>
  </main>
</template>
