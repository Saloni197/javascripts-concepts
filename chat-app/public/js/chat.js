const socket = io()

socket.on('message',(message)=>{
    console.log(message)
})

document.querySelector('#message_Form').addEventListener('submit',(e)=>{
  e.preventDefault()

  const message = e.target.elements.Message.value

  socket.emit('send-message',message, (error)=>{
      if(error){
          return console.log(error)
      }
      console.log('message was delivered!')
  })
})

document.querySelector('#send_location').addEventListener('click',()=>{
    if(!navigator.geolocation){
        return alert('geolocation is not supported by browser')
    }

    navigator.geolocation.getCurrentPosition((position)=>{
    socket.emit('send-location',{
        longitude:position.coords.longitude,
        latitude:position.coords.latitude
    },()=>{
        console.log('location Shared!')

    })
    })
})