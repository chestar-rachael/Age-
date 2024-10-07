const birthday = document.getElementById("birthday");
const ageBtn = document.getElementById("ageBtn");
const resultBtn = document.getElementById("resultBtn");

ageBtn.addEventListener("click", function() {
  calculateAge(birthday.value);
});


function calculateAge(){
  const birthdayValue = birthday.value;
  console.log(birthdayValue)
  if(birthdayValue === " "){
    alert ("please enter your date of birth")
  }else{
    const age = getAge(birthdayValue);
    resultBtn.textContent = `You age is ${Number.isNaN(age) ? 0 : age} ${age > 1 ? 'years': 'year'}`;
  }


function getAge(birthdayValue){
  const currentDate = new Date();
  console.log("value "+birthdayValue)
  const birthDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() -birthDate.getMonth();
  const date = currentDate.getDate() - birthDate.getDate();

  if(month < 0 ||(month === 0 && currentDate.getDate() < birthDate.getDate())
  ){
    age;
  }
  return age;
}
}
//the calculateAge function has a problem
resultBtn.addEventListener("click",calculateAge());