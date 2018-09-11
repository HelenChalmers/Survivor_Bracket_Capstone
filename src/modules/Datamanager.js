const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (keyObject, id) {
            return fetch(`${remoteURL}/${keyObject}/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function (keyObject) {
            return fetch(`${remoteURL}/${keyObject}`).then(e => e.json())
        }
    },
    post: {
        value: function (keyObject, newUser) {
            return fetch(`${remoteURL}/${keyObject}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            }).then(e => e.json())
        }
    },
    delete: {
        value: (keyObject, id) => {
            return fetch(`${remoteURL}/${keyObject}/${id}`, {
            method: "DELETE"
        })
        .then(()=>{return fetch(`${remoteURL}/${keyObject}`).then(e => e.json()) })

        }
    },
    patch: {
        value: function (keyObject, id, editUser) {
            return fetch(`${remoteURL}/${keyObject}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editUser)
            }).then(e => e.json())
        }
    }
})