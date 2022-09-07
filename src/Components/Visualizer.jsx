import React, { useEffect, useState } from 'react';
import bubblesort from '../SortingAlgos/BubbleSort';
import insertionsort from '../SortingAlgos/InsertionSort';
import quicksort from '../SortingAlgos/QuickSort';
import selectionsort from '../SortingAlgos/SelectionSort';
import "./Visualizer.css"

export default function Visualizer() {
    const [arr,setArr] = useState([]);
    const [speed,setspeed]=useState(200);
    const [arrsize,setarrsize]=useState(15);
    const [arrayGenerated,setarrayGenerated]=useState(false);
    
        function generateArr(){
            const Arr=[];
           
            for(let i=0;i<arrsize;i++){
                if(arrayGenerated){  
                    const bar =document.getElementsByClassName("bar");
                    bar[i].style.backgroundColor="blue";
                    }
            }
            
            for(let i=0;i<arrsize;i++){
                Arr.push(getRandomNumberBetween(5,50));
                console.log("in array");
            }
            setarrayGenerated(true);
            setArr(Arr);
        }
 

   function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


function BubbleSort(){
    const animation = bubblesort(arr);
    console.log(animation)

    const bar=document.getElementsByClassName("bar");

    for(let i=0;i<animation.length;i++){
        const [idx1,idx2,res]=animation[i];

        if(res==="comp"){
           setTimeout(() => {
            bar[idx1].style.backgroundColor="red";
            bar[idx2].style.backgroundColor="red";
           }, speed*i);
        }else if(res==="swap"){
            setTimeout(() => {
                const [i1,height1]=idx1;
            const [i2,height2]=idx2;
            bar[i1].style.height=`${height2}vh`;
            bar[i2].style.height=`${height1}vh`;
            bar[i1].style.backgroundColor="black";
            bar[i2].style.backgroundColor="black";
            }, i*speed);
        }
        else if(res === "none"){
            setTimeout(() => {
                bar[idx1].style.backgroundColor="blue";
                bar[idx2].style.backgroundColor="blue";
            }, i*speed);
        }else if(res ==="sorted"){
            setTimeout(() => {
                bar[idx1].style.backgroundColor="green";
            }, i*speed);
        }
    }
    console.log("sorted");
}

function InsertionSort(){
    const animation=insertionsort(arr);
    const bar =document.getElementsByClassName("bar");
    console.log(animation)
    for(let i=0;i<animation.length;i++){
        const [indx1,indx2,res]=animation[i];

        if(res==="comp"){
           setTimeout(() => {
            bar[indx1].style.backgroundColor="red";
            bar[indx2].style.backgroundColor="red";
           }, speed*i);
        }else if(res==="swap"){
            setTimeout(() => {
                const [i1,height1]=indx1;
            const [i2,height2]=indx2;
            bar[i1].style.height=`${height2}vh`;
            bar[i2].style.height=`${height1}vh`;
            bar[i1].style.backgroundColor="black";
            bar[i2].style.backgroundColor="black";
            }, i*speed);
        }
        else if(res === "none"){
            setTimeout(() => {
                bar[indx1].style.backgroundColor="blue";
                bar[indx2].style.backgroundColor="blue";
            }, i*speed);
        }else if(res ==="sorted"){
            setTimeout(() => {
                bar[indx1].style.backgroundColor="green";
            }, i*speed);
        }
    }
}

function SelectionSort(){
    const animation=selectionsort(arr);
    const bar =document.getElementsByClassName("bar");
    console.log(animation)
    for(let i=0;i<animation.length;i++){
        const [indx1,indx2,res]=animation[i];

        if(res==="comp"){
           setTimeout(() => {
            bar[indx1].style.backgroundColor="red";
            bar[indx2].style.backgroundColor="red";
           }, speed*i);
        }else if(res==="swap"){
            setTimeout(() => {
                const [i1,height1]=indx1;
            const [i2,height2]=indx2;
            bar[i1].style.height=`${height2}vh`;
            bar[i2].style.height=`${height1}vh`;
            bar[i1].style.backgroundColor="black";
            bar[i2].style.backgroundColor="black";
            }, i*speed);
        }
        else if(res === "none"){
            setTimeout(() => {
                bar[indx1].style.backgroundColor="blue";
            }, i*speed);
        }else if(res ==="sorted"){
            setTimeout(() => {
                bar[indx1].style.backgroundColor="green";
            }, i*speed);
        }
    }
    console.log(arr);
}

function quickSort(){
    const animation=quicksort(arr);
    const bar =document.getElementsByClassName("bar");
    console.log(animation)
    for(let i=0;i<animation.length;i++){
        const [indx1,indx2,res]=animation[i];

        if(res==="comp"){
           setTimeout(() => {
            bar[indx1].style.backgroundColor="red";
           }, speed*i);
        }else if(res==="swap"){
            setTimeout(() => {
                const [i1,height1]=indx1;
            const [i2,height2]=indx2;
            bar[i1].style.height=`${height2}vh`;
            bar[i2].style.height=`${height1}vh`;
            bar[i1].style.backgroundColor="black";
            bar[i2].style.backgroundColor="black";
            }, i*speed);
        }else if(res=== "pivot"){
            setTimeout(() => {
                bar[indx1].style.backgroundColor="skyblue";
            }, i*speed);
        }
        else if(res === "none"){
            setTimeout(() => {
                bar[indx1].style.backgroundColor="blue";
                bar[indx2].style.backgroundColor="blue";
            }, i*speed);
        }else if(res ==="sorted"){
            setTimeout(() => {
                bar[indx1].style.backgroundColor="green";
            }, i*speed);
        }
    }
    console.log(arr);   
}

  return (
    <>
    <h1>Sorting Algos</h1>
    <div className="arr-Box">
        {arr.map((x,i)=>(
            <div className="bar" key={i} style={{height:`${x}vh`, backgroundColor:"blue"}}></div>
        ))}
    </div>
    <button onClick={()=>generateArr()}>Generate Arr</button>
    
    <button onClick={()=>BubbleSort()}>bubblesort</button>
    <button onClick={()=>InsertionSort()}>insertionsort</button>
    <button onClick={()=>SelectionSort()}>selectionsort</button>
    <button onClick={()=>quickSort()}>quickSort</button>
    </>
  )
}
