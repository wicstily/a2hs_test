const createNode = element => document.createElement(element),
      append = (parent, element) => parent.appendChild(element),
      ul = document.querySelector('.people'),
      addBtn = document.querySelector('.add-button')

let deferredPrompt

addBtn.style.display = 'none'

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => data.map(person => {
    const li = createNode('li'),
        span = createNode('span')

    li.innerHTML = person.name
    span.innerHTML = person.email

    append(li, span)
    append(ul, li)
  }))

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault()

  deferredPrompt = event

  addBtn.style.display = 'block'

  addBtn.addEventListener('click', () => {
    addBtn.style.display = 'none'

    deferredPrompt.prompt()

    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted')
        console.info('User accepted the a2hs prompt')
      else
        console.info('User dismissed the a2hs prompt')

      deferredPrompt = null
    })
  })
})