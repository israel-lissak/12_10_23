import { useAppDispatch } from "./app/hooks"
import { selectAnimal } from "./app/animalSlice"



function Right() {

  const dispatch = useAppDispatch()

  function handlClick(animal: string) {
      dispatch(selectAnimal(animal))
  }

  return (
    <div className="right-left">
      <button style={{backgroundColor: 'green'}} onClick={()=>handlClick('Dog')}>Dog</button>
      <button style={{backgroundColor: 'green'}} onClick={()=>handlClick('Cat')}>Cat</button>
      <button style={{backgroundColor: 'green'}} onClick={()=>handlClick('Lion')}>Lion</button>
    </div>
  )
}

export default Right