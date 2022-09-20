"use strict";

let dragonService ;
 // const LocalStorage
const raw = localStorage.getItem('data');
const localStorageData = JSON.parse(raw);

 // const Main
const htmlService = new HTMLService();
const dragonContainer = document.querySelector('.dragon');
const renderDragon = (dragon) => {
    dragonContainer.innerHTML = htmlService.paintDragon(dragon);
};

// глобальная ассинхроная функция загрузки контента из интернета
async function startApplication() {
    
    try{
        // ответ сервера
        const response = await fetch('https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f');
        // получаем данные
        const data = await response.json();

        //  До основной загрузки если есть данные в  LocalStorage     
        if(localStorageData){
            console.log('true LocalStorage');
            dragonService = new DragonService(localStorageData);
            }else{
            console.log('false LocalStorage');
            dragonService = new DragonService(data);
            // по заданию запись в LocalStorage
            localStorage.setItem('data', JSON.stringify(data));
            }        
        renderDragon(dragonService.dragon);

        // очистка LocalStorage для теста ветвления ( наличия в консоли aplication данных с ключем Data)
        //  localStorage.clear();
    }catch (e){
        dragonContainer.innerHTML =  htmlService.paintError(e);
    }  

}

function startApp() {
    startApplication();
  }
  
setTimeout(startApp, 700);

 
 
 