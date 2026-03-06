
// --- BANCO DE DADOS DOS ENIGMAS ---
const bancoEnigmas = {
  "1": {
    resposta: "armageddon",
    errosEspeciais: { "Armageddon": "Lembre-se das regras"},
    proximaPagina: "m3x7r1p9_1.html"
  },
  "2": {
    resposta: "convento",
    errosEspeciais: {"Convento": "Lembre-se das regras"},
    proximaPagina: "n5v2k8b4_2.html"
  },
  "3": {
    resposta: "natal",
    errosEspeciais: {"Natal": "Lembre-se das regras"},
    proximaPagina: "p9q1z7w3_3.html"
  },

  "4": {
    resposta: "anodaram",
    errosEspeciais: {"maradona": "Quase, qual é a direção da seta?"},
    proximaPagina: "q4l6j8m2_4.html"
  },

   "5": {
    resposta: "sos",
    errosEspeciais: {"sinaldesocorro": "você fez um bom trabalho, mas ainda não é isso..."},
    proximaPagina: "r2t8n5x9_5.html"
  },

  "6": {
    resposta: "taj mahal",
    errosEspeciais: {},
    proximaPagina: "s7d3g9h1_6.html"
  },

  "7": {
    resposta: "roma",
    errosEspeciais: {"itália": "o	caminho	está	certo, mas	ainda	não	chegou	lá ,	não	esqueça	o	k,	o	π	e	o	Yin	e	Yang"},
    proximaPagina: "t1f4s8z2_7.html"
  },

  "8": {
    resposta: "esfinge",
    errosEspeciais: {},
    proximaPagina: "u6b9v3n7_8.html"
  },

  "9": {
    resposta: "leopardo",
    errosEspeciais: {"pantherapardus": "Ok, agora pesquise!" },
    proximaPagina: "v8w4q2e5_9.html"
  },

  "10": {
    resposta: "ancestral",
    errosEspeciais: {"acnastrel": "Você está esquecendo o detalhe na grama" },
    proximaPagina: "x2z9a7s3_10.html"
  },

  "11": {
    resposta: "ashtar sheran",
    errosEspeciais: {},
    proximaPagina: "z5h1m9k4_11.html"
  }

};

// --- CAPTURA DOS ELEMENTOS ---
const corpoPagina = document.body;
const faseAtual = corpoPagina.dataset.fase; // Captura o valor do data-fase
const instrucao = document.getElementById('alerta');
const input = document.getElementById('resposta');
const botao = document.getElementById('btn_send');

// --- LÓGICA DE VALIDAÇÃO ---
if (botao && faseAtual) {
  botao.addEventListener('click', () => {
    const palpite = input.value.trim(); 

    // --- NOVA PARTE: SE FOR A PÁGINA DE CONTINUAR NO INDEX ---
    if (faseAtual === "continuar") {
      let encontrouQualquerResposta = false;

      // Percorre o banco de dados procurando se o que foi digitado existe em alguma fase
      for (let id in bancoEnigmas) {
        if (palpite === bancoEnigmas[id].resposta) {
          window.location.href = bancoEnigmas[id].proximaPagina;
          encontrouQualquerResposta = true;
          break; 
        }
      }

      if (!encontrouQualquerResposta) {
        instrucao.innerText = "Essa resposta não pertence a nenhum desafio.";
        instrucao.style.color = "var(--cor-neonPink)";
        input.value = "";
      }
    } 
    
    // --- LÓGICA ORIGINAL PARA AS PÁGINAS DE ENIGMA ---
    else {
      const dadosFase = bancoEnigmas[faseAtual];

      // Se o jogador acertar (exatamente igual)
      if (palpite === dadosFase.resposta) {
        window.location.href = dadosFase.proximaPagina;
      } 
      // Se o jogador cair em um erro específico (ex: fase 1)
      else if (dadosFase.errosEspeciais[palpite]) {
        instrucao.innerText = dadosFase.errosEspeciais[palpite];
        instrucao.style.color = "var(--cor-vibrantBlue)";
      } 
      // Erro comum
      else {
        instrucao.innerText = "Resposta errada";
        instrucao.style.color = "var(--cor-neonPink)";

        // LIMPA O CAMPO AUTOMATICAMENTE
        input.value = "";
      }
    }
  });

  // Permitir enviar com a tecla Enter
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') botao.click();
  });
}

// --- NOVA LÓGICA: TOCAR ÁUDIO (EXCLUSIVO FASE 4) ---
const imagem = document.getElementById('imagemAudio');
const audio = document.getElementById('meuAudio');

if (imagem && audio) {
  imagem.addEventListener('click', () => {
    audio.play(); // Toca o som quando clicar na imagem
  });
}


// --- PAGINA INICIAL ---

const btnContinue = document.getElementById('btn_continue');
const areaContinue = document.getElementById('area_continue');

if (btnContinue && areaContinue) {
    btnContinue.addEventListener('click', () => {
        // Remove a classe que esconde e adiciona a que mostra
        areaContinue.classList.remove('input_hidden');
        areaContinue.classList.add('input_visible');
        
        // Esconde o botão original
        // btnContinue.classList.add('input_hidden');
        
        // Coloca o foco no input automaticamente para o jogador já digitar
        document.getElementById('resposta').focus();
    });
}

