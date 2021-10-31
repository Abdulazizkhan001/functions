// var title = 'WebBrain academy'.repeat(5);
// title.toLocaleLowerCase();
// var a = 0;
// for (var i = 0; i <= title.length; i++) {
//     if (title[i] === 'a') {
//         a++
//     }
// }
// console.log(a + ` ${'ta a harfi'}`);

// var b = 0;
// for (var i = 0; i <= title.length; i++) {
//     if (title[i] === 'b') {
//         b++
//     }
// }
// console.log(b + ` ${'ta b harfi'}`);

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for(let i = 0;i <= 100; i++)
// {
//     if( i % 2 !== 0)
//     {
//         console.log(i);
//     }
// }

// for( let i = 10; i>= 0; i--)
// {
//     console.log(i);
// }

// var number = '748394736384937483';
// var juft = 0;
// for (var i = 0; i < number.length; i += 2) {
//     juft += Number(number[i]);
// }
// console.log(juft);

// var toq = 0;
// for (var i = 1; i < number.length; i += 2) {
//     toq += Number(number[i]);
// }
// console.log(toq);

// var text = 'WebBrain academy'.repeat(5);
// for (i = 0; i <= text.length; i++) {
//   text=  text.replace(/\s+/g, '')
// }
// console.log(text);


// var data = [
//     {
//         name: 'John',
//         friends: [
//             {
//                 name: 'Zokirxon',
//             },
//             {
//                 name: 'Abdurauf',
//             },
//             {
//                 name: 'Otabek',
//             }
//         ],
//     },
//     {
//         name: 'John',
//         friends2: [
//             {
//                 name: 'Zokirxon',
//             },
//             {
//                 name: 'Abdurauf',
//             },
//             {
//                 name: 'Otabek',
//             }
//         ],
//     },
//     {
//         name: 'John',
//         friends3: [
//             {
//                 name: 'Zokirxon',
//             },
//             {
//                 name: 'Abdurauf',
//             },
//             {
//                 name: 'Otabek',
//             }
//         ],
//     }
// ]

// for( var i = 0; i < data.length;i++)
// {
//     for(var j = 0;j < friends.length;j++)
//     {
//         console.log(data[0].friends2)
//     }
// }

var isCorrect = () => {
    var arr = ["matiz", "matiz", "matiz", "matiz"]
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == arr[i]) {
                count++;
            }
        }
        if(count == arr.length)
        {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(isCorrect()); 