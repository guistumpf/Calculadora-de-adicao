import React, { use, useState } from "react";

export default function Soma(){

const [input,inputvalue] = useState<number>(0)
const [input2,input2value] = useState<number>(0)


const result: number = input + input2 

function mudanca1(e: React.ChangeEvent<HTMLInputElement>){
inputvalue(Number(e.target.value))
}
function mudanca2(e: React.ChangeEvent<HTMLInputElement>) {
input2value(Number(e.target.value));
}


return(
    <div>
        <h1>Soma</h1>
        <input type="number" value={input} id="input1" onChange={mudanca1}/>
    <h2>+</h2>
    <input type="number" value={input2} id="input2" onChange={mudanca2}/>
   <h3>{result}</h3>
    </div>
)


}
