import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "./style.css"
import React from "react";
class Block extends React.Component{
    render(){
      return(
        <div>
          <Router>
          <ul>
         <li> Hotel Me</li>
         <li> Empty</li>
         <li>Booked</li>
         <li>Servicing</li>
         <li><button>Login</button></li>
          </ul>
          <Routes>
            <Route ></Route>
            <Route ></Route>
            <Route ></Route>
            <Route ></Route>
            <Route></Route>
  
          </Routes>
          </Router>
          <div class="app1">
             <h1>Hotel HTML Template</h1>
          </div>
          <div class="app2">
            <h4>Empty Romms</h4>

            <h1>1</h1>
          </div>
         <div class="app3">
            <h4>Booked</h4>
            <h1>2</h1>
         </div>
         <div class="app4">
            <h4>Servicing</h4>
            <h1>3</h1>
         </div>
         <div class="app5">
            <h4>Booked Rooms</h4>
            <h1>Book</h1>
         </div>

         <article class="app8">
         
        
              <div class="app6">
               
               </div>
              <div class="app7">
           <h1>Discover Our<br></br>
                History
               </h1>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat hic nesciunt reprehenderit dolorem inventore delectus fugiat eum iusto dictaLorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat hic nesciunt reprehenderit dolorem inventore delectus fugiat eum iusto dictaLorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat hic nesciunt reprehenderit dolorem inventore delectus fugiat eum iusto dictaLorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores placeat hic nesciunt reprehenderit dolorem inventore delectus fugiat eum iusto dicta</p>
                 < button>Apply</button>
               </div>
         </article>

         
        <section class="main" >
           <p>Our Best Rooms</p>
           <section class="parent">
           <div class="child1">
                <img src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Bedroom" class="section1Img"></img>
                <div class="room-description">
                    <h2>small Room</h2>
                    <span>room1</span>
                    <span>room2</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, asperiores?</p>
                    <button>Lorem, ipsum dolor.</button>
                </div>
            </div>
            <div>
                <div class="child2">
                     <div>
                        <img src="https://www.dallasdesignerfurniture.com/images/AspenHomeIMA-412ManchesterBedroom.jpg" ></img>
                        <img src="https://www.dallasdesignerfurniture.com/images/AspenHomeIMA-412ManchesterBedroom.jpg" ></img>
                     </div>
                      <div>
                        <img src="https://www.dallasdesignerfurniture.com/images/AspenHomeIMA-412ManchesterBedroom.jpg" ></img>
                        <img src="https://www.dallasdesignerfurniture.com/images/AspenHomeIMA-412ManchesterBedroom.jpg" ></img>
                      </div>
                </div>
            </div>
           </section>
        </section>

         
        <div class="para1">
         <h1 style={{textAlign:"center", padding:"600px", color:"wheat"}}>Hotel Services</h1>

        </div>
        <div class="para2">
            <h2 class="para3">$20.00</h2>

            <h4 class="para4">servicing rooms</h4>
        </div>
        <div class="para5">
            <h2 class="para6">$40.00</h2>

            <h4 class="para7">booked rooms</h4>
        </div>
        <div class="para8">
            <h2 class="para9">$60.00</h2>

            <h4 class="para10">empty rooms</h4>
        </div>
        <div class="para11">
            <h2 class="para12">$80.00</h2>

            <h4 class="para13">confirm rooms</h4>
         </div>
        
        
        </div>
         
        
        
      )
    }
  }
  export default Block;
       

