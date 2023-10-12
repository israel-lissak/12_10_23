import { useAppDispatch } from "./app/hooks"
import { selectAnimal } from "./app/animalSlice"

function Bottom() {

  const dispatch = useAppDispatch()

  function handlClick(animal: string) {
      dispatch(selectAnimal(animal))
  }

  return (
    <div id="bottom">
      <input type="text" placeholder="Add new animal" onChange={(e) => handlClick(e.target.value)}/>
    </div>
  )
}

export default Bottom