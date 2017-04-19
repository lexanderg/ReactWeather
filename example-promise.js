// function getTempCallback (location, callback) {
//   callback(undefined,78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err,temp){
//   if (err) {
//     console.log('error',err);
//   }
//   else {
//     console.log('success',temp)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve,reject) {
//     setTimeout(function (){
//       resolve(80);
//       reject('City not found');
//     },1000);
//   })
// }
//
// getTempPromise('Philadelphia').then(function (temp){
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })

//if (typeof someNumber === 'number')

// Challenge Area

function addPromise(a,b) {
  return new Promise(function (resolve,reject){
    if ((typeof a === 'number') && (typeof b === 'number')){
      resolve(a+b);
    }
    else{
      reject('Incorrect Values');
    }
  })
}

addPromise(2,6).then(function (result){
    console.log('promise success',result);
}, function (err){
  console.log('promise error', err);
})
