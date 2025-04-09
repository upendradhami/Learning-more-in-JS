  const Formko = document.querySelector('form[name="signup"]');
  const colorSelect = Formko.querySelector('select[name="color"]');
  const inputField = Formko.querySelector('input[name="input"]');
  const submitBtn = Formko.querySelector('button[name="button"]');

  let colorChoice = ""; // make it accessible in both scopes

  // Form submit event
  Formko.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload
    colorChoice = inputField.value;
    document.body.style = ` background-color : ${colorChoice}`;
  });

  colorSelect.addEventListener('click',function(event) {
     const changeColor = colorSelect.value;
     if(changeColor == 'dark'){
       document.body.style = `background-color : black !important ;       color:white; *{
      font-size: 20px;
      font-weight: 600;
     
      padding: 10px;
      margin: 10px;
      border-radius: 50px;
    } `
     }else if(changeColor == 'light'){
      document.body.style = "background-color : white !important;"
     }
  });
  

