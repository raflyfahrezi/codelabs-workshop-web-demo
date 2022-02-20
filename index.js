const IMAGEBASEURL = 'https://image.tmdb.org/t/p/w500'

const setDataToContainer = (data) => {
    let movieList = ''
    const container = document.getElementById('container')

    for (let index = 0; index < data.length; index++) {
        const { id, title, poster_path, release_date, vote_average } =
            data[index]
        const year = new Date(release_date).getFullYear()

        movieList += `
            <a href="/detail/${id}" class="card">
                <img class="card__image" src="${IMAGEBASEURL}/${poster_path}"/>
                <div class="card__content">
                    <p class="card__title">${title} (${year})</p>
                </div>
            </a>
        `
    }

    container.innerHTML = movieList
}

window.addEventListener('DOMContentLoaded', () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`)
        .then((e) => e.json())
        .then((data) => {
            const { results } = data

            console.log(results)

            setDataToContainer(results)
        })
})
