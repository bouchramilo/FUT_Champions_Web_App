const SwFormation = document.getElementById("formation");


SwFormation.addEventListener("change", () => {

    const typeFormation = SwFormation.value ;
    console.log("formation : "+ typeFormation);

    // const selectElement = document.getElementById("fruits");
    // SwFormation.classList.toggle("bg-orange-400") ;

    const DIVattaquant = document.getElementById("attaquants");
    const DIVmilieux = document.getElementById("milieux");
    const DIVdefenseurs = document.getElementById("defenseurs");
    const DIVdeGardien = document.getElementById("gardien");

    if( typeFormation === "1-4-4-2" ){
        // alert("formation : 1-4-4-2 ");

        DIVattaquant.innerHTML = `

                    <!-- carte 1  -->
                        <button data-id="11"
                            class=" card h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "ST1">
                            <div id="st1" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                                

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 2 -->
                        <button data-id="10"
                            class=" card h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "ST2">
                            <div id="st2" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                                

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>

            `;

        DIVmilieux.innerHTML = `

                    <!-- carte 1  -->
                        <button data-id="9"
                            class=" card h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "LM">
                            <div id="lm" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                               
                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 2 -->
                        <button data-id="8"
                            class=" card h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "CM1">
                            <div  id="cm1" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                            
                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 3 -->
                        <button data-id="7"
                            class=" card h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "CM2">
                            <div id="cm2" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                               
                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 4 -->
                        <button data-id="6"
                            class=" card h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "RM">
                            <div id="rm" class="w-full h-max  mx-3 text-white text-center font-bold">
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
                            class=" card h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "LW">
                            <div id="lw" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 2 -->
                        <button data-id="10"
                            class=" card h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "ST1">
                            <div id="st1" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 3 -->
                        <button data-id="9"
                            class=" card h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "RW">
                            <div id="rw" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
        
            `;


        DIVmilieux.innerHTML = `

                    <!-- carte 1  -->
                        <button data-id="8"
                            class=" card h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "CM1">
                            <div id="cm1" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 2 -->
                        <button data-id="7"
                            class=" card h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "CM2">
                            <div id="cm2" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>
                    <!-- carte 3 -->
                        <button data-id="6"
                            class=" card h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center" data-position = "CM3">
                            <div id="cm3" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </button>

            `;

    }

    DIVdefenseurs.classList.remove("hidden");
    DIVdeGardien.classList.remove("hidden");



    

});
