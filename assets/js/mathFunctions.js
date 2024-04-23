//no "operate" functions is created, since "operations" does the calculations itself easier way

function operations(n1,n2,operator){
    switch(operator){
      case "+": return console.log(n1+n2);
      case "-": return console.log(n1-n2);
      case "*": return console.log(n1*n2);
      case "/": return console.log(n1/n2);
      default: console.log("error: unknown operation");
    }
  }
