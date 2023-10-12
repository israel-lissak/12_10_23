import { useAppDispatch } from "./app/hooks"
import { selectAnimal } from "./app/animalSlice"



function Left() {

  const dispatch = useAppDispatch()

  function handlClick(animal: string) {
      dispatch(selectAnimal(animal))
  }


  return (
    <div className="right-left">
      <button style={{backgroundColor: 'orange'}} onClick={()=>handlClick('Cow')}>Cow</button>
      <button style={{backgroundColor: 'orange'}} onClick={()=>handlClick('Horse')}>Horse</button>
      <button style={{backgroundColor: 'orange'}} onClick={()=>handlClick('Tiger')}>Tiger</button>
    </div>
  )
}

export default Left