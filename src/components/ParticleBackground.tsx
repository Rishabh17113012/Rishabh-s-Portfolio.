import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log("Particles system initialized");
    }
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10 animate-fade-in"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.4,
              speed: 1,
              factor: 100,
              maxSpeed: 50,
              easing: "ease-out-quad",
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#9b87f5",
          },
          links: {
            color: "#9b87f5",
            distance: 130,
            enable: true,
            opacity: 0.4,
            width: 1.2,
            triangles: {
              enable: true,
              opacity: 0.07,
            },
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.2,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 200, 
            limit: 200,
          },
          opacity: {
            value: 0.4,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.08,
              opacity: 1,
            },
          },
        },
        detectRetina: true,
        smooth: true,
        responsive: [
          {
            maxWidth: 768,
            options: {
              particles: {
                number: {
                  value: 60, 
                },
              },
            },
          },
        ],
      }}
    />
  );
};

export default ParticleBackground;
