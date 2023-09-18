'use strict'

const list = document.querySelector(".js-list");

const kittenRace1 = 'Siamés';
const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = 'Anastacio';
const kittenDesc1 =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';

const kittenRace2 = 'Sphynx';
const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName2 = 'Fiona';
const kittenDesc2 =
   `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.`;

const kittenRace3 = 'Maine Coon';
const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName3 = 'Cielo';
const kittenDesc3 =
  `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.`;

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

/*función para añadir nuevo gato*/
    
  const btnAdd = document.querySelector('.js-btn-add');
  btnAdd.addEventListener("click", (event) => {
    event.preventDefault();

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelError = document.querySelector('.js-label-error');
const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;

if (valueDesc === '' || valuePhoto === '' || valueName === '') {
  labelError.innerHTML = "¡Uy! parece que has olvidado algo";
} else {}
  });

 //funciones 1

const newForm = document.querySelector('.js-new-form');
const circle = document.querySelector('.js-circle');

  function showNewCatForm() {
    newForm.classList.remove('collapsed');
  }
  function hideNewCatForm() {
    newForm.classList.add('collapsed');
  }

  function handleClickNewCatForm(event) {
    event.preventDefault();
    if (newForm.classList.contains('collapsed')) {
      showNewCatForm();
    } else {
      hideNewCatForm();
    }
  }
  circle.addEventListener('click', handleClickNewCatForm);
  
 
//ejercicio 3

function renderKitten(kittenData) {
  
  const kitten = `<li class="card">
<img
  class="card_img"
  src="${objetokitten.image}"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${objetokitten.name.toUpperCase()}</h3>
<h4 class="card_race">${objetokitten.race}</h4>
<p class="card_description">${objetokitten.desc}
 
</p>
</li>`
return kitten;
}

list.innerHTML = renderKitten(kittenImage1, kittenName1, kittenDesc1, kittenRace1);
list.innerHTML += renderKitten(kittenImage2, kittenName2, kittenDesc2, kittenRace2);
list.innerHTML += renderKitten(kittenImage3, kittenName3, kittenDesc3, kittenRace3);


//FUNCIONES 2
//EJERCICIO 1

const buttonSearch = document.querySelector('.js-btnSearch');



const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  list.innerHTML = "";
  if (kittenDesc1.includes(descrSearchText)) {
    list.innerHTML += renderKitten(kittenImage1, kittenName1, kittenDesc1, kittenRace1);;
  }
  if (kittenDesc2.includes(descrSearchText)) {
    list.innerHTML += renderKitten(kittenImage2, kittenName2, kittenDesc2, kittenRace2);
  }
  if (kittenDesc3.includes(descrSearchText)) {
    list.innerHTML += renderKitten(kittenImage3, kittenName3, kittenDesc3, kittenRace3);
  }
};

buttonSearch.addEventListener('click', filterKitten);

//OBJETOS

const kittenData_1 = {
  image: 'kittenImage1',
  name: 'kittenName1',
  desc: ' kittenDesc1',
  race: 'kittenRace1',
};
const kittenData_2 = {
  image: 'kittenImage2',
  name: 'FkittenName2',
  desc: `kittenDesc2`,
  race: 'SkittenRace2',
};
const kittenData_3 = {
  image: 'kittenImage3',
  name: 'kittenName3',
  desc:  `kittenDesc3`,
  race: 'kittenRace3',
};
filterKitten();