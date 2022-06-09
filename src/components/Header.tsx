import { ReactComponentElement, ReactElement } from "react";

const Header = (props:{}): ReactElement =>{
  const names = ["Alice", "Bob", "Eve"];
  names.forEach(name=>{name.toUpperCase()})
  return (
    <div>Header</div>
  )
}

export default Header 