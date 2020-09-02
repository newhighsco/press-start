import dynamic from 'next/dynamic'

const icon = name => {
  if (!name) return null

  try {
    return dynamic(() =>
      import(`./${name}.svg`).then(({ ReactComponent }) => ReactComponent)
    )
  } catch {
    return null
  }
}

export default icon
