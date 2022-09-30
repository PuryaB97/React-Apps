const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "74ee1f2945266498e0cd39cb8d5506a2",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
