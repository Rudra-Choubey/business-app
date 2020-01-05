const $ = element => document.querySelector(element);
const $all = element => document.querySelectorAll(element);
let $id = element => document.getElementById(element);
const addPlayer = $('#add-player');
let playerName = $('#player-name');
let data = $('#data');

const players = [];

const createPlayer = ({name, cash, cashInCard, target}) => {
    players.push({name, cash, cashInCard, target})
};
const randomChoice = (array) => array[Math.floor(Math.random() * array.length)];

function createCard(player){
    let buttonClasses = ['primary','danger','success','info'];   
    let currentId = players.length-1;
    data.innerHTML = data.innerHTML+`
        <tr id='${currentId}'>
            <td>
                <button class='btn btn-${randomChoice(buttonClasses)}'>
                    ${player.name}
                </button>
            </td>
            <td><input class='form-control cash' id='calc' target='${currentId}' value=${player.cash}></td>
            <td><input class='form-control cashInCard' id='calc' target='${currentId}' value=${player.cashInCard}></td>
            <td>
                <div class='btn-group'>
                    <button class='btn btn-info' id='pcm' target='${currentId}'>
                        <i class="fa fa-credit-card"></i>
                    </button>
                    <button class='btn btn-success' id='salary' target='${currentId}'>
                    <i class="fa fa-money"></i>
                    </button>
                </div>
            </td>
            <td>
                <div class='btn-group'>
                    <button class='btn btn-danger roundToggle' target='${currentId}' id='decrease-rounds'>-</button>
                    <button class='btn btn-danger' id='rounds'>0</button>
                    <button class='btn btn-danger roundToggle' target='${currentId}' id='increase-rounds'>+</button> 
                </div>
            </td>
        </tr>
    `;
    $all('.roundToggle').forEach(round => {
        round.onclick = () => {
            let target = round.getAttribute('target');
            let card = $id(target);
            let roundsDone = card.querySelector('#rounds');
            let sign = '';

            if(round.id == 'increase-rounds') sign = '+';
            else sign = '-';

            roundsDone.innerHTML = eval(`${roundsDone.innerHTML} ${sign} 1`);
        }
    });

   $all('#salary').forEach(salary => {
        salary.onclick = () => {
            let target = salary.getAttribute('target');
            let card = $id(target);
            let totalMoney = card.querySelector('.cash');
            totalMoney.value = Number(totalMoney.value) + options['salary'];
        }
    });

    $all('#calc').forEach(calc => {
        calc.onchange = () => { 
            let target = calc.getAttribute('target');
            calc.value = eval(calc.value);
           _graph[target].push(Number(calc.value));
        }
    })
    $all('#pcm').forEach(pcm => {
        pcm.onclick = () => {
            let target = pcm.getAttribute('target');
            let tableRow = $id(target);
            let cash = tableRow.querySelector('.cash');

            cash.value = Number(cash.value) - options['card maintain bill'];
        }
    })
    
}

addPlayer.onclick = () => {
    createPlayer({
        name:playerName.value, 
        cash:options['money'], 
        cashInCard:options['money in card'], 
        target: players.length,
    });
    _graph[players[players.length-1].target] = [];

    createCard(players[players.length - 1]);
}