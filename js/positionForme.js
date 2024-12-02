const ajouterJoueur2 = document.getElementById("positionJoueur");

ajouterJoueur2.addEventListener("change", () => {
  let formPosition = document.getElementById("formPosition");

  formPosition.innerHTML = "";

  if (ajouterJoueur2.value === "") {
    formPosition.innerHTML = `<p class="text-red-600">Choisissez une position</p>`;
  } else {
    if (ajouterJoueur2.value === "GK") {
      formPosition.innerHTML = `
                <div
                            class="w-full lg:flex lg:flex-col max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="diving">diving Joueur :</label>
                                <input type="number" id="divingJoueur"
                                    class="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="Entrez diving" required><span id="id_1"></span>

                            </div>
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="handling">handling Joueur :</label>
                                <input type="number" id="handlingJoueur"
                                    class="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="Entrez handling " required><span id="id_2"></span>
                            </div>
                        </div>

                        <div
                            class="w-full lg:flex lg:flex-col max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="kicking">kicking Joueur :</label>
                                <input type="number" id="kickingJoueur"
                                    class="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="Entrez kicking" required><span id="id_3"></span>

                            </div>
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="reflexes">reflexes Joueur
                                    :</label>
                                <input type="number" id="reflexesJoueur"
                                    class="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="Entrez reflexes" required><span id="id_4"></span>
                            </div>
                        </div>

                        <div
                            class="w-full lg:flex lg:flex-col max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="speed">speed Joueur
                                    :</label>
                                <input type="number" id="speedJoueur"
                                    class="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="Entrez speed" required><span id="id_5"></span>

                            </div>
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="positioning">positioning Joueur :</label>
                                <input type="number" id="positioningJoueur"
                                    class="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="Entrez positioning" required><span id="id_6"></span>
                            </div>
                        </div>
                
                `;
    } else {
      formPosition.innerHTML = `
                
               <div
                            class="w-full lg:flex lg:flex-col max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="pace">pace Joueur :</label>
                                <input type="number" id="paceJoueur"
                                    class="w-full p-2 mb-2 border border-gray-300 rounded-md" placeholder="Entrez pace" required>

                            </div>
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="shooting">shooting Joueur :</label>
                                <input type="number" id="shootingJoueur"
                                    class="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="Entrez shooting " required>
                            </div>
                        </div>

                        <div
                            class="w-full lg:flex lg:flex-col max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="passing">passing Joueur :</label>
                                <input type="number" id="passingJoueur"
                                    class="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="Entrez passing" required>

                            </div>
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="dribbling">dribbling Joueur
                                    :</label>
                                <input type="number" id="dribblingJoueur"
                                    class="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="Entrez dribbling" required>
                            </div>
                        </div>

                        <div
                            class="w-full lg:flex lg:flex-col max-md:flex max-md:flex-row max-sm:flex max-sm:flex-col max-md:gap-2 md:flex md:gap-2   ">
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="defending">defending Joueur
                                    :</label>
                                <input type="number" id="defendingJoueur"
                                    class="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="Entrez defending" required>

                            </div>
                            <div class="lg:w-full max-md:w-1/2 md:w-1/2 max-sm:w-full">
                                <label class="pl-4" for="physical">physical Joueur :</label>
                                <input type="number" id="physicalJoueur"
                                    class="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    placeholder="Entrez physical" required>
                            </div>
                        </div>
                
                `;
    }
  }
});
