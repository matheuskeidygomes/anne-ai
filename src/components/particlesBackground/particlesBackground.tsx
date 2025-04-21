import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "./config";
import "./particlesBackground.css";

export default function ParticlesBackground() {

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container: Container | undefined) => {
  //   await console.log(container);
  // }, []);

  return <>
    <Particles
      id="tsparticles"
      init={particlesInit}            // <--- This is the callback function that is called when the particles are initialized 
      //loaded={particlesLoaded}      // <--- This is the callback function that is called when the particles are loaded
      options={particlesOptions}      // <--- This is the particles options
    />
  </>
};
