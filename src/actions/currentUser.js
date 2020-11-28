
export function login(credentials, history) {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(console.log)
      // .then(response => {
      //   if (response.error) {
      //     alert(response.error)
      //   } else {
      //     // dispatch(setCurrentUser(response.data))
      //     // history.push('/')
      //   }
      // })
      .catch(console.log)
  }
}