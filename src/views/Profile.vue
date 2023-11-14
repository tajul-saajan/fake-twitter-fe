<script lang="ts" setup>
import DefaultLayout from '@/layouts/default.vue'
import { Back } from '@element-plus/icons-vue'

import { onMounted, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import type { User } from '@/types/user'
import Tweet from '@/components/Tweet.vue'

const activeName = ref('first')
const route = useRoute()
const userName = route.params.user_name
const userStore = useUserStore()
const profileData = ref({} as User)

onMounted(async () => {
  // console.log(userName)
  profileData.value = await userStore.getUserProfile(userName)
})

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <default-layout>
    <main>
      <!--  top user info with back button-->
      <div class="flex items-center mb-2">
        <div class="w-1/12">
          <el-icon><Back /></el-icon>
        </div>
        <div class="w-11/12 flex flex-col">
          <span class="font-bold text-xl">{{ profileData.email }}</span>
          <span class="text-xs text-gray-500">2 Posts</span>
        </div>
      </div>
      <!--   user profile overview      -->
      <div class="w-full flex items-center justify-self-center">
        <div class="text-white rounded-lg overflow-hidden w-full">
          <!-- Banner image -->
          <div class="h-60 bg-green-500 flex items-center justify-center">
            <img src="../assets/cover1.jpg" alt="Banner" class="w-full h-full object-cover" />
          </div>

          <!-- Avatar image -->
          <div class="-mt-16 p-4 flex justify-start">
            <div class="flex justify-between items-center w-full">
              <div class="relative">
                <div class="h-32 w-32 rounded-full overflow-hidden border-4 border-gray-800">
                  <img
                    src="../assets/avatar1.jpg"
                    alt="Avatar"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div class="mt-8">
                <button
                  class="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 border border-gray-600 rounded-3xl"
                >
                  Edit profile
                </button>
              </div>
            </div>
          </div>

          <!-- Profile content -->
          <div class="pt-8 pb-4 px-4 text-left">
            <h1 class="text-2xl font-bold">{{ profileData.email }}</h1>
            <p class="text-gray-400">@{{ profileData.user_name }}</p>

            <!-- stats -->
            <div class="mt-4">
              <p class="text-gray-400">Joined February 2023</p>
              <div class="flex justify-start mt-2">
                <span class="mr-2 font-bold">3</span>
                <span class="text-gray-400 mr-4">Following</span>
                <span class="mr-2 font-bold">0</span>
                <span class="text-gray-400"> Followers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--   tab pane with posts   -->
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Posts" name="first">
          <div v-if="profileData?.tweets?.length > 0">
            <Tweet v-for="t in profileData.tweets" :key="t.id" :tweet="t" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="Replies" name="second">No Data</el-tab-pane>
      </el-tabs>
    </main>
  </default-layout>
</template>

<style scoped></style>
