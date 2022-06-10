import type { ReactElement } from 'react'
import {} from 'react'

const Header = (): ReactElement => {
  const names = ['Alice', 'Bob', 'Eve']
  names.forEach(name => {
    name.toUpperCase()
  })
  return <div>Header</div>
}

export default Header
