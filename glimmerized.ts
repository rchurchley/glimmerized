import { interpolate, interpolatorSplineMonotone, fixupHueShorter } from "culori"
import { type Color, type OklchColor } from "./colors.ts"

/* Hues are symmetric around purple:
 *    Red (Purple + 50), Yellow (Purple + 145)
 *    Blue (Purple - 50), Green (Purple - 145)
 * Grey is exactly halfway between Purple and Blue.
 */

export const red: OklchColor = { mode: "oklch", l: 0.60, c: 0.25, h: 355 }
export const purple: OklchColor = { mode: "oklch", l: 0.50, c: 0.25, h: 305 }
export const blue: OklchColor = { mode: "oklch", l: 0.60, c: 0.23, h: 255 }
export const green: OklchColor = { mode: "oklch", l: 0.70, c: 0.23, h: 160 }
export const yellow: OklchColor = { mode: "oklch", l: 0.85, c: 0.20, h: 90 }
export const grey: OklchColor = { mode: "oklch", l: 0.70, c: 0.03, h: 280 }


let createShades = (color: OklchColor, darkHue?: number, lightHue?: number) => {
  const darkest = { l: 0.15, c: 0.05, h: darkHue || color.h }
  const lightest = { l: 0.99, c: 0.015, h: lightHue || color.h }
  const gradient = interpolate(
    [darkest, color, lightest],
    'oklch',
    {
      h: {
        use: interpolatorSplineMonotone,
        fixup: fixupHueShorter
      },
      c: interpolatorSplineMonotone
    }
  )
  return (x: number) => {
    let color: OklchColor = gradient(x)
    color.l = Math.round(color.l * 100) / 100
    color.c = Math.round(color.c * 400) / 400
    color.h = Math.round(color.h)
    return color
  }
}

/* Dark hues are also symmetric around purple:
 *    Red (Purple + 25), Yellow (Purple + 115)
 *    Blue (Purple - 25), Green (Purple - 115)
 * Dark blue and dark grey are the same hue.
 */

export const themeShades = {
  red: createShades(red, 340),
  purple: createShades(purple, 315),
  blue: createShades(blue, 290),
  green: createShades(green, 200),
  yellow: createShades(yellow, 70),
  grey: createShades(grey, 290),
}

export const black: OklchColor = themeShades.grey(0)
export const white: OklchColor = themeShades.grey(1)

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
