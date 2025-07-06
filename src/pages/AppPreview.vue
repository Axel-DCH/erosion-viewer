<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 100%; height: 100vh; display: flex; flex-direction: column">
      <q-card flat bordered class="q-pa-sm">
        <q-card-section>
          <div class="text-h6">Map of soil erosion</div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-pa-none">
          <iframe
            src="https://flask-rusle-frontend-281259100786.us-east1.run.app"
            width="100%"
            height="700"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>

<style scoped>
#map-container {
  height: 600px; /* Altura del mapa */
  width: 100%;
}
</style>
