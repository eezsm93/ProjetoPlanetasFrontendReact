import React from 'react'

export var myJson = `{
    "data": [
      {
        "name": "Mercúrio",
        "image": "Mercurio.png",
        "description": "Mercúrio é o primeiro e menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.",
        "area": 74800000,
        "durationDay": 5667000000,
        "sunDistance": 870000000,
        "gravity": 13.32
      },
      {
        "name": "Vênus",
        "image": "Venus.png",
        "description": "Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite.",
        "area": 1460200000,
        "durationDay": 7723000000,
        "sunDistance": 1256700000,
        "gravity": 31.932
      },
      {
        "name": "Terra",
        "image": "Terra.png",
        "description": "A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul.",
        "area": 510100000,
        "durationDay": 82800000,
        "sunDistance": 2340000000,
        "gravity": 35.3052
      },
      {
        "name": "Marte",
        "image": "Marte.png",
        "description": "Marte é o quarto planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul.",
        "area": 1770200000,
        "durationDay": 9280000000,
        "sunDistance": 2356000000,
        "gravity": 27.456
      },
      {
        "name": "Júpiter",
        "image": "Jupiter.png",
        "description": "Júpter é o quinto planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul.",
        "area": 1360200000,
        "durationDay": 8280000000,
        "sunDistance": 5720000000,
        "gravity": 28.098
      },
      {
        "name": "Saturno",
        "image": "Saturno.png",
        "description": "Saturno é o oitavo planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul.",
        "area": 1660200000,
        "durationDay": 870000000,
        "sunDistance": 15923000000,
        "gravity": 13.567
      },
      {
        "name": "Urano",
        "image": "Urano.png",
        "description": "Urano é o nono planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul.",
        "area": 1160200000,
        "durationDay": 14000000,
        "sunDistance": 4412000000,
        "gravity": 16.567
      },
      {
        "name": "Netuno",
        "image": "Netuno.png",
        "description": "Urano é o nono planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul.",
        "area": 1860200000,
        "durationDay": 24000000,
        "sunDistance": 3412000000,
        "gravity": 36.567
      },
      {
        "name": "Plutao",
        "image": "Plutao.png",
        "description": "Urano é o nono planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul.",
        "area": 960200000,
        "durationDay": 34000000,
        "sunDistance": 6412000000,
        "gravity": 17.567
      }
      
    ]
  }`
  


  export var myData = JSON.parse(myJson);
  export let planets = myData.data;

