import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"

function FloorPlan(props) {
    return (
      <>
      <div className="Kitchen">
      < Kitchen/>
      </div>
      <div className="Bath">
      < Bath size="Half"/>
      </div>
      <div className="LivingRoom">
      < LivingRoom/>
      </div>
      <div className="Bedroom">
      < Bedroom bedNum={1}/> 
      </div>   
      <div className="Bedroom">
      < Bedroom bedNum={2}/> 
      </div>
      <div className="Bedroom">
      < Bedroom bedNum={3}/> 
      </div><div className="Bath">
      < Bath size="Full"/>
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