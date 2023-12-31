<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import DefaultLayout from '@/layouts/default.vue'
import Tweet from '@/components/Tweet.vue'
import { useTweetStore } from '@/stores/tweetStore'
import { ElNotification } from 'element-plus'

const activeName = ref('first')
const tweetStore = useTweetStore()
const tweets = ref([] as any)
const paginationData = ref({} as any)
const content = ref('')

async function loadTweets() {
  const { data, ...pag } = await tweetStore.getTimelineData()
  console.log(tweets.value)
  tweets.value = data
  paginationData.value = pag
}

onMounted(async () => {
  await loadTweets()
})

const createTweet = async function () {
  if (content.value.length === 0) return
  const response = await tweetStore.createTweet(content.value)
  if (response) {
    ElNotification({
      type: 'success',
      title: 'created',
      message: 'tweet created succesfully'
    })
    content.value = ''
    await loadTweets()
  }
}

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <main>
    <default-layout>
      <template #content>
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
                    v-model="content"
                  />
                </div>
                <div class="flex">
                  <div class="flex-grow"></div>
                  <button
                    class="mt-2 px-4 py-1 bg-[#1DB9F0] border rounded-2xl border-gray-800"
                    @click="createTweet"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>

            <div v-if="tweets?.length > 0">
              <Tweet v-for="t in tweets" :key="t.id" :tweet="t" />
            </div>
          </el-tab-pane>

          <el-tab-pane label="Following" name="second">Following</el-tab-pane>
        </el-tabs>
      </template>
      <template #right>
        <!-- start dummy section 1-->
        <div class="text-left p-4 mt-8 bg-[#16181C] border border-gray-800 rounded-2xl">
          <div class="text-xl font-bold">Subscribe to Premium</div>
          <p class="my-2">
            Subscribe to unlock new features and if eligible, receive a share of ads revenue.
          </p>
        </div>
        <!-- end dummy section 1-->
        <!-- start dummy section 2-->
        <div class="text-left p-4 mt-8 bg-[#16181C] border border-gray-800 rounded-2xl">
          <div class="text-xl font-bold">Trends For You</div>
          <div>
            <div class="my-2">
              <div class="flex justify-between items-center font-light text-gray-400">
                <div>Sports Trending</div>
                <div>...</div>
              </div>
              <div class="font-bold text-lg">#CWC</div>
              <div class="font-light text-gray-400">150k Posts</div>
            </div>

            <div class="my-2">
              <div class="flex justify-between items-center font-light text-gray-400">
                <div>Politics Trending</div>
                <div>...</div>
              </div>
              <div class="font-bold text-lg">Genocide</div>
              <div class="font-light text-gray-400">910k Posts</div>
            </div>

            <div class="my-2">
              <div class="flex justify-between items-center font-light text-gray-400">
                <div>Technology Trending</div>
                <div>...</div>
              </div>
              <div class="font-bold text-lg">#iPhone</div>
              <div class="font-light text-gray-400">500k Posts</div>
            </div>
          </div>
        </div>
        <!-- end dummy section 2-->
      </template>
    </default-layout>
  </main>
</template>
