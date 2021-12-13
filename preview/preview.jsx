import * as React from "react"
import * as ReactDOM from "react-dom"
import { palette, foreground, relativeLightness } from "../glimmerized.js"
import { oklch } from "culori"

class App extends React.Component {
  render() {
    return <section className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-1">
      { Object.values(palette).flatMap( (hue) => Object.values(hue) )
        .map( (c) => {
          return <Swatch color={c} key={c} />
        })
      }
    </section>
  }
}

class Swatch extends React.Component {
  render() {
    const swatchStyle = {
      color: foreground(this.props.color),
      background: this.props.color,
    };
    return <figure className="card bordered shadow place-items-center p-12" style={swatchStyle}>
        <figcaption>
          {this.props.color}<br/>
          {relativeLightness(this.props.color).toFixed()}%,
          {oklch(this.props.color).c.toFixed(2)},
          {oklch(this.props.color).h.toFixed(1)}°
        </figcaption>
      </figure>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
