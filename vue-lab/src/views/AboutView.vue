<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Стан: true = режим Логіну, false = режим Реєстрації
const isLoginMode = ref(false);

// Дані форми
const form = reactive({
  username: '',
  password: '',
  email: ''
});

// Стан помилок
const errors = reactive({
  username: '',
  password: '',
  email: ''
});

// Функція перемикання вкладок
const setMode = (mode: boolean) => {
  isLoginMode.value = mode;
  // Очищаємо помилки при перемиканні, щоб не лякати користувача
  errors.username = '';
  errors.password = '';
  errors.email = '';
};

// Валідація
const validate = () => {
  let isValid = true;
  // Скидаємо помилки
  errors.username = '';
  errors.password = '';
  errors.email = '';


  if (!form.username) {
    errors.username = "User name is required";
    isValid = false;
  }


  if (!form.password) {
    errors.password = "Password is required";
    isValid = false;
  } else if (form.password.length < 6) {
    errors.password = "Password min length is 6";
    isValid = false;
  }


  if (!isLoginMode.value) {
    if (!form.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }
  }

  return isValid;
};


const submitForm = () => {
  if (validate()) {

    const formData = {
      action: isLoginMode.value ? 'LOGIN' : 'REGISTER',
      username: form.username,
      password: form.password,
      // Додаємо email в об'єкт тільки якщо це реєстрація
      ...(isLoginMode.value ? {} : { email: form.email })
    };

    console.log("Form Submitted Successfully:", formData);


    // router.push('/onboarding');
    alert(`Success! Check console for data.\nAction: ${formData.action}`);
  } else {
    console.log("Validation Failed");
  }
};
</script>

<template>
  <div class="bg-[#FF4B4B] min-h-screen w-full flex items-center justify-center font-sans">

    <div class="w-full max-w-sm px-6 py-8 flex flex-col items-center">

      <div class="mb-2">
        <img src="/images/Fated_Logo2.webp" alt="Fated Logo" class="w-24 h-24 object-contain">
      </div>

      <h1 class="text-white text-5xl font-black tracking-wider mb-8 font-fredoka">
        FATED
      </h1>

      <div class="flex w-full mb-6 border-2 border-white rounded h-10 overflow-hidden">
        <button
          @click="setMode(true)"
          class="flex-1 font-bold text-sm transition-colors duration-300 flex items-center justify-center"
          :class="isLoginMode ? 'bg-white text-[#FF4B4B]' : 'bg-transparent text-white hover:bg-white/10'"
        >
          LOGIN
        </button>

        <button
          @click="setMode(false)"
          class="flex-1 font-bold text-sm transition-colors duration-300 flex items-center justify-center"
          :class="!isLoginMode ? 'bg-white text-[#FF4B4B]' : 'bg-transparent text-white hover:bg-white/10'"
        >
          REGISTER
        </button>
      </div>

      <form @submit.prevent="submitForm" class="w-full flex flex-col gap-4">

        <div class="relative">
          <input
            v-model="form.username"
            type="text"
            placeholder="user name"
            class="w-full h-12 rounded bg-white px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-300 transition-shadow"
            :class="{'ring-2 ring-yellow-400': errors.username}"
          >
          <span v-if="errors.username" class="text-white text-xs mt-1 block font-bold shadow-black drop-shadow-md">{{ errors.username }}</span>
        </div>

        <div class="relative">
          <input
            v-model="form.password"
            type="password"
            placeholder="password"
            class="w-full h-12 rounded bg-white px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-300 transition-shadow"
            :class="{'ring-2 ring-yellow-400': errors.password}"
          >
          <span v-if="errors.password" class="text-white text-xs mt-1 block font-bold drop-shadow-md">{{ errors.password }}</span>
        </div>

        <div v-if="!isLoginMode" class="relative animate-fade-in">
          <input
            v-model="form.email"
            type="email"
            placeholder="email"
            class="w-full h-12 rounded bg-white px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-red-300 transition-shadow"
            :class="{'ring-2 ring-yellow-400': errors.email}"
          >
          <span v-if="errors.email" class="text-white text-xs mt-1 block font-bold drop-shadow-md">{{ errors.email }}</span>
        </div>

        <div class="w-full flex justify-end">
          <a href="#" class="text-white text-xs font-medium hover:underline opacity-90">
            FORGOT PASSWORD?
          </a>
        </div>

        <button
          type="submit"
          class="w-full bg-white text-[#FF4B4B] font-bold h-12 rounded mt-2 text-lg shadow-lg hover:bg-gray-50 active:scale-95 transition-transform"
        >
          {{ isLoginMode ? 'LOGIN' : 'REGISTER' }}
        </button>

      </form>

      <p class="mt-6 text-white text-xs opacity-90">
        {{ isLoginMode ? "DON'T HAVE AN ACCOUNT?" : "ALREADY HAVE AN ACCOUNT?" }}
        <button
          @click="setMode(!isLoginMode)"
          class="font-bold hover:underline ml-1 uppercase"
        >
          {{ isLoginMode ? 'REGISTER' : 'LOGIN' }}
        </button>
      </p>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto:wght@400;500;700&display=swap');

.font-fredoka {
  font-family: 'Fredoka One', cursive;
}

.font-sans {
  font-family: 'Roboto', sans-serif;
}


.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
