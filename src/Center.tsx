import Right from "./Right"
import Left from "./Left"
import Bottom from "./Bottom"

function Center() {
  return (
    <div id="center">
      <div id="rl">
        <Right />
        <Left />
      </div>
        <Bottom />
    </div>
  )
}

export default Center