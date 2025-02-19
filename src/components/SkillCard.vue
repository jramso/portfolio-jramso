<template>
    <div class="skills-container">
      <h2>Minhas Competências</h2>
  
      <div v-for="(category, index) in skillCategories" :key="index">
        <h3>{{ category.title }}</h3>
        <div class="skills-grid">
          <div v-for="skill in category.skills" :key="skill.name" class="hexagon">
            <img :src="skill.icon" :alt="skill.name" />
            <span>{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Categorias e habilidades com ícones
  const skillCategories = ref([
    {
      title: 'Linguagens de Programação',
      skills: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }, // Hibernate não tem ícone oficial
        { name: 'JPA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }, // JPA também não tem ícone oficial
        { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
        { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
      ]
    },
    {
      title: 'Outros',
      skills: [
        { name: 'Dotenv', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }, // Não tem ícone oficial
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
      ]
    }
  ]);
  </script>
  
  <style scoped>
  .skills-container {
    text-align: center;
    margin-top: 50px;
  }
  
  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
  }
  
  h3 {
    margin-top: 20px;
    font-size: 1.5rem;
    color: #333;
  }
  
  .hexagon {
    width: 80px;
    height: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #5ac3fb;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    transition: transform 0.2s;
  }
  
  .hexagon img {
    width: 40px;
    height: 40px;
  }
  
  .hexagon:hover {
    transform: scale(1.1);
    background-color: #0056b3;
  }
  </style>
  