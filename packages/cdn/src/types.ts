import type { CloudinaryConfig } from './cloudinary';
import type { FastlyConfig } from './fastly';
import type { ImgixConfig } from './imgix';
import type { NetlifyConfig } from './netlify';
import type { ImageType } from '@responsive-image/core';

export interface Config {
  imgix?: ImgixConfig;
  fastly?: FastlyConfig;
  cloudinary?: CloudinaryConfig;
  netlify?: NetlifyConfig;
}

export interface CoreOptions {
  formats?: ImageType[];
  quality?: number;
  aspectRatio?: number;
}
