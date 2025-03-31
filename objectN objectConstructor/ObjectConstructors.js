 //we have regular objects like :
//    let product = {
//      name: 'tShirt',
//      price: 435,
//      rating:{
//        stars: 4.5,
//        review: 456
//      },
//    }

//    console.log(product.name);

   // What if there are numerous such products like this this makes difficult to make lots of objects either so concept of the object constructor comes in 
   // looks like normal function 
 
    // function Product(name,price,star,review){
    //     this.name = name,
    //     this.price = price,
    //     this.stars = star,
    //     this.review = review
    // }


    // const product1 = new Product('tshirt',545,4.5,232);
    // const product2 = new Product('pant',1000,4,4,223);

    // console.log(product1.name);
    // console.log(product2.name);
    // console.log(product2.price);
    // console.clear();

    //but sometime such object constructor can be called as normal functions so, we should use new.target meta-propery ;

    function Mobil(name,company,ram){
        if(!new.target) {
            console.log('please use new meta-property before using constructor');
        }
        this.name = name,
        this.company = company,
        this.RAM = ram ,
        this.show = function(){
            console.log(`mobile is : ${this.name},\ncompany name is: ${this.company} and  RAM is:${this.RAM} \n`);
        }
    };


    const mob1 =new Mobil('iphone 15 pro max ', 'iphone', '8GB');
    mob1.show();

    Mobil('upe','d','d');
     



    
   
 

