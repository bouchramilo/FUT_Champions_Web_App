// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Selection des elements
playersCourent = document.querySelector(".playersCourent"); // Cards sur le terrain
playersRempl = document.querySelector(".playersRempl"); // Cards en remplacement
cardSelectionner = null; 
const formContainer = document.getElementById("formContainer"); // conteainer pour afficher   les details

// Gestionnaire pour dblclick
const playerDetails = [playersCourent, playersRempl];
playerDetails.forEach((player) => {
  player.addEventListener("dblclick", (e) => {
    console.log("element clique : ", e.target);

    if (e.target.classList.contains("card-details")) {
      console.log("Carte selectionnee pour affichage : ", e.target);

      detailsCard(e.target);
    } else {
      console.log("L'element clique n'est pas une carte valide.");
    }

    const btFfermer = document.getElementById("btFfermer");
    btFfermer.addEventListener("click", () => {
      formContainer.classList.toggle("hidden");
    });
  });
});

function detailsCard(button) {
  const joueurPosition = button.querySelector(".jposition").textContent;
  const joueurRating = button.querySelector("p.text-center").textContent;
  const joueurName = button.querySelector(".name").textContent;

  const joueurFlag = button.querySelector(".jflag");
  const jFlagSrc = joueurFlag.src;

  const joueurLogo = button.querySelector(".jlogo");
  const jLogoSrc = joueurLogo.src;

  const joueurImg = button.querySelector(".jimg");
  const jImgSrc = joueurImg.src;

//   mettre la carte de details visible
  formContainer.classList.remove("hidden");

  if (joueurPosition === "GK") {
    // alert(joueurPosition);
    const joueurDiving = button.querySelector(".jdiving").textContent;
    const joueurHandling = button.querySelector(".jhandling").textContent;
    const joueurKicking = button.querySelector(".jkiking").textContent;
    const joueurReflexes = button.querySelector(".jreflexes").textContent;
    const joueurSpeed = button.querySelector(".jspeed").textContent;
    const joueurPositioning = button.querySelector(".jpositioning").textContent;

    formContainer.innerHTML = `

                        <div class="bg-white p-2 rounded-lg shadow-lg w-96 flex flex-col gap-2">
                            <div class="w-full flex flex-row ">
                                <h2 id="nomJ" class=" w-11/12 text-2xl mb-4 text-[18px] text-center">${joueurName}</h2>
                                <button id="btFfermer" class="w-1/12 items-end "><img src="images/btnFermer.png" alt="fermer" class="relative bottom-12 left-12 bg-white border rounded-full hover:bg-red-300 hover:shadow-md hover:shadow-gray-600"></button>
                            </div>
                            <div class="w-full h-1/2 flex flex-row gap-2 ">
                                <div class="h-full w-1/3 flex flex-col gap-2">
                                    <img src=${jImgSrc} alt="photo de Joueur" class="border rounded-full bg-green-100">
                                    <div class="flex flex-row justify-center gap-2">
                                        <img src=${jFlagSrc} alt="flag" class="">
                                        <img src=${jLogoSrc} alt="logo" class="w-1/4">
                                    </div>
                                </div>
                                <div class="h-full w-2/3 ">
                                    <table class=" w-[100%] h-full text-[12px]">
                                        <tr>
                                            <th class="text-center font-bold">Position</th>
                                            <td colspan="2" class="text-center font-bold">${joueurPosition}</td>
                                        </tr>
                                        <tr>
                                            <th class="text-center font-bold">Rating</th>
                                            <td class="text-center font-bold">${joueurRating}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurRating}" min="0" max="100" class="text-center font-bold " disabled></td>
                                            
                                        </tr>
                                        <tr>
                                            <th class="text-center font-bold">Diving</th>
                                            <td class="text-center font-bold">${joueurDiving}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurDiving}" min="0" max="100" class="text-center font-bold " disabled></td>
                                            
                                        </tr>
                                        <tr>
                                            <th class="text-center font-bold">Handling</th>
                                            <td class="text-center font-bold">${joueurHandling}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurHandling}" min="0" max="100" class="text-center font-bold " disabled></td>
                                            </tr>
                                        <tr>
                                            <th class="text-center font-bold">Kicking</th>
                                            <td class="text-center font-bold">${joueurKicking}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurKicking}" min="0" max="100" class="text-center font-bold " disabled></td>
                                            </tr>
                                        <tr>
                                            <th class="text-center font-bold">Reflexes</th>
                                            <td class="text-center font-bold">${joueurReflexes}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurReflexes}" min="0" max="100" class="text-center font-bold " disabled></td>
                                            </tr>
                                        <tr>
                                            <th class="text-center font-bold">Speed</th>
                                            <td class="text-center font-bold">${joueurSpeed}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurSpeed}" min="0" max="100" class="text-center font-bold " disabled></td>
                                            </tr>
                                        <tr>
                                            <th class="text-center font-bold">Positioning</th>
                                            <td class="text-center font-bold">${joueurPositioning}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurPositioning}" min="0" max="100" class="text-center font-bold " disabled></td>
                                            </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="w-full h-1/2 flex gap-2 px-2 text-[14px]">
                                <button type="button" onclick="modifierJoueur()" class="w-1/2 h-10 bg-green-600 hover:shadow-md hover:shadow-gray-600 hover:bg-green-500  border-none rounded-md">Modifier</button>
                                <button type="button" onclick="supprimerJoueur()" class="w-1/2 h-10 bg-red-400 hover:shadow-md hover:shadow-gray-600 hover:bg-red-300  border-none rounded-md">Supprimer</button>
                            </div>
                        </div>
            
            
                `;
  } else {
    const joueurPace = button.querySelector(".jpace").textContent;
    const joueurShooting = button.querySelector(".jshooting").textContent;
    const joueurPassing = button.querySelector(".jpassing").textContent;
    const joueurDribbling = button.querySelector(".jdribbling").textContent;
    const joueurDefending = button.querySelector(".jdefending").textContent;
    const joueurPhysical = button.querySelector(".jphysical").textContent;

    formContainer.innerHTML = `

                        <div class="bg-white p-4 rounded-lg shadow-lg w-96 flex flex-col gap-2">
                            <div class="w-full flex flex-row ">
                                <h2 id="nomJ" class=" w-11/12 text-2xl mb-4 text-[18px] text-center">${joueurName}</h2>
                                <button id="btFfermer" class="w-1/12 items-end "><img src="images/btnFermer.png" alt="fermer" class="relative bottom-12 left-12 bg-white border rounded-full hover:bg-red-300 hover:shadow-md hover:shadow-gray-600"></button>
                            </div>
                            <div class="w-full h-1/2 flex flex-row gap-2 ">
                                <div class="h-full w-1/3 flex flex-col gap-2">
                                    <img src=${jImgSrc} alt="photo de Joueur" class="border rounded-full bg-green-100">
                                    <div class="flex flex-row justify-center gap-2">
                                        <img src=${jFlagSrc} alt="flag" class="">
                                        <img src=${jLogoSrc}  alt="logo" class="w-1/4">
                                    </div>
                                </div>
                                <div class="h-full w-2/3 ">
                                    <table class=" w-[80%] h-full text-[12px]">
                                        <tr>
                                            <th class="text-center font-bold">Position</th>
                                            <td colspan="2" class="text-center font-bold">${joueurPosition}</td>
                                        </tr>
                                        <tr>
                                            <th class="text-center font-bold">Rating</th>
                                            <td class="text-center font-bold">${joueurRating}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurRating}" min="0" max="100" class="text-center font-bold " disabled></td>
                                        </tr>
                                        <tr>
                                            <th class="text-center font-bold">Pace</th>
                                            <td class="text-center font-bold">${joueurPace}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurPace}" min="0" max="100" class="text-center font-bold " disabled></td>
                                        </tr>
                                        <tr>
                                            <th class="text-center font-bold">Shooting</th>
                                            <td class="text-center font-bold">${joueurShooting}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurShooting}" min="0" max="100" class="text-center font-bold " disabled></td>
                                            </tr>
                                        <tr>
                                            <th class="text-center font-bold">Passing</th>
                                            <td class="text-center font-bold">${joueurPassing}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurPassing}" min="0" max="100" class="text-center font-bold " disabled></td>
                                            </tr>
                                        <tr>
                                            <th class="text-center font-bold">Dribbling</th>
                                            <td class="text-center font-bold">${joueurDribbling}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurDribbling}" min="0" max="100" class="text-center font-bold " disabled></td>
                                            </tr>
                                        <tr>
                                            <th class="text-center font-bold">Defending</th>
                                            <td class="text-center font-bold">${joueurDefending}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurDefending}" min="0" max="100" class="text-center font-bold " disabled></td>
                                            </tr>
                                        <tr>
                                            <th class="text-center font-bold">Physical</th>
                                            <td class="text-center font-bold">${joueurPhysical}</td>
                                            <td class="text-center font-bold"><input type="range" value="${joueurPhysical}" min="0" max="100" class="text-center font-bold " disabled></td>
                                            </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="w-full h-1/2 flex gap-2 px-2 text-[14px]">
                                <button type="button" onclick="modifierJoueur()" class="w-1/2 h-10 bg-green-600 hover:shadow-md hover:shadow-gray-600 hover:bg-green-500  border-none rounded-md">Modifier</button>
                                <button type="button" onclick="supprimerJoueur()" class="w-1/2 h-10 bg-red-400 hover:shadow-md hover:shadow-gray-600 hover:bg-red-300  border-none rounded-md">Supprimer</button>
                            </div>
                        </div>
            
            
                `;
  }
}
