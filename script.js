
document.addEventListener('DOMContentLoaded', function() {
  const animeInfoContainer = document.getElementById('animeInfo');

 
  fetch('https://api.jikan.moe/v4/anime?q=naruto&genre=8')
    .then(response => response.json())
    .then(data => {
      console.log('Retrieved data:', data); // Log the retrieved data
      // Displaying selected information about the anime
	  
      const animeInformation = [
        { label: 'Type', value: data.type.en || 'TV' },
        { label: 'Source', value: data.source|| 'Manga' },
        { label: 'Episodes', value: data.episodes || '220' },
        { label: 'Status', value: data.status || 'Finished Airing' },
        { label: 'Airing', value: data.airing || 'from 2002-10-03 to 2007-02-08' }
		{ label: 'Synopsis', value: data.synopsis || ' "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.\n\nNow, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.' }
		{ label: 'Background', value: data.background || ' "Naruto received numerous awards during its airing, including the \"Best Full-Length Animation Program Award\" in the Third UStv Awards and the 38th \"Best Animated Show\" in IGN's Top 100 Animated Series." }
		
      ];

      animeInformation.forEach(info => {
        const infoElement = document.createElement('div');
        infoElement.classList.add('anime-info');
        infoElement.innerHTML = `<strong>${info.label}:</strong> ${info.value}`;
        animeInfoContainer.appendChild(infoElement);
      });
    })
   




