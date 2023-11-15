<script lang="ts" setup>
import DefaultLayout from '@/layouts/default.vue'
import { Back } from '@element-plus/icons-vue'

import { onMounted, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import type { User } from '@/types/user'
import Tweet from '@/components/Tweet.vue'
import TextAvatar from '@/components/icons/TextAvatar.vue'
import { ElNotification } from 'element-plus'

const activeName = ref('first')
const route = useRoute()
const userName = route.params.user_name
const userStore = useUserStore()
const profileData = ref({} as User)
const followers = ref([] as User[])
const following = ref([] as User[])

onMounted(async () => {
  // console.log(userName)
  profileData.value = await userStore.getUserProfile(userName)
  following.value = await userStore.getFollowing(userName)
  followers.value = await userStore.getFollowers(userName)
})

const followUser = async function (userName: string) {
  const response = await userStore.follow(userName)
  if (response) {
    ElNotification({
      type: 'success',
      title: 'Followed',
      message: 'user followed successfully'
    })
  }
}

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <default-layout>
    <template #content>
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
    </template>

    <template #right>
      <!-- start dummy section 1-->
      <div class="text-left p-4 mt-8 bg-[#16181C] border border-gray-800 rounded-2xl">
        <div class="text-xl font-bold">My Followers</div>
        <!-- user info start-->
        <div
          v-for="follower in followers"
          :key="follower.id"
          class="flex flex-row w-full items-center py-1"
        >
          <div class="w-1/4">
            <TextAvatar :letter="follower.user_name[0]" />
          </div>
          <div class="w-2/4 flex flex-col justify-center">
            <div>{{ follower.email }}</div>
            <div>@{{ follower.user_name }}</div>
          </div>
          <div class="w-1/4">
            <button
              class="py-1 px-2 bg-white text-black border rounded-2xl"
              @click="followUser(follower.user_name)"
            >
              Follow
            </button>
          </div>
        </div>
        <!-- user info end-->
      </div>
      <!-- end dummy section 1-->
      <!-- start dummy section 2-->
      <div class="text-left p-4 mt-8 bg-[#16181C] border border-gray-800 rounded-2xl">
        <div class="text-xl font-bold">The Persons I follow</div>
        <!-- user info start-->
        <div
          v-for="f in following"
          :key="f.id"
          class="flex flex-row w-full items-center justify-start py-1"
        >
          <div class="w-1/4">
            <TextAvatar :letter="f.user_name[0]" />
          </div>
          <div class="w-2/4 flex flex-col justify-center">
            <div>{{ f.email }}</div>
            <div>@{{ f.user_name }}</div>
          </div>
          <div class="w-1/4">
            <button
              class="py-1 px-2 bg-white text-black border rounded-2xl"
              @click="followUser(f.user_name)"
            >
              Follow
            </button>
          </div>
        </div>
        <!-- user info end-->
      </div>
      <!-- end dummy section 2-->
    </template>
  </default-layout>
</template>

<style scoped></style>
