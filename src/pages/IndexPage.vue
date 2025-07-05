<template>
  <q-page class="flex">
    <div id="index-cont">
      <div id="ix-title">
        <p class="title-text">Bringing</p>
        <p class="title-text">the computer</p>
        <p class="title-text">to life</p>
        <p class="mid-text">
          I believe in a future where computers become powerful tools for understanding complex
          environmental processes, like soil erosion. They will process vast amounts of data from
          various sources (satellite images, ground sensors), providing rapid and accurate
          predictions.
        </p>
        <p class="add-text">To start, here is two main goals.</p>
      </div>

      <div class="separator"></div>

      <div id="ix-list">
        <div class="item-list">
          <span>01</span>
          <p class="title-text">Advanced Erosion Modelling</p>
          <p class="mid-text">
            A sophisticated deep learning model that goes beyond traditional static maps. It
            integrates high-resolution satellite imagery with powerful spatio-temporal forecasting
            techniques to predict not just where but also how much and how fast erosion might occur.
          </p>
          <p class="mid-text">Try our Research <a @click="goPreviewApp">preview</a></p>
        </div>

        <div class="item-list">
          <span>02</span>
          <p class="title-text">Scalable Earth Observation Integration</p>
          <p class="mid-text">
            Leveraging the vast capabilities of Google Earth Engine (EE) for processing satellite
            data like Sentinel-1 and Landsat 8. This allows us to handle large-scale, real-time
            monitoring effectively without manual intervention.
          </p>
        </div>
      </div>

      <div class="separator"></div>

      <div id="ix-team">
        <div class="item-list">
          <p class="title-text">Join Erosion Viewer</p>
          <p class="mid-text">
            Erosion Viewer is an interdisciplinary product and research focused on making erosion
            maps more accessible and useful for decision-making. Learn more about
            <a @click="goTeamPage">the creator and mission</a>.
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goTeamPage = async () => {
  try {
    await router.push('/team');
  } catch (error) {
    console.log('Error de navegación a /home', error);
  }
};

const goPreviewApp = async () => {
  try {
    await router.push('/preview');
  } catch (error) {
    console.log('Error de navegación a /preview', error);
  }
};
</script>

<style lang="scss" scoped>
#index-cont {
  padding: 12.5vw 28vw 0 7.5vw;
  background-color: #f6f6f6;
  flex-grow: 1;
  width: 80vw;
  overflow: hidden;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  position: relative;

  p {
    font-family: var(--font-season);
    margin: 0;
    padding: 0;
    font-size: 1.3vw;
    font-variation-settings: 'SERF' 26;
    font-weight: 500;
    letter-spacing: 0.015vw;
    line-height: 130%;
  }

  .title-text {
    font-variation-settings: 'SERF' 33;
    letter-spacing: 0.01vw;
    color: var(--main-text-color);
    font-size: 2.6vw;
    font-weight: 530;
    padding: 0;
    margin: 0;
    margin-bottom: -0.75vw;

    &:nth-child(3) {
      margin-bottom: 4.75vw;
      // border: 1px solid red;
    }
  }

  .mid-text {
    margin-bottom: 1.25vw;
    color: var(--sub-text-color);

    a {
      all: unset;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .add-text {
    color: var(--main-text-color);
  }

  #ix-title {
    height: fit-content;
    // border: 1px solid red;
  }

  .separator {
    width: 100%;
    height: 0.01vw;
    background-color: var(--sub-text-color);
    opacity: 0.3;
    margin: 5vw 0;
  }

  #ix-list {
    display: flex;
    flex-direction: column;
    .item-list {
      // border: 1px solid red;
      span {
        font-size: 1.5vw;
        color: var(--sub-text-color);
        letter-spacing: -0.1vw;
      }

      .title-text {
        margin-top: 2vw;
        font-size: 1.6vw;
        margin-bottom: 1vw;
      }

      margin-bottom: 4vw;
    }
  }

  #ix-team {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    .item-list {
      // border: 1px solid red;
      span {
        font-size: 1.5vw;
        color: var(--sub-text-color);
        letter-spacing: -0.1vw;
      }

      .title-text {
        margin-top: 2vw;
        font-size: 1.6vw;
        margin-bottom: 1vw;
      }

      margin-bottom: 4vw;
    }
  }
}
</style>
