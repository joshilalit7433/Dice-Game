import React, {  useEffect, useState } from 'react'
import Rules from './Rules'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Main() {

    const[number,setnumber]=useState()
    const[image,setimage]=useState(1)
    const[winnerone,setwinnerone]=useState(0)
    const[winnertwo,setwinnertwo]=useState(0)
    const[chance,setchance]=useState(12)
    const[rule,setrule]=useState("Show Rules")
    const[show,setshow]=useState(false)
    const[player,setplayer]=useState("")
    const[winner,setwinner]=useState("")
    

  

    const arr=[1,2,3,4,5,6]



    const test=()=>{
        let randomnumber
        randomnumber=Math.ceil(Math.random()*6)
        console.log(randomnumber)
        setimage(randomnumber)

         if(chance>6){
        if(randomnumber===number){
            setwinnerone(winnerone+1)
        }
        else{
            setwinnerone(winnerone-1)
        }
    }

    else if(chance===6){
        // alert("player 1 chance over")
        // alert("player 2 select any one number")
        toast("player 1 chance over",{position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })

            toast("player 2 select any one number",{position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
    }

    else if(chance>=0){
        if(randomnumber===number){
            setwinnertwo(winnertwo+1)
        }
        else{
            setwinnertwo(winnertwo-1)
        }
    }

    else {
        if(winnerone>winnertwo){
                toast("Player 1 Won The The Match 🏆 Score"+winnerone,{
                    position: "top-center",
autoClose: 10000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",

                })
        }
        else if(winnerone===winnertwo){
            toast("Match Drawn 😒",{position: "top-center",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
        }
        else{
            toast("Player 2 Won The The Match 🏆 Score"+winnertwo,{
                position: "top-center",
autoClose: 10000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
            })
        }
        
    }
        
        
        setchance(chance-1)
      
    }

   


   
  useEffect(()=>{
    toast("player 1 select any one number",{position: "top-center",
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    })
  },[])

const toggle=()=>{
    if(rule==="Show Rules"){
        setrule("Hide Rules") 
        setshow(!show)
    }
    else{
        setrule("Show Rules")
        setshow(!show)

    }

}

const reset=()=>{
    document.location.reload();


}

    
       
       
        
     



 
  return (
    <>
    <div className=" flex justify-center items-center lg:flex lg:justify-center lg:items-center">
        <p>{winner}</p>
    </div>

    <div className=" grid grid-rows-3 grid-cols-2 ml-[100px] mr-[60px] mt-[30px] mb-[20px] gap-y-2 lg:flex lg:flex-row lg:justify-center lg:items-center lg:mb-[50px] lg:mt-[100px] lg:gap-x-6 ">
        {
            arr.map((value,id)=>{
                return(
                    <div  className=" h-[70px] w-[70px] flex justify-center items-center text-[35px] border-2 border-black  rounded-md  lg:h-[70px] lg:w-[70px] lg:text-[35px] lg:flex lg:justify-center lg:items-center lg:hover:cursor-pointer" key={id} onClick={()=>{setnumber(value); chance>6? setplayer(`Player 1 Selected ${value}`):setplayer(`Player 2 Selected ${value}`)  }} >{value}</div>
                )

            })

        }
    </div>
    <div className=" mb-[20px] flex justify-center items-center lg:flex lg:justify-center lg:items-center">
        <p className="text-[30px]">{player}</p>
    </div>

   

    <div className=" flex justify-center items-center lg:flex lg:justify-center lg:items-center">
        <button onClick={test} >
            <img src={`/images/dice${image}.png`} value={chance}  alt='dice images' className=" h-[100px] w-[100px] lg:h-[100px] lg:w-[100px]" />
        </button>
    </div>

   

    <div className="mt-[10px] lg:mt-[10px]">
        <p className=" flex justify-center items-center text-[30px] lg:text-[30px] lg:flex lg:justify-center lg:items-center">Player 1 Score: {winnerone} </p>
        <p className=" flex justify-center items-center text-[30px] lg:text-[30px] lg:flex lg:justify-center lg:items-center">Player 2 Score: {winnertwo} </p>
    </div>

   
    <div className="flex justify-center items-center mt-[20px] lg:flex lg:justify-center lg:items-center lg:mt-[20px]">
        <button onClick={reset} className="text-[20px] h-[40px] w-[130px] rounded-md bg-black text-white">Reset</button>
    </div>
    <ToastContainer/>

    <div className="flex justify-center items-center mt-[20px] lg:flex lg:justify-center lg:items-center lg:mt-[20px]">
        <button onClick={toggle} className="text-[20px] h-[40px] w-[130px] rounded-md bg-black text-white">{rule}</button>
    </div>

    <div className=" text-[20px] ml-[50px] mt-[20px] flex justify-center items-center lg:flex lg:justify-center lg:items-center lg:text-[25px] lg:mt-[20px] "  >
        {!show?
        <div className="hidden">
        <Rules />
        </div>:
        <div>
        <Rules/>
        </div>}
    </div>


    </>
  )
}
