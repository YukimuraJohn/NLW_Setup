const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
    water: ['Wednesday'],
    programmer: ['Tuesday']

}

nlwSetup.setData(data)
nlwSetup.load()
