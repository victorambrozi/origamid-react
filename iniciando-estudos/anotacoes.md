# O que é o React
 React é uma biblioteca que facilita a criação de sistemas complexos para web. É a camada de visualização de um aplicativo MVC(Model View Controller). Com ele, é possível criar componentes, que são como elementos HTML e podem ser reutilizáveis. Também é possível otimizar a maneira que os dados são armazenados e tratados com os estados e props.

 ## Composição do React

 [] React - API superior do React </br>
 [] ReactDOM - Adiciona os métodos específico do DOM </br>
 [] Babel - Um compilador que permite a utilização do ES6 em browsers antigos.

 # Criando um aplicativo React
```
npx create-react-app <nome do app>
```

Esse comando cria um servidor de desenvolvimento, utilizando o Webpack para compilar o React, JSX E ES6. Tudo automaticamente.  
Após rodar o comando, será necessário entrar no diretório e iniciar o servidor com 
```
npm start || yarn start
```

# JSX - Javascript + XML
JSX é semelhante ao HTML. É uma extensão do javascript que permite a adição de tags HTML junto ao javascript.

## Diferenças do JSX para o HTML

[] className - é o atributo class.
[] htmlFor -  é o atributo for, numa tag label
[] camelCase
[] acesso de variaveis javascript são permitidas através das chaves {} 

## Comportamento do JSX com array
Ao criar uma lista com o JSX, o react exige uma 'key', que é resposável por identificar cada elemento da lista. Essa 'key' deve ser única. 
Quando realizar um map(), não é recomnedado utilizar o index para identificar esses elementos, somente em último caso.

Essas 'keys' são utilzadas pelo react, para identificar os itens que foram alterados, adicionados ou removidos.

# Eventos com React

Os eventos são sintáticos. Significa que são compatíveis em todos os browsers que o react da suporte. Os eventos são passados como atributos(camelCase).

# Componentes
São utilizados para dividir a aplicação em pequenos pedaços, para melhor manutenção. Não interem na performace.

# Propriedades
As propriedades são passadas para os componentes da mesma forma que os argumentos são passados para as funções. O acesso às propriedades do componente é feita através do argumento 'props'. Esse nome foi convencionado pela comuinidade React, mas pode ser passado como qualquer nome. 
As propriedades do objeto são passadas como atributos na chamada dos componentes.