const artistsData = [
    { name: 'd4vd', url: 'https://open.spotify.com/embed/artist/5y8tKLUfMvliMe8IKamR32'},
    { name: 'The Walters', url: 'https://open.spotify.com/embed/artist/027TpXKGwdXP7iwbjUSpV8'},
    { name: 'Duster', url: 'https://open.spotify.com/embed/artist/5AyEXCtu3xnnsTGCo4RVZh'},
    { name: 'Vacations', url: 'https://open.spotify.com/embed/artist/0U7iI0Dk4Ojvi17nZboNO4'},
    { name: 'Rex Orange Country', url: 'https://open.spotify.com/embed/artist/7pbDxGE6nQSZVfiFdq9lOL'},
    { name: 'Imase', url: 'https://open.spotify.com/embed/artist/4TaSvnT5o4REFwhqfrmK27'},
    { name: 'Panic! At The Disco', url: 'https://open.spotify.com/embed/artist/20JZFwl6HVl6yg8a4H3ZqK'},
    { name: 'Crystal Castles', url: 'https://open.spotify.com/embed/artist/7K3zpFXBvPcvzhj7zlGJdO'},
    { name: 'Ghosts and Pals', url: 'https://open.spotify.com/embed/artist/3Avni6DLpoxtanND8mG5t8'},
    { name: 'Vundabar', url: 'https://open.spotify.com/embed/artist/1W4itxt3vwhmrgLEBuVHJ6'},
    { name: 'TV Girl', url: 'https://open.spotify.com/embed/artist/0Y6dVaC9DZtPNH4591M42W'},
    { name: 'Imagine Dragons', url: 'https://open.spotify.com/embed/artist/53XhwfbYqKCa1cC15pYq2q'},
    { name: 'Black Box Recorder', url: 'https://open.spotify.com/embed/artist/6Hd3xhv1sj3rlojjvGLkGR'},
    { name: 'Tally Hall', url: 'https://open.spotify.com/embed/artist/7lqaPghwYv2mE9baz5XQmL'},
    { name: 'Bülow', url: 'https://open.spotify.com/embed/artist/5vBrKGOjN10BMwB0cJADj4'},
    { name: 'Mitski', url: 'https://open.spotify.com/embed/artist/77SW9BnxLY8rJ0RciFqkHh'},
    { name: 'Half-alive', url: 'https://open.spotify.com/embed/artist/7sOR7gk6XUlGnxj3p9F54k'},
    { name: 'Penelope Scott', url: 'https://open.spotify.com/embed/artist/3u6lPufHw4Oww6D88rv6sB'},
];

const songsData = [
    { name: 'Romantic Homicide', url: 'https://open.spotify.com/embed/track/1xK59OXxi2TAAAbmZK0kBL'},
    { name: 'I love you So', url: 'https://open.spotify.com/embed/track/5cjagrNaegv6IQZKflkPTf'},
    { name: 'Constellations', url: 'https://open.spotify.com/embed/track/1MXOWbSCEjoGwivtIMnlBV'},
    { name: 'Young', url: 'https://open.spotify.com/embed/track/1KIJclzEbNhSVw8tiHPWwE'},
    { name: 'Sunflower', url: 'https://open.spotify.com/embed/track/1camd9eP6HEbhNjXww8FKN'},
    { name: 'Chamber of Reflection', url: 'https://open.spotify.com/embed/track/7H7NyZ3G075GqPx2evsfeb"'},
    { name: 'NIGHT DANCER', url: 'https://open.spotify.com/embed/track/3gmn76fCtpDazGMnN0QMHX?si=57b997b40da4450e'},
    { name: 'Transgender', url: 'https://open.spotify.com/embed/track/3pbN3SGJott0Rgb5aE5kqc?si=9dc02e79a1e94c51'},
    { name: 'The distortionist', url: 'https://open.spotify.com/embed/track/59VMyTr7zUYKkx66zkN0jr?si=0847eb6645594ae7'},
    { name: 'Alien Blues', url: 'https://open.spotify.com/embed/track/11iIikXxC6NP0Ma8vMD27x?si=0b5c67404ddc4b76'},
    { name: 'Blue Hair', url: 'https://open.spotify.com/embed/track/39sDitIeCMrVX2QyXHY46t?si=70c6e1ad29ba44bf'},
    { name: 'Show Me How', url: 'https://open.spotify.com/embed/track/6QeYSvYqYUsfBzsApbjDHO?si=78f89003d1ab410b'},
    { name: '7 Weeks & 3 Days', url: 'https://open.spotify.com/embed/track/0yABdzMcJpRkKhVKXjfcUk?si=8636aac747a7455b'},
    { name: 'Inside Out', url: 'https://open.spotify.com/embed/track/6WlmEymaXKMRs3D2c4j6os?si=30ca2bbf6fe949b6'},
    { name: 'Not Allowed', url: 'https://open.spotify.com/embed/track/3IznIgmXtrUaoPWpQTy5jB?si=81c7994ed80745e4'},
    { name: 'Psycho Killer', url: 'https://open.spotify.com/embed/track/1i6N76fftMZhijOzFQ5ZtL?si=00a9a4c94f614e7d'},
    { name: 'Dark Red', url: 'https://open.spotify.com/embed/track/37y7iDayfwm3WXn5BiAoRk?si=001d65549b794481'},
    { name: 'Lost', url: 'https://open.spotify.com/embed/track/3WPYHZy8f7KIS5fVTUmliT?si=5ee9fa56a7844084'},
];

function getDataArray(type) {
    if (type === "songs") {
        return songsData;
    }
    else if (type === "artists") {
        return artistsData;
    }
}

function genSpotifyEmbed(artist, small) {
    let height = (small ? '152' : '352')
    return `
    <div class="spotify-embed" data-aos="flip-up">
        <iframe style="border-radius:12px"
        src="${artist.url}?utm_source=generator" width="100%" height="${height}" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
        </iframe>
    </div>
    `;
}

function getRandomElements(array, count) {
    var newArray = array.slice(); // Create a copy of the original array

    // Perform a Fisher-Yates shuffle
    for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }

    // Return the first 'count' elements
    return newArray.slice(0, count);
}

function fillWidgetContainer(container, array) {
    console.log(array);
    for (item of array) {
        const spotifyWidget = genSpotifyEmbed(item, true);
        container.innerHTML += spotifyWidget;
    }
}


function previewWidgets(type) {
    const container = document.getElementById(type + '-' + 'preview');
    fillWidgetContainer(container, getRandomElements(getDataArray(type), 6));
}

function loadWidgets(type) {
    const container = document.getElementById(type + '-' + 'container');
    fillWidgetContainer(container, getDataArray(type));
}