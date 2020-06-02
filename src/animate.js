import { sineInOut } from "svelte/easing";

export const fadeIn = () => ({
  duration: 300,
  easing: sineInOut,
  css: (t) => {
    return `opacity: ${t}; 
		width: 100%;
		transform: translate3d(0, ${(1 - t) * 100}px ,0);
		position: absolute; 
		`;
  },
});

export const fadeOut = () => ({
  duration: 300,
  easing: sineInOut,
  css: (t) => {
    return `opacity: ${t}; 
		position: absolute; 
		width: 100%;
		transform: translate3d(0, ${(1 - t) * 100}px ,0);
		`;
  },
});
