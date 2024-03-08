


for (let i=1; i <= 100; i++){

    if((i % 3 == 0)  &&  (i % 5 == 0)){
        document.getElementById('general').innerHTML += "fizzbuzz"
        console.log('fizzbuzz')

    }

    if(i % 3 == 0){
        console.log('fizz')
        document.getElementById('general').innerHTML += "fizz"
    }

    if(i % 5 == 0){
        console.log('buzz')
        document.getElementById('general').innerHTML += "buzz"
    }

    if(!(i % 3 == 0)  &&  !(i % 5 == 0)){
        document.getElementById('general').innerHTML += i
        console.log(i)
    }

}




