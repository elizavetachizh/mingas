const instance = M.Tabs.init(document.getElementById('tabs-swipe-demo'), {
    swipeable: true
});


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  });

document.querySelector('.btn-primary').addEventListener('click',(e)=>{
    e.preventDefault();
    const n = document.getElementById("select").options.selectedIndex;
    const value = document.getElementById('first_calc').value;
    const out = document.getElementById('out');
    
    if(value === ''){
        out.innerText = 'Не указана длина трубы';
    }else{
        if(n === 1){
            out.innerText = value * 22 + 1290 + ' руб*';
            document.getElementById('first_calc').value = '';
            document.querySelector('.description').style.display = 'block';
        }else{  
            out.innerText = value * 25 + 1050 + ' руб*';
            document.getElementById('first_calc').value = '';
            document.querySelector('.description').style.display = 'block';
        }
    }
});

document.querySelector('.btn-primary2').addEventListener('click',(e)=>{
    e.preventDefault();
    const n = document.getElementById("selected").options.selectedIndex;
    const place = document.getElementById("selectPlace").options.selectedIndex;
    const pa = document.getElementById("selectPa").options.selectedIndex;
    const equipment = document.getElementById('equipment').value;
    const qty = document.getElementById('qty').value;
    const out1 = document.getElementById('out1');
   
console.log('n', n)
    const a = (place === 1) ? 185 : 0;
    const b = (pa === 1) ? 330 : 0;

    if(equipment === '' || qty === ''){
        out1.innerText = 'Указаны не все данные';
    }else{
        if(n === 1){
            out1.innerText = 680 + a + b + equipment * 60 + qty * 35 + ' руб*';
            document.getElementById('equipment').value ='';
            document.getElementById('qty').value ='';
            document.querySelector('.description1').style.display = 'block';
        }else{
            out1.innerText = 710 + a + b + equipment * 60 + qty * 38 + ' руб*';
            document.getElementById('equipment').value ='';
            document.getElementById('qty').value ='';
            document.querySelector('.description1').style.display = 'block';
        }
    }
});