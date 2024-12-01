
const SwFormation = document.getElementById("formation");
// window.onload = function() {
//     // Vérifie si 'playersTrrn' existe déjà
//     if (!localStorage.getItem("playersTrrn")) {
//         localStorage.setItem("playersTrrn", JSON.stringify([])); // Initialise à un tableau vide si inexistant
//     }

//     // Affiche les données actuelles dans la console
//     console.log(localStorage.getItem("playersTrrn")); // Affichera les données actuelles ou "[]"
// };

SwFormation.addEventListener("change", () => {
   

    const typeFormation = SwFormation.value ;
    console.log("formation : "+ typeFormation);

    const DIVattaquant = document.getElementById("attaquants");
    const DIVmilieux = document.getElementById("milieux");
    const DIVdefenseurs = document.getElementById("defenseurs");
    const DIVdeGardien = document.getElementById("gardien");

    if( typeFormation === "1-4-4-2" ){
        // alert("formation : 1-4-4-2 ");

        DIVattaquant.innerHTML = `

                    <!-- carte 1  -->
                        <button data-id="11"
                            class=" card card-details h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "ST">
                            <div id="" class="st w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                                

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 2 -->
                        <button data-id="10"
                            class=" card card-details h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "ST">
                            <div id="" class="st w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                                

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>

            `;

        DIVmilieux.innerHTML = `

                    <!-- carte 1  -->
                        <button data-id="9"
                            class=" card card-details h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "LM">
                            <div id="" class="lm w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                               
                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 2 -->
                        <button data-id="8"
                            class=" card card-details h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "CM">
                            <div  id="" class="cm w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                            
                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 3 -->
                        <button data-id="7"
                            class=" card card-details h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "CM">
                            <div id="" class="cm w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                               
                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 4 -->
                        <button data-id="6"
                            class=" card card-details h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "RM">
                            <div id="" class="rm w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                                
                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>

            `;
        
    }
    else if( typeFormation === "1-4-3-3" ){
        // alert("formation : 1-4-3-3 ");

        DIVattaquant.innerHTML = `

                    <!-- carte 1  -->
                        <button data-id="11"
                            class=" card card-details h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "LW">
                            <div id="" class="lw w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 2 -->
                        <button data-id="10"
                            class=" card card-details h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "ST">
                            <div id="" class="st w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 3 -->
                        <button data-id="9"
                            class=" card card-details h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "RW">
                            <div id="" class="rw w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
        
            `;


        DIVmilieux.innerHTML = `

                    <!-- carte 1  -->
                        <button data-id="8"
                            class=" card card-details h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "CM">
                            <div id="" class="cm w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 2 -->
                        <button data-id="7"
                            class=" card card-details h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "CM">
                            <div id="" class="cm w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 3 -->
                        <button data-id="6"
                            class=" card card-details h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "CM">
                            <div id="" class="cm w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>

            `;

    }

    DIVdefenseurs.classList.remove("hidden");
    DIVdeGardien.classList.remove("hidden");



    

});
