import React from 'react'
import logo from '../assets/ic-logo.svg'
import { AtlasButton } from '@diligentcorp/atlas-react'

const App = () => (
  <div>
    <h1>My App</h1>
    <img src={logo} alt="logo"/>
    <AtlasButton>Just Click Me</AtlasButton>
  </div>
)

export default App
