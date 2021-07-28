let ws = new WebSocket('ws://localhost:3000')

ws.onopen = () => {
    ws.send('Message From Client')
}

ws.onerror = (error) => {
    console.log(`WebSocket error: ${error}`)
}

ws.onclose = () => {
    console.log("Disconnected!")
    ws = new WebSocket('ws://localhost:3000')
}

const content = document.getElementById("content")
ws.onmessage = (e) => {
    let data = JSON.parse(JSON.stringify(e.data))
    data = JSON.parse(data)

    content.innerHTML += `
  <div class="navbar mb-4 shadow-lg bg-neutral text-neutral-content rounded-box m-4">
  <div class="flex-none">

  <div class="avatar">
  <div class="rounded-btn w-24 h-24">
    <img src="https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.jpg">
  </div>
</div> 
   
  </div> 
  <div class="flex-1 px-2 mx-2">
    <span class="text-lg font-bold">
           ${data.username} <br> <span class="font-normal">${data.message}</span>
          </span>
  </div>
</div>
  `
    //scroll to bottom
    content.scrollIntoView(false)
}

// Poggers
function poggers() {
    var audio = new Audio('whatpoggers.mp3');
    audio.play();
}