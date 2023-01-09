import { useCallback, useEffect } from 'react'

export const ExampleWrong = () => {
  const getData = () => {
    const response = fetch('/')

    console.log(response)
  }

  useEffect(() => {
    getData()
  }, [getData])

  return <div></div>
}

export const ExampleCorrect = () => {
  const getData = useCallback(() => {
    const response = fetch('/')

    console.log(response)
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return <div></div>
}
