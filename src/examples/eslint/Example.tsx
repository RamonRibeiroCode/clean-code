import { useCallback, useEffect, useMemo, useState } from 'react'

const products = ['Banana', 'Maça']

const Example = () => {
  const [search, setSearch] = useState('')

  const firstProduct = products[0]

  const getData = useCallback(() => {
    if (search === 'roupas') {
      console.log('Entrou em roupas')
    }
  }, [search])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div>
      <h1>Ola</h1>

      <button onClick={getData}>Buscar</button>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

const Example1 = () => {
  const [search, setSearch] = useState('')

  const [firstProduct] = products

  firstProduct

  const getData = useCallback(() => {
    if (search === 'roupas') {
      console.log('Entrou em roupas')
    }
  }, [search])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <div>
      <h1>Ola</h1>

      <button onClick={getData}>Buscar</button>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
