import Oven from "./Oven"
import Sink from "./Sink"

function Kitchen(props) {
    return (
      <>
        <h1>Kitchen</h1>
        <div className="Kitchen">
      < Oven oven="Oven" />
      </div>
      <div className="Kitchen">
      < Sink sink="Sink"/>
      </div>
      </>
    );
  }
  
  // Must export the component's function (or class)
  export default Kitchen;