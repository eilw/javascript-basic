//
// var pets = ['cat', 'dog', 'horse']
//
// for (i = 0; i< pets.length; i++){
//   pets[i] += 's';
// }
// console.log(pets)
// // function writer(element,index,array) {
// //   console.log(element);
// // }
// // pets.forEach(writer);
// //
// // function

// var pizza = {
//   toppings: ['cheese', 'mix','sauce'],
//   crust: 'deep dish',
//   serves: 2
// };
//
// var food = {
//   types: 'only pizza'
// }

// function eat(food) {
//   return food + ' tastes very good.';
// }
//
// console.log(eat('pizza'))
// console.log(food.types)
// console.log(food['types'])


// function calc(first, second, third){
//   return first + (second * third);
// }
//
// console.log(calc(1,2,5))
// console.log(calc(53,61,67))




var a = 1, b = 2, c = 3;

  (function firstFunction(){
      var b = 5, c = 6;

      (function secondFunction(){
          var b = 8;
          console.log("a: "+a+", b: "+b+", c: "+c);

          (function thirdFunction(){
              var a = 7, c = 9;

              (function fourthFunction(){
                  var a = 1, c = 8;


              })();
          })();
      })();
  })();
