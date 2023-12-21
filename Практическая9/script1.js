var name1 = prompt("Введите логин");
var breek =true;
while(breek){
    if (name1=="admin"){
        while(true){
            name2 = prompt("Введите пароль");
            if (name2=="asas"){
                breek=false;
                break;

            }
            else{
                alert("Неверный пароль");
                name2 = prompt("Введите пароль");
            }
        }
        
    }
    else if(name1.keyCode == 27){
        alert("Отмена")
    }
    else{
        alert("Неверный логин");
        name1 = prompt("Введите логин");
    }
    
}
