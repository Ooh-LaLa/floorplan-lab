import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"

function FloorPlan(props) {
    return (
      <>
      <div className="FloorPlan">
      < Kitchen/>
      </div>
      <div className="FloorPlan">
      < Bath/>
      </div>
      <div className="FloorPlan">
      < LivingRoom/>
      </div>
      <div className="FloorPlan">
      < Bedroom/>
      </div>
      </>
    );
  }
  


// function App() {
//   return (
//     <div className="App">
//      <FloorPlan/>
//     </div>
//   );
// }

  // Must export the component's function (or class)
  export default FloorPlan;