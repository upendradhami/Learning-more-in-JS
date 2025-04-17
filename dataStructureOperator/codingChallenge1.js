// while revisin always go from top to bottom
'use strict';

(function() {
 document.body.append(document.createElement('textarea'));
 document.body.append(document.createElement('button'));
 
//  underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
 

 document.querySelector('button').addEventListener('click',function(){
  let text = document.querySelector('textarea').value;
  text = text.split('\n'); let count=1;
  for (const tex of text){
   
    let lower =tex.trimStart().toLowerCase();
    let index = lower.indexOf('_');
    let uper =lower.slice(0,index)+lower[index+1].toUpperCase()+lower.slice(index+2);
    
    uper = uper.padEnd('26') + '✅'.repeat(count);
    console.log(uper);
    count ++;
    
  }
});

 
})();