import React from "react";
import ReactDOM from "react-dom/client";
import { formatHex, formatCss } from 'culori'
import { black, white, themeShades } from '../glimmerized'
import { Swatches } from './swatches'
import { contrast } from '../colors'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <section className="app">
    {
      [
        { shades: themeShades.grey, n: 31, ends: true},
        { shades: themeShades.red, n: 7 },
        { shades: themeShades.blue, n: 7 },
        { shades: themeShades.purple, n: 7 },
        { shades: themeShades.green, n: 7 },
        { shades: themeShades.yellow, n: 7 },
      ].map(({shades, n, ends}, i) =>
        <div key={i}>
          <Swatches
            colors={[...Array(n+2).keys()].map((i) => {
              if (!ends && (i == 0 || i == n+1)) { return null }
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
            }).filter(x => !!x)}
            black={black}
            white={white}
            selectedIndex={((n - 1) / 2)}
          />
        </div>
      )}
  </section>
);
