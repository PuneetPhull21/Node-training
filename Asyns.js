async function Mydisplay() {
  let promise = new Promise(function (resolve, reject) {
    resolve("Node is Osm");
  });
  let result = await promise;
  console.log(result);
}
Mydisplay();

//second program

async function Display(){
  let promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
    let x = 0;
    if(x==0){
      resolve("Promise is working perfectly")
    }
    else{
      reject("Error in something")
    }
  },5000)
  })
  let result = await promise; 
  console.log(result);
}
Display();