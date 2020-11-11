//  - создать массив с 20 числами.
let numbers = [1, 5, 7, 11, 3, 8, 22, 10, 15, 199, 37000, 17, 256, 1024, 65536, 100000, 29, 35, 786, 21]
// console.log(numbers);


// 1 -- при помощи метода sort и колбека  отсортировать массив.
// let sortNum = numbers.sort((a, b) => {
//     return a-b;
// });
// console.log(sortNum);


// 2 -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sortNumZA = numbers.sort((a, b) => b-a);
// console.log(sortNumZA);


// 3 -- при помощи filter получить числа кратные 3
// let filter3 = numbers.filter((value, index) => {    
//     if (!(value % 3)) {        
//         return value
//     }    
// });

// console.log(filter3);


// 4 -- при помощи filter получить числа кратные 10
// let filter10 = numbers.filter((value) => (!(value % 10)));
// console.log(filter10);


// 5 -- перебрать (проитерировать) массив при помощи foreach()
// numbers.forEach(value => {
//     console.log(value);
// });


// 6 -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let newNum = numbers.map(number => {
//     return number*3;
// });
// console.log(newNum);


// - создать массив со словами на 15-20 элементов.
let arrStr = ['Hello', 'world', 'lucky', 'house', 'Galaxy', 'Sun', 'function', 'stars', 'planet','Array', 'constructor', 'value', 'number', 'String', 'ok', 'green', 'text', 'happy']
// console.log(arrStr);


// 7  -- отсортировать его по алфавиту в восходящем порядке.
// let sortAZ = arrStr.sort();
// console.log(sortAZ);


// 8 -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortZA = arrStr.sort((a, b) => {
//     if (a > b){
//         return -1
//     } 
//     return 1
// });
// console.log(sortZA);


// 9 -- отфильтровать слова длиной менее 4х символов
// let filter4 = arrStr.filter((value) => {
//     if (value.length < 4){
//         return value
//     }
// });
// console.log(filter4);

// 10 -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let str = arrStr.map(str => {
//     return str+'!';
// });
// console.log(str);



// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
 let users = [ {name: 'vasya', age: 31, status: false}, 
               {name: 'petya', age: 30, status: true}, 
               {name: 'kolya', age: 29, status: true}, 
               {name: 'olya', age: 28, status: false}, 
               {name: 'max', age: 30, status: true}, 
               {name: 'anya', age: 31, status: false}, 
               {name: 'oleg', age: 28, status: false}, 
               {name: 'andrey', age: 29, status: true}, 
               {name: 'masha', age: 30, status: true}, 
               {name: 'olya', age: 31, status: false}, 
               {name: 'max', age: 31, status: true} ];
// console.log(users);


// 11 - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a, b) => {
//    return a.age-b.age
// });
// console.log(users);

// // сортування по спадінню віку.
// users.sort((a, b) => {
//     return b.age - a.age;
// });

// console.log(users);


// // 12 - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a, b) => {
//     return a.name.length - b.name.length;
// }) ;
// console.log(users);


// 13 - по спадінню знаків в імені
// users.sort((a, b) => {
//     return b.name.length - a.name.length;
// }) ;
// console.log(users);


// 14 - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let strJson = JSON.stringify(users);
// let newUsers = JSON.parse(strJson);
// newUsers = newUsers.map((value, index) => {
//    value.id = index
//    return value
    
// });
// console.log(newUsers);


// 15 - відсортувати його за індентифікатором
// let sortUser = newUsers.sort((a, b) =>{
//     return b.id - a.id
// });
// console.log(newUsers)



// 2  =============КЛАССНАЯ РАБОТА=================

let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
            {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
            {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
            {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
            {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
            {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
            {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
            {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
            {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
            {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
            {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
            {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
            {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// // Відфільтрувати масив за наступними крітеріями :
// // 2.1 - двигун більше 3х літрів
// let filterVolume3 = cars.filter((value) => {
//     if (value.volume > 3){
//         return value
//     }
// });
// console.log('2.1 - двигун більше 3х літрів');
// console.log(filterVolume3);
// console.log('-----------------');

// // 2.2 - двигун = 2л
// let equalVolume2 = cars.filter((value) => value.volume === 2);
// console.log('2.2 - двигун = 2л');
// console.log(equalVolume2);
// console.log('-----------------');


// // 2.3 - виробник мерс
// let mercedes = cars.filter((value) => value.producer === 'mercedes');
// console.log('2.3 - виробник мерс');
// console.log(mercedes);
// console.log('-----------------');


// // 2.4 - двигун більше 3х літрів + виробник мерседес
// let mercVolume3 = cars.filter((value) => (value.producer === 'mercedes' && value.volume > 3));
// console.log('2.4 - двигун більше 3х літрів + виробник мерседес')
// console.log(mercVolume3);
// console.log('-----------------');


// // 2.5 - двигун більше 3х літрів + виробник субару
// let subaruVolume3 = cars.filter((value) => (value.producer === 'subaru' && value.volume > 3));
// console.log('2.5 - двигун більше 3х літрів + виробник субару')
// console.log(subaruVolume3);
// console.log('-----------------');


// // 2.6 - сили більше ніж 300
// let power300 = cars.filter((value) => value.power>300);
// console.log('2.6 - сили більше ніж 300');
// console.log(power300);
// console.log('-----------------');


// // 2.7 - сили більше ніж 300 + виробник субару
// let subaru300 = cars.filter((value) => (value.producer==='subaru' && value.power > 300));
// console.log('2.7 - сили більше ніж 300 + виробник субару');
// console.log(subaru300);
// console.log('-----------------');


// // 2.8 - мотор серіі ej
// let engineEj = cars.filter(value => value.engine.startsWith('ej'));
// console.log(engineEj);
// console.log('-----------------');


// // 2.9 - сили більше ніж 300 + виробник субару + мотор серіі ej
// let subaruPowerEngine = cars.filter((value) => (value.power>300 && value.producer==='subaru' && value.engine.startsWith('ej')));
// console.log(subaruPowerEngine);
// console.log('-----------------');


// // 2.10 - двигун меньше 3х літрів + виробник мерседес
// let mercedesEngine = cars.filter((value) => (value.volume<3 && value.producer==='mercedes'));
// console.log(mercedesEngine);
// console.log('-----------------');


// // 2.11 - двигун більше 2л + сили більше 250
// let enginePower = cars.filter((value) => (value.volume > 2 && value.power > 250));
// console.log(enginePower);
// console.log('-----------------');


// // 2.12- сили більше 250  + виробник бмв
// let bmwPower250 = cars.filter((value) => (value.power > 250 && value.producer === 'bmw'))
// console.log(bmwPower250);
// console.log('-----------------');



// - взять слдующий массив
let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
                        {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
                        {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
                        {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
                        {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
                        {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
                        {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
                        {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
                        {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
                        {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
                        {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// 2.13 -- отсортировать его по id пользователей
// usersWithAddress.sort((a, b) => a.id-b.id);
// console.log(usersWithAddress);


// 2.14 -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(usersWithAddress);


// 2.15 -- отсортировать его по возрасту пользователей
// usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(usersWithAddress);


// 2.16 -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((a,b) => b.age - a.age);
// console.log(usersWithAddress);


// -2.17 - отсортировать его по имени пользователей
// usersWithAddress.sort((a, b) => {
//     if (a.name > b.name){
//         return 1;
//     }
//     return -1;
// });
// console.log(usersWithAddress);

// 2.18 -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return -1;
//     }
//     return 1;
// });
// console.log(usersWithAddress);



// 2.19 -- отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return 1;
//     }
//     return -1;
// });
// console.log(usersWithAddress);


// 2.20 -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((a,b) => a.address.number - b.address.number);
// console.log(usersWithAddress);


// 2.21 -- отфильтровать (оставить) тех кто младше 30
// let ageMin30 = usersWithAddress.filter((value) => value.age < 30);
// console.log(ageMin30);



// 2.22 -- отфильтровать (оставить) тех у кого отрицательный статус
// let statusMinus = usersWithAddress.filter((value) => (!(value.status)));
// console.log(statusMinus);


// 2.23 -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let statusAge = usersWithAddress.filter((value) => ( !(value.status) && value.age < 30));
// console.log(statusAge);


// 2.24 -- отфильтровать (оставить) тех у кого номер дома четный
// let even = usersWithAddress.filter((value) => (!(value.address.number % 2)));
// console.log(even);

 