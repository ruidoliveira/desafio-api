Api informações pelo nome (NodeJS):
Produzir uma API que, dado o nome de uma pessoa, retornar sua possível nacionalidade, sexo e idade, além de uma frase motivacional. Exemplo de entrada e retorno:

Entrada:
{
  "nome":"rui"
}

Saída:
{
  "nome": "Matheus",       // primeira letra maiuscula
  "genero": "masculino",  // enum para "masculino", "feminino", "outro"
  "pais": "Brazil"               // país em inglês
  "idade": "52 anos"        // idade com seguida de " anos" ou " ano"
  "frase": "You are worthy and deserving of respect"
}

APIs utilizadas:
https://genderize.io/
https://agify.io/
https://nationalize.io/
https://www.affirmations.dev/
 
Diferenciais:
- API utilizar um token de segurança
- Adicionar dados retornados no banco de dados para que quando o usuário pesquise novamente por determinado nome verifique se existe primeiro no banco para não ficar consumindo dados da APi toda a hora.

npm install express
npm install body-parser --save
npm install axios --save



Listagem de usuários:
Endpoints:
/api/

Requisição	Endpoint	Descrição
POST	     /api/	    Busca informações sobre o nome informado

Entrada /api/:
{
   "name": "rui",
}

Saida /api/:
{
   "Name": "Rui",
   "Genero": Masculino",
   "Idade": "42 anos",
   "Nacionalidade": "Portugal",
   "Frase": "You're a smart cookie"
}
