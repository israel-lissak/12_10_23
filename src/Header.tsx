import { useAppSelector } from "./app/hooks"


function Header() {

    const animal = useAppSelector((state) => state.animal)

  return (
    <div id="header">
      <h1>The selected animal: {`${animal.value}`}</h1>
    </div>
  )
}

export default Header