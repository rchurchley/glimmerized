import { formatHex, formatCss } from 'culori'
import { type Color } from '../colors.ts'
import { black, white, themeShades } from '../glimmerized.ts'

const printCssRules = (hueName: string, shadeId: string, color: Color) => {
  console.log(`  --glimmerized-${hueName}-${shadeId}: ${formatHex(color)};`)
  console.log(`  --glimmerized-${hueName}-${shadeId}: ${formatCss(color)};`)
}

console.log(":root {")
printCssRules("black", "0", black)
printCssRules("white", "1", white)

const n = 15

for (let key in themeShades) {
  for (let i=1; i<=n; i++) {
    printCssRules(key, `0${i.toString(16)}`, themeShades[key](i/(n+1)))
  }
}

console.log("}")
