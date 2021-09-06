const projectServices = require('../../services/projectServices');
const siglas2 = require('../../siglas.json');

class ProjectController {
    async getInfoByName(req, res){
        
        try{
            console.log(req.userId);
            const name = req.body.name;
            const formattedName = capitalize(name); 
            // 
            const getGender = await projectServices.searchGenderByName(name);
            const getAge = await projectServices.searchAgeByName(name);
            const getNati = await projectServices.searchNatiByName(name);
            const getAffir = await projectServices.searchAffir();            


            // getInfo
            const userGender = getGender.data
            const userAge = getAge.data;
            const userNati = getNati.data;
            const userAffir = getAffir.data.affirmation;
           
            
            

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

                
            var siglatratada = siglas2.data.filter(country => country.sigla == userNati.country[0].country_id);
            
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
                Frase: userAffir
            }

           
            return res.status(200).send(response);

                }catch(err){
                    return res.status(400).send({error: 'Error searching by name!'});
                }
            }
}

module.exports = new ProjectController();