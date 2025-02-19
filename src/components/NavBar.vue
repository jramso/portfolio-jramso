<template>
  <nav class="navbar navbar-expand-lg" :class="{ 'bg-light': !isDark, 'bg-dark navbar-dark': isDark }">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="/src/assets/logo.png" alt="Logo JRamso" class="me-2 rounded-circle" width="45" height="45" />
        JRamso.DEV
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sobre">Sobre Mim</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/repos">Repositórios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contato">Contato</router-link>
          </li>
        </ul>
        <!-- Botão de alternância do tema -->
        <button @click="toggleDarkMode" class="btn btn-outline-secondary">
          {{ isDark ? "🌞 Claro" : "🌙 Escuro" }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle("dark-mode", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

onMounted(() => {
  isDark.value = localStorage.getItem("theme") === "dark";
  document.body.classList.toggle("dark-mode", isDark.value);
});
</script>

<style scoped>
/* Define tema escuro */
.dark-mode {
  background-color: #121212;
  color: white;
}

.dark-mode .navbar {
  background-color: #222 !important;
}

/* Tema claro */
body {
  background-color: white;
  color: black;
}
</style>
