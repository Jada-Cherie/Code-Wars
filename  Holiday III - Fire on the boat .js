//Holiday III - Fire on the boat (8 kyu)

//https://www.codewars.com/kata/57e8fba2f11c647abc000944/javascript

//Description
// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

function fireFight(s){
    console.log(s)
    return s.split('Fire').join('~~')
  }