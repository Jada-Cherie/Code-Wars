//Count characters in your string (6 kyu)

//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

//What if the string is empty? Then the result should be empty object literal, {}.




function count(string) {
    let empty = {}
    string.split('').map(v=>empty[v]=empty[v]+1||1)
     return empty;
    return {};
  }