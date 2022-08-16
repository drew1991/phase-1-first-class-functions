const spy = chai.spy()
function receivesAFunction(spy){
    spy()
}
function returnsANamedFunction() {
    const mike = (a, b) => a + b;
   return mike;

}


function returnsAnAnonymousFunction() {
   return () => "I";

   }