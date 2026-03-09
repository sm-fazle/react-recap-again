import React, { useState } from 'react';

const Batsman = () => {

    const[runs, setRuns]=useState(0);
    // six
    const[sixes, setsixes]=useState(0);
    // four
    const [fours, setFour]=useState(0);

 const handleSingle=()=>{
    const updateSingle=runs+1;
    setRuns(updateSingle)
 }
  
 const handleFour=()=>{
    const four=runs+4;
    setRuns(four);
    const countFour=fours+1;
    setFour(countFour);
 }
 const handleSix=()=>{
 const six=runs+6;
    setRuns(six);
    const countSix=sixes+1;
    setsixes(countSix);

 }




    return (
        <div>
            <h1 style={{border:'3px solid red' , outline:'none',
            padding:'10px',width:'700px',height:'50px',backgroundColor:'aqua'}} >batsman runs</h1>
            <p style={{textTransform:'uppercase', color:'white', fontSize:'40px',
            padding:'10px',width:'700px',height:'50px',backgroundColor:'gray',}}> score --- {runs}</p>
             <h2>sixes: {sixes}</h2>
             <h2>fours: {fours}</h2>

             {
                runs>=50 && runs<56 && <h1>congratulations🥳 you scored 50</h1>
             }
             {
                runs>=100 && runs<106 && <h1>congratulations🥳 you scored 100 <br /> <span style={{color:'green'}}>total sixes:{sixes} and four :{fours}</span></h1>
             }
             {
                runs>=200 && runs<206 && <h1>congratulations🥳 you scored 200 <br /> <span style={{color:'green'}}>total sixes:{sixes} and four :{fours}</span></h1>
             }
             {
                runs>=300 && runs<=306 && <h1>congratulations🥳 you scored 300 <br /> <span style={{color:'green'}}>total sixes:{sixes} and four :{fours}</span></h1>
             }

          <div style={{display:'flex', gap:'50px', justifyContent:'center'}}>
              <button onClick={handleSingle} style={{backgroundColor:'aqua', textTransform:'uppercase'}}>single</button>
            <button onClick={handleFour} style={{backgroundColor:'blue', color:'white', textTransform:'uppercase'}}>four</button>
            <button onClick={handleSix} style={{backgroundColor:'green', color:'white', textTransform:'uppercase'}}>six</button>
          </div>
        </div>
    );
};

export default Batsman;