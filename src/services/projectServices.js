const axios = require('axios');

module.exports = class ProjectServices{


    static async searchGenderByName(name){
        try{
            const genderURL = 'https://api.genderize.io';
            const getGender = await axios.get(genderURL, { 
                params:{
                    name
                }
             });
            return getGender;

        }catch(err){
            return res.status(400).send({error: 'Error searching by name!'});
        }

    }
    static async searchAgeByName(name){
        try{
            const ageURL = 'https://api.agify.io';
            const getAge = await axios.get(ageURL, { 
                params:{
                    name
                }
             });
            return getAge;

        }catch(err){
            return res.status(400).send({error: 'Error searching by name!'});
        }

    }

    static async searchNatiByName(name){
        try{
            const natiURL = 'https://api.nationalize.io';
            const getNati = await axios.get(natiURL, { 
                params:{
                    name
                }
             });
             return getNati;
            

        }catch(err){
            return res.status(400).send({error: 'Error searching by name!'});
        }

    }

    static async searchAffir(){
        try{
            const getAffir = await axios.get('https://www.affirmations.dev/');
            return getAffir;

        }catch(err){
            return res.status(400).send({error: 'Error searching by name!'});
        }

    }
    






}