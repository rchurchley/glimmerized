import { APCAcontrast, displayP3toY } from 'apca-w3'
import { toGamut } from 'culori'

export type RgbColor = {
  mode: "rgb",
  r: number,
  g: number,
  b: number
}

export type OklchColor = {
  mode: "oklch",
  l: number,
  c: number,
  h: number
}

export type Color = RgbColor | OklchColor

const toP3 = (color: Color) => {
  let result = toGamut('p3')(color)
  return [Math.max(result.r, 0), Math.max(result.g, 0), Math.max(result.b, 0)]
}

export const contrast = (color: Color, other: Color): number => {
  return Math.abs(Number(APCAcontrast(
    displayP3toY(toP3(color)),
    displayP3toY(toP3(other))
  )))
}

export const mostContrastingColor = (color: Color, options: Color[]): Color => {
  let result = { color: color, score: 0}
  for (let option of options) {
    let score = contrast(color, option)
    if (score > result.score) {
      result = { color: option, score: score}
    }
  }
  return result.color
}
