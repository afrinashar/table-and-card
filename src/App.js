import AddUser from './Components/Add'
import Cards from './Components/Cards'
import Tables from './Components/Tables'
import { BsListUl,BsFillPersonPlusFill,BsFillBrightnessHighFill,BsFillMoonFill } from "react-icons/bs"
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes,Outlet,Link} from "react-router-dom" 
import DeleteUser from './Components/Delete'
import UpdateUser from './Components/Update'
function App() {
  return (
    <>
    <div className="navbar navbar-expand bg-primary ">
    <div
                   
                    className="form-check form-switch d-flex  p-1 justify-content-end"
                  ><BsFillBrightnessHighFill/>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                     
                    ></input><BsFillMoonFill/>
                  </div>
    </div>
     <div className='navbar'>
        <ul className="nav">
          
          
            <li className="nav-item">
            <input className="search"  type ="search" >
                    </input>
            </li>
            <li className="nav-item">
             <Link to={"add"}  className="nav-link" > <Button className=" md-2"  variant="outline-primary"><BsFillPersonPlusFill/> Create Profile 
               
               </Button></Link>
            </li>
             <li className="nav-item">
            <Link to={"cards"} className="nav-link">
               <BsListUl/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"tables"} className="nav-link">
                tab
              </Link>
            </li>
          
          
        </ul> 
        </div>
        <div className="container mt-3">
          <Routes>
            
            <Route exact path="add" element={<AddUser/>} />
            <Route exact path="cards" element={<Cards/>} />
            <Route exact path="tables" element={<Tables/>} />
           < Route exact path="delete" element={<DeleteUser/>} />  
           <Route path='update' element={<UpdateUser/>}/>
          </Routes>
          <Outlet/>
        </div>
    
    </>
  );
}

export default App;
