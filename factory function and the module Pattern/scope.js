 let globalAge = 21;   // this is  a global variable.

 // This is a function and curly bracket indicate a block.
 function printAge(age) {
   let varAge = 23;     // this is a function scoped variable. i.e a private variable

   //this is another block which can be defined inside the curly brackets
   if (age >0){
      // this is the block-speed variable that exists within its nearest enclosing block,
      
      const conAge = age *2;
      console.log(conAge);

   }
  
   //now if we try to console conAge it will show an Error!!
    // console.log(conAge);
 }

 // Try to access the varAge here will also show an Error!~
  //  console.log(varAge);

  printAge(globalAge);  