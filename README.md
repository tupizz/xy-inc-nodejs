DOCUMENTAÇÃO DO PROJETO
===========================================


## **ESTRUTURA DO BANCO**
 
Foram criados dois bancos no [mlab](https://mlab.com) sendo um para a aplicação e outro para rodar os testes de integração, com as seguintes URIs de conexão:

 **Banco principal:** `mongodb://admin:admin123@ds113580.mlab.com:13580/db-xy-poi`

**Banco de teste:** `mongodb://admin:admin123@ds123976.mlab.com:23976/db-xy-poi-test`

Assim, a seguinte modelagem da entidade foi projetada:

    name: String required,
    x: Integer required,
    y: Integer required,

<br/>

## **DESCRIÇÃO DA API**

A porta 8888 está exposta, e a partir dela é possível acessar a API de resources:

- **GET**
  - **Listagem:** Para consultar todos os recursos cadastrados no banco, basta acessar http://localhost:8888/poi 

- **POST**
    - **Criação de novo POI:** A partir de http://localhost:8888/poi é possível criar um novo POI, como payload debe ser enviado um objeto JSON, como no exemplo:
            
        ```json
            {
                "x": 22,
                "y": 17,
                "name": "Estádio de futebol"
            }
        ```
            

    - **Encontrar POI's proximos:** A partir de http://localhost:8888/poi/near é possível listar todos os pois proximos a um determinado ponto levando em consideração uma thresold de distância

        ```json
            {
                "x": 22,
                "y": 17,
                "d": 10
            }
        ```


## **EXECUTANDO O PROJETO**

Foi criado no **package.json** dois scripts para iniciar a aplicação e rodar os testes de integração, mas antes de executar qualquer um desses dois scripts é necessário seguir os seguintes passos:
  1. Baixar as dependencias da aplicação
        
          npm install

  1. Entrar na pasta raiz do projeto e executar:
          
          npm start

  1. Caso queira rodar os testes basta executar nessa mesma pasta o seguinte comando:
  
          npm test

  **Obs:** É necessário ter conexão com a internet para poder realizar a conexão com o banco da aplicação.

----------