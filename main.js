return fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then( (json)=> {
    setTimeout(() => {
      console.log(json);
      setTimeout( () => {
        console.log(json.title);
      },2000);
    },1000);
  })