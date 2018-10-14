import { Grid, Point} from "./grid"
import { EntityBuilder } from "aframe-typescript-toolkit"
import { Vector3 } from "three"

export class GridRenderer {
    constructor() {
    }

    render(grid: Grid): void {
        const points: ReadonlyArray<Point> = grid.parse()

        points.forEach( p => {
            const position = new Vector3()

            position.x = p.x
            position.y = 1
            position.z = -1 * p.y

            console.log("P --->", p)
            console.log("POSITION --->", position)
    
            const entity = EntityBuilder.create( 
                "a-box",
                {
                    color: "red",
                    position,
                    width: "1",
                    height: "1",
                }
            )
    
            entity.attachTo()
        })

    }
}