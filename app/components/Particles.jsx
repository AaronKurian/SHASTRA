'use client'
import { useCallback } from 'react'
import { Particles } from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

export default function ParticleBackground() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    // console.log(container)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              area: 700
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.2762060339181007,
            random: true,
            animation: {
              enable: false,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            animation: {
              enable: false,
              speed: 40,
              minimumValue: 0.1,
              sync: false
            }
          },
          links: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            },
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: false,
              mode: "repulse"
            },
            onClick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              quantity: 4
            },
            remove: {
              quantity: 2
            }
          }
        },
        detectRetina: true
      }}
      className="absolute inset-0 z-0"
    />
  )
}