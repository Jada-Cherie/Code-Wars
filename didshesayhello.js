//Did she say hello

//https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript

function validateHello(greetings) {
    const lowercasedGreetings = greetings.toLowerCase();
  
    if (
      lowercasedGreetings.includes('hello') ||
      lowercasedGreetings.includes('ciao') ||
      lowercasedGreetings.includes('salut') ||
      lowercasedGreetings.includes('hallo') ||
      lowercasedGreetings.includes('hola') ||
      lowercasedGreetings.includes('ahoj') ||
      lowercasedGreetings.includes('czesc')
    ) {
      return true;
    } else {
      return false;
    }
  }