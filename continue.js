// continue means-continue but  skip this one action (iteration) (punorabritti)


// skip rest   of the  code for this iteration

// break means - i am done, loop wil end now

// for(let i= 1; i <10; i++){
//     if(i % 2 === 1){
//         continue
//     }
//     console.log(i)
    
// }

// while

let n = 0;
while(n < 15){
    n++
    if(n % 5 !== 0){
        continue
    }
    console.log(n);
}