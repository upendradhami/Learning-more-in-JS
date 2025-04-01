function getid(){
  return crypto.randomUUID();
}


let book = function(name,author,status) {
  this.name = name,
  this.author = author,
  this.id = getid(),
  this.status = status;
}


 document.querySelector('.remove').addEventListener('click',function(){
    document.querySelector('.book').innerText = '';
 })


