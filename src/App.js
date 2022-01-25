import React from "react"
const currEnv = process.env.NODE_ENV

export const App = () => {
  return (
    <h1>
      React-webpack running <span>{currEnv}</span> Environment
    </h1>
  )
}
