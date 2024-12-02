document.addEventListener("DOMContentLoaded", () => {
  // Chargement des joueurs de remplacement
  const savedReplacementCards =
    JSON.parse(localStorage.getItem("players")) || [];
  const playersRempl = savedReplacementCards;
  playersRempl.forEach((playerRempl) => afficherCarteRempl(playerRempl));
});
// Function pour afficher les cartes de remplacement *****
function afficherCarteTrn(joueur) {
  const trrnCartes = document.getElementById("playersCourent");
  //   let JoueursTrn = JSON.parse(localStorage.getItem("playersTrrn")) || [];
  const classDivCarte = joueur.position.toLowerCase();
  const AllDivCarte = document.querySelectorAll("." + classDivCarte);

  AllDivCarte.forEach((DivCarte) => {
    // let DivCarte = DivCard ;
    if (joueur.position === "GK") {
      DivCarte.innerHTML = `
                          <!-- --------------------------------------------------------------------- -->
                              <div class="flex h-2/3 justify-center ">
                                    <div class="h-full w-4/5   bg-cover  bg-center justify-end items-center flex flex-row">
                                        <div class=" w-1/4 text-sm font-bold flex flex-col items-start justify-start ">
                                            <p class="jrating text-center">${joueur.rating}</p>
                                            <p class="jposition text-[8px] text-center">${joueur.position}</p>
                                        </div>
                                        <img src=${joueur.photo} alt="" class="jimg w-3/4 border rounded-full">

                                    </div>

                                </div>
                              <div class="relative top-4 w-[95%] h-1/3 flex flex-col items-center  ">
                                  <p class="name text-[12px] font-bold text-center">${joueur.name}</p>
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
                                              <td class="jdiving text-center font-bold">${joueur.diving}</td>
                                                <td class="jhandling text-center font-bold">${joueur.handling}</td>
                                                <td class="jkiking text-center font-bold">${joueur.kicking}</td>
                                                <td class="jreflexes text-center font-bold">${joueur.reflexes}</td>
                                                <td class="jspeed text-center font-bold">${joueur.speed}</td>
                                                <td class="jpositioning text-center font-bold">${joueur.positioning}</td>
                                          </tr>
                                      </table>

                                  </div>
                                  <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                      <img src=${joueur.flag} alt="flag" class="jflag w-6 h-4">
                                        <img src=${joueur.logo} alt="logo" class="jlogo w-4 h-4">
                                  </div>
                              </div>



                              <!-- --------------------------------------------------------------------- -->
              `;
    } else {
      DivCarte.innerHTML = `
                          <!-- --------------------------------------------------------------------- -->
                              <div class="flex h-2/3 justify-center ">
                                    <div class="h-full w-4/5   bg-cover  bg-center justify-end items-center flex flex-row">
                                        <div class=" w-1/4 text-sm font-bold flex flex-col items-start justify-start ">
                                            <p class="jrating text-center">${joueur.rating}</p>
                                            <p class="jposition text-[8px] text-center">${joueur.position}</p>
                                        </div>
                                        <img src=${joueur.photo} alt="" class="jimg w-3/4 border rounded-full">

                                    </div>

                                </div>
                              <div class="relative top-4 w-[95%] h-1/3 flex flex-col items-center  ">
                                  <p class="name text-[12px] font-bold text-center">${joueur.name}</p>
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
                                                <td class="jpace text-center font-bold">${joueur.pace}</td>
                                                <td class="jshooting text-center font-bold">${joueur.shooting}</td>
                                                <td class="jpassing text-center font-bold">${joueur.passing}</td>
                                                <td class="jdribbling text-center font-bold">${joueur.dribbling}</td>
                                                <td class="jdefending text-center font-bold">${joueur.defending}</td>
                                                <td class="jphysical text-center font-bold">${joueur.physical}</td>
                                          </tr>
                                      </table>

                                  </div>
                                  <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                      <img src=${joueur.flag} alt="flag" class="jflag w-6 h-4">
                                        <img src=${joueur.logo} alt="logo" class="jlogo w-4 h-4">
                                  </div>
                              </div>



                              <!-- --------------------------------------------------------------------- -->
              `;
    }
  });
}

function afficherCarteRempl(joueur) {
  const RemplacementCartes = document.getElementById("RemplacementCartes");
  if (joueur.position === "GK") {
    RemplacementCartes.innerHTML += `
                      <button data-id="" class="card-rempl card-details h-60 w-[95%]  bg-[url('images/badge_gold.webp')] hover:shadow-2xl hover:shadow-yellow-600 border-none rounded-md bg-cover  bg-center flex justify-center items-center" data-position = "${joueur.position}">
                          <div id="" class="gk w-full h-max  mx-3 text-center font-bold">
                          <!-- --------------------------------------------------------------------- -->
                              <div class="flex h-2/3 justify-center ">
                                    <div class="h-full w-4/5   bg-cover  bg-center justify-end items-center flex flex-row">
                                        <div class=" w-1/4 text-sm font-bold flex flex-col items-start justify-start ">
                                            <p class="jrating text-center max-sm:text-[10px]">${joueur.rating}</p>
                                            <p class="jposition text-[8px] text-center">${joueur.position}</p>
                                        </div>
                                        <img src=${joueur.photo} alt="" class="jimg w-3/4 border rounded-full">

                                    </div>

                                </div>
                              <div class="relative top-4 max-sm:top-0 w-[95%] h-1/3 flex flex-col items-center  ">
                                  <p class="name text-[10px] max-sm:text-[8px] max-font-normal font-bold text-center">${joueur.name}</p>
                                  <div class="flex flex-col w-full justify-center items-center ">
                                      <table class=" w-[80%] h-full text-[8px] max-sm:hidden">
                                          <tr>
                                              <th class="text-center font-bold">DV</th>
                                              <th class="text-center font-bold">HDL</th>
                                              <th class="text-center font-bold">KCK</th>
                                              <th class="text-center font-bold">REF</th>
                                              <th class="text-center font-bold">SPD</th>
                                              <th class="text-center font-bold">POS</th>
                                          </tr>
                                          <tr>
                                                <td class="jdiving text-center font-bold">${joueur.diving}</td>
                                                <td class="jhandling text-center font-bold">${joueur.handling}</td>
                                                <td class="jkiking text-center font-bold">${joueur.kicking}</td>
                                                <td class="jreflexes text-center font-bold">${joueur.reflexes}</td>
                                                <td class="jspeed text-center font-bold">${joueur.speed}</td>
                                                <td class="jpositioning text-center font-bold">${joueur.positioning}</td>
                                          </tr>
                                      </table>

                                  </div>
                                  <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                      <img src=${joueur.flag} alt="flag" class="jflag w-6 h-4">
                                        <img src=${joueur.logo} alt="logo" class="jlogo w-4 h-4">
                                  </div>
                              </div>



                              <!-- --------------------------------------------------------------------- -->
                          </div>
                      </button>
              `;
    //   n++;
  } else {
    RemplacementCartes.innerHTML += `
                      <button data-id="" class="card-rempl card-details h-60 w-[95%]  bg-[url('images/badge_gold.webp')] hover:shadow-2xl hover:shadow-yellow-600 border-none rounded-md bg-cover  bg-center flex justify-center items-center" data-position = "${
                        joueur.position
                      }">
                          <div id="" class="${joueur.position.toLowerCase()} w-full h-max  mx-3 text-center font-bold">
                          <!-- --------------------------------------------------------------------- -->
                              <div class="flex h-2/3 justify-center ">
                                    <div class="h-full w-4/5   bg-cover  bg-center justify-end items-center flex flex-row">
                                        <div class=" w-1/4 text-sm font-bold flex flex-col items-start justify-start ">
                                            <p class="jrating text-center">${
                                              joueur.rating
                                            }</p>
                                            <p class="jposition text-[8px] text-center">${
                                              joueur.position
                                            }</p>
                                        </div>
                                        <img src=${
                                          joueur.photo
                                        } alt="" class="jimg w-3/4 border rounded-full">

                                    </div>

                                </div>
                              <div class="relative top-4 max-sm:top-0 w-[95%] h-1/3 flex flex-col items-center  ">
                                  <p class="name text-[12px] font-bold text-center">${
                                    joueur.name
                                  }</p>
                                  <div class="flex flex-col w-full justify-center items-center ">
                                      <table class=" w-[80%] h-full text-[8px] max-sm:hidden">
                                          <tr>
                                              <th class="text-center font-bold">PAC</th>
                                              <th class="text-center font-bold">SHO</th>
                                              <th class="text-center font-bold">PAS</th>
                                              <th class="text-center font-bold">DRI</th>
                                              <th class="text-center font-bold">DEF</th>
                                              <th class="text-center font-bold">PHY</th>
                                          </tr>
                                          <tr>
                                                <td class="jpace text-center font-bold">${
                                                  joueur.pace
                                                }</td>
                                                <td class="jshooting text-center font-bold">${
                                                  joueur.shooting
                                                }</td>
                                                <td class="jpassing text-center font-bold">${
                                                  joueur.passing
                                                }</td>
                                                <td class="jdribbling text-center font-bold">${
                                                  joueur.dribbling
                                                }</td>
                                                <td class="jdefending text-center font-bold">${
                                                  joueur.defending
                                                }</td>
                                                <td class="jphysical text-center font-bold">${
                                                  joueur.physical
                                                }</td>
                                          </tr>
                                      </table>

                                  </div>
                                  <div class=" flex flex-row justify-center items-center gap-4 w-[90%]">
                                      <img src=${
                                        joueur.flag
                                      } alt="flag" class="jflag w-6 h-4">
                                        <img src=${
                                          joueur.logo
                                        } alt="logo" class="jlogo w-4 h-4">
                                  </div>
                              </div>





                              <!-- --------------------------------------------------------------------- -->
                          </div>
                      </button>
              `;
  }
}
