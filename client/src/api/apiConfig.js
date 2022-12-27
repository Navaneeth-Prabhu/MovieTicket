const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b2e2f9019e02c884f64bca914349f9dc',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;