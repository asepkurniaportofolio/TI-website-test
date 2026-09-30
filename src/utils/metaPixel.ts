type MetaPixelArguments = [command: 'init' | 'track', eventName: string, parameters?: Record<string, unknown>];

type MetaPixelFunction = ((...args: MetaPixelArguments) => void) & {
  callMethod?: (...args: MetaPixelArguments) => void;
  queue?: MetaPixelArguments[];
  loaded?: boolean;
  version?: string;
  push?: (...args: MetaPixelArguments) => void;
};

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
  }
}

const pixelId = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
let isInitialized = false;

export function initMetaPixel() {
  if (!pixelId || typeof window === 'undefined' || isInitialized) return;

  const fbq: MetaPixelFunction = function (...args) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue = fbq.queue || [];
      fbq.queue.push(args);
    }
  };

  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];
  fbq.push = (...args) => fbq.queue?.push(args);
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  fbq('init', pixelId);
  fbq('track', 'PageView');
  isInitialized = true;
}

export function trackMetaEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (!window.fbq) return;
  window.fbq('track', eventName, parameters);
}
