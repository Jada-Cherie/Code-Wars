//The Hashtag Generator


//https://www.codewars.com/kata/52449b062fb80683ec000024


function generateHashtag (str) {
    if (str.trim() === '') {
      return false
    }
  
    const words = str.trim().split(/\s+/)
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    const hashtag = '#' + capitalizedWords.join('')
  
    if (hashtag.length > 140) {
      return false
    }
  
    return hashtag
  }