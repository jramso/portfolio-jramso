<template>
  <div class="container mt-5">
    <h1 class="text-success text-center">Sobre Mim</h1>

    <!-- Introdução -->
    <section class="mb-5">
      <h2 class="fs-4 text-primary">Olá, eu sou o Josué! 👋</h2>
      <p class="lead">
        Sou apaixonado por tecnologia e estou trilhando meu caminho para me tornar um programador full stack. Atualmente, minha principal área de atuação é o backend, com foco em linguagens como <strong>C#</strong> e <strong>Java</strong>, além de trabalhar com bancos de dados como <strong>PostgreSQL</strong> e <strong>MySQL</strong>.
      </p>
    </section>

    <!-- Minha Jornada -->
    <section class="mb-5">
      <h2 class="fs-4 text-primary">Minha Jornada</h2>
      <ul class="timeline">
        <li>
          <span class="badge bg-success">🎓</span>
          <strong>Bacharelado em Sistemas de Informação</strong> - IFES
          <p>Atualmente cursando, com foco em desenvolvimento e análise de sistemas.</p>
        </li>
        <li>
          <span class="badge bg-warning">💼</span>
          <strong>Estágio no BANDES</strong>
          <p>Aprofundei-me em desenvolvimento e análise de sistemas, adquirindo experiência prática.</p>
        </li>
        <li>
          <span class="badge bg-info">🛠️</span>
          <strong>Técnico em Informática</strong> - IFES
          <p>Primeiro contato com Python, Java, PHP e JS. Desenvolvi meu primeiro projeto web com PHP.</p>
        </li>
      </ul>
    </section>

    <!-- Habilidades -->
    <section class="mb-5">
      <h2 class="fs-4 text-primary">Habilidades</h2>
      <div class="row">
        <div class="col-md-6">
          <h3 class="fs-5">Backend</h3>
          <ul class="list-unstyled">
            <li><i class="fas fa-check-circle text-success"></i> C#</li>
            <li><i class="fas fa-check-circle text-success"></i> Java</li>
            <li><i class="fas fa-check-circle text-success"></i> PostgreSQL / MySQL</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h3 class="fs-5">Frontend</h3>
          <ul class="list-unstyled">
            <li><i class="fas fa-check-circle text-success"></i> Vue.js</li>
            <li><i class="fas fa-check-circle text-success"></i> TypeScript</li>
            <li><i class="fas fa-check-circle text-success"></i> SCSS</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Interesses Pessoais -->
    <section class="mb-5">
      <h2 class="fs-4 text-primary">Interesses Pessoais</h2>
      <div class="d-flex flex-wrap gap-3">
        <span class="badge bg-secondary"><i class="fas fa-gamepad"></i> Jogos</span>
        <span class="badge bg-secondary"><i class="fas fa-book"></i> Leitura</span>
        <span class="badge bg-secondary"><i class="fas fa-utensils"></i> Cozinhar</span>
        <span class="badge bg-secondary"><i class="fas fa-pen-fancy"></i> Escrever</span>
      </div>
    </section>

    <!-- Projetos -->
    <section>
      <h2 class="fs-4 text-primary">Projetos</h2>
      <p>Fique à vontade para conferir meus projetos aqui no GitHub ou entrar em contato comigo. 🚀</p>
    </section>
  </div>
</template>

<script setup lang="ts">
// Sem lógica adicional, apenas a estrutura visual
</script>

<style scoped>
.timeline {
  list-style: none;
  padding-left: 0;
}
.timeline li {
  margin-bottom: 1rem;
}
.timeline .badge {
  margin-right: 0.5rem;
}
</style>