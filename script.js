const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
// Button Registrar
const buttonReg = document.querySelector("#buttonReg")

buttonReg.addEventListener("click", addActivities)
form.addEventListener("change", saveActivities)

function addActivities() {

    const day = new Date().getDay()
    // day = 6
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    // get the day and convert it to the day of the week in full according to the week list
    let today = week[day]

    // checking if today already exists
    const dayExists = nlwSetup.dayExists(today)
    console.log(dayExists)

    if (dayExists) {
        alert("Dia já está incluso ❎")
        return
    }

    nlwSetup.addDay(today)
}

function saveActivities() {
    localStorage.setItem('Week@Habits', JSON.stringify(nlwSetup.data))
}


const data = JSON.parse(localStorage.getItem('Week@Habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()
