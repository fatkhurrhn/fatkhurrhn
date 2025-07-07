export const animeData = [
  {
    id: 1,
    title: "Kenja no Mago",
    genres: ["Fantasy", "Magic", "School"],
    episodes: 12,
    year: 2019,
    studio: "Silver Link",
    status: "completed",
    rating: 8.5,
    lastWatchedEpisode: 12,
    thumbnail: "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "A young man who had surely died in an accident was reborn in another world as a baby! After that, he was picked up by the patriot hero 'Sage' Merlin Walford and was given the name 'Shin'. He was raised as a grandson and taught magic and martial arts by Merlin.",
    episodeList: [
      { number: 1, title: "The Guru's Grandson", videoUrl: "https://archive.org/download/kenja-no-mago-eps1/kenja-no-mago-eps1.mp4" },
      { number: 2, title: "A Worthy Opponent", videoUrl: "https://archive.org/download/kenja-no-mago-eps2/kenja-no-mago-eps2.mp4" },
      { number: 3, title: "The Entrance Exam", videoUrl: "https://archive.org/download/kenja-no-mago-eps3/kenja-no-mago-eps3.mp4" },
      { number: 4, title: "The Ultimate Magic Academy", videoUrl: "https://archive.org/download/kenja-no-mago-eps4/kenja-no-mago-eps4.mp4" },
      { number: 5, title: "A Pioneering New Hero", videoUrl: "https://archive.org/download/kenja-no-mago-eps5/kenja-no-mago-eps5.mp4" },
      { number: 6, title: "The Demon Hunter", videoUrl: "https://archive.org/download/kenja-no-mago-eps6/kenja-no-mago-eps6.mp4" },
      { number: 7, title: "The Demonized Soldiers", videoUrl: "https://archive.org/download/kenja-no-mago-eps7/kenja-no-mago-eps7.mp4" },
      { number: 8, title: "The Demonized Soldiers", videoUrl: "https://archive.org/download/kenja-no-mago-eps8/kenja-no-mago-eps8.mp4" },
      { number: 9, title: "The Demonized Soldiers", videoUrl: "https://archive.org/download/kenja-no-mago-eps9/kenja-no-mago-eps9.mp4" },
      { number: 10, title: "The Demonized Soldiers", videoUrl: "https://archive.org/download/kenja-no-mago-eps10/kenja-no-mago-eps10.mp4" },
      { number: 11, title: "The Demonized Soldiers", videoUrl: "https://archive.org/download/kenja-no-mago-eps11/kenja-no-mago-eps11.mp4" },
      { number: 12, title: "The Demonized Soldiers", videoUrl: "https://archive.org/download/kenja-no-mago-eps12/kenja-no-mago-eps12.mp4" }
    ]
  },
  {
    id: 2,
    title: "Attack on Titan",
    genres: ["Action", "Drama", "Fantasy"],
    episodes: 25,
    year: 2013,
    studio: "Mappa",
    status: "watching",
    rating: 9.0,
    lastWatchedEpisode: 15,
    thumbnail: "https://images.pexels.com/photos/1040372/pexels-photo-1040372.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Humanity fights for survival against giant humanoid Titans that have brought civilization to the brink of extinction.",
    episodeList: Array.from({ length: 25 }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
      videoUrl: `https://archive.org/download/aot-eps${i + 1}/aot-eps${i + 1}.mp4`
    }))
  },
  {
    id: 3,
    title: "Demon Slayer",
    genres: ["Action", "Supernatural", "Historical"],
    episodes: 26,
    year: 2019,
    studio: "Ufotable",
    status: "completed",
    rating: 8.7,
    lastWatchedEpisode: 26,
    thumbnail: "https://images.pexels.com/photos/1576793/pexels-photo-1576793.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "A young boy becomes a demon slayer to save his sister and avenge his family.",
    episodeList: Array.from({ length: 26 }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
      videoUrl: `https://archive.org/download/demon-slayer-eps${i + 1}/demon-slayer-eps${i + 1}.mp4`
    }))
  },
  {
    id: 4,
    title: "One Piece",
    genres: ["Adventure", "Comedy", "Shounen"],
    episodes: 1000,
    year: 1999,
    studio: "Toei Animation",
    status: "watching",
    rating: 9.2,
    lastWatchedEpisode: 523,
    thumbnail: "https://images.pexels.com/photos/1571736/pexels-photo-1571736.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Follow Monkey D. Luffy on his quest to become the Pirate King.",
    episodeList: Array.from({ length: 50 }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
      videoUrl: `https://archive.org/download/one-piece-eps${i + 1}/one-piece-eps${i + 1}.mp4`
    }))
  },
  {
    id: 5,
    title: "Naruto",
    genres: ["Action", "Martial Arts", "Shounen"],
    episodes: 720,
    year: 2002,
    studio: "Pierrot",
    status: "completed",
    rating: 8.9,
    lastWatchedEpisode: 720,
    thumbnail: "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "A young ninja's journey to become the strongest ninja and leader of his village.",
    episodeList: Array.from({ length: 50 }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
      videoUrl: `https://archive.org/download/naruto-eps${i + 1}/naruto-eps${i + 1}.mp4`
    }))
  },
  {
    id: 6,
    title: "My Hero Academia",
    genres: ["Action", "School", "Super Power"],
    episodes: 138,
    year: 2016,
    studio: "Bones",
    status: "watching",
    rating: 8.8,
    lastWatchedEpisode: 89,
    thumbnail: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "In a world where most people have superpowers, a powerless boy enrolls in a prestigious hero academy.",
    episodeList: Array.from({ length: 50 }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
      videoUrl: `https://archive.org/download/mha-eps${i + 1}/mha-eps${i + 1}.mp4`
    }))
  },
  {
    id: 7,
    title: "Dragon Ball Z",
    genres: ["Action", "Adventure", "Martial Arts"],
    episodes: 291,
    year: 1989,
    studio: "Toei Animation",
    status: "completed",
    rating: 8.6,
    lastWatchedEpisode: 291,
    thumbnail: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Goku and his friends defend Earth against powerful enemies from across the universe.",
    episodeList: Array.from({ length: 50 }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
      videoUrl: `https://archive.org/download/dbz-eps${i + 1}/dbz-eps${i + 1}.mp4`
    }))
  },
  {
    id: 8,
    title: "Death Note",
    genres: ["Supernatural", "Thriller", "Psychology"],
    episodes: 37,
    year: 2006,
    studio: "Madhouse",
    status: "completed",
    rating: 9.1,
    lastWatchedEpisode: 37,
    thumbnail: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "A high school student gains the power to kill anyone by writing their name in a supernatural notebook.",
    episodeList: Array.from({ length: 37 }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
      videoUrl: `https://archive.org/download/death-note-eps${i + 1}/death-note-eps${i + 1}.mp4`
    }))
  },
  {
    id: 9,
    title: "Jujutsu Kaisen",
    genres: ["Action", "School", "Supernatural"],
    episodes: 24,
    year: 2020,
    studio: "Mappa",
    status: "watching",
    rating: 8.9,
    lastWatchedEpisode: 18,
    thumbnail: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "A high school student joins a secret organization of Jujutsu Sorcerers to kill a powerful Curse named Ryomen Sukuna.",
    episodeList: Array.from({ length: 24 }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
      videoUrl: `https://archive.org/download/jjk-eps${i + 1}/jjk-eps${i + 1}.mp4`
    }))
  },
  {
    id: 10,
    title: "Fullmetal Alchemist",
    genres: ["Adventure", "Dark Fantasy", "Military"],
    episodes: 64,
    year: 2009,
    studio: "Bones",
    status: "completed",
    rating: 9.3,
    lastWatchedEpisode: 64,
    thumbnail: "https://images.pexels.com/photos/1549196/pexels-photo-1549196.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Two brothers use alchemy to try to resurrect their mother, but pay a terrible price.",
    episodeList: Array.from({ length: 64 }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
      videoUrl: `https://archive.org/download/fma-eps${i + 1}/fma-eps${i + 1}.mp4`
    }))
  },
  {
    id: 11,
    title: "One Punch Man",
    genres: ["Action", "Comedy", "Superhero"],
    episodes: 24,
    year: 2015,
    studio: "Madhouse",
    status: "watching",
    rating: 8.7,
    lastWatchedEpisode: 12,
    thumbnail: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "A superhero who can defeat any enemy with a single punch struggles with the mundane problems of everyday life.",
    episodeList: Array.from({ length: 24 }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
      videoUrl: `https://archive.org/download/opm-eps${i + 1}/opm-eps${i + 1}.mp4`
    }))
  },
  {
    id: 12,
    title: "Mob Psycho 100",
    genres: ["Comedy", "Supernatural", "School"],
    episodes: 37,
    year: 2016,
    studio: "Bones",
    status: "completed",
    rating: 8.8,
    lastWatchedEpisode: 37,
    thumbnail: "https://images.pexels.com/photos/1566337/pexels-photo-1566337.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "A psychic middle schooler tries to live a normal life while dealing with his incredible powers.",
    episodeList: Array.from({ length: 37 }, (_, i) => ({
      number: i + 1,
      title: `Episode ${i + 1}`,
      videoUrl: `https://archive.org/download/mp100-eps${i + 1}/mp100-eps${i + 1}.mp4`
    }))
  }
];

export const genres = [
  "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", 
  "Romance", "Sci-Fi", "Supernatural", "Thriller", "School", 
  "Martial Arts", "Magic", "Historical", "Psychology", "Military"
];