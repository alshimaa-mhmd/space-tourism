import { NavLink } from "react-router-dom";
import homebg from "../images/assets/home/background-home-desktop.jpg"
import homebgtablet from "../images/assets/home/background-home-tablet.jpg"
function HomePage(){

    return(
        <>
        <div className="hidden w-dvw h-dvh md:flex items-end justify-around pb-10 overflow-y-auto bg-center scrollbar-none " style={{backgroundImage : `url(${homebg})`}}>
            <div className="flex-col items-start justify-center w-[27rem] flex text-wrap">
                <p className=" text-[#9498b4] text-[30px] uppercase text-center">
                so, you want to travel to  <br /><span className="tracking-wider text-[150px] text-white text-left uppercase leading-[1.2]">Space</span>
                </p>
               
                <p className="text-[#9498b4] w-[475px] leading-8">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className=" ">
                <NavLink to="/destination" className="w-[220px] h-[220px] bg-white rounded-[50%] flex items-center justify-center uppercase cursor-pointer text-3xl text-black">Explore</NavLink>
            </div>
        </div>

        <div className="md:hidden  overflow-x-hidden flex flex-col items-center justify-evenly gap-12 py-10 h-[1020px]" style={{backgroundImage : `url(${homebgtablet})`}}>
        <div className="flex-col items-center justify-center flex text-center gap-3 sm:gap-7">
                <p className=" text-[#9498b4] text-[18px] sm:text-[25px] uppercase text-center">
                so, you want to travel to  <br /><span className="tracking-wider text-[80px] sm:text-[100px] text-white text-left uppercase leading-[1.2] py-4">Space</span>
                </p>
               
                <p className="text-[#9498b4] w-[90%] text-[15px] sm:text-[25px]  leading-7 sm:leading-8">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>
            <div className="">
                <NavLink to="/destination" className="w-[180px] h-[180px] bg-white rounded-[50%] flex items-center justify-center uppercase cursor-pointer text-3xl text-black">Explore</NavLink>
            </div>
        </div>
        </>
    )
}

export default HomePage;