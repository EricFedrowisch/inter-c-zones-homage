const videos = [
    { id: '8cEDHAg_HFo', title: 'Inter-C-Zones #0' },
    { id: 'm3lbpPER4CU', title: 'Inter-C-Zones #1 - Hole in Their Wall' },
    { id: 'Sl6G7pth4hg', title: 'Inter-C-Zones #2 - Amber Aquarium' },
    { id: 'yy5hnD5ZARM', title: 'Inter-C-Zones #3 - Spire\'s Nest' },
    { id: 'Og0X0ZO1aKA', title: 'Inter-C-Zones #4 - Spirit Garden' },
    { id: 'jxKYSm1SOWE', title: 'Inter-C-Zones #5 - Lunar\'s Peak' },
    { id: 'jDQHa7Bigm4', title: 'Inter-C-Zones #6 - Fallen World' },
    { id: 'ITHHea25zug', title: 'Inter-C-Zones #7 - Hotdog Clown Town' },
    { id: '-BcnyxF-ELU', title: 'Inter-C-Zones #8 - Heart of Paradise' },
    { id: 'qU9XNkE2fiI', title: 'Inter-C-Zones #9 - Bittersweet Twilight' },
    { id: 's4ga1qPG9PQ', title: 'Inter-C-Zones #10 - Central Station' },
    { id: '2EgLkTCTk3M', title: 'Inter-C-Zones #11 - The Rooms out the Back' },
    { id: 'j9PChSGKj_8', title: 'Inter-C-Zones #12 - Foggy Breakwater' },
    { id: 'kxMGagHsQe0', title: 'Inter-C-Zones #13 - Glubdin\'s Landing' },
    { id: 'Kz3XdRyg_Ow', title: 'Inter-C-Zones #14 - Basement Blaster Bunker' },
    { id: 'E-YV9ajrq38', title: 'Inter-C-Zones #15 - Archive' },
    { id: 'elnomYgjf4A', title: 'Inter-C-Zones #16 - Sest Bludge' },
    { id: 'BgovernfepU', title: 'Inter-C-Zones #17 - Cosmic Baby Convoy' },
    { id: 'cyxueP77KtA', title: 'Inter-C-Zones #18 - Laundromat Tunnels' },
    { id: '_T1k_4pKEo8', title: 'Inter-C-Zones #19 - The Pit' },
    { id: 'il3l8-GloQg', title: 'Inter-C-Zones #20 - The Observation Deck' }
];

let currentIndex = 0;

function loadVideo(index) {
    const video = videos[index];
    const iframe = document.getElementById('video-player');
    iframe.src = `https://www.youtube.com/embed/${video.id}?loop=1&playlist=${video.id}&autoplay=1`;
    document.getElementById('video-title').innerText = video.title;
}

function prevVideo() {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    loadVideo(currentIndex);
}

function nextVideo() {
    currentIndex = (currentIndex + 1) % videos.length;
    loadVideo(currentIndex);
}

// Load the first video on page load
window.onload = () => loadVideo(currentIndex);
