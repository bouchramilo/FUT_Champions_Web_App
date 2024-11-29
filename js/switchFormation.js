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
        alert("formation : 1-4-4-2 ");

        DIVattaquant.innerHTML = `

                    <!-- carte 1  -->
                        <div 
                            class="h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center">
                            <div id="st1" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                                

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </div>
                    <!-- carte 2 -->
                        <div 
                            class="h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center">
                            <div id="st2" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                                

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </div>

            `;

        DIVmilieux.innerHTML = `

                    <!-- carte 1  -->
                        <div
                            class="h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center">
                            <div id="lm" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                               
                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </div>
                    <!-- carte 2 -->
                        <div
                            class="h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center">
                            <div  id="cm1" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                            
                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </div>
                    <!-- carte 3 -->
                        <div 
                            class="h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center">
                            <div id="cm2" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                               
                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </div>
                    <!-- carte 4 -->
                        <div 
                            class="h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center">
                            <div id="rm" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->
                                
                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </div>

            `;
        
    }
    else if( typeFormation === "1-4-3-3" ){
        alert("formation : 1-4-3-3 ");

        DIVattaquant.innerHTML = `

                    <!-- carte 1  -->
                        <div
                            class="h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center">
                            <div id="lw" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </div>
                    <!-- carte 2 -->
                        <div
                            class="h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center">
                            <div id="st1" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </div>
                    <!-- carte 3 -->
                        <div
                            class="h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center">
                            <div id="rw" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </div>
        
            `;


        DIVmilieux.innerHTML = `

                    <!-- carte 1  -->
                        <div
                            class="h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center">
                            <div id="cm1" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </div>
                    <!-- carte 2 -->
                        <div
                            class="h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center">
                            <div id="cm2" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </div>
                    <!-- carte 3 -->
                        <div
                            class="h-60 w-[18%]  bg-[url('images/badge_gold.webp')]  bg-cover  bg-center flex justify-center items-center">
                            <div id="cm3" class="w-full h-max  mx-3 text-white text-center font-bold">
                                <!-- --------------------------------------------------------------------- -->

                                <!-- --------------------------------------------------------------------- -->
                            </div>
                        </div>

            `;

    }

    DIVdefenseurs.classList.remove("hidden");
    DIVdeGardien.classList.remove("hidden");



    

});
