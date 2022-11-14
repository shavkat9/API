
// const elCategorySelect = document.querySelector('.category__select')


// const renderCat = (categories) => {
//     categories.forEach((category) => {
//         const categoryItem = document.createElement('option');

//         categoryItem.value = category.movie;
//         categoryItem.textContent = category.Type;
//         elCategorySelect.appendChild(categoryItem)
//     })

// }

// const getMovie = async () => {
//     const res = await fetch('https://www.omdbapi.com/?apikey=7e789dc5&s=panda');
//     const result = await res.json();
//     console.log(result)
//     return result;
// }
// getMovie()
// .then((categories) => {
//  if(Array.isArray(categories)){
//     renderCat(categories)
//  }
// })
// .catch(() => {

// })

// let box= document.querySelector('.box');

// let data = async() => (await fetch('https://www.omdbapi.com/?apikey=7e789dc5&s=panda')).json();
// data().then((res) => {
//     console.log(res)
//     res.Search.forEach(((val) => {
//         box.insertAdjacentHTML("beforeend"),
//         ` <td>${val.Search.Type}</td>
//           <td>${val.Search.Year}</td>
//           <td>${val.Search.ImdbID}</td>
//           <td>${val.Search.Type}</td>`
//     })).catch((err) => {
//         console.log(err)
//     });
// });









































