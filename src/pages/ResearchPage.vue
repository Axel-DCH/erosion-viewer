<template>
  <q-page class="flex">
    <div id="research-content">
      <div id="ix-title">
        <p class="title-text">Forecasting the Unseen: A Deep Learning System for Erosion in Peru</p>
        <p class="tt-sub">July, 2025</p>
        <p class="tt-sub">Axel Cuadros</p>

        <div class="separator"></div>

        <button class="rc-preview" @click="goPreviewApp">Try Preview Now</button>

        <p class="mid-text">
          Erosion is quiet, but devastating. It reshapes landscapes, silences ecosystems, and slowly
          threatens the ground we live and grow on. In regions like Piura, Peru—where rugged terrain
          meets intense seasonal rains—predicting erosion isn't just science. It’s survival.
        </p>

        <p class="mid-text">
          Traditional monitoring methods struggle to keep pace with erosion’s complexity. Field data
          is limited, models are static, and high-resolution insights remain out of reach for many
          decision-makers. We set out to change that.
        </p>

        <p class="tt-title">A new approach</p>

        <p class="mid-text">
          Our goal was to build something both powerful and practical: a scalable system capable of
          predicting not just <span style="font-style: italic; color: black">where</span> erosion
          happens, but
          <span style="font-style: italic; color: black">how it evolves over time</span>. Powered by
          satellite data and deep learning, our solution replaces complex manual workflows with
          fast, automated insights.
        </p>

        <p class="mid-text">
          We began by constructing a decade-long geospatial database on Google Earth Engine,
          integrating 16 variables from Landsat 8, Sentinel-1, MODIS, and more. From there, we
          trained two neural network models:
        </p>

        <ul class="mid-text">
          <li>
            <strong style="color: black">U-Net</strong>: for detailed spatial prediction, capable of
            replicating erosion patterns with striking fidelity (R² = 0.9895).
          </li>
          <li>
            <strong style="color: black">ConvLSTM U-Net</strong>: for spatio-temporal forecasting,
            learning erosion's behavior through time and anticipating its future spread.
          </li>
        </ul>

        <p class="tt-title">More than a model</p>

        <p class="mid-text">
          What we built is more than a machine learning pipeline. It’s a bridge between science and
          planning. It transforms raw data into meaningful maps—tools that farmers,
          conservationists, and policymakers can use to make faster, better-informed decisions.
        </p>

        <p class="mid-text">
          Behind the code and computation lies a core belief: that remote regions deserve precision,
          that good predictions save ecosystems, and that local challenges require global technology
          tailored with care.
        </p>

        <p class="tt-title">What’s next</p>

        <p class="mid-text">
          Our current models are powerful—but imperfect. They rely on RUSLE-based ground truth,
          inherit its assumptions, and demand GPU power that not all communities can access. We're
          working to overcome those limits.
        </p>

        <p class="mid-text">
          The next chapter includes field calibration, smarter architectures like Vision
          Transformers, and an operational platform for real-time risk assessment across Peru and
          beyond.
        </p>

        <p class="mid-text">
          Because erosion may be quiet—but with the right tools, we can hear it coming.
        </p>

        <p class="tt-title">Try the soil erosion map in our Preview</p>

        <img src="media\appPreview.png" alt="" class="tt-img" />

        <button class="rc-preview" @click="goPreviewApp">Try Preview Now</button>
      </div>

      <div class="separator"></div>

      <div id="ix-paper">
        <p class="tt-title-sub">Technical post</p>

        <p class="title-text">
          Proposal for a Soil Erosion Prediction System in Peruvian Territory Using Satellite
          Imagery
        </p>
        <p class="tt-sub">July, 2025</p>
        <p class="tt-sub-end">Authors: Axel Cuadros, Marks Calderón</p>

        <p class="tt-title">Background</p>
        <p class="mid-text">
          Monitoring soil erosion is crucial in vulnerable regions such as Piura, Peru, where
          rainfall and complex topography accelerate land degradation. Traditional field-based
          methods are expensive and static. To provide a more scalable and predictive alternative,
          we introduce a two-stage deep learning system for spatial and temporal erosion modeling
          using satellite imagery and the RUSLE equation.
        </p>

        <p class="tt-title">Approach</p>
        <p class="mid-text">
          We frame the problem as a
          <strong>spatial and spatio-temporal regression task</strong> over Earth observation
          imagery. The system leverages two deep learning architectures:
        </p>
        <ul class="mid-text">
          <li><strong>U-Net</strong> for spatial erosion map generation.</li>
          <li><strong>ConvLSTM U-Net</strong> for spatio-temporal erosion forecasting.</li>
        </ul>
        <p class="mid-text">
          Both models are trained to predict the RUSLE A-factor (average soil loss per hectare per
          season) using a decade-long multivariate dataset (2015–2024) from Google Earth Engine.
        </p>

        <img src="media\methodResearch.png" alt="" class="tt-img" />

        <p class="tt-title">Data Pipeline</p>
        <p class="mid-text">A geospatial stack of 16 variables was constructed, including:</p>

        <ul class="mid-text">
          <li><strong>RUSLE factors</strong>: R, K, LS, C, P</li>
          <li><strong>Topographic indices</strong>: slope and aspect from Copernicus DEM</li>
          <li><strong>Optical indices</strong>: NDVI, EVI, NDWI, BSI from Landsat 8</li>
          <li><strong>Radar features</strong>: VV, VH, VV/VH ratio from Sentinel-1</li>
          <li><strong>Thermal data</strong>: land surface temperature from MODIS</li>
        </ul>

        <p class="mid-text">
          All inputs were normalized and transformed to log-space for regression stability. 128×128
          patches were generated and split 80/20 for training and validation.
        </p>

        <div class="data-plot">
          <img src="media\bands.png" alt="" />
          <p>Plot of the first 6 Band in one TIFF file.</p>
        </div>

        <p class="tt-title">Model Architectures</p>

        <div class="mod-img">
          <div class="mi-txt">
            <p>U-Net (Spatial Prediction)</p>

            <ul class="mid-text">
              <li>Encoder-decoder architecture with skip connections</li>
              <li>Loss: Mean Squared Error (MSE)</li>
              <li>Activation: Sigmoid</li>
              <li>Trained with AdamW optimizer and early stopping</li>
            </ul>

            <p class="mid-text">Achieved <strong>R² = 0.9895</strong> on validation data.</p>
          </div>
          <div class="mi-img">
            <img
              src="https://db0dce98.rocketcdn.me/es/files/2021/05/u-net-architecture-1024x682.png"
              alt=""
            />
          </div>
        </div>

        <div class="mod-img">
          <div class="mi-txt">
            <p>ConvLSTM U-Net (Spatio-Temporal Forecasting)</p>

            <ul class="mid-text">
              <li>U-Net backbone with ConvLSTM layers</li>
              <li>Predicts erosion in future seasons based on historical maps</li>
              <li>Handles sequence-to-one temporal regression</li>
            </ul>

            <p class="mid-text">Achieved <strong>R² = 0.7820</strong> on forecasting tasks.</p>
          </div>
          <div class="mi-img">
            <img src="media\lstm_archi.png" alt="" />
          </div>
        </div>
      </div>

      <p class="tt-title">Evaluation</p>
      <p class="mid-text">Both models were evaluated using:</p>

      <ul class="mid-text">
        <li>Quantitative metrics: MSE, MAE, RMSE, and R²</li>
        <li>Visual comparison with RUSLE erosion maps</li>
        <li>Seasonal accuracy in highland and valley zones</li>
      </ul>

      <table border="1" cellpadding="8" cellspacing="0">
        <thead>
          <tr>
            <th>Metric</th>
            <th>U-Net</th>
            <th>ConvLSTM U-Net</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>R²</td>
            <td>0.9895</td>
            <td>0.7820</td>
          </tr>
          <tr>
            <td>MSE</td>
            <td>0.0006</td>
            <td>0.0036</td>
          </tr>
          <tr>
            <td>MAE (t/ha/season)</td>
            <td>0.0021</td>
            <td>0.0303</td>
          </tr>
        </tbody>
      </table>

      <p class="tt-title">Key Takeaways</p>

      <ul class="mid-text">
        <li>U-Net models can replicate erosion maps with high spatial accuracy.</li>
        <li>ConvLSTM U-Net enables forecasting of seasonal erosion trends.</li>
        <li>
          By bypassing manual RUSLE computation, the system allows scalable erosion assessment.
        </li>
      </ul>

      <p class="tt-title">Limitations</p>

      <ul class="mid-text">
        <li>RUSLE-based ground truth inherits modeling uncertainties.</li>
        <li>No in-situ field calibration available at this stage.</li>
        <li>High computational cost may limit deployment in low-resource settings.</li>
      </ul>

      <p class="tt-title">Future Work</p>

      <ul class="mid-text">
        <li>Integrate field data for model calibration and validation.</li>
        <li>Test Vision Transformers (ViT) for improved long-range feature modeling.</li>
        <li>Deploy as a web platform for erosion risk mapping and planning.</li>
        <li>Adapt the framework to new regions with minimal retraining.</li>
      </ul>
      <p class="mid-text">
        This system marks a shift from static mapping to predictive, AI-powered environmental
        forecasting for Peru and beyond.
      </p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goPreviewApp = async () => {
  try {
    await router.push('/preview');
  } catch (error) {
    console.log('Error de navegación a /preview', error);
  }
};
</script>
<style lang="scss" scoped>
#research-content {
  padding: 12.5vw 20vw 0 7.5vw;
  background-color: white;
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
    font-size: 1.05vw;
    font-variation-settings: 'SERF' 26;
    font-weight: 500;
    letter-spacing: 0.03vw;
    line-height: 150%;
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
    line-height: 110%;

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

  .tt-sub {
    font-size: 1.1vw;
    margin-bottom: 0.25vw;
    color: var(--sub-text-color);

    &:nth-child(3) {
      margin-bottom: 2vw;
    }
  }

  .tt-title {
    font-variation-settings: 'SERF' 33;
    letter-spacing: 0.01vw;
    color: var(--main-text-color);
    font-size: 1.5vw;
    font-weight: 530;
    padding: 0;
    margin: 0;
    margin: 2.5vw 0 1vw 0;
    line-height: 110%;
  }

  .add-text {
    color: var(--main-text-color);
  }

  #ix-title {
    height: fit-content;

    .title-text {
      margin-bottom: 3vw;
    }

    .separator {
      margin: 2vw 0;
    }

    .rc-preview {
      cursor: pointer;
      width: 100%;
      padding: 1vw 2vw;
      border: none;
      border-radius: 0.5vw;
      font-variation-settings: 'SERF' 33;
      letter-spacing: 0.02vw;
      color: var(--main-text-color);
      font-size: 1.1vw;
      font-weight: 500;
      text-align: start;
      margin-top: 1vw;
      margin-bottom: 3vw;
      transition: all 0.25s;

      &:hover {
        transform: scale(1.01);
      }
    }

    .tt-img {
      width: 100%;
    }
    // border: 1px solid red;
  }

  #ix-paper {
    .tt-title-sub {
      margin-bottom: 1vw;
      color: var(--sub-text-color);
    }

    .title-text {
      margin-bottom: 3vw;
      font-weight: 500;
    }

    .tt-sub {
      font-size: 1.1vw;
      margin-bottom: 0.25vw;
      color: var(--sub-text-color);
    }

    .tt-sub-end {
      font-size: 1.1vw;
      margin-bottom: 3vw;
      color: var(--sub-text-color);
    }

    .tt-img {
      margin: 2vw 0;
      width: 100%;
    }

    .data-plot {
      img {
        width: 100%;
      }

      p {
        text-align: center;
        margin: 0;
        font-size: 0.75vw;
      }
    }

    .mod-img {
      display: grid;
      grid-template-columns: 60% 40%;
      margin-bottom: 1vw;
      .mi-txt {
        grid-column-start: 1;
        grid-column-end: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .mi-img {
        grid-column-start: 2;
        grid-column-end: 3;

        img {
          width: 80%;
        }
      }
    }
  }

  .separator {
    width: 100%;
    height: 0.01vw;
    background-color: var(--sub-text-color);
    opacity: 0.3;
    margin: 3vw 0 1vw 0;
  }
}
</style>
