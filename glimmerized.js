import {
  formatHex,
  interpolate,
  wcagContrast,
  interpolatorSplineMonotone,
  oklch
} from "culori"


export const blackScale = gradient("#141029", "#26233d")
export const grayScale = gradient("#26233d", "#e5e4f8")
export const whiteScale = gradient("#e5e4f8", "#fcfcff")

export const black = {
  0: blackScale(0),
  1: blackScale(1/3),
  2: blackScale(2/3),
  3: blackScale(3/3),
}

export const gray = {
  0: grayScale(1/5),
  1: grayScale(2/5),
  2: grayScale(3/5),
  3: grayScale(4/5),
}

export const white = {
  0: whiteScale(0/3),
  1: whiteScale(1/3),
  2: whiteScale(2/3),
  3: whiteScale(3/3),
}

export const blackest = black[0]
export const whitest = white[3]

export const magenta = {
  0: "#3d0029",
  1: "#75004a",
  2: "#b50069",
  3: "#e50684",
  4: "#fd4fa5",
  5: "#ff80c4",
  6: "#ffa5dc",
  7: "#ffccf0",
}

export const blue = {
  0: "#1b0f40",
  1: "#282c8d",
  2: "#2950bf",
  3: "#0075eb",
  4: "#40a8ff",
  5: "#65b8ff",
  6: "#98d2ff",
  7: "#bfe4ff",
}

export const purple = {
  1: "#3a136a",
  2: "#4e1980",
  3: "#6E35AE",
  4: "#9c6bde",
}

export const green = {
  1: "#065449",
  2: "#007b6b",
  3: "#00a18d",
  4: "#49C5B1",
}

export const yellow = {
  0: "#f0b135",
  1: "#ffe399",
}

export const orange = {
  0: "#ff8d6f",
}

export const lime = {
  0: "#a1bc41",
  1: "#d4ec8e",
}

export const primaries = {
  magenta: magenta[3],
  purple: purple[2],
  blue: blue[3],
  green: green[3],
  lime: lime[1],
  yellow: yellow[1],
  orange: orange[1],
  black: black[1]
}

export const palette = {
  magenta: magenta,
  blue: blue,
  purple: purple,
  green: green,
  lime: lime,
  yellow: yellow,
  orange: orange,

  black: black,
  gray: gray,
  white: white,
}

export function relativeLightness(color) {
  return (oklch(color).l - oklch(blackest).l)/(oklch(whitest).l - oklch(blackest).l) * 100
}

export function foreground(bg) {
  if (wcagContrast(blackest, bg) > wcagContrast(whitest, bg)) {
    return blackest
  }
  return whitest
}

export function gradient(...anchors) {
  return (x) => formatHex(
    interpolate(
      anchors,
      "oklab",
      {
        h: interpolatorSplineMonotone,
        l: interpolatorSplineMonotone,
        c: interpolatorSplineMonotone
      }
    )(x)
  )
}
