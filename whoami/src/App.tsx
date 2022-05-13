import { useState } from 'react'
import { Global } from './styles/global';
import './styles/reset.css';

function App() {

  return (
    <Global>
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>
      <h6>H6</h6>
      <p className="paragraph-xl">Paragrafo large</p>
      <p className="paragraph-lg">Paragrafo large</p>
      <p className="paragraph-md">Paragrafo medium</p>
      <p className="paragraph-sm">Paragrafo small</p>
      <p className="paragraph-xs">Paragrafo small</p>
      <p className="paragraph-quack">Paragrafo small</p>
      <p className="paragraph-nano">Paragrafo small</p>
    </Global>
  )
}

export default App
