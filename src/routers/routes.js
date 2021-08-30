const { Router } = require('express');
const express = require('express');
const axios = require('axios');
const routes = express.Router();
const siglas = require('../siglasteste.json');

// const siglas2 = JSON.parse(siglas);

const siglas2 = require('../siglas.json');




routes.get('/', (req,res) => {
    res.send({message: 'Connected ✅'});
});

routes.post('/api/', async (req, res) => {
    const name = req.body.name;
    const formattedName = capitalize(name); 
    const params = {
        name
    }
    // url
    const genderURL = 'https://api.genderize.io';
    const ageURL = 'https://api.agify.io';
    const natiURL = 'https://api.nationalize.io';
    // request
    const getGender = await axios.get(genderURL, { params });
    const getAge = await axios.get(ageURL, { params });
    const getNati = await axios.get(natiURL, { params });
    const getAffir = await axios.get('https://www.affirmations.dev/');
    // getInfo
    const userGender = getGender.data;
    const userAge = getAge.data;
    const userNati = getNati.data.country[0].country_id;
    const userAffir = getAffir.data;
    
    function capitalize(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    const ageTratted = userAge.age;
    const userAgeTrat = yearTreated(ageTratted)
    
    function yearTreated(age){
        if (age === 1){
         return ' ano';
        }
         return ' anos';
    }
   
    // function cityTreated(city){
    //     if(city === siglas.sigla){
    //         const nomePais = siglas.nome_pais;
    //         return nomePais;
    //     } 
    // }
    // const formattedCity = cityTreated(userNati.country_id);
    
    var siglatratada = siglas2.data.filter(country => country.sigla == userNati);
    

    // gender tratament
    const genderT = userGender.gender;
    const genderTratted = getRealGender(genderT);
    function getRealGender(gender){
        if(gender === 'M' || gender === 'male'){
         return 'Masculino'
        }else if(gender === 'F' || gender === 'female'){   
         return 'Feminino'
        }else{
         return 'Outros'
        }
    }

    const response = {
        Name: formattedName,
        Genero: genderTratted,
        Idade: userAge.age + userAgeTrat,
        Nacionalidade: siglatratada[0].nome_pais,
        Frase: userAffir.affirmation
    }

    return res.status(200).send(response);

});

module.exports = routes;