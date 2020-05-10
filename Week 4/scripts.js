/*FUNCTION WHO RETURNS THE AREA OF A SURFACE IN m2 
--------------------------------------------------*/
function totalArea(len, wid) {
  let area = 'The area is ' + (len * wid) + ' m2';
    show(area);
 }
 totalArea(2, 4);
 
 
 /*FUNCTION WHO RETURNS THE REMAINDER OF TWO NUMBERS 
 --------------------------------------------------*/
   function remainder(div, divd) {
    let rema = "The remainder is " + div%divd;
    show(rema );
 }
 remainder(5, 4);
 
 
 /*FUNCTION WHO RETURNS THE NUMBER OF FRAMES 
 --------------------------------------------------*/
  function frames(min, ps){
  let fps = ps * 60;
  show(min*fps);
  }
  frames(10, 25)
 
 
 /*FUNCTION WHO RETURNS CITY FACTS 
 --------------------------------------------------*/
  let city = {
   Ethiopia: {
     name: "Ethiopia",
     population: "114,521,377",
     continent: "Africa"
   },
   France: {
     name: "France",
     population: "66,999,000",
     continent: "Europe"
   },
   Paris: {
     name: "Paris",
     population: "2,148,271",
     continent: "Europe"
   }
 }
 function cityFact(city){
   
   show(city);
 }
 cityFact(city.Ethiopia)
 
 
 /*FUNCTION THAT CALCULATE THE PROFIT
 --------------------------------------------------*/
 function profit(revenue, expenses){
   let pro = revenue - expenses;
   show(pro);
 }
 profit(60, 25);
 
 
 /*FUNCTION THAT CHECK IF NUMBER IS LESS THAN OR EQUAL TO ZERO 
--------------------------------------------------*/
function number() {
  let input= "";
  let num= "";
  if (num <= 0){
    input= "The number is less than or equal to zero!"
  }
  else{
    input= "The number is greater than zero"
  }
  show(input);
 }
 number(2);


/*FUNCTION THAT CHECKS IF A NUMBER IS EVEN OR ODD 
--------------------------------------------------*/
 function even_odd() {
  let num2= "";
  if (even = 2*num2){
    num2= "The number is even"
  }
  else{
    num2= "The number is odd"
  }
  show(num2);
 }
 even_odd(9);


 /*FUNCTION THAT CHECKS IF A WORD IS SINGULAR OR PLURAL 
--------------------------------------------------*/
function isPlural(word) {
	if(word.endsWith('s')){
		stat = "plural";
	}
	else {
		stat= "singular";
  }
  show(stat);

}
isPlural("master");
isPlural("sources");
isPlural("element");

 