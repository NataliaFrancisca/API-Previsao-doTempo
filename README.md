#Consumindo API de Previsão do Tempo

Nesta API simples para fim de estudo, consumi a API de previsão do tempo, mostrando as principais informações.

![](/public/src/example.png)

Baseada na aula de [**Consumindo API no Front e no Back-end | CodeDrops #45**](https://www.youtube.com/watch?v=vYlz3SmNXQQ) do Mayk Brito - Rokcetseat.

###Como rodar o projeto:

1. Fazer um git clone do projeto na sua máquina: `git clone https://github.com/NataliaFrancisca/API-Previsao-doTempo`

2. Ter o **Node** instalado na sua máquina

3. Depois de ter o Node instalado,  acessar a pasta **Server** pelo  prompt de comando e instalar as dependências do node: `npm i express nodemon cors axios`

3. Ainda no prompt de comando, dentro da pasta **Server**; rodar o seguinte comando: `nodemon server.js` ou `node server.js`.

4. Em um novo prompt de comando, entrar dentro da pasta **Public** e rodar o seguinte comando: `npx lite-server index.html`