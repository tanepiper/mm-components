/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  MmKey as MmKey
} from './components/mm-key/mm-key';

declare global {
  interface HTMLMmKeyElement extends MmKey, HTMLElement {
  }
  var HTMLMmKeyElement: {
    prototype: HTMLMmKeyElement;
    new (): HTMLMmKeyElement;
  };
  interface HTMLElementTagNameMap {
    "mm-key": HTMLMmKeyElement;
  }
  interface ElementTagNameMap {
    "mm-key": HTMLMmKeyElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "mm-key": JSXElements.MmKeyAttributes;
    }
  }
  namespace JSXElements {
    export interface MmKeyAttributes extends HTMLAttributes {
      frequency?: number;
      key?: string;
      time?: number;
    }
  }
}

