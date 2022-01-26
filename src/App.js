import React from "react"
import loadable from "@loadable/component"

const Test = loadable(() => import("./Test"))
const currEnv = process.env.NODE_ENV

export const App = () => {
  return (
    <div>
      <h1>
        React-webpack running <span>{currEnv}</span> Environment
      </h1>
      <Test />
    </div>
  )
}
