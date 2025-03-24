import React from "react";
import ReactDOM from "react-dom/client";
import { formatHex, formatCss } from 'culori'
import { black, white, themeColors, themeShades } from '../glimmerized'
import { Swatches } from './swatches'
import { contrast } from '../colors'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <section className="app">
    {
      [
        { shades: themeShades.grey, n: 31 },
        { shades: themeShades.red, n: 15 },
        { shades: themeShades.blue, n: 15 },
        { shades: themeShades.purple, n: 3 },
        { shades: themeShades.green, n: 3 },
        { shades: themeShades.yellow, n: 3 },
      ].map(({shades, n}, i) =>
        <div key={i}>
          <Swatches
            colors={[...Array(n+2).keys()].map((i) => {
              const color = shades(i / (n+1))
              return {
                id: `${i}/${n+1}`,
                color: color,
                data: [formatHex(color), formatCss(color)],
                samples: [
                  { background: color, color: black, text: contrast(color, black).toFixed(0) },
                  { background: black, color: color, text: contrast(color, black).toFixed(0) },
                  { background: color, color: white, text: contrast(color, white).toFixed(0) },
                  { background: white, color: color, text: contrast(color, white).toFixed(0) },
                ]
              }
            })}
            black={black}
            white={white}
            selectedIndex={((n - 1) / 2)}
          />
        </div>
      )}
  </section>
);
