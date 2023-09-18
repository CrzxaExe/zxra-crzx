
window.addEventListener("load", () => {
  document.getElementById("ages").innerText = `${Number(ageCalc("2005-12-03"))} Years Old`
})

function ageCalc(date) {
  let today = new Date()
  let calc = new Date(date)

  var age = today.getFullYear() - calc.getFullYear();
  var month = today.getMonth() - calc.getMonth();
  var date = today.getDate() - calc.getDate();
  
  if(month < 0 || (month === 0 && day < 0) ) age--;
  return age
}