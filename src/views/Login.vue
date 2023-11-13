<script setup lang="ts">
import TwitterIcon from '@/components/icons/Twitter.vue'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
interface loginData {
  email: string
  password: string
}
const formData = ref({} as LoginData)
const rules = {
  email: [
    {
      required: true,
      trigger: 'blur',
      message: 'email is required'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: 'password is required'
    }
  ]
}

const authStore = useAuthStore()
const router = useRouter()

const submitForm = async function () {
  const response = await authStore.login(formData.value.email, formData.value.password)
  if (response) {
    await router.push('/')
  }
}
</script>
<template>
  <div class="h-screen flex items-center lg:justify-start">
    <!-- Left half with logo -->
    <div class="w-1/2 flex items-center justify-center">
      <!--      <img src="twitter-x-seeklogo.com-4.svg" alt="Logo" class="invisible lg:visible" />-->
      <TwitterIcon class="w-1/2" />
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
      <el-form
        :rules="rules"
        :model="formData"
        @submit.prevent="submitForm"
        class="lg:w-1/2 w-full p-8 rounded-2xl"
      >
        <!-- Email Input -->
        <el-form-item class="mb-8" prop="email">
          <label for="email" class="block text-sm font-medium">Email</label>
          <el-input
            v-model="formData.email"
            class="mt-1 w-full rounded-2xl bg-[#16181C] text-white"
          />
        </el-form-item>

        <!-- Password Input -->
        <el-form-item prop="password" class="mb-8">
          <label for="password" class="block text-sm font-medium">Password</label>
          <el-input
            v-model="formData.password"
            type="password"
            class="mt-1 w-full rounded-2xl bg-[#16181C] text-white"
          />
        </el-form-item>

        <!-- Sign In Button -->
        <button
          type="submit"
          class="w-full bg-[#1DB9F0] text-white p-2 rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Sign In
        </button>
      </el-form>

      <!-- "Join today" text -->
    </div>
  </div>
</template>
<style></style>
