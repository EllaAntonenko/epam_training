//9. Implement a loop that prints prime numbers to the console
    
    for(var x = 2; x < 100; x++)
        {
          if(x === 2 || x === 3 || x === 5 || x === 7 || x === 11)
          {
            console.log(x)
          }  
          else if(x % 2 == 0 || x % 3 == 0 || x % 5 == 0 || x % 7 == 0 || x % 11 == 0){
            continue
          }
          else{
            console.log(x)
          }
        } 