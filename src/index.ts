import aframe from "aframe"
import aframeExtras from "aframe-extras"
import aframeLookAtComponent from "aframe-look-at-component"
import { Grid } from "./game/grid"
import { GridRenderer } from "./game/grid_renderer"

aframe && aframeExtras && aframeLookAtComponent

window.addEventListener("load", () => {
    const grid: Grid = new Grid()
    const renderer = new GridRenderer()
    renderer.render(grid)
})