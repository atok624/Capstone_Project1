const speakerContainer = document.querySelector('.speaker-list-container');

const speakers = [
  {
    img: './Images/Baayeh.jpg',
    name: 'Kwasi Antwi Baayeh',
    profession: 'Professor Kwasi Antwi Baayeh is the head of research and a professor of photography.',
    desc: 'Baayeh has twenty years experince teaching photography at Timbuktu Technical Institute',
  },
  {
    img: './Images/Alaska.png',
    name: 'Stephen Adom Alaska',
    profession: 'Professor Alaska is the head of Fashion and Design.',
    desc: 'Alaska has vast years of teaching experience in garment construction and fashion illustration',
  },
  {
    img: './Images/Lorna.jpg',
    name: 'Lorna Kaboro',
    profession: 'Professor Lorna Kaboro is the Head of Communication',
    desc: 'Kabora has vast years of teaching experience Mass Communication and Journalism',
  },
  {
    img: './Images/Charki.jpg',
    name: 'Chawki Mbarki',
    profession: 'Professor Chawki Mbarki is the Head of the IT department',
    desc: 'Mbarki has taught software engineering and system design for 25 years',
  },
  {
    img: './Images/51995150.jpg',
    name: 'Nahom Zerihun Demissie',
    profession: 'Professor Nahom Zerihum Demissie is the head of the food science department.',
    desc: 'Demissie has 30 years experience teaching food Science at TTI.',
  },
  {
    img: './Images/Zewdie.jpg',
    name: 'Habtie Zewdie',
    profession: 'Professor Zewdie is the Head of the Woodwork department.',
    desc: 'Zewdie studied Wood work at the Famous Ras Tafari Technical Institute',
  },
];

function renderSpeakers() {
  let result = '';
  speakers.forEach((speaker) => {
    result += ` <div class="speakerList">
        <img src="${speaker.img}" alt="${speaker.name}" />
        <div>
          <h3>${speaker.name}</h3>
          <p class="para">
           ${speaker.profession}
          </p>
          <hr />
          <p>
            ${speaker.desc}
          </p>
        </div>
      </div>`;
  });

  speakerContainer.innerHTML = result;
}

const humburger = document.querySelector('.humburger');
const deskNav = document.querySelector('.Desk_nav');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  deskNav.classList.toggle('active');
});

document.querySelectorAll('.Desk_list').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  deskNav.classList.remove('active');
}));

renderSpeakers();