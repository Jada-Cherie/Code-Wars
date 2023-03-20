//did this in a group with Vonds
function smash (words) {
    if(words.length === 0) return ''
    if(words.length === 1) return words[0]
    let sentence = ''
    for (let i = 0; i < words.length; i++)
      sentence = sentence + words[i] + ' '
     return sentence.trim()
  };