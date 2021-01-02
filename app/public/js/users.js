const usersModule = (() => {
  const BASE_URL = "http://localhost:3000/api/v1/users"

  return {
    fetchAllUsers: async () => {
      const res = await fetch(BASE_URL)
      const users = res.json();

      users.array.forEach(user => {
        console.log(user)
        const body = `<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.profile}</td>
                        <td>${user.date_of_birth}</td>
                        <td>${user.created_at}</td>
                      <tr>`
      });
      document.getElementById('users-list').insertAdjacentHTML('beforeend', body)
    }
  }
})
