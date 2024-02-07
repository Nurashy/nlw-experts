const perguntas = [
    {
      pergunta: "O que significa a sigla 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '==='' em JavaScript?",
      respostas: [
        "Comparação estrita de valor e tipo",
        "Atribuição de valor",
        "Comparação de valor apenas",
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'hoisting' em JavaScript?",
      respostas: [
        "Elevação de variáveis e funções",
        "Um tipo de loop",
        "Manipulação de eventos",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      respostas: [
        "let myVar;",
        "const myVar = 10;",
        "Ambas as opções estão corretas",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'querySelector'?",
      respostas: [
        "Selecionar elementos pelo nome da tag",
        "Selecionar elementos pelo ID",
        "Selecionar elementos pelo nome da classe",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um callback em JavaScript?",
      respostas: [
        "Um tipo de variável",
        "Uma função que é passada como argumento para outra função",
        "Uma estrutura condicional",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "'55'",
        "10",
        "Erro de tipo",
      ],
      correta: 0
    },
    {
      pergunta: "Como você comenta uma linha de código em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "# Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "O que é 'NaN' em JavaScript?",
      respostas: [
        "Not a Number",
        "Nova Arquitetura Numérica",
        "Nada Associado Nisso",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "Não há diferença, são equivalentes",
        "'null' é atribuído pelo programador, 'undefined' é atribuído pelo sistema",
        "'undefined' é usado para variáveis não inicializadas, 'null' é usado para variáveis vazias",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
  
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)
  }
  
  