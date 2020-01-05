let canvas = document.querySelector('canvas');

let button = document.querySelector('button');
let textField = document.querySelector('input');
let ctx = canvas.getContext('2d');
function graph(data){
    let _label = [];
    for (let i = 0; i < data.length; i++) {
        _label.push(i);
    }
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: _label,
            datasets: [{
                label: 'Amount',
                data: data,
                fill: false,
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
    });
}
button.onclick = function(){
    graph(JSON.parse(textField.value));
}