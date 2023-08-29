import { Card } from '@tremor/react'
import './App.css'

type Sample = {
  sampleProp_1: string,
  sampleProp_2: number,
}

function App() {
  const sample: Sample = {
    sampleProp_1: 'sample',
    sampleProp_2: 10
  };

  return (
    <>
      <Card>
        <h1>Hello there code is clean!</h1>
        <p>{sample.sampleProp_1}</p>
        <p>{sample.sampleProp_2}</p>
      </Card>
    </>
  )
}

export default App