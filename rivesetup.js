import * as rive from "@rive-app/canvas"

let layout = new rive.Layout({
  fit: rive.Fit.FitWidth,
  alignment: rive.Alignment.TopCenter,
});

export function setupCubes() {
  const r_cubes = new rive.Rive({
    src: "/assets/cubes.riv",
    canvas: document.getElementById("canvas"),
    layout: layout,
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      r_cubes.resizeDrawingSurfaceToCanvas();
    },
});  
}
