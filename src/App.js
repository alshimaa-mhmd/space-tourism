import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import { useState } from "react";

function App() {
  const [openMenu, setOpenMenu] =  useState(false);
  return (
    <>
    <div className="flex items-center justify-between bg-inherit sm:px-6 px-0  absolute top-6 z-10 w-full overflow-x-hidden ">
      <div className="ml-10 sm:ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
      </div>

      <hr className="w-[31%] lg:absolute lg:inline hidden left-28 z-20"/>
 
      <div className="hidden sm:flex items-center justify-around text-white opacity-85 h-24 lg:w-[63%] sm:w-[85%] backdrop-blur-[180px] px-6 uppercase">
          <NavLink to="/" className="tracking-wide"><span className="mr-2 font-bold">00</span> Home</NavLink>
          <NavLink to="/destination" className="tracking-wide"><span className="mr-2 font-bold">01</span> Destination</NavLink>
          <NavLink to="/crew" className="tracking-wide"><span className="mr-2 font-bold">02</span> Crew</NavLink>
          <NavLink to="/technology" className="tracking-wide"><span className="mr-2 font-bold">03</span> technology</NavLink>
          
      </div>

      {!openMenu ? 
            <div className="sm:hidden inline absolute right-5 top-3  cursor-pointer " onClick={()=> setOpenMenu(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
            </div>
            :
        <div className="sm:hidden fixed right-0 w-[70%] flex flex-col items-start justify-evenly py-6  text-white bg-opacity-70 min-h-dvh backdrop-blur-2xl px-6 uppercase bottom-0">
        <div className="absolute right-5 top-5 border border-white rounded-full cursor-pointer bg-transparent w-10 h-10 flex items-center justify-center" onClick={()=> setOpenMenu(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
        </div>
          <NavLink to="/" className="tracking-wide" onClick={()=> setOpenMenu(false)}>00 Home</NavLink>
          <NavLink to="/destination" className="tracking-wide" onClick={()=> setOpenMenu(false)}>01 Destination</NavLink>
          <NavLink to="/crew" className="tracking-wide" onClick={()=> setOpenMenu(false)}>02 Crew</NavLink>
          <NavLink to="/technology" className="tracking-wide" onClick={()=> setOpenMenu(false)}>03 technology</NavLink>
          
      </div>}
    </div>
    <Routes>
      <Route path="/" element={ <HomePage />}/>
      <Route path="destination" element={ <Destination />}/>
      <Route path="crew" element={ <Crew />}/>
      <Route path="technology" element={ <Technology />}/>
    </Routes>
      </>
  );
}

export default App;
