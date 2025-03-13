<template>
  <div class="container mt-5">
    <h1>Meus Repositórios e Projetos</h1>
    <p>Aqui estão alguns dos meus projetos, com links diretos para o GitHub.</p>
    
    <div class="row mt-4">
      <div v-for="repo in repositorios" :key="repo.id" class="col-md-6">
        <div class="card repo-card p-3 mb-3">
          <div class="d-flex align-items-center">
            <img :src="getIcon(repo.language)" class="language-icon me-2" alt="Icone da linguagem">
            <div>
              <a :href="repo.html_url" target="_blank" class="repo-link">{{ repo.name }}</a>
              <p class="text-muted">{{ repo.description || 'Sem descrição' }}</p>
              <div class="tags">
                <span v-for="tag in repo.tags" :key="tag.name" :style="{ backgroundColor: tag.color }" class="tag">{{ tag.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const repositorios = ref<any[]>([]);
const GITHUB_TOKEN = import.meta.env.VUEAPP_GITHUB_SECRET;
  const icones: Record<string, string> = {
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
};

const getIcon = (language: string | null) => {
  return language && icones[language] ? icones[language] : 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
};

const getTags = (languages: any) => {
  const tags = Object.keys(languages).map(lang => ({
    name: lang,
    color: getColorForLanguage(lang)
  }));
  return tags;
};

// Função para definir a cor das tags com base na linguagem
const getColorForLanguage = (language: string) => {
  switch (language.toLowerCase()) {
    case 'typescript':
      return '#007acc'; // Azul claro para TypeScript
    case 'html':
      return '#e34c26'; // Laranja para HTML
    case 'css':
      return '#563d7c'; // Roxo escuro para CSS
    case 'react':
      return '#61dafb'; // Azul ciano para React
    case 'git':
      return '#f05032'; // Vermelho para Git
    case 'graphql':
      return '#e10098'; // Rosa para GraphQL
    case 'dockerfile':
      return '#0db7ed'; // Azul ciano para Dockerfile
    case 'vue':
    case 'vue.js':
      return '#4fc08d'; // Verde para Vue.js
    case 'javascript':
      return '#f7df1e'; // Amarelo para JavaScript
    case 'c#':
      return '#178600'; // Verde escuro para C#
    default:
      return '#585858'; // Branco como padrão
  }
};
  
 onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/users/jramso/repos', {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    // Usar Promise.all para lidar com as chamadas assíncronas dentro do map
    const reposWithTags = await Promise.all(
      data.map(async (repo: any) => {
        const languagesResponse = repo.languages_url
          ? await fetch(repo.languages_url, {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
              },
            })
          : null;
        const languages = languagesResponse
          ? await languagesResponse.json()
          : {};

        return {
          ...repo,
          tags: getTags(languages),
        };
      })
    );

    repositorios.value = reposWithTags;
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
  }
});
  </script>
  
<style scoped>
.repo-card {
  transition: transform 0.3s ease-in-out;
  border: 1px solid #dddddd;
}

.repo-card:hover {
  transform: scale(1.05);
}

.repo-link {
  font-weight: bold;
  text-decoration: none;
  color: #007bff;
}

.tags {
  display: flex;
  gap: 5px;
  margin-top: 10px;
}

.tag {
  padding: 5px 10px 10px;
  color: white;
  border-radius: 20px;

}
</style>