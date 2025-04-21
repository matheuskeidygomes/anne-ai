export const particlesOptions: any = {
    background: {
        color: {
            value: "white",                     // background color of the canvas
            opacity: 1,                         // opacity of the background color
        }
    },
    fpsLimit: 120,                              // frames per second limit
    interactivity: {
        events: {                               // events that will trigger the interactivity
            onClick: {
                enable: false,                   // enable the interactivity when the mouse is clicked
                mode: "push",                   // can be "push", "remove", "bubble", "repulse", "grab", "connect"
            },
            onHover: {
                enable: true,                   // enable the interactivity when the mouse is over the canvas
                mode: "repulse",                // can be "grab", "bubble", "repulse", "push", "remove"
            },
            resize: true,                       // enable the particles to resize when the window is resized
        },
        modes: {
            push: {
                quantity: 4,                    // number of particles to push
            },
            repulse: {
                distance: 100,                  // distance between the mouse and the particles when they are repulsed
                duration: 0.4,                  // time in seconds before the particles go back to their original position
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",                   // color of the particles
        },
        links: {
            color: "#ffffff",                   // color of the links between the particles
            distance: 150,                      // distance between the particles when they are linked
            enable: true,                       // enable the links between the particles
            opacity: 0.5,                       // opacity of the links 
            width: 1,                           // width of the links
        },
        collisions: {
            enable: true,                       // enable the particles to bounce off each other
        },
        move: {
            direction: "none",                  // can be "none", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"
            enable: true,                       // enable the particles to move
            outModes: {
                default: "bounce",              // can be "bounce", "out", "destroy" or "none" (that is for the particles to stay inside the canvas)
            },
            random: false,                      // if true, the particles will move in a random direction
            speed: 1,                         // speed of the particles
            straight: false,                    // if true, the particles will move in a straight line
        },
        number: {
            density: {
                enable: true,                   // enable the number of particles to change with the screen size
                area: 550,                      // area of the particles
            },
            value: 70,                          // number of particles
        },
        opacity: {
            value: 0.5,                         // opacity of the particles
        },
        shape: {
            type: "circle",                     // can be "circle", "edge", "triangle", "polygon", "star", "image", "char"
        },
        size: {
            value: { min: 1, max: 5 },          // size of the particles 
        },
    },
    detectRetina: true,                         // detect if the user is on a retina screen (high pixel density)
}