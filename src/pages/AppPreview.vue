<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 100%; height: 100vh; display: flex; flex-direction: column">
      <div id="controls" class="q-mb-md q-gutter-md row items-center">
        <q-btn
          @click="generateMap"
          label="Generar Mapa de Erosión (API - Ignorado por ahora)"
          color="primary"
          :loading="loading"
          :disable="!estacion || !anio"
        />
      </div>

      <div
        id="map-container"
        style="flex-grow: 1; border: 1px solid #ccc; background-color: #e0e0e0"
      >
        <OpenLayersMap />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import OpenLayersMap from 'src/components/OpenLayersMap.vue';

interface ApiRequestBody {
  estacion: string;
  año: number;
}

const estacion = ref<string>('Primavera');
const anio = ref<number | null>(2016);

const selectedModel = ref('unet');


const loading = ref(false);
const message = ref('');
const errorMessage = ref('');

const currentApiUrl = ref<string | null>(null);
const currentApiBody = ref<ApiRequestBody | null>(null);

const generateMap = () => {
  // Ya no necesita ser async si no tiene await
  if (!estacion.value || !anio.value) {
    errorMessage.value = 'Por favor, ingresa la estación y el año.';
    return;
  }

  loading.value = true;
  message.value = 'Solicitando mapa a la API...';
  errorMessage.value = '';

  const API_BASE_URL = 'http://localhost:5000/predict/';
  let endpoint = '';
  switch (selectedModel.value) {
    case 'unet':
      endpoint = 'unet/data/';
      break;
    case 'convlstm_unet':
      endpoint = 'convlstm_unet/data/';
      break;
    case 'convlstm_unet_alter':
      endpoint = 'convlstm_unet_alter/data/';
      break;
    default:
      errorMessage.value = 'Modelo no válido seleccionado.';
      loading.value = false;
      return;
  }

  currentApiUrl.value = API_BASE_URL + endpoint;
  currentApiBody.value = {
    estacion: estacion.value,
    año: anio.value,
  };

  message.value = 'Mapa de erosión solicitado. Cargando...';
  // La carga real y el manejo de éxito/error se hacen dentro de OpenLayersMap
  // Puedes añadir un setTimeout o un evento para limpiar 'loading' y 'message'
  // una vez que el mapa de OpenLayers haya cargado o fallado.
  // Por simplicidad, lo dejaremos aquí, ya que el mapa se actualiza solo.
  setTimeout(() => {
    loading.value = false;
    message.value = ''; // Podrías cambiar a "Mapa cargado" si recibieras un evento de éxito
  }, 3000); // Dar un tiempo estimado
};

watch(selectedModel, () => {
  currentApiUrl.value = null;
  currentApiBody.value = null;
  message.value = '';
  errorMessage.value = '';
});
</script>

<style scoped>
#map-container {
  height: 600px; /* Altura del mapa */
  width: 100%;
}
</style>
