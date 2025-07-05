// src/types/georaster-leaflet.d.ts

// No es necesario importar * as L from 'leaflet' aquí si @types/leaflet está instalado y funcionando.
// TypeScript debería encontrar L.Map, L.GridLayer, etc. automáticamente desde node_modules/@types/leaflet.

// Declaración simplificada para 'georaster'
// Esto forzará a TypeScript a reconocer GeoRaster y su función parse.
import * as L from 'leaflet';

declare module 'georaster' {
  interface GeoRaster {
    width: number;
    height: number;
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
    pixelWidth: number;
    pixelHeight: number;
    numberOfBands: number;
    projection: string;
    values: number[][][]; // Common structure for raster data
    getPixel(x: number, y: number): Promise<number[]>;
  }

  // La función 'parse' es la exportación por defecto
  function parse(data: Blob | ArrayBuffer | string | File): Promise<GeoRaster>;
  export = parse; // This declares 'parse' as the default export of the module
}

// Declaración simplificada para 'georaster-layer-for-leaflet'
// Esto debería permitir que TypeScript entienda la clase GeoRasterLayer.
// Importamos 'L' directamente aquí para asegurar que las bases de Leaflet estén disponibles.
import * as L from 'leaflet';
import type GeoRaster from 'georaster';

declare module 'georaster-layer-for-leaflet' {
  // Opciones específicas para GeoRasterLayer, extendiendo las de L.GridLayer
  interface GeoRasterLayerOptions extends L.GridLayerOptions {
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    georaster: GeoRaster | Blob | string | ArrayBuffer;
    opacity?: number;
    resolution?: number;
    debug?: boolean;
    projection?: string;
    pixelValuesToColorFn?: (pixelValues: number[]) => string;
    // Agrega cualquier otra propiedad que uses de GeoRasterLayerOptions
  }

  // Declara la clase GeoRasterLayer extendiendo de L.GridLayer
  // Esto le dará acceso a métodos como .addTo(), .on(), .removeLayer(), etc.
  class GeoRasterLayer extends L.GridLayer {
    constructor(options: GeoRasterLayerOptions);
    getBounds(): L.LatLngBounds;
    // Si accedes a la instancia de georaster desde la capa
    // georaster: GeoRaster;
  }

  export default GeoRasterLayer;
}
