async function getUsers() {
  try {
    const response = await fetch('http://localhost:3000/clients')
    const data = await response.json()
    showUsers(data)
  } catch (error) {
    console.error(error)
  }
}

getUsers()

function showUsers(users) {
  let out = ''

  for(let user of users) {
    out += `<div class="card-user">
      <div class="name">
        <p>${user.name}</p>
      </div>
      <div class="username">
        <p>${user.username}</p>
      </div>
      <div class="email">
        <p>${user.email}</p>
      </div>
    </div>`
  }

  document.querySelector('main .cards-users').innerHTML = out
}