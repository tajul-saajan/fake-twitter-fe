<script setup lang="ts">
import TwitterIcon from '@/components/icons/Twitter.vue'
</script>
<template>
  <div class="bg-black text-white h-screen flex items-center lg:justify-start">
    <!-- Left half with logo -->
    <div class="flex items-center justify-center">
      <!--      <img src="twitter-x-seeklogo.com-4.svg" alt="Logo" class="invisible lg:visible" />-->
      <TwitterIcon class="h-screen w-1/2" />
    </div>

    <!-- Right half with title and login form -->
    <div class="ml-8 w-3/4 lg:w-1/2 flex flex-col justify-center">
      <!-- Title "Happening Now" -->
      <div class="lg:hidden mb-4">
        <!--        <img src="twitter-x-seeklogo.com-4.svg" alt="Logo" class="w-32" />-->
        <TwitterIcon />
      </div>
      <h1 class="text-4xl lg:text-6xl font-bold mb-6 px-8">Happening Now</h1>
      <p class="mt-4 item-start font-bold lg:text-4xl text-2xl mb-6 px-8">Join today.</p>

      <!-- Login Form -->
      <form class="lg:w-1/2 w-full p-8 rounded-2xl">
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="mt-1 p-2 w-full rounded-2xl bg-gray-700 text-white"
          />
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="mt-1 p-2 w-full rounded-2xl bg-gray-700 text-white"
          />
        </div>

        <!-- Sign In Button -->
        <button
          type="submit"
          class="w-full bg-[#1DB9F0] text-white p-2 rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Sign In
        </button>
      </form>

      <!-- "Join today" text -->
    </div>
  </div>
</template>
<style></style>
