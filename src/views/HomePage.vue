<template>
  <div class="container mt-5">
    <h1 class="digitando">
      <span v-html="textoDigitado"></span><span class="cursor" :class="{ piscando: exibirCursor }">|</span>
    </h1>
    <h4>Explore meus principais projetos e saiba mais sobre mim.</h4>

    <!-- Slider de Destaque -->
    <div id="reposSlider" class="carousel slide mt-4" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(repo, index) in reposDestaque" :key="repo.id" :class="['carousel-item', { active: index === 0 }]">
          <div class="card repo-card p-3 mx-auto">
            <div class="d-flex align-items-center">
              <img :src="getIcon(repo)" class="language-icon me-2" alt="Ícone da linguagem">
              <div>
                <a :href="repo.html_url" target="_blank" class="repo-link">{{ repo.name }}</a>
                <p class="text-muted">{{ repo.description || 'Sem descrição' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Indicadores -->
      <div class="carousel-indicators">
        <button
          v-for="(repo, index) in reposDestaque"
          :key="index"
          type="button"
          :data-bs-target="'#reposSlider'"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          aria-current="true"
          :aria-label="'Slide ' + (index + 1)"
          :data-repo="repo"
        ></button>
      </div>

      <!-- Controles do Slider -->
      <button class="carousel-control-prev custom-control" type="button" data-bs-target="#reposSlider" data-bs-slide="prev">
        <span class="carousel-control-prev-icon custom-arrow" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next custom-control" type="button" data-bs-target="#reposSlider" data-bs-slide="next">
        <span class="carousel-control-next-icon custom-arrow" aria-hidden="true"></span>
      </button>
    </div>
  </div>

  <SkillCard />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SkillCard from '../components/SkillCard.vue';

const GITHUB_TOKEN = import.meta.env.VUEAPP_GITHUB_SECRET;// Efeito de digitação
const textoCompleto = 'Oi, meu nome é Josué e bem-vindo ao meu Portfólio!';
const textoDigitado = ref('');
const exibirCursor = ref(true);
let indice = 0;

const digitarTexto = () => {
  if (indice < textoCompleto.length) {
    textoDigitado.value += textoCompleto[indice];
    indice++;
    setTimeout(digitarTexto, 100);
  }
};

onMounted(() => {
  digitarTexto();
  setInterval(() => {
    exibirCursor.value = !exibirCursor.value;
  }, 500);
});

// Slider de Destaques
const icones: Record<string, string> = {
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  Vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
};

const reposDestaque = ref<any[]>([]);
const destaques = ['AppVueBanhoTosa', 'AgendamentoBanhoETosa','TrabPthreads'];

const getIcon = (repo: any) => {
  const language = repo.language;
  const topics = repo.topics || [];

  if (language && icones[language]) {
    return icones[language];
  }

  for (const framework of ['Vue', 'React', 'Angular']) {
    if (topics.includes(framework.toLowerCase())) {
      return icones[framework];
    }
  }

  return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
};

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/users/jramso/repos', {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const repos = await response.json();
    reposDestaque.value = repos.filter((repo: any) => destaques.includes(repo.name));
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
  }
});
</script>

<style scoped>
/* Estilizando os cards do slider */
.repo-card {
  width: 70%;
  max-width: 500px;
  border: 1px solid #ddd;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

@media (max-width: 576px) {
  .repo-card {
    width: 90%; /* Dá mais espaço pro conteúdo em telas pequenas */
  }
}


.repo-card:hover {
  transform: scale(1.05);
}

.repo-link {
  font-weight: bold;
  text-decoration: none;
  color: #007bff;
}

.language-icon {
  width: 40px;
  height: 40px;
}

/* Efeito de digitação */
.digitando {
  font-size: 2.5rem;
  font-weight: bold;
  font-family: 'Poppins', Courier, monospace;
  display: inline-block;
}

.cursor {
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
}

.piscando {
  opacity: 0;
}

/* Indicadores do carousel */
.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #bbb;
  border: none;
  margin: 5px;
  opacity: 0.5;
  transition: opacity 0.3s;
}

/* Personalizando as setas do carrossel */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(184, 184, 184, 0.5); /* Cinza com 50% de transparência */
  border-radius: 50%; /* Deixa a seta arredondada */
  width: 30px; /* Tamanho da seta */
  height: 30px;
}

/* Aumentando o botão para facilitar o clique */
.carousel-control-prev,
.carousel-control-next {
  width: 50px; /* Largura maior para facilitar a navegação */
}

.carousel-indicators .active {
  background-color: #007bff;
  opacity: 1;
}

/* Botões de navegação customizados */
.custom-control {
  width: 50px;
  height: 50px;
}

.custom-arrow {
  width: 30px;
  height: 30px;
}

@media (max-width: 768px) {
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
}
</style>
