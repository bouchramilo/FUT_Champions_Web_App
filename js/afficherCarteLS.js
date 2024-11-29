
document.addEventListener("DOMContentLoaded", () => {
    // pour les joueur de remplacement 
    // const remplacement = document.getElementById("RemplacementCartes");

    const savedCard = JSON.parse(localStorage.getItem("playersRemp")) || [] ;

    savedCard.forEach(playerRempl => {
        afficherCarteRempl(playerRempl);
        
    });
    
    // pour les joueur de terrain
    const savedCardTrrn = JSON.parse(localStorage.getItem("playersTrrn")) || [] ;

    savedCardTrrn.forEach(playerTrrn => {
        // let divCard = savedCard.find((playerTrrn) => playerTrrn.position === playerTrrn.id);
        // let divCard = playerTrrn.position ;
        let DIVplayer ;

        switch (playerTrrn.position) {
            case "GK":
                DIVplayer = document.getElementById("gk");
                  afficherCarteTerrain(playerTrrn, DIVplayer);
                 
              break;
      
            case "CB1":
              DIVplayer = document.getElementById("cb1");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
      
            case "CB2":
              DIVplayer = document.getElementById("cb2");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
      
            case "RB":
            DIVplayer = document.getElementById("rb");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
      
            case "LB":
            DIVplayer = document.getElementById("lb");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
      
            case "CM1":
              DIVplayer = document.getElementById("cm1");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
      
            case "CM2":
              DIVplayer = document.getElementById("cm2");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
      
            case "CM3":
              DIVplayer = document.getElementById("cm3");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
      
            case "RM":
            DIVplayer = document.getElementById("rm");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
      
            case "LM":
            DIVplayer = document.getElementById("lm");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
      
            case "LW":
            DIVplayer = document.getElementById("lw");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
      
            case "RW":
            DIVplayer = document.getElementById("rw");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
      
            case "ST1":
              DIVplayer = document.getElementById("st1");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
            case "ST2":
              DIVplayer = document.getElementById("st2");
                afficherCarteTerrain(playerTrrn, DIVplayer);
                  
              break;
          }
        
        // afficherCarteTerrain(playerTrrn);
        
    });
});



function afficherCarteTerrain(joueur, DivCarte) {

    
    
    if (joueur.position === "GK") {
        DivCarte.classList = "card";
      DivCarte.innerHTML = `
                          <!-- --------------------------------------------------------------------- -->
                              <div class="w-full h-2/3 flex flex-col items-center ">
                                  <div
                                      class="h-32 w-4/5 bg-[url('${joueur.photo}')]  bg-cover  bg-center flex justify-center items-center ">
                                      <div
                                          class="relative z-10 flex flex-col items-start justify-start h-full bg-opacity-100">
                                          <div class="relative top-10 right-12 text-sm font-bold">
                                              <p class=" text-center">${joueur.rating}</p>
                                              <p class="text-[8px] text-center">${joueur.position}</p>
                                          </div>

                                      </div>
                                  </div>

                              </div>
                              <div class=" w-[95%] h-1/3 flex flex-col items-center  ">
                                  <p class=" text-[12px] font-bold text-center">${joueur.name}</p>
                                  <div class="flex flex-col w-full justify-center items-center ">
                                      <table class=" w-[80%] h-full text-[8px]">
                                          <tr>
                                              <th class="text-center font-bold">DV</th>
                                              <th class="text-center font-bold">HDL</th>
                                              <th class="text-center font-bold">KCK</th>
                                              <th class="text-center font-bold">REF</th>
                                              <th class="text-center font-bold">SPD</th>
                                              <th class="text-center font-bold">POS</th>
                                          </tr>
                                          <tr>
                                              <td class="text-center font-bold">${joueur.diving}</td>
                                              <td class="text-center font-bold">${joueur.handling}</td>
                                              <td class="text-center font-bold">${joueur.kicking}</td>
                                              <td class="text-center font-bold">${joueur.reflexes}</td>
                                              <td class="text-center font-bold">${joueur.speed}</td>
                                              <td class="text-center font-bold">${joueur.positioning}</td>
                                          </tr>
                                      </table>

                                  </div>
                                  <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                      <img src=${joueur.flag} alt="flag" class="w-6 h-4">
                                      <img src=${joueur.logo} alt="logo"
                                          class="w-4 h-4">
                                  </div>
                              </div>



                              <!-- --------------------------------------------------------------------- -->
              `;
    } else {
        DivCarte.classList = "card";

      DivCarte.innerHTML = `
                          <!-- --------------------------------------------------------------------- -->
                              <div class="w-full h-2/3 flex flex-col items-center ">
                                  <div
                                      class="h-32 w-4/5 bg-[url('${joueur.photo}')]  bg-cover  bg-center flex justify-center items-center">
                                      <div
                                          class="relative z-10 flex flex-col items-start justify-start h-full bg-opacity-100">
                                          <div class="relative top-10 right-12 text-sm font-bold">
                                              <p class=" text-center">${joueur.rating}</p>
                                              <p class="text-[8px] text-center">${joueur.position}</p>
                                          </div>

                                      </div>
                                  </div>

                              </div>
                              <div class=" w-[95%] h-1/3 flex flex-col items-center  ">
                                  <p class=" text-[12px] font-bold text-center">${joueur.name}</p>
                                  <div class="flex flex-col w-full justify-center items-center ">
                                      <table class=" w-[80%] h-full text-[8px]">
                                          <tr>
                                              <th class="text-center font-bold">PAC</th>
                                              <th class="text-center font-bold">SHO</th>
                                              <th class="text-center font-bold">PAS</th>
                                              <th class="text-center font-bold">DRI</th>
                                              <th class="text-center font-bold">DEF</th>
                                              <th class="text-center font-bold">PHY</th>
                                          </tr>
                                          <tr>
                                              <td class="text-center font-bold">${joueur.pace}</td>
                                              <td class="text-center font-bold">${joueur.shooting}</td>
                                              <td class="text-center font-bold">${joueur.passing}</td>
                                              <td class="text-center font-bold">${joueur.dribbling}</td>
                                              <td class="text-center font-bold">${joueur.defending}</td>
                                              <td class="text-center font-bold">${joueur.physical}</td>
                                          </tr>
                                      </table>

                                  </div>
                                  <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                      <img src=${joueur.flag} alt="flag" class="w-6 h-4">
                                      <img src=${joueur.logo} alt="logo"
                                          class="w-4 h-4">
                                  </div>
                              </div>



                              <!-- --------------------------------------------------------------------- -->
              `;
    }
}

function afficherCarteRempl(joueur) {
    const RemplacementCartes = document.getElementById("RemplacementCartes");
    // let n = 12 ;
    if (joueur.position === "GK") {
        
        RemplacementCartes.innerHTML += `
                      <button data-id="" class="card-rempl h-60 w-[95%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "${joueur.position}">
                          <div id="cb1" class="w-full h-max  mx-3 text-center font-bold">
                          <!-- --------------------------------------------------------------------- -->
                              <div class="w-full h-2/3 flex flex-col items-center ">
                                  <div
                                      class="h-32 w-4/5 bg-[url('${joueur.photo}')]  bg-cover  bg-center flex justify-center items-center">
                                      <div
                                          class="relative z-10 flex flex-col items-start justify-start h-full bg-opacity-100">
                                          <div class="relative top-10 right-12 text-sm font-bold">
                                              <p class=" text-center">${joueur.rating}</p>
                                              <p class="text-[8px] text-center">${joueur.position}</p>
                                           </div>

                                      </div>
                                  </div>

                              </div>
                              <div class=" w-[95%] h-1/3 flex flex-col items-center  ">
                                  <p class=" text-[12px] font-bold text-center">${joueur.name}</p>
                                  <div class="flex flex-col w-full justify-center items-center ">
                                      <table class=" w-[80%] h-full text-[8px]">
                                          <tr>
                                              <th class="text-center font-bold">DV</th>
                                              <th class="text-center font-bold">HDL</th>
                                              <th class="text-center font-bold">KCK</th>
                                              <th class="text-center font-bold">REF</th>
                                              <th class="text-center font-bold">SPD</th>
                                              <th class="text-center font-bold">POS</th>
                                          </tr>
                                          <tr>
                                              <td class="text-center font-bold">${joueur.diving}</td>
                                              <td class="text-center font-bold">${joueur.handling}</td>
                                              <td class="text-center font-bold">${joueur.kicking}</td>
                                              <td class="text-center font-bold">${joueur.reflexes}</td>
                                              <td class="text-center font-bold">${joueur.speed}</td>
                                              <td class="text-center font-bold">${joueur.positioning}</td>
                                          </tr>
                                      </table>

                                  </div>
                                  <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                      <img src=${joueur.flag} alt="flag" class="w-6 h-4">
                                      <img src=${joueur.logo} alt="logo"
                                          class="w-4 h-4">
                                  </div>
                              </div>



                              <!-- --------------------------------------------------------------------- -->
                          </div>
                      </button>
              `;
            //   n++;
    } else {
        RemplacementCartes.innerHTML += `
                      <button data-id="" class="card-rempl h-60 w-[95%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "${joueur.position}">
                          <div id="cb1" class="w-full h-max  mx-3 text-center font-bold">
                          <!-- --------------------------------------------------------------------- -->
                              <div class="w-full h-2/3 flex flex-col items-center ">
                                  <div
                                      class="h-32 w-4/5 bg-[url('${joueur.photo}')]  bg-cover  bg-center flex justify-center items-center">
                                      <div
                                          class="relative z-10 flex flex-col items-start justify-start h-full bg-opacity-100">
                                          <div class="relative top-10 right-12 text-sm font-bold">
                                              <p class=" text-center">${joueur.rating}</p>
                                              <p class="text-[8px] text-center">${joueur.position}</p>
                                          </div>

                                      </div>
                                  </div>

                              </div>
                              <div class=" w-[95%] h-1/3 flex flex-col items-center  ">
                                  <p class=" text-[12px] font-bold text-center">${joueur.name}</p>
                                  <div class="flex flex-col w-full justify-center items-center ">
                                      <table class=" w-[80%] h-full text-[8px]">
                                          <tr>
                                              <th class="text-center font-bold">PAC</th>
                                              <th class="text-center font-bold">SHO</th>
                                              <th class="text-center font-bold">PAS</th>
                                              <th class="text-center font-bold">DRI</th>
                                              <th class="text-center font-bold">DEF</th>
                                              <th class="text-center font-bold">PHY</th>
                                          </tr>
                                          <tr>
                                              <td class="text-center font-bold">${joueur.pace}</td>
                                              <td class="text-center font-bold">${joueur.shooting}</td>
                                              <td class="text-center font-bold">${joueur.passing}</td>
                                              <td class="text-center font-bold">${joueur.dribbling}</td>
                                              <td class="text-center font-bold">${joueur.defending}</td>
                                              <td class="text-center font-bold">${joueur.physical}</td>
                                          </tr>
                                      </table>

                                  </div>
                                  <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                      <img src=${joueur.flag} alt="flag" class="w-6 h-4">
                                      <img src=${joueur.logo} alt="logo"
                                          class="w-4 h-4">
                                  </div>
                              </div>





                              <!-- --------------------------------------------------------------------- -->
                          </div>
                      </button>
              `;
            //   n++;
    }

    
  }