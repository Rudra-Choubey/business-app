let INITIAL_MONEY = 25000;
let INITIAL_MONEY_IN_CARD = 10000;
let CARD_MAINTAIN_BILL = 2000;
let SALARY = 1500;

let options = {
    "money": INITIAL_MONEY,
    'money in card': INITIAL_MONEY_IN_CARD,
    "card maintain bill": CARD_MAINTAIN_BILL,
    "salary": SALARY,
}
window.onload = function(){
    
    let gui = new dat.GUI();
    gui.add(options, 'money');
    gui.add(options, 'money in card');
    gui.add(options, 'card maintain bill');
    gui.add(options, 'salary');
}