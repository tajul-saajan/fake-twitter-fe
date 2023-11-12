<script lang="ts">
import { defineComponent } from 'vue'
import HomeIcon from '@/components/icons/Home.vue'
import TwitterIcon from '@/components/icons/Twitter.vue'
import SearchIcon from '@/components/icons/Search.vue'
import BellIcon from '@/components/icons/Bell.vue'
import ProfileIcon from '@/components/icons/Profile.vue'
import { Search } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'default-layout',
  computed: {
    Search() {
      return Search
    }
  },
  components: { ProfileIcon, BellIcon, Search, SearchIcon, TwitterIcon, HomeIcon }
})
</script>

<template>
  <div class="grid grid-cols-12 gap-0 bg-black text-white h-screen">
    <div class="col-span-2 flex flex-col h-100vh">
      <div class="w-full mr-auto p-4">
        <div class="flex flex-col justify-center items-start mb-4">
          <TwitterIcon />
          <div class="mt-2">
            <nav>
              <RouterLink class="my-4 flex justify-start items-center" :to="'/'">
                <HomeIcon />
                <span class="ml-4 text-2xl">Home</span>
              </RouterLink>
              <div class="my-4 flex justify-start items-center">
                <SearchIcon />
                <span class="ml-4 text-2xl">Search</span>
              </div>
              <div class="my-4 flex justify-start items-center">
                <BellIcon />
                <span class="ml-4 text-2xl">Notifications</span>
              </div>
              <div class="my-4 flex justify-start items-center">
                <ProfileIcon />
                <span class="ml-4 text-2xl">Profile</span>
              </div>
            </nav>
          </div>
        </div>
        <div>
          <button class="w-full text-white bg-[#1DB9F0] rounded-2xl py-2">Post</button>
        </div>
      </div>
      <div class="flex-grow"></div>
      <div class="flex items-center mb-4 ml-2">
        <div
          class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl"
        >
          <span>T</span>
        </div>
        <div class="mr-auto ml-2 text-xl">
          <div>Tajul Islam</div>
          <div class="text-lg font-light text-gray-400">@tajul_islam</div>
        </div>
        <div class="font-extrabold cursor-pointer">...</div>
      </div>
    </div>
    <div class="col-span-8">
      <div class="w-3/4 mx-auto p-4 border-1 border-x-gray-200">
        <slot></slot>
      </div>
    </div>
    <div class="col-span-2">
      <div class="mr-auto p-4 h-screen w-full">
        <div class="flex flex-col">
          <div class="flex items-center">
            <input
              class="text-center p-2 bg-[#16181C] border border-gray-700 rounded-2xl"
              type="text"
              placeholder="Search"
            />
          </div>
          <div class="text-left p-4 mt-8 bg-[#16181C] border border-gray-800 rounded-2xl">
            <div class="text-xl font-bold">Subscribe to Premium</div>
            <p class="my-2">
              Subscribe to unlock new features and if eligible, receive a share of ads revenue.
            </p>
          </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
