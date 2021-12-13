import {
  formatHex,
  interpolate,
  wcagContrast,
  interpolatorSplineMonotone,
  oklch
} from "culori"

export const grayScale = gradient("#141029", ["#26233d", 3/11], ["#e5e4f8", 8/11], "#fcfcff")

export const black = {
  0: grayScale(0),
  1: grayScale(1/11),
  2: grayScale(2/11),
  3: grayScale(3/11),
}

export const gray = {
  0: grayScale(4/11),
  1: grayScale(5/11),
  2: grayScale(6/11),
  3: grayScale(7/11),
}

export const white = {
  0: grayScale(8/11),
  1: grayScale(9/11),
  2: grayScale(10/11),
  3: grayScale(1),
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

export const yellow = {
  0: "#460b0f",
  1: "#8b2a1b",
  2: "#d6500d",
  3: "#f7710e",
  4: "#ffb00f",
  5: "#fdcc59",
  6: "#fce58a",
  7: "#fffcb8",
}


export const green = {
  0: "#10231c",
  1: "#174f38",
  2: "#1b7f56",
  3: "#1da575",
  4: "#54bf92",
  5: "#7dd9af",
  6: "#aee6cc",
  7: "#dbf3e9",
}

export const purple = {
  0: "#230048",
  1: "#3a136a",
  2: "#52278d",
  3: "#6c3cb4",
  4: "#9c6bde",
  5: "#cc99ff",
  6: "#ddbeff",
  7: "#efe1ff",
}

export const palette = {
  magenta: magenta,
  purple: purple,
  blue: blue,
  green: green,
  yellow: yellow,

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
      "oklch",
      {
        h: interpolatorSplineMonotone, 
        l: interpolatorSplineMonotone, 
        c: interpolatorSplineMonotone
      }
    )(x)
  )
}
