import crewbg from "../images/assets/crew/background-crew-desktop.jpg";
import crewbgtablet from "../images/assets/crew/background-crew-tablet.jpg";

import douglas from "../images/assets/crew/image-douglas-hurley.png";
import mark from "../images/assets/crew/image-mark-shuttleworth.png";
import victor from "../images/assets/crew/image-victor-glover.png";
import anousheh from "../images/assets/crew/image-anousheh-ansari.png";
import { useState } from "react";

function Crew(){
    const [crew , setCrew] = useState("douglas")
    return(
        <>
        <div className="hidden w-dvw h-dvh lg:flex items-end justify-center gap-36 overflow-x-hidden bg-cover" style={{backgroundImage : `url(${crewbg})`}}>
            <div className="flex-col items-start justify-center w-[27rem] flex text-wrap gap-16 relative top-0 py-12">
                <p className="uppercase text-[25px] space-x-4">
                    <span className="text-[#494a53] text-2xl mr-4 tracking-wide font-bold">02</span>
                MEET YOUR CREW</p>
                <p className=" uppercase text-[35px] leading-[1.2]"> 
                    <span className=" text-[#494a53] text-[35px] leading-[1.2] tracking-wide font-semibold">
                    {crew === "douglas" && 'Commander'}
                    {crew === "mark" && 'Mission Specialist'}
                    {crew === "victor" && 'Pilot'}
                    {crew === "anousheh" && 'Flight Engineer'}
                    </span>
                    <br />
                   {crew === "douglas" && 'Douglas Hurley'}
                   {crew === "mark" && 'Mark Shuttleworth'}
                    {crew === "victor" && 'Victor Glover'}
                    {crew === "anousheh" && 'Anousheh Ansari'}
                </p>
                <p className="text-slate-300 w-[490px] text-[20px]">
                   {crew === "douglas" && 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'}
                   {crew === "mark" && 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'}
                    {crew === "victor" && 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'}
                    {crew === "anousheh" && 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'}
                    
                    </p>
                <div className="flex items-center justify-between w-24">
                    <div className={`w-4 rounded-full bg-white h-4 cursor-pointer hover:opacity-100 ${crew === "douglas" ? 'opacity-100' : 'opacity-30'}`} onClick={()=> setCrew("douglas")}></div>
                    <div className={`w-4 rounded-full bg-white h-4 cursor-pointer hover:opacity-100 ${crew === "mark" ? 'opacity-100' : 'opacity-30'}`} onClick={()=> setCrew("mark")}></div>
                    <div className={`w-4 rounded-full bg-white h-4 cursor-pointer hover:opacity-100 ${crew === "victor" ? 'opacity-100' : 'opacity-30'}`} onClick={()=> setCrew("victor")}></div>
                    <div className={`w-4 rounded-full bg-white h-4 cursor-pointer hover:opacity-100 ${crew === "anousheh" ? 'opacity-100' : 'opacity-30'}`} onClick={()=> setCrew("anousheh")}></div>
                </div>
            </div> 
            <div className=" w-[27rem] text-center">
            <img src={douglas}  alt="moon" className={`w-[80%] ${crew !== "douglas" && 'hidden'}`}/>
                <img src={mark} alt="moon" className={`w-[80%] ${crew !== "mark" && 'hidden'}`}/>
                <img src={victor} alt="moon" className={`w-[80%] ${crew !== "victor" && 'hidden'}`}/>
                <img src={anousheh} alt="moon" className={`w-[80%] ${crew !== "anousheh" && 'hidden'}`}/>
            </div>
        </div>
        {/** tablet and mobile view */}
        <div className="lg:hidden flex flex-col items-center justify-center gap-6 0 pt-32  bg-cover overflow-y-auto" style={{backgroundImage : `url(${crewbgtablet})`}}>
            <div className="flex-col items-center justify-center flex text-wrap gap-8 relative top-0 py-12">
                <p className="uppercase md:text-[25px] text-[15px] space-x-4 md:relative md:-left-40">
                    <span className="text-[#494a53] text-xl mr-4 tracking-wide font-bold">02</span>
                MEET YOUR CREW</p>
                <p className=" uppercase text-[25px] leading-[1.2] text-center"> 
                    <span className=" text-[#494a53] text-[25px] leading-[1.2] tracking-wide font-semibold">
                    {crew === "douglas" && 'Commander'}
                    {crew === "mark" && 'Mission Specialist'}
                    {crew === "victor" && 'Pilot'}
                    {crew === "anousheh" && 'Flight Engineer'}
                    </span>
                    <br />
                   {crew === "douglas" && 'Douglas Hurley'}
                   {crew === "mark" && 'Mark Shuttleworth'}
                    {crew === "victor" && 'Victor Glover'}
                    {crew === "anousheh" && 'Anousheh Ansari'}
                </p>
                <p className="text-slate-300 text-center w-[400px] text-[18px]">
                   {crew === "douglas" && 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'}
                   {crew === "mark" && 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'}
                    {crew === "victor" && 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'}
                    {crew === "anousheh" && 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'}
                    
                    </p>
                <div className="flex items-center justify-between w-24">
                    <div className={`w-4 rounded-full bg-white h-4 cursor-pointer hover:opacity-100 ${crew === "douglas" ? 'opacity-100' : 'opacity-30'}`} onClick={()=> setCrew("douglas")}></div>
                    <div className={`w-4 rounded-full bg-white h-4 cursor-pointer hover:opacity-100 ${crew === "mark" ? 'opacity-100' : 'opacity-30'}`} onClick={()=> setCrew("mark")}></div>
                    <div className={`w-4 rounded-full bg-white h-4 cursor-pointer hover:opacity-100 ${crew === "victor" ? 'opacity-100' : 'opacity-30'}`} onClick={()=> setCrew("victor")}></div>
                    <div className={`w-4 rounded-full bg-white h-4 cursor-pointer hover:opacity-100 ${crew === "anousheh" ? 'opacity-100' : 'opacity-30'}`} onClick={()=> setCrew("anousheh")}></div>
                </div>
            </div> 
            <div className=" w-[27rem] flex items-center justify-center">
            <img src={douglas}  alt="moon" className={`w-[80%] ${crew !== "douglas" && 'hidden'}`}/>
                <img src={mark} alt="moon" className={`w-[80%] ${crew !== "mark" && 'hidden'}`}/>
                <img src={victor} alt="moon" className={`w-[80%] ${crew !== "victor" && 'hidden'}`}/>
                <img src={anousheh} alt="moon" className={`w-[80%] ${crew !== "anousheh" && 'hidden'}`}/>
            </div>
        </div>
        </>
    )
}

export default Crew;