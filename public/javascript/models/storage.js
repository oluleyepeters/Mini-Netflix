const storeItemInLocalStorage = function(movies){
  let movieList;
  // Check if any items in ls
  if(sessionStorage.getItem('movieList') === null){
    movieList = [];
    // Push new item
    movieList.push(...movies);
    // Set ls
    sessionStorage.setItem('movieList', JSON.stringify(movieList));
    } else {
    // Get what is already in ls
    movieList = JSON.parse(sessionStorage.getItem('movieList'));

    // Push new item
    movieList.push(...movies);

    // Reset ls
    localStorage.setItem('movieList', JSON.stringify(movieList));
    }
  }

const getItemsFromStorage = () => {
      let movieList;
      if(localStorage.getItem('movieList') === null){
        movieList = [];
      } else {
        movieList = JSON.parse(localStorage.getItem('movieList'));
      }
      return movieList;
    }
//     updateItemStorage: function(updatedItem){
//       let items = JSON.parse(localStorage.getItem('items'));

//       items.forEach(function(item, index){
//         if(updatedItem.id === item.id){
//           items.splice(index, 1, updatedItem);
//         }
//       });
//       localStorage.setItem('items', JSON.stringify(items));
//     },
//     deleteItemFromStorage: function(id){
//       let items = JSON.parse(localStorage.getItem('items'));
      
//       items.forEach(function(item, index){
//         if(id === item.id){
//           items.splice(index, 1);
//         }
//       });
//       localStorage.setItem('items', JSON.stringify(items));
//     },
//     clearItemsFromStorage: function(){
//       localStorage.removeItem('items');
//     }
//   }
// })();