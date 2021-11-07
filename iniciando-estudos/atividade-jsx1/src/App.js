import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

export const App = () => {
  const dados = luana;

  const preco = dados.compras.map(dados => +dados.preco.replace('R$ ', ''));
  const totalGasto = preco.reduce((acc, preco) => (acc + preco));

  const estiloSituacao = {
    color: (dados.ativa) ? 'green' : 'red'
  }

  return (
    <div>
      <p> Nome: {dados.cliente} </p>
      <p> Idade: {dados.idade} </p>
      <p> Situacao:
        <span style={estiloSituacao}> {dados.ativa ? 'Ativa' : 'Inativa'}</span>
      </p>
      <p>Total gasto: {totalGasto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      {totalGasto > 10000 && <p> Você está gastando muito </p>}
    </div>
  );
};
