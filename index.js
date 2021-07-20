function scuberGreetingForFeet(someValue){
  if (someValue < 400){
    return "This one is on me!"
  } else if (someValue === 2001) {
    return "I will gladly take your thirty bucks."
  } else if (someValue === 2501) {
    return "No can do."
  }
}
scuberGreetingForFeet(199);





function ternaryCheckCity(city){
  return city === 'NYC' ? ("Ok, sounds good.") : ('No go.');
  
}



function switchOnCharmFromTip(tip){

  switch (tip) {
    case 'generous':
    return 'Thank you so much.';
    break;
    case 'not as generous':
    return 'Thank you.';
    break;
    case 'thanks for everything':
      return 'Bye.';
    break;
  }
  
  } 







