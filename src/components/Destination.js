import { useState } from "react";
import destinationbg from "../images/assets/destination/background-destination-desktop.jpg"
import destinationbgtablet from "../images/assets/destination/background-destination-tablet.jpg"

import moon from "../images/assets/destination/image-moon.png";
import mars from "../images/assets/destination/image-mars.png";
import europa from "../images/assets/destination/image-europa.png";
import titan from "../images/assets/destination/image-titan.png";
function Destination(){
    const [planet, setPlanet] = useState("moon");

    return(
        <>
        <div className="hidden w-dvw h-dvh lg:flex items-end justify-center gap-14 pb-10 overflow-x-hidden bg-center " style={{backgroundImage : `url(${destinationbg})`}}>
            <div className="flex-col items-start justify-center w-[27rem] flex text-wrap gap-8">
                <p className="uppercase text-[25px] space-x-4"><span className="text-[#494a53] text-2xl tracking-wide mr-3 font-bold">01</span>
                PICK YOUR DESTINATION</p>
                <img src={moon}  alt="moon" className={`w-[80%] ${planet !== "moon" && 'hidden'}`}/>
                <img src={mars} alt="moon" className={`w-[80%] ${planet !== "mars" && 'hidden'}`}/>
                <img src={europa} alt="moon" className={`w-[80%] ${planet !== "europa" && 'hidden'}`}/>
                <img src={titan} alt="moon" className={`w-[80%] ${planet !== "titan" && 'hidden'}`}/>
            </div>
            <div className=" w-[27rem] flex flex-col gap-10">
                <div>
                   <ul className="decoration-inherit flex justify-center gap-6 uppercase">
                    <li className={`cursor-pointer ${planet === "moon" && 'border-b-4 border-white'}`} onClick={ () => setPlanet("moon")}>moon</li>
                    <li className={`cursor-pointer ${planet === "mars" && 'border-b-4 border-white'}`} onClick={() => setPlanet("mars")}>mars</li>
                    <li className={`cursor-pointer ${planet === "europa" && 'border-b-4 border-white'}`} onClick={()=> setPlanet("europa")}>europa</li>
                    <li className={`cursor-pointer ${planet === "titan" && 'border-b-4 border-white'}`} onClick={()=> setPlanet("titan")}>titan</li>
                   </ul>
                </div>
                <h2 className="uppercase text-[80px] leading-[0.7]">{planet}</h2>
                <p className="text-[#9498b4]">
                {planet === "moon" && " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."}
                {planet === "mars" && " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"}
                {planet === "europa" && "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."}
                {planet === "titan" && " The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."}
                </p>
                <hr />
                <div className="flex items-center justify-between text-center">
                    <p className=" uppercase text-[#9498b4]">avg. distance <br /> 
                        <span className=" uppercase text-white text-4xl">
                            {planet === "moon" && '384,400 km'}
                            {planet === "mars" && '225 mil. km'}
                            {planet === "europa" && '628 mil. km'}
                            {planet === "titan" && '1.6 bil. km'}
                        </span></p>
                    <p className=" uppercase text-[#9498b4]">est. travel time <br />
                         <span className=" uppercase text-white text-4xl"> 
                            {planet === "moon" && '3 days'}
                            {planet === "mars" && '9 months'}
                            {planet === "europa" && '3 years'}
                            {planet === "titan" && '7 years'}
                        </span> </p>
                </div>
            </div>
        </div>


            {/* tablet and mobile view */}
            <div className="lg:hidden h-[1100px] md:h-[1300px] flex flex-col items-center justify-center sm:gap-10 gap-20 pb-10 pt-32  bg-cover overflow-y-auto" style={{backgroundImage : `url(${destinationbgtablet})`}}>
            <div className="flex-col items-center justify-center flex text-wrap gap-8">
                <p className="uppercase md:text-[25px] text-[15px] space-x-4 md:relative md:-left-40"><span className="text-[#494a53] text-2xl tracking-wide mr-3 font-bold">01</span>
                PICK YOUR DESTINATION</p>
                <img src={moon}  alt="moon" className={`w-[60%] md:w-[80%] ${planet !== "moon" && 'hidden'}`}/>
                <img src={mars} alt="moon" className={`w-[60%] md:w-[80%] ${planet !== "mars" && 'hidden'}`}/>
                <img src={europa} alt="moon" className={`w-[60%] md:w-[80%] ${planet !== "europa" && 'hidden'}`}/>
                <img src={titan} alt="moon" className={`w-[60%] md:w-[80%] ${planet !== "titan" && 'hidden'}`}/>
            </div>
            <div className="flex flex-col gap-10 items-center justify-normal">
                <div>
                   <ul className="decoration-inherit flex justify-around sm:justify-center gap-4 sm:gap-6 uppercase text-[15px] sm:text-sm">
                    <li className={`cursor-pointer ${planet === "moon" && 'border-b-4 border-white'}`} onClick={ () => setPlanet("moon")}>moon</li>
                    <li className={`cursor-pointer ${planet === "mars" && 'border-b-4 border-white'}`} onClick={() => setPlanet("mars")}>mars</li>
                    <li className={`cursor-pointer ${planet === "europa" && 'border-b-4 border-white'}`} onClick={()=> setPlanet("europa")}>europa</li>
                    <li className={`cursor-pointer ${planet === "titan" && 'border-b-4 border-white'}`} onClick={()=> setPlanet("titan")}>titan</li>
                   </ul>
                </div>
                <h2 className="uppercase text-[50px] leading-[0.7] text-center">{planet}</h2>
                <p className="text-[#9498b4] text-center w-[90%] sm:w-[430px] md:w-[500px]">
                {planet === "moon" && " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."}
                {planet === "mars" && " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"}
                {planet === "europa" && "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."}
                {planet === "titan" && " The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."}
                </p>
                <div className="w-full border-1 flex items-center justify-center">
                <hr className="w-[80%] opacity-60"/>
                </div>
                <div className="flex-col items-center justify-between gap-6 text-center flex md:flex-row md:justify-between w-full">
                    <p className=" uppercase text-[#9498b4]">avg. distance <br /> 
                        <span className=" uppercase text-white text-4xl">
                            {planet === "moon" && '384,400 km'}
                            {planet === "mars" && '225 mil. km'}
                            {planet === "europa" && '628 mil. km'}
                            {planet === "titan" && '1.6 bil. km'}
                        </span></p>
                    <p className=" uppercase text-[#9498b4]">est. travel time <br />
                         <span className=" uppercase text-white text-4xl"> 
                            {planet === "moon" && '3 days'}
                            {planet === "mars" && '9 months'}
                            {planet === "europa" && '3 years'}
                            {planet === "titan" && '7 years'}
                        </span> </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Destination;