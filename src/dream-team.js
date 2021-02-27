module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;

  let result = members.filter(el => {
    if(typeof el === 'string' && el.trim().length > 0) return true;
    else return false;
  });
  result = result.map(el => el.trim().toUpperCase()[0]);
  
  return result.sort().join('');
};
