

const botaoInicio = document.getElementById('app-inicio');
botaoInicio.addEventListener('click', function() {

    window.location.href = 'index.html';
    navigator.vibrate([100, 100, 500])
  });
  



const botaoCadastro = document.getElementById('botao-cadastro')
botaoCadastro.addEventListener('click', function(){
    const catList = document.getElementById('lista');
    catList.innerHTML = '';
    const petCadastro = document.getElementById("cadastro");
    petCadastro.innerHTML = `<p>Cadastre seu pet</p>
            <form id="form-cadastro">
                <label for="nome">Nome do pet:</label><br>
                <input type="text" id="nome" name="nome" required ><br>
                <label for="raca">Raça:</label><br>
                <input type="text" id="raca" name="raca"><br>
                <label for="especie">Espécie:</label><br>
                <input type="text" id="especie" name="especie"required><br><br>
                <input type="submit" value="Submit">
              </form>`

              const formCadastro = document.getElementById('form-cadastro');
              formCadastro.addEventListener('submit', async function(event){
                  event.preventDefault();
              
                  const formData = new FormData(formCadastro);
                  const formObject = Object.fromEntries(formData);  
                  const formString = JSON.stringify(formObject); 
                  console.log("Dados do formulário:", formString); 
                  const myHeaders = new Headers();
                  myHeaders.append("Content-Type", "application/json");
                  await fetch("https://back-api-infopets.onrender.com/pets", {
                      method: "POST",
                      body: formString,
                      headers: myHeaders
                  });
                fetch("https://back-api-infopets.onrender.com/pets")
                .then(response => {
                
                    if (!response.ok) {
                        throw new Error('Erro ao consumir a API');
                    }
                    return response.json(); 
                })
                .then(pets => {
                    const elementoPet = document.getElementById('lista-pets')
                    elementoPet.innerHTML = '';
                    
                    pets.forEach(pet =>{
                        
                        const unidadePet = document.createElement('li');
                        unidadePet.innerHTML = `<span class="nome">Nome:${pet.nome}</span> - <span class="raca">Raça: ${pet.raca}</span> - <span class="especie">Espécie: ${pet.especie}</span>`;
                        elementoPet.appendChild(unidadePet);

                    })




                })
                .catch(error => {
                    console.error('Erro:', error); 
                })
               
            });

})

const botaoGato = document.getElementById('app-gato');

botaoGato.addEventListener('click', function() {
    document.getElementById("cadastro").innerHTML = '';
    document.getElementById("lista-pets").innerHTML = '';


    
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
    document.getElementById("cadastro").innerHTML = '';
    document.getElementById("lista-pets").innerHTML = '';

    
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
        const elementoP = document.getElementById('apresentacao');
        elementoP.innerHTML = "Fotos aleatórias de cachorro ou de gato";
        
        
        dogs.forEach(dog => {
            const listItem = document.createElement('li');  
            console.log(dog)
            
            listItem.innerHTML = `<img src="${dog.url}" alt="${dog.id}">`;
            
            
            dogList.appendChild(listItem);
        });
    }
});
