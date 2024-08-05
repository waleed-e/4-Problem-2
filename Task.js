// 1
function repeated(arr){

    return  [...new Set(arr.sort().filter((num,i) => num == arr[i+1]) )]
   
   }
   
   console.log(repeated([1,2,2,3,3,3,4,5,5,5,5,5]));


// 2

function isPrime(n){
    if (n < 2) {
        return false;
    }
    for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function Primes(num1, num2){
  
    let primes = [];
    for (let i = num1; i <= num2; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;

}
console.log(Primes(1,9));


// 3
function Accending( snt){

    let newArr = [];
    
    snt.split(' ').map((e) => newArr.push({ e,length: e.length }));
    return newArr.sort((a,b) => a.length - b.length).map((e)=> e.e);

}

console.log(Accending("hellllo worfld"));


function filterArray(arr, callback) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

const numbers = [1, 2, 3, 4, 5, 6];
const isEven = num => num % 2 === 0;

const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); 


