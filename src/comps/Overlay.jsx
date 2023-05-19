import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

export default function Overlay(){

    const scroll = useScroll();

    const[opacityFirstSection, setOpacityFirstSection] = useState(1);
    const[opacitySecondSection, setOpacitySecondSection] = useState(1);
    const[opacityThirdSection, setOpacityThirdSection] = useState(1);
    const[opacityFourthSection, setOpacityFourthSection] = useState(1);
    const[opacityFifthSection, setOpacityFifthSection] = useState(1);
    



    useFrame(() => {
        setOpacityFirstSection(1 - scroll.range(0, 0.25/5));
        setOpacitySecondSection(scroll.curve(0.75/5, 1/5));
        setOpacityThirdSection(scroll.curve(2/5, 0.75/5));
        setOpacityFourthSection(scroll.curve((3.2)/5, 1/5));
        setOpacityFifthSection(scroll.range(4.5/5, 0.5/5));
    })


    return(
        <>
        <Scroll html>

        <div className="p-0">


        <section className="h-screen justify-end items-center flex flex-col w-screen snap-y snap-mandatory" style={{opacity: opacityFirstSection}}>
            
                    <div className="opacity-25 rounded-lg px-8 py-12 text-white font-abnes animate-pulse">
                        <h1 className="text-6xl">Scroll</h1>
                    </div>

        </section>

         
        <section className="h-screen justify-center items-start flex flex-col w-screen snap-y snap-mandatory" style={{opacity: opacitySecondSection}}>
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                        <div className="text-[#ffffff]/100">
                            <h1 className="font-abnes opacity-100 text-6xl">H<span className="text-orange-700">e</span>llo</h1>
                            <p className="text-base font-montserrat opacity-90">I'm Tahsin, a <span className="">Software Developer</span>, aspiring <span className="">Physicist</span> and a huge <span className=""> Lambo fan. </span></p>
                        </div>
                </div>
            </div>
         </section>
        
        <InterestPage opacity={opacityThirdSection} />

         <section className="h-screen justify-center items-end flex flex-col w-screen pr-10 snap-y snap-mandatory" style={{opacity: opacityFourthSection}}>
            <div className="w-1/2 flex items-center justify-center bg-gradient-to-t from-[#000000]/5 to-[#000000]/5 via-[#000000]/60 h-screen">
                <div className="w-full">
                    <div className="text-white">

                        <h1 className="text-6xl font-abnes">Pro<span className="text-orange-700">jec</span>ts</h1>

                        <ul>
                            <li><Proj title ="HashMark 1.0" description="HashMark 1.0 is a propietary server side-software which automates the bidding of hashpower in the Nicehash Hashpower Marketplace ecosystem." img="./svg/hashmark.svg"/></li>
                            <li><Proj title="Orbital, Tiktok" description="Currently working on developing high speed, efficient API severs under mentorship from Tiktok." img="./photos/tiktok.png"/></li>
                            <li><Proj title="A-Levels Science MCQ" img="./photos/mcq.png" description="A mobile MCQ app for A-Levels students to practice for their exams."/></li>  
                        </ul>

                    </div>
                </div>
            </div>
         </section>



         <section className="h-screen justify-start items-center flex flex-col w-screen snap-y snap-mandatory bg-gradient-to-t from-[#000000]/60 to-[#000000]/0" style={{opacity: opacityFifthSection}}>
            <div className="w-full flex">
                <div className="">
                    <div className="text-white w-screen">
                        <h1 className="md:text-6xl sm:text-4xl text-3xl font-abnes flex justify-center md:mt-20 sm:mt-10 mt-20"><span className="text-orange-700">Tech</span>Stacks</h1>
                        
                        <ul className="justify-center mx-0 items-center mt-5 sm:columns-6 columns-3 gap-8 px-8">
                            <li><Tech title_before="J" title_orange="a" title_after="va" src="./photos/java.png"/></li>
                            <li><Tech title_before="R" title_orange="e" title_after="act" src="./photos/react.png"/></li>
                            <li><Tech title_before="GoL" title_orange="an" title_after="g" src="./photos/GoLang.png"/></li>
                            <li><Tech title_before = "P" title_orange="y" title_after="thon" src="./photos/python.png"/></li>
                            <li><Tech title_before="" title_orange="J" title_after ="S" src="./photos/js.png"/></li>
                            <li><Tech title_before="RStud" title_orange="io" title_after="" src="./photos/r.png"/></li>
                        </ul>
                    
                    </div>
                </div>
            </div>
         </section>

        </div>

        </Scroll>
        </>
    )
}


const Tech = (props) => {
    return(
        <a href={props.link} target="_blank" className=" cursor-default">
            <div className="flex jusify-center flex-col items-center opacity-80 mb-4 w-full">
                <img src={props.src} className=" sm:w-32 w-10 rounded-full bg-none"/>
                <h2 className="font-abnes mt-4 md:text-base text-xs text-white">{props.title_before}<span className="text-orange-700">{props.title_orange}</span><span className = "text-white">{props.title_after}</span></h2>
            </div>
        </a>
    )
}


function Proj(props){
    return(
    <div className="flex flex-row my-8 p-2 ml-2 hover:text-orange-600 bg-gradient-to-r from-black to-[#ffffff]/0">
        <img className="w-32" src={props.img}/>
        <div className="flex flex-col px-3">
            <h2 className="text-xl h-1/3 font-abnes">{props.title}</h2>
            <p className="text-base h-2/3 font-montserrat text-white">{props.description}</p>
        </div>
    </div>
    ) 
}

function Interest(props){
    return(
    <div className="flex justify-center items-center  flex-col">
        <img src={props.img} className=" md:w-32 w-20"></img>
        <h2 className="md:text-xl text-xs text-center font-montserrat">{props.title}</h2>
    </div>
    )
}

function InterestPage(props){
    return(         
    <section className="h-screen justify-end items-center flex flex-col w-screen snap-y snap-mandatory" style={{opacity: props.opacity}}>
        <div className="">
            <div className="text-white w-screen items-center">
                <h1 className="md:text-7xl text-3xl font-abnes flex justify-center">Inter<span className="text-orange-700">es</span>ts</h1>
                <div>
                    <ul className=" columns-5 mx-3 md:mt-8 mt-3 md:mb-6 md-3 opacity-95">
                        <li><Interest title="Machine Learning" img="./svg/machinelearning.svg"/></li>
                        <li><Interest title="Particle Physics"  img="./svg/particle.svg"/></li>
                        <li><Interest title="Quantitative Finance" img="./svg/quant.svg"/></li>
                        <li><Interest title="Algorithm Design" img="./photos/algo_white.png"/></li>
                        <li><Interest title="API Development" img="./svg/api.svg"/></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>)
}