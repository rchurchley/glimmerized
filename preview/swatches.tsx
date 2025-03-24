import { formatCss } from 'culori'
import { useState } from 'react'
import { Color, mostContrastingColor } from '../colors'
import React from 'react'

type Sample = {
  color: Color
  background: Color
  text: string
}

type ColorData = {
  id: string
  color: Color
  data?: string[]
  samples?: Sample[]
}

const swatchStyle = (color: Color, black: Color, white: Color) => {
  return {
    background: formatCss(color),
    color: formatCss(mostContrastingColor(color, [black, white]))
  }
}

export const Swatches = ({ colors, black, white, selectedIndex = 0 }: { colors: ColorData[], black: Color, white: Color, selectedIndex?: number }) => {
  let [selected, setSelected] = useState(colors[selectedIndex])
  return <div className="swatches">
    <FullSwatch data={selected} black={black} white={white} />
    {colors &&
      <ul>
        {colors.map((color, index) =>
          <li key={index}>
            <MiniSwatch data={color} black={black} white={white} select={() => setSelected(color)} />
          </li>
        )}
      </ul>
    }
  </div>
}

export const FullSwatch = ({ data, black, white }: { data: ColorData, black: Color, white: Color }) => {
  return <div className="swatch full-swatch" style={swatchStyle(data.color, black, white)}>
    <header>{data.id}</header>
    {data.data &&
      <section>
        {data.data.map((line, index) => <p key={index}>{line}</p>)}
      </section>
    }
    {data.samples &&
      <footer>
        {data.samples.map((sample, index) =>
          <div
            key={index}
            style={{ background: formatCss(sample.background), color: formatCss(sample.color) }}
          >
            {sample.text}
          </div>
        )}
      </footer>
    }
  </div>
}

export const MiniSwatch = ({ data, black, white, select }: { data: ColorData, black: Color, white: Color, select: () => void }) => {
  return <div className="swatch mini-swatch" style={swatchStyle(data.color, black, white)} onClick={select}>
    {data.id}
  </div>
}
