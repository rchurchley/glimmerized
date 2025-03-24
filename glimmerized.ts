import { interpolate, interpolatorSplineNatural } from "culori"
import { type Color, type OklchColor } from "./colors.ts"

export const black: OklchColor = { mode: "oklch", l: 0.15, c: 0.05, h: 281 }
export const white: OklchColor = { mode: "oklch", l: 0.99, c: 0.001, h: 281 }

export const red: OklchColor = { mode: "oklch", l: 0.60, c: 0.25, h: 356 }
export const purple: OklchColor = { mode: "oklch", l: 0.50, c: 0.25, h: 306 }
export const blue: OklchColor = { mode: "oklch", l: 0.60, c: 0.23, h: 256 }
export const green: OklchColor = { mode: "oklch", l: 0.70, c: 0.23, h: 163 }
export const yellow: OklchColor = { mode: "oklch", l: 0.85, c: 0.20, h: 89 }
export const grey: OklchColor = { mode: "oklch", l: 0.70, c: 0.03, h: 281 }


let createShades = (color: OklchColor) => {
  const darkest = { ...black, h: color.h }
  const lightest = { ...white, h: color.h }
  const gradient = interpolate(
    [darkest, color, lightest],
    'oklch',
    {
      c: interpolatorSplineNatural
    }
  )
  return (x: number) => {
    let color: OklchColor = gradient(x)
    color.l = Math.round(color.l * 100) / 100
    color.c = Math.round(color.c * 100) / 100
    color.h = Math.round(color.h)
    return color
  }
}

export const themeShades = {
  red: createShades(red),
  purple: createShades(purple),
  blue: createShades(blue),
  green: createShades(green),
  yellow: createShades(yellow),
  grey: createShades(grey),
}

export const themeColors = {
  red: red as Color,
  purple: purple as Color,
  blue: blue as Color,
  green: green as Color,
  yellow: yellow as Color,
  black: black as Color,
  grey: grey as Color,
  white: white as Color,
}
