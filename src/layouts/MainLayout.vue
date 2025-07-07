<template>
  <q-layout view="lHh Lpr lFf">
    <div id="playout">
      <div id="pnav">
        <div id="pnav-box">
          <div id="mn">
            <a @click="goHomeApp">
              <img src="media/logo/logo.PNG" alt="logo" @click="goHomeApp" />
            </a>
            <a @click="goHomeApp">Erosion Viewer</a>
            <a @click="goResearchPage">Research</a>
            <a @click="goTeamPage">About</a>
          </div>
          <div id="preview">
            <a @click="goPreviewApp">Preview</a>
          </div>
        </div>
      </div>
      <div id="pbody">
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </div>
    <div id="footer">
      <video src="/media/video/UpdateFade_smaller.mp4" autoplay loop muted playsinline></video>

      <div id="f-text">
        <div id="title">Erosion Viewer</div>
        <div id="nav-1">
          <div class="npage">
            <a @click="goHomeApp">Home</a>
            <a @click="goResearchPage">Research</a>
            <a @click="goTeamPage">About</a>
            <a href="mailto:cuadroshuachua2800@gmail.com">Contact me</a>
          </div>
          <div class="nlinks">
            <a href="https://www.linkedin.com/in/axel-cuadros-huachua-7bba3729b">
              <img src="icons\logotipo-de-linkedin.png" alt="" />
            </a>
          </div>
        </div>
        <div id="nav-2">
          <p>Copyright © 2025 Erosion Viewer. All rights reserved.</p>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goHomeApp = async () => {
  try {
    await router.push('/');
  } catch (error) {
    console.log('Error de navegación a /home', error);
  }
};

const goResearchPage = async () => {
  try {
    await router.push('/research');
  } catch (error) {
    console.log('Error de navegación a /home', error);
  }
};

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

localStorage.setItem('reload-preview', 'false');
</script>

<style lang="scss" scoped>
html {
  font-family: 'ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji';
  background-color: #f6f6f6;
}

#playout {
  display: grid;
  grid-template-columns: 20vw 80vw;
  overflow: hidden;

  #pnav {
    grid-column-start: 1;
    grid-column-end: 2;
    background-color: #f6f6f6;
    position: relative;
    padding: 2vw;
    height: 100%;
    // border: 1px solid red;

    #pnav-box {
      position: absolute;
      right: 3vw;
      top: 13vw;
      width: 9vw;

      a {
        text-decoration: none;
        font-family: var(--font-season);
        font-size: 1vw;
        letter-spacing: 0.03vw;
        font-synthesis: none;
        padding: 0.02vw 0;
        color: var(--sub-text-color);
        cursor: pointer;
        font-synthesis: none;
        transition: all 0.2s ease-in;
        font-variation-settings: 'SERF' 26;
        font-weight: 600;

        &:hover {
          color: black;
          opacity: 1;
        }
      }

      #mn {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.75vw;

        img {
          width: 3vw;
          margin-bottom: 1vw;
        }
      }

      #preview {
        border-top: 0.15vw solid #aeaeae;
        padding-top: 0.75vw;
        width: 5vw;
      }
    }
  }

  #pbody {
    grid-column-start: 2;
    grid-column-end: 3;
    height: 100vh;
    overflow-y: scroll;
  }
}

#footer {
  position: relative; /* Importante para que el video posicionado absolutamente se refiera a este contenedor */
  width: 100%;
  height: 20vw; /* O la altura que desees para tu footer, puede ser vw o vh también */
  overflow: hidden;
  padding: 5vw;

  video {
    position: absolute; /* Posiciona el video absolutamente dentro del footer */
    top: 50%; /* Centra verticalmente */
    left: 50%; /* Centra horizontalmente */
    width: 100vw; /* Permite que el ancho se ajuste proporcionalmente */
    height: 20vw; /* Permite que la altura se ajuste proporcionalmente */
    transform: translate(-50%, -50%); /* Ajusta el centrado para compensar top/left del 50% */
    object-fit: cover; /* Ajusta el tamaño del video para cubrir el contenedor, recortando si es necesario */
    z-index: -99; /* Coloca el video detrás de cualquier otro contenido del footer */
  }

  #f-text {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1vw;
    align-content: center;
    justify-content: center;

    #title {
      color: white;
      font-family: var(--font-season);
      margin: 0;
      padding: 0;
      font-size: 1.5vw;
      font-variation-settings: 'SERF' 26;
      font-weight: 500;
      letter-spacing: 0.015vw;
      line-height: 130%;
    }

    #nav-1 {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 1vw;
      // border: 1px solid red;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1vw;
      border-bottom: 1px solid rgba(255, 255, 255, 0.512);

      .npage {
        display: flex;
        flex-direction: row;
        gap: 2vw;
        a {
          text-decoration: none;
          font-size: 1vw;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.8);
        }
      }

      .nlinks {
        a {
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 2vw;
            align-self: center;
            justify-self: center;
            filter: invert(1);
          }
        }
      }
    }

    #nav-2 {
      p {
        font-size: 0.75vw;
        color: white;
      }
    }
  }
}
</style>
