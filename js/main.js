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


const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
    Porte elegante, su patrón de color tan característico y sus ojos
    de un azul intenso, pero su historia se remonta a Asía al menos
    hace 500 años, donde tuvo su origen muy posiblemente.
  </p>
</article>
</li>` 
const kittenTwo =`<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/sphynx-gato.webp"
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenName2.toUpperCase()}</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</li>`
const kittenThree = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/maine-coon-cat.webp"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenName3.toUpperCase()}</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li>`
list.innerHTML = kittenOne;
list.innerHTML += kittenTwo;
list.innerHTML += kittenThree;


const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;


if( kittenDesc1.includes(descrSearchText) ) {  
  list.innerHTML = kittenOne;
  }  
  if( kittenDesc2.includes(descrSearchText) ) {
    list.innerHTML = kittenTwo;
  }
  if ( kittenDesc3.includes(descrSearchText) ) {
    list.innerHTML = kittenThree;
  }

const formSection = document.querySelector('.js-new-form');
formSection.classList.remove('collapsed');
    
  const kitten4 = document.querySelector('.js-btn-add');
btnAdd.addEventListener("click", (Event) => {
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;

if (valueDesc === '' || valuePhoto === '' || valueName === '') {
  
  ValueDesc.innerHTML = 
} else {
  //completa el código
}
  });
