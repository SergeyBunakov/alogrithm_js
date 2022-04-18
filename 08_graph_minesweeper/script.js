"use strict";
console.log("=== Графи на прикладі Minesweeper ===");

 function App({grid}) { 
     return <div> 
         {grid.map((row, i) => ( 
             <div key={i}> 
                 {row.map((val, j) => ( 
                     <div key={i * row.length + j} className={`cell ${val ? "cell-red" : "cell-green"}`} />
                 ))} 
             </div> 
         ))} 
         </div> 
 }
 


 ReactDOM.render(<App.grid={[
     [1,0,0,1], 
     [0,0,1,1], 
     [1,0,0,1] 
 ]}/>, document.getElementById('app')); 
