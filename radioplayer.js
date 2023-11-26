// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

fetch("https://api.sr.se/api/v2/channels/?format=json")
  .then((response) => response.json())
  .then((data) => {
    data.channels.forEach((channel) => {
      const channelName = channel.name;
      const channelImage = channel.image;
      const liveAudioUrl = channel.liveaudio.url;

      const channelElement = document.createElement("div");
      channelElement.innerHTML = `

        <h2>${channelName}</h2>
        <img src="${channelImage}" alt="${channelName} Image">
        <audio controls>
          <source src="${liveAudioUrl}" type="audio/mpeg" />
        </audio>
      `;

      channelElement.style.backgroundColor = `#${channel.color}`;
      document.getElementById("channels").appendChild(channelElement);
    });
  });

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
