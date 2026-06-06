import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particlesOptions = {
  fullScreen: { enable: false, zIndex: -1 },
  background: { color: { value: "transparent" } },
  particles: {
    number: { value: 70, density: { enable: true, area: 1100 } },
    color: { value: ["#9d7bff", "#4dd7ff", "#ffffff"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.75,
      random: { enable: true, minimumValue: 0.25 },
      animation: { enable: true, speed: 0.8, minimumValue: 0.2, sync: false },
    },
    size: {
      value: { min: 1, max: 3 },
      random: { enable: true, minimumValue: 1 },
      animation: { enable: true, speed: 2, minimumValue: 0.3, sync: false },
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "bounce" },
    },
    links: {
      enable: true,
      distance: 160,
      color: "#60e5ff",
      opacity: 0.13,
      width: 1,
      triangles: { enable: false },
    },
    twinkle: {
      particles: { enable: true, frequency: 0.03, opacity: 1 },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 180, links: { opacity: 0.4 } },
      push: { quantity: 4 },
    },
  },
  detectRetina: true,
};

function BackgroundParticles({ className }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="landing-particles"
      init={particlesInit}
      options={particlesOptions}
      className={className}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    />
  );
}

export default BackgroundParticles;
