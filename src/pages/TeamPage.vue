<template>
  <q-page class="flex">
    <div id="tm-cont">
      <div class="tm-title">
        <p class="title-text">About the creator</p>

        <p class="mid-text">
          I'm <span>Axel Cuadros</span>, the sole developer and visionary behind
          <span>Erosion Viewer</span>.
        </p>

        <p class="mid-text">
          Drawing on months of dedicated research in
          <span>deep learning, neural networks (U-Net), and advanced satellite image analysis</span
          >, I personally built this system to deliver effective soil erosion prediction. I've
          handled every aspect of its development, from the
          <span>machine learning models to the full-stack website</span>.
        </p>

        <p class="mid-text">
          My core belief is that a highly specialized, focused system can yield exceptional results
          in soil erosion analysis.
        </p>
      </div>

      <div class="separator"></div>

      <div class="tm-title">
        <p class="title-text-sub">Product</p>

        <p class="mid-text">Accurate Prediction of Soil Erosion.</p>

        <p class="mid-text">
          The system integrates advanced satellite image analysis (using Google Earth Engine) with
          cutting-edge deep learning models (such as U-Net and ConvLSTM). This ensures reliable,
          clear, and directly applicable erosion susceptibility maps for your needs, transforming
          complex data into actionable information.
        </p>
      </div>

      <div class="separator"></div>

      <div class="tm-title">
        <p class="title-text-sub">Research</p>

        <p class="mid-text">
          I focus on deep and innovative machine learning research for environmental prediction,
          primarily using Earth observation data. My work centers on developing advanced models to
          understand and forecast complex environmental phenomena.
        </p>

        <p class="mid-text">Core Research Areas:</p>

        <div class="mid-text">
          <ul>
            <li>
              <span>Advanced Spatial Prediction:</span> I build powerful models, heavily utilizing
              U-Net neural networks, to create high-resolution susceptibility maps that go beyond
              traditional static representations. <br />
            </li>
            <li>
              <span>Spatio-Temporal Forecasting:</span> My research includes developing dynamic
              systems using ConvLSTM-U-Net architectures. These systems predict erosion trajectories
              over time, anticipating future patterns by integrating historical and real-time data
              from sources like Sentinel-1 and Landsat 8 imagery.
            </li>
          </ul>
        </div>

        <p class="mid-text">
          Read more about the research in <a href="">Soil Erosion Prediction</a>.
        </p>
      </div>

      <div class="separator"></div>

      <div class="tm-title">
        <p class="title-text-sub">Interested?</p>

        <p class="mid-text">If what i am doing resonates with you, reach out.</p>

        <br />

        <a class="tm-contact" href="mailto:cuadroshuachua2800@gmail.com">
          <span>Email me</span>
          <img src="icons\correo-electronico.png" alt="Email-icon" />
        </a>

        <a
          class="tm-contact"
          href="https://www.linkedin.com/in/axel-cuadros-huachua-7bba3729b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Linkedin</span>
          <img src="icons\logotipo-de-linkedin.png" alt="Linkedin-icon" />
        </a>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
#tm-cont {
  padding: 12.5vw 28vw 0 7.5vw;
  background-color: #f6f6f6;
  flex-grow: 1;
  width: 80vw;
  overflow: hidden;
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 2vw;

  p {
    font-family: var(--font-season);
    margin: 0;
    padding: 0;
    font-size: 1vw;
    font-variation-settings: 'SERF' 26;
    font-weight: 500;
    letter-spacing: 0.015vw;
    line-height: 130%;
    line-height: 1.5vw;
  }

  .title-text {
    font-variation-settings: 'SERF' 33;
    letter-spacing: 0.01vw;
    color: var(--main-text-color);
    font-size: 2.6vw;
    font-weight: 530;
    padding: 0;
    margin: 0;
    margin-bottom: 2vw;
  }

  .title-text-sub {
    font-variation-settings: 'SERF' 33;
    letter-spacing: 0.01vw;
    color: var(--main-text-color);
    font-size: 1.75vw;
    font-weight: 530;
    padding: 0;
    margin: 0;
    margin-bottom: 2vw;
  }

  .mid-text {
    margin-bottom: 1.25vw;
    color: var(--sub-text-color);

    a {
      all: unset;
      text-decoration: underline;
      cursor: pointer;
    }

    ul {
      li {
        margin-top: 0.5vw;
      }
    }

    span {
      // font-weight: bold;
      color: var(--main-text-color);
    }
  }

  .add-text {
    color: var(--main-text-color);
  }

  .separator {
    width: 100%;
    height: 0.01vw;
    background-color: var(--sub-text-color);
    opacity: 0.3;
    margin: 5vw 0;
  }

  .tm-contact {
    // border: 1px solid red;
    border: none;
    width: 100%;
    margin-bottom: 0.75vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    padding: 1vw;
    border-radius: 0.5vw;
    background-color: white;
    cursor: pointer;
    box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.31);
    transition: all 0.2s;
    color: black;

    img {
      width: 1.5vw;
    }

    &:hover {
      transform: scale(1.01);
    }
  }
}
</style>
