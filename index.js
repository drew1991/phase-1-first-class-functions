const spy = chai.spy()
function receivesAFunction(spy){
    spy()
}
function returnsANamedFunction() {
    const drew = (a, b) => a + b;
   return drew;

}


function returnsAnAnonymousFunction() {
   return () => "I";

   }