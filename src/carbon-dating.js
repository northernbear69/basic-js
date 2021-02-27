const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || isNaN(sampleActivity) || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false;
  let result = Math.ceil((Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / Math.log(2)) * HALF_LIFE_PERIOD);
  return result;
};
