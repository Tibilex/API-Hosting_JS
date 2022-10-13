document.addEventListener('DOMContentLoaded', ()=>{

   let urlApi = 'http://bipihok184-001-site1.itempurl.com/User/GetAll';

   fetch(urlApi)
   .then((res) =>{
      return res.json();
   })
   .then((data) =>{
      let container = document.getElementById('container');

      let apidata = document.createElement('div');
      apidata.setAttribute('class', 'api-data');
      
      for (const iterator of data) {        
         let apiDataCart = document.createElement('div');
         apiDataCart.setAttribute('class', 'api-data__cart cart');
         
         let idBlock = document.createElement('h2');
         idBlock.setAttribute('class', 'cart__id');
         idBlock.innerText = `ID: ${iterator.id}`;

         let nameBlock = document.createElement('div');
         nameBlock.setAttribute('class', 'cart__text');
         nameBlock.innerText = `Name: ${iterator.name}`;

         let passBlock = document.createElement('div');
         passBlock.setAttribute('class', 'cart__text');
         passBlock.innerText = `Pass: ${iterator.password}`;

         let tokenBlock = document.createElement('div');
         tokenBlock.setAttribute('class', 'cart__text');
         tokenBlock.innerText = `Token: ${iterator.token}`;
  
         apiDataCart.append(idBlock);
         apiDataCart.append(nameBlock);
         apiDataCart.append(passBlock);
         apiDataCart.append(tokenBlock);
         apidata.append(apiDataCart);
         container.append(apidata);
      }
   })
   .catch((error) =>{
      console.error('Code ERROR');

   })
});