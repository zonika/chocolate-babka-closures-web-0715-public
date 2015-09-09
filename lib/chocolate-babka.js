function counterCreator(start){
  var count = start;
  return function(){
    return count = count + 1;
  }
}

function countAnnouncer(t,counter){
  var type = t;
  var count = counter;
  return function(){
    return 'Now serving '+type+' number '+count()+'!';
  }
}
