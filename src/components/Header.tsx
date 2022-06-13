import type { ReactElement } from 'react'
import styled from 'styled-components'

const DivContainer = styled.div`
  background: white;
`

const Header = (): ReactElement => {
  const names = ['Alice', 'Bob', 'Eve']
  names.forEach(name => {
    name.toUpperCase()
  })
  return <DivContainer>Header</DivContainer>
}

export default Header
