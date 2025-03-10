const botaoGato = document.getElementById('app-gato')

botaoGato.addEventListener('click', function() {
    
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10';


    fetch(url)
    .then(response => {
    
        if (!response.ok) {
            throw new Error('Erro ao consumir a API');
        }
        return response.json(); 
    })
    .then(data => {
        displayCats(data); 
    })
    .catch(error => {
        console.error('Erro:', error); 
    })

    function displayCats(cats) {
        const catList = document.getElementById('lista');
        catList.innerHTML = ''; 
        
        
        cats.forEach(cat => {
            const listItem = document.createElement('li'); 
            console.log(cat)
            
            listItem.innerHTML = `<img src="${cat.url}" alt="${cat.id}">`;
            
            
            catList.appendChild(listItem);
        });
    }
});


const botaoCachorro = document.getElementById('app-cachorro')

botaoCachorro.addEventListener('click', function() {
    
    const url = 'https://api.thedogapi.com/v1/images/search?limit=10';


    fetch(url)
    .then(response => {
    
        if (!response.ok) {
            throw new Error('Erro ao consumir a API');
        }
        return response.json(); 
    })
    .then(data => {
        displayDogs(data); 
    })
    .catch(error => {
        console.error('Erro:', error); 
    })

    function displayDogs(dogs) {
        const dogList = document.getElementById('lista');
        dogList.innerHTML = ''; 
        
        
        dogs.forEach(cat => {
            const listItem = document.createElement('li');  
            console.log(cat)
            
            listItem.innerHTML = `<img src="${cat.url}" alt="${cat.id}">`;
            
            
            dogList.appendChild(listItem);
        });
    }
});
