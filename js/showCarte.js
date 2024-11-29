
        // Récupérer le bouton et le formulaire
        const showFormButton = document.querySelectorAll('button[data-id]');
        const formContainer = document.getElementById('formContainer');

        
    showFormButton.forEach((button) => {

        // Afficher ou masquer le formulaire
        button.addEventListener('dblclick', () => {
            formContainer.classList.toggle('hidden');
            formContainer.innerHTML = `

                        <div class="bg-white p-4 rounded-lg shadow-lg w-96 flex flex-col gap-2">
                            <div class="w-full flex flex-row ">
                                <h2 class=" w-11/12 text-2xl mb-4 text-[18px] text-center">nom de joueur</h2>
                                <button id="btFfermer" class="w-1/12 items-end "><img src="images/btnFermer.png" alt="fermer" class="relative bottom-12 left-12 bg-white border rounded-full hover:bg-red-300 hover:shadow-md hover:shadow-gray-600"></button>
                            </div>
                            <div class="w-full h-1/2 flex flex-row gap-2 ">
                                <div class="h-full w-1/3 flex flex-col gap-2">
                                    <img src="https://cdn.sofifa.net/players/209/981/25_120.png" alt="photo de Joueur" class="border rounded-full bg-green-100">
                                    <div class="flex flex-row justify-center gap-2">
                                        <img src="https://cdn.sofifa.net/flags/ma.png" alt="flag" class="">
                                        <img src="https://cdn.sofifa.net/meta/team/7011/120.png" alt="logo" class="w-1/4">
                                    </div>
                                </div>
                                <div class="h-full w-2/3 ">
                                    <table class=" w-[80%] h-full text-[12px]">
                                        <tr>
                                            <th class="text-center font-bold">Position</th>
                                            <td class="text-center font-bold">GK</td>
                                        </tr>
                                        <tr>
                                            <th class="text-center font-bold">Rating</th>
                                            <td class="text-center font-bold">88</td>
                                        </tr>
                                        <tr>
                                            <th class="text-center font-bold">Diving</th>
                                            <td class="text-center font-bold">81</td>
                                        </tr>
                                        <tr>
                                            <th class="text-center font-bold">Handling</th>
                                            <td class="text-center font-bold">82</td>
                                            </tr>
                                        <tr>
                                            <th class="text-center font-bold">Kicking</th>
                                            <td class="text-center font-bold">77</td>
                                            </tr>
                                        <tr>
                                            <th class="text-center font-bold">Reflexes</th>
                                            <td class="text-center font-bold">86</td>
                                            </tr>
                                        <tr>
                                            <th class="text-center font-bold">Speed</th>
                                            <td class="text-center font-bold">38</td>
                                            </tr>
                                        <tr>
                                            <th class="text-center font-bold">Positioning</th>
                                            <td class="text-center font-bold">83</td>
                                            </tr>
                                        <tr>
                                        </tr>
                                        <tr>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="w-full h-1/2 flex gap-2 px-2 text-[14px]">
                                <button type="button" class="w-1/2 h-10 bg-green-600 hover:shadow-md hover:shadow-gray-600 hover:bg-green-500  border-none rounded-md">Remplacer</button>
                                <button type="button" class="w-1/2 h-10 bg-red-400 hover:shadow-md hover:shadow-gray-600 hover:bg-red-300  border-none rounded-md">Supprimer</button>
                            </div>
                        </div>
            
            
                `;

                const btFfermer = document.getElementById("btFfermer");

                btFfermer.addEventListener('click', () => {
                    formContainer.classList.toggle('hidden');
        });

        });
    });