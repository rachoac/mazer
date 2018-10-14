import { level } from "../resource/level"

export class Point {
    readonly x: number
    readonly y: number
    readonly val: string
}

export class Grid {
    parse(): ReadonlyArray<Point> {
        const lines = level.split("\n").filter(l => l.length > 0)
        const points: ReadonlyArray<Point> = lines.reduce( (acc, l, y) => {
            const linePoints = []
            for (let x = 0; x < l.length; x++) {
                const val = l.charAt(x)
                if (val.trim()) {
                    linePoints.push({
                        x,
                        y, 
                        val,
                    })
                }
             }

             return linePoints.length > 0 ? [...acc, ...linePoints] : acc
        }, [])

        return points
    }
}