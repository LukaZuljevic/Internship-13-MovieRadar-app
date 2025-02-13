import { getAllMovies } from "./api.js";

let movies = [
  {
    id: "d9010641-a6dd-42e6-bd50-0cf988e286c6",
    title: "Titanic",
    description:
      "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
    genre: "Drama",
    releaseYear: 1997,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/sh/2/22/Titanic_poster.jpg?20150803124932",
    createdAt: "2025-02-13T15:42:09.713664",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "5be2d82a-2284-458b-91cb-c1713ea2dea1",
    title: "Rush Hour",
    description:
      "When Hong Kong Inspector Lee is summoned to Los Angeles to investigate a kidnapping, the FBI doesn't want any outside help and assigns cocky LAPD Detective James Carter to distract Lee from the case. Not content to watch the action from the sidelines, Lee and Carter form an unlikely partnership and investigate the case themselves.",
    genre: "Akcija",
    releaseYear: 1998,
    imageUrl: "https://m.media-amazon.com/images/I/61HVqokPIcL.jpg",
    createdAt: "2025-02-13T15:45:53.269317",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "f278d71a-126c-444f-a8b3-81c03e5c6610",
    title: "Die Hard",
    description:
      "NYPD cop John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her offices Christmas Party, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
    genre: "Akcija",
    releaseYear: 1988,
    imageUrl: "https://m.media-amazon.com/images/I/51QRDrBU4xL.jpg",
    createdAt: "2025-02-13T15:47:41.627079",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "e4c68006-338e-483a-9687-f85a98ce6ec4",
    title: "Sin City",
    description:
      "Welcome to Sin City. This town beckons to the tough, the corrupt, the brokenhearted. Some call it dark… Hard-boiled. Then there are those who call it home — Crooked cops, sexy dames, desperate vigilantes. Some are seeking revenge, others lust after redemption, and then there are those hoping for a little of both. A universe of unlikely and reluctant heroes still trying to do the right thing in a city that refuses to care.",
    genre: "Akcija",
    releaseYear: 2005,
    imageUrl:
      "https://m.media-amazon.com/images/I/51JDE+gBExL._AC_UF894,1000_QL80_.jpg",
    createdAt: "2025-02-13T15:51:27.832583",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "91048509-bb0d-4c5b-b49f-0cd3ec53bdeb",
    title: "Terminator",
    description:
      "In the post-apocalyptic future, reigning tyrannical supercomputers teleport a cyborg assassin known as the 'Terminator' back to 1984 to kill Sarah Connor, whose unborn son is destined to lead insurgents against 21st century mechanical hegemony. Meanwhile, the human-resistance movement dispatches a lone warrior to safeguard Sarah. Can he stop the virtually indestructible killing machine?",
    genre: "Akcija",
    releaseYear: 1984,
    imageUrl: "https://storage.googleapis.com/pod_public/1300/244029.jpg",
    createdAt: "2025-02-13T15:53:20.819175",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "89b1b6de-7bd2-4b3c-bd7d-68335761563f",
    title: "Matrix",
    description:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    genre: "Akcija",
    releaseYear: 1999,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
    createdAt: "2025-02-13T15:54:23.082021",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "bd03810c-b133-487c-b115-f48449aae8e0",
    title: "Skyfall",
    description:
      "When Bond's latest assignment goes gravely wrong, agents around the world are exposed and MI6 headquarters is attacked. While M faces challenges to her authority and position from Gareth Mallory, the new Chairman of the Intelligence and Security Committee, it's up to Bond, aided only by field agent Eve, to locate the mastermind behind the attack.",
    genre: "Akcija",
    releaseYear: 2012,
    imageUrl:
      "https://cdn.europosters.eu/image/750/posteri/james-bond-007-skyfall-one-sheet-black-i13207.jpg",
    createdAt: "2025-02-13T15:56:10.206479",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "93287d4e-edf2-4f11-a149-abd1ba6660cd",
    title: "The Dark Knight",
    description:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    genre: "Akcija",
    releaseYear: 2008,
    imageUrl:
      "https://cdn.europosters.eu/image/1300/posteri/the-dark-knight-trilogy-batman-i198201.jpg",
    createdAt: "2025-02-13T15:58:30.614902",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "808ecd6d-1ca8-46f0-afa7-e78b5d155b7a",
    title: "The Avengers",
    description:
      "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
    genre: "Akcija",
    releaseYear: 2012,
    imageUrl: "https://m.media-amazon.com/images/I/818xFyWmm9L.jpg",
    createdAt: "2025-02-13T16:00:40.69905",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "2fe6fb52-a3c1-4eed-90f7-8b788200ff4e",
    title: "The Jerk",
    description:
      "After discovering he's not really black like the rest of his family, likable dimwit Navin Johnson sets off on a hilarious misadventure that takes him from rags to riches and back again. The slaphappy jerk strikes it rich, but life in the fast lane isn't all it's cracked up to be and, in the end, all that really matters to Johnson is his true love.",
    genre: "Komedija",
    releaseYear: 1979,
    imageUrl: "https://i.ebayimg.com/images/g/QWoAAOSw9KZe2uIk/s-l1200.jpg",
    createdAt: "2025-02-12T12:32:39.787737",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "b3f97712-b5ec-4e1d-b25f-e1db01f84da1",
    title: "The Green Mile",
    description:
      "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    genre: "Drama",
    releaseYear: 1999,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
    createdAt: "2025-02-13T16:06:38.59871",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "07f7ecfa-4afe-4f2f-9dba-7f8b9027ce08",
    title: "Forrest Gump",
    description:
      "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    genre: "Drama",
    releaseYear: 1994,
    imageUrl:
      "https://m.media-amazon.com/images/I/41Al9falobL._AC_UF894,1000_QL80_.jpg",
    createdAt: "2025-02-13T16:07:55.747323",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "2d85d260-575d-4f68-aa07-9fc870709877",
    title: "The Hunt",
    description:
      "A teacher lives a lonely life, all the while struggling over his son’s custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
    genre: "Drama",
    releaseYear: 2012,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_.jpg",
    createdAt: "2025-02-13T16:10:28.170028",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "08851d52-4665-409c-be58-e58d8a6676d4",
    title: "Apocalypto",
    description:
      "Set in the Mayan civilization, when a man's idyllic presence is brutally disrupted by a violent invading force, he is taken on a perilous journey to a world ruled by fear and oppression where a harrowing end awaits him. Through a twist of fate and spurred by the power of his love for his woman and his family he will make a desperate break to return home and to ultimately save his way of life.",
    genre: "Drama",
    releaseYear: 2006,
    imageUrl: "https://m.media-amazon.com/images/I/71d+Ko8zA4L.jpg",
    createdAt: "2025-02-13T16:11:48.694885",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "3d1ead8f-4da8-43ac-bb65-dc64f42e7dca",
    title: "Gone Girl",
    description:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    genre: "Drama",
    releaseYear: 2014,
    imageUrl:
      "https://m.media-amazon.com/images/I/61cdYGoHFrL._AC_UF894,1000_QL80_.jpg",
    createdAt: "2025-02-13T16:13:21.511473",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "541ce789-ce56-40d3-8633-b19e1de8c580",
    title: "The Mummy",
    description:
      "Dashing legionnaire Rick O'Connell stumbles upon the hidden ruins of Hamunaptra while in the midst of a battle to claim the area in 1920s Egypt. It has been over three thousand years since former High Priest Imhotep suffered a fate worse than death as a punishment for a forbidden love—along with a curse that guarantees eternal doom upon the world if he is ever awoken.",
    genre: "Avantura",
    releaseYear: 1999,
    imageUrl: "https://m.media-amazon.com/images/I/71IUOrku7JL.jpg",
    createdAt: "2025-02-13T16:15:59.52624",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "6211e7be-aaf1-44ff-9957-17cbea1636c6",
    title: "Jumanji",
    description:
      "When siblings Judy and Peter discover an enchanted board game that opens the door to a magical world, they unwittingly invite Alan -- an adult who's been trapped inside the game for 26 years -- into their living room. Alan's only hope for freedom is to finish the game, which proves risky as all three find themselves running from giant rhinoceroses, evil monkeys and other terrifying creatures.",
    genre: "Avantura",
    releaseYear: 1995,
    imageUrl: "https://m.media-amazon.com/images/I/A1hFzTczzJL.jpg",
    createdAt: "2025-02-13T16:17:35.384549",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "0392b126-d5a0-4243-b281-c5aaa2ccecb7",
    title: "The Revenant",
    description:
      "Currently you are able to watch 'The Revenant' streaming on Max, Max Amazon Channel. It is also possible to buy 'The Revenant' on Amazon Video, Microsoft Store, Apple TV, Fandango At Home as download or rent it on Amazon Video, Apple TV, Fandango At Home, Microsoft Store online.",
    genre: "Avantura",
    releaseYear: 2015,
    imageUrl:
      "https://www.originalfilmart.com/cdn/shop/products/revenant_2016_french_original_film-art_600x.jpg?v=1617375183",
    createdAt: "2025-02-13T16:19:44.75714",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "b9d65a12-7a9d-41ec-99c0-4bc09de21511",
    title: "Friday",
    description:
      "Craig and Smokey are two guys in Los Angeles hanging out on their porch on a Friday afternoon, smoking and drinking, looking for something to do.",
    genre: "Komedija",
    releaseYear: 1995,
    imageUrl:
      "https://www.movieposters.com/cdn/shop/files/friday.24x36_600x.jpg?v=1707498453",
    createdAt: "2025-02-13T16:24:52.718447",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "f577c9b0-1ffe-4367-8ca1-6ddbc5febdbd",
    title: "Jaws",
    description:
      "When the seaside community of Amity finds itself under attack by a dangerous great white shark, the town's chief of police, a young marine biologist, and a grizzled hunter embark on a desperate quest to destroy the beast before it strikes again.",
    genre: "Horor",
    releaseYear: 1975,
    imageUrl:
      "https://m.media-amazon.com/images/I/71TqjPGUqjL._AC_UF894,1000_QL80_.jpg",
    createdAt: "2025-02-13T16:26:32.244925",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "3379e9f4-f4fb-4cac-85fa-84d10b60c3cb",
    title: "Get Out",
    description:
      "A young black man visits his white girlfriend's cursed family estate. He finds out that many of its residents, who are black, have gone missing in the past.",
    genre: "Horor",
    releaseYear: 2017,
    imageUrl:
      "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2908503/5953826/MOVCB41655__96749.1679598123.jpg?c=2",
    createdAt: "2025-02-13T16:27:53.989542",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "912062fb-4e21-42bd-8afd-b3c291607e01",
    title: "The Ring",
    description:
      "Rachel Keller is a journalist investigating a videotape that may have killed four teenagers. There is an urban legend about this tape: the viewer will die seven days after watching it. Rachel tracks down the video... and watches it. Now she has just seven days to unravel the mystery of the Ring so she can save herself and her son.",
    genre: "Horor",
    releaseYear: 2002,
    imageUrl:
      "https://c8.alamy.com/comp/2K71ABK/film-poster-the-ring-2002-2K71ABK.jpg",
    createdAt: "2025-02-13T16:29:41.333711",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "558f06dd-3139-4323-9235-eeb272e0ed31",
    title: "Hereditary",
    description:
      "After her mother passes away, Annie Graham and her family endure a series of strange and mysterious events with terrifying consequences. While still reeling from the loss, Annie learns about her mother's secret life as a witch and discovers that her entire family has become the target of a demonic summoning.",
    genre: "Horor",
    releaseYear: 2018,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTEyZGQwODctYWJjZi00NjFmLTg3YmEtMzlhNjljOGZhMWMyXkEyXkFqcGc@._V1_.jpg",
    createdAt: "2025-02-13T16:31:06.203204",
    updatedAt: null,
    reviews: [],
  },
  {
    id: "b514c53b-1be2-4941-9b96-84d7878bf271",
    title: "It",
    description:
      "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
    genre: "Horor",
    releaseYear: 2017,
    imageUrl:
      "https://cdn.europosters.eu/image/750/canvas-print-it-pennywise-i126949.jpg",
    createdAt: "2025-02-13T16:32:36.489269",
    updatedAt: null,
    reviews: [],
  },
];

const moviesContainerEl = document.querySelector(".movies-container");

movies.forEach((m) => {
  moviesContainerEl.innerHTML += `<div class="movie-card" data-id=${m.id}>
          <img
            src=${m.imageUrl}
            alt=""
          />
          <div class="movie-heading">
            <h2>${m.title} (${m.releaseYear})</h2>
          </div>
        </div>`;
});

const movieCardElements = document.querySelectorAll(".movie-card");

function openDialog(event) {
  const dialogEl = document.querySelector(".movie-info-dialog");
  dialogEl.showModal();
  dialogEl.style.display = "flex";

  const card = event.target.closest(".movie-card");
  const movieData = movies.find((m) => m.id === card.dataset.id);

  document.querySelector(
    ".movie-info-container > h2"
  ).innerHTML = `${movieData.title}&nbsp;<span>4/5</span>`;
  document.querySelector(".movie-details .release-year").textContent =
    movieData.releaseYear;
  document.querySelector(".movie-details .movie-genre").textContent =
    movieData.genre;
  document
    .querySelector(".movie-info-dialog .movie-image")
    .setAttribute("src", movieData.imageUrl);
}

movieCardElements.forEach((card) => {
  card.addEventListener("click", (event) => openDialog(event));
});
