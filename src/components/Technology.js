import { useState } from "react";
import technologybg from "../images/assets/technology/background-technology-desktop.jpg";
import technologybgtablet from "../images/assets/technology/background-technology-tablet.jpg";

import launch from "../images/assets/technology/image-launch-vehicle-portrait.jpg"
import launchtab from "../images/assets/technology/image-launch-vehicle-landscape.jpg"
import spacesport from "../images/assets/technology/image-spaceport-portrait.jpg"
import spacesporttab from "../images/assets/technology/image-spaceport-landscape.jpg"
import capsule from "../images/assets/technology/image-space-capsule-portrait.jpg"
import capsuletab from "../images/assets/technology/image-space-capsule-landscape.jpg"

function Technology(){
    const [terminology, setTerminology] = useState("launch");
    return(
        <>
        <div className="hidden w-dvw h-dvh lg:flex items-end justify-end bg-center" style={{backgroundImage : `url(${technologybg})`}}>
            <div className="flex-col items-start justify-center w-[27rem] flex text-wrap gap-28 relative top-0 py-6 mr-32">
            <p className="uppercase text-[25px] space-x-4">
            <span className="text-[#494a53] text-2xl tracking-wide mr-4 font-bold">03</span>
                SPACE LAUNCH 101</p>
                <div className="flex items-center justify-center gap-12">
                    <div className="flex flex-col items-center justify-around h-56">
                        <div className={`rounded-full w-14 h-14 border border-white cursor-pointer flex items-center justify-center ${terminology === "launch" ? 'bg-white text-black' : 'bg-transparent text-white'}`} onClick={() => setTerminology("launch")}>1</div>
                        <div className={`rounded-full w-14 h-14 border border-white cursor-pointer flex items-center justify-center ${terminology === "spacesport" ? 'bg-white text-black' : 'bg-transparent text-white'}`} onClick={() => setTerminology("spacesport")}>2</div>
                        <div className={`rounded-full w-14 h-14 border border-white cursor-pointer flex items-center justify-center ${terminology === "capsule" ? 'bg-white text-black' : 'bg-transparent text-white'}`} onClick={() => setTerminology("capsule")}>3</div>
                    </div>
                    <div className="flex flex-col gap-8 p-6">
                    <p className=" uppercase text-[35px] leading-[1.2]"> 
                    <span className=" text-[#494a53] text-[35px] leading-[1.2] tracking-wide">THE TERMINOLOGY...</span> <br/>
                         {terminology === "launch" && "Launch vehicle"}
                         {terminology === "spacesport" && "Spaceport"}
                         {terminology === "capsule" && "Space capsule"}
                        </p>
                        <p className="text-slate-300 w-[470px] leading-[1.8] text-[18px]">
                            {terminology === "launch" && "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"}
                            {terminology === "spacesport" && "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."}
                            {terminology === "capsule" && "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}


                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-end min-w-[40rem]   ">
            <img src={launch}  alt="moon" className={` h-[30rem] ${terminology !== "launch" && 'hidden'}`}/>
                <img src={spacesport} alt="moon" className={`h-[30rem] ${terminology !== "spacesport" && 'hidden'}`}/>
                <img src={capsule} alt="moon" className={`h-[30rem] ${terminology !== "capsule" && 'hidden'}`}/>
            </div>
        </div>

        {/** teblet and mobile view */}
        <div className="lg:hidden flex flex-col items-center justify-center gap-6 0 pt-32  bg-cover overflow-y-auto overflow-x-hidden" style={{backgroundImage : `url(${technologybgtablet})`}}>
            <div className="flex-col items-center justify-center w-[27rem] flex text-wrap gap-28 relative top-0 py-6">
            <p className="uppercase md:text-[25px] text-[15px] space-x-4 md:relative md:-left-40">
            <span className="text-[#494a53] md:text-2xl text-[15px] tracking-wide mr-4 font-bold">03</span>
                SPACE LAUNCH 101</p>
                <div className="w-[480px] sm:w-[648px] md:min-w-[780px] overflow-x-hidden">
            <img src={launchtab}  alt="moon" className={`  ${terminology !== "launch" && 'hidden'} w-full  `}/>
                <img src={spacesporttab} alt="moon" className={` ${terminology !== "spacesport" && 'hidden'}`}/>
                <img src={capsuletab} alt="moon" className={` ${terminology !== "capsule" && 'hidden'} items-center`}/>
            </div>
                <div className="flex-col items-center justify-center gap-12">
                    <div className="flex items-center justify-center gap-6">
                        <div className={`rounded-full w-10 h-10 border border-white cursor-pointer flex items-center justify-center ${terminology === "launch" ? 'bg-white text-black' : 'bg-transparent text-white'}`} onClick={() => setTerminology("launch")}>1</div>
                        <div className={`rounded-full w-10 h-10 border border-white cursor-pointer flex items-center justify-center ${terminology === "spacesport" ? 'bg-white text-black' : 'bg-transparent text-white'}`} onClick={() => setTerminology("spacesport")}>2</div>
                        <div className={`rounded-full w-10 h-10 border border-white cursor-pointer flex items-center justify-center ${terminology === "capsule" ? 'bg-white text-black' : 'bg-transparent text-white'}`} onClick={() => setTerminology("capsule")}>3</div>
                    </div>
                    <div className="flex flex-col gap-8 items-center justify-center w-full">
                    <p className=" uppercase text-[20px] sm:text-[35px] leading-[1.6] text-center"> 
                    <span className=" text-[#494a53] text-[20px] sm:text-[35px] leading-[1.6] tracking-wide">THE TERMINOLOGY...</span> <br/>
                         {terminology === "launch" && "Launch vehicle"}
                         {terminology === "spacesport" && "Spaceport"}
                         {terminology === "capsule" && "Space capsule"}
                        </p>
                        <p className="text-slate-300 w-[300px] sm:w-[600px] text-center leading-[1.8] text-[14px] sm:text-[18px]">
                            {terminology === "launch" && "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"}
                            {terminology === "spacesport" && "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."}
                            {terminology === "capsule" && "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}


                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Technology;