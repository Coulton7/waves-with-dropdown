function getPumpId() {
    return (window.innerWidth < 768) ? document.getElementById('mobPumps').value:
           (window.innerWidth > 768) ? document.getElementById('pumps').value: document.getElementById('pumps').value;
  }
  
  
  function calculate() {
    var pumps = getPumpId(),
        cost = 294.06,
        costYear = pumps * cost,
        fiveYear = costYear * 5,
        powerCon = 2803.2,
        powerConY= powerCon * pumps;
  
      document.getElementById('lipSealCost').innerHTML = costYear.toLocaleString("en-GB", {style:"currency", currency:"gbp"});
      document.getElementById('annualYear').innerHTML = costYear.toLocaleString("en-GB", {style:"currency", currency:"gbp"});
      document.getElementById('powerConsumption').innerHTML = powerConY.toLocaleString("en-GB");
      document.getElementById('fiveYear').innerHTML = fiveYear.toLocaleString("en-GB", {style:"currency", currency:"gbp"});
  
      document.getElementById('mobLipSealCost').innerHTML = costYear.toLocaleString("en-GB", {style:"currency", currency:"gbp"});
      document.getElementById('mobAnnualYear').innerHTML = costYear.toLocaleString("en-GB", {style:"currency", currency:"gbp"});
      document.getElementById('mobPowerConsumption').innerHTML = powerConY.toLocaleString("en-GB");
      document.getElementById('mobFiveYear').innerHTML = fiveYear.toLocaleString("en-GB", {style:"currency", currency:"gbp"});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('calculate').addEventListener("click", function() {
      calculate();
    });

  });
  
  window.addEventListener('resize', function(){
    getPumpId();
  });
  