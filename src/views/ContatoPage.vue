<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Entre em Contato</h1>

    <p class="text-center mb-4">
      Fique à vontade para me contatar por <strong>Email</strong>, <strong>LinkedIn</strong> ou <strong>Telegram</strong>!
    </p>

    <form @submit.prevent="enviarEmail" class="w-50 mx-auto">
      <div class="mb-3">
        <label for="nome" class="form-label">Seu Nome:</label>
        <input type="text" id="nome" class="form-control" v-model="nome" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Seu Email:</label>
        <input type="email" id="email" class="form-control" v-model="email" required />
      </div>
      <div class="mb-3">
        <label for="mensagem" class="form-label">Mensagem:</label>
        <textarea id="mensagem" class="form-control" rows="4" v-model="mensagem" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-100">Enviar</button>
    </form>

    <!-- Ícones Redes Sociais -->
    <div class="social-icons mt-4 text-center">
      <a href="https://x.com/JosueRsou" target="_blank" class="me-3"><i class="fab fa-x-twitter fa-2x"></i></a>
      <a href="https://t.me/Jramso" target="_blank" class="me-3"><i class="fab fa-telegram-plane fa-2x"></i></a>
      <a href="https://www.youtube.com/@josueramossouza377" target="_blank" class="me-3"><i class="fab fa-youtube fa-2x text-danger"></i></a>
      <a href="https://www.instagram.com/josue.rsou" target="_blank" class="me-3"><i class="fab fa-instagram fa-2x text-warning"></i></a>
      <a href="https://www.linkedin.com/in/josué-r-6a7a1a115" target="_blank"><i class="fab fa-linkedin fa-2x text-primary"></i></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const mensagem = ref('')

const enviarEmail = () => {
  const assunto = `Contato de ${nome.value}`
  const corpo = `Nome: ${nome.value}%0D%0AEmail: ${email.value}%0D%0AMensagem: ${mensagem.value}`
  window.location.href = `mailto:contato.josue.rsou@gmail.com?subject=${encodeURIComponent(assunto)}&body=${corpo}`
}
</script>

<style scoped>
.social-icons a {
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.social-icons a:hover {
  transform: scale(1.2);
}
</style>
