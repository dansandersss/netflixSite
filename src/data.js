// Data.js
import strangerThings from "./images/Stranger-Things-2-Logo-Vector.svg-.png";
import anne from "./images/Anne_with_an__E__logo.svg.png";

export const DATA = [
  {
    id: 1,
    name: "Энн С Двумя НН",
    logo: anne,
    videoList: [
      "https://github.com/dansandersss/netflixSite/raw/master/src/videos/Y2meta.app-Anne%20_%20Official%20Trailer%20%5BHD%5D%20_%20Netflix-(1080p).mp4",
      "https://youtu.be/cjevQ6vlX5w",
    ],
    year: 2017,
    limitAge: "12+",
    rating: "8.6",
    duration: "44 min",
    description:
      "Энн — тринадцатилетняя сирота. Девочка рано лишилась родителей и с тех пор живёт в детском приюте. Жизнь героини резко меняется, когда в результате ошибки она попадает к новым приёмным родителям, старой деве и её младшему брату.",
    photos: [
      "https://i0.wp.com/www.washingtondispatch.com/wp-content/uploads/2023/06/Anne-with-an-E-Season-4.jpg",
    ],
    author: "Moira Walley-Beckett",

    season: [
      {
        id: 1,
        episodes: [
          "Your Will Shall Decide Your Destiny",
          "I Am No Bird, and No Net Ensnares Me",
          "But What Is So Headstrong as Youth?",
          "An Inward Treasure Born",
          "Tightly Knotted to a Similar String",
          "Remorse Is the Poison of Life",
          "Wherever You Are Is My Home",
        ],
        episodeImg: [
          "https://www.indiewire.com/wp-content/uploads/2018/07/ANNE2_201_Day8_SS_052_R.jpg",
        ],
      },
      {
        id: 2,
        episodes: [
          "Youth Is the Season of Hope",
          "Signs Are Small Measurable Things, But Interpretations Are Illimitable",
          "The True Seeing Is Within",
          "The Painful Eagerness of Unfed Hope",
          "The Determining Acts of Her Life",
          "I Protest Against Any Absolute Conclusion",
          "Memory Has as Many Moods as the Temper",
          "Struggling Against the Perception of Facts",
          "What We Have Been Makes Us What We Are",
          "The Growing Good of the World",
        ],
        episodeImg: [
          "https://s1.r29static.com/bin/entry/41e/x,80/1779803/image.jpg",
        ],
      },
      {
        id: 3,
        episodes: [
          "A Secret Which I Desired to Divine",
          "There Is Something at Work in My Soul Which I Do Not Understand",
          "What Can Stop the Determined Heart",
          "A Hope of Meeting You in Another World",
          "I Am Fearless and Therefore Powerful",
          "The Summit of My Desires",
          "A Strong Effort of the Spirit of Good",
          "Great and Sudden Change",
          "A Dense and Frightful Darkness",
          "The Better Feelings of My Heart",
        ],
        episodeImg: [
          "https://kino-punk.ru/wp-content/uploads/2022/07/anne-with-an-e-netflix-canceled-renewed-a.jpg",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Очень Странные Дела Сезон 2",
    logo: strangerThings,
    videoList: [
      "https://github.com/dansandersss/netflixSite/raw/master/src/videos/Stranger%20Things%202%20%20Official%20Final%20Trailer%20%20Netflix.mp4",
      "https://youtu.be/UoR4411L32Y",
    ],
    year: 2017,
    limitAge: "16+",
    rating: "8.4",
    duration: "56min",
    description:
      "Второй сезон американского научно-фантастического сериала ужасов «Очень странные дела», указанный в титрах как «Очень странные дела 2», премьера которого состоялась по всему миру на Netflix 27 октября 2017 года.",
    photos: [
      "https://i.pinimg.com/originals/97/cc/16/97cc16cf2f6542cc323c624ba983b4e3.jpg",
    ],
    author: "Duffer brother",

    season: [
      {
        id: 1,
        episodes: [
          "Chapter One: The Vanishing of Will Byers",
          "Chapter Two: The Weirdo on Maple Street",
          "Chapter Three: Holly, Jolly",
          "Chapter Four: The Body",
          "Chapter Five: The Flea and the Acrobat",
          "Chapter Six: The Monster",
          "Chapter Seven: The Bathtub",
          "Chapter Eight: The Upside Down",
        ],
        episodeImg: [
          "https://www.rollingstone.com/wp-content/uploads/2018/06/stranger-things-recap-netflix-season-1-a12f2d99-7e41-4b3e-b13e-0d9cd6ed5489.jpg",
        ],
      },
      {
        id: 2,
        episodes: [
          "Chapter One: MADMAX",
          "Chapter Two: Trick or Treat, Freak",
          "Chapter Three: The Pollywog",
          "Chapter Four: Will the Wise",
          "Chapter Five: Dig Dug",
          "Chapter Six: The Spy",
          "Chapter Seven: The Lost Sister",
          "Chapter Eight: The Mind Flayer",
          "Chapter Nine: The Gate",
        ],
        episodeImg: [
          "https://ew.com/thmb/Q6plhNLq53TQAJ_ggl2QhDnyjcA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/a135_c011_01230b_001-1296038_r-2000-c42f9158ad66450b8556037c1fbeddd3.jpg",
        ],
      },
    ],
  },
  // Add more movie objects as needed
];
