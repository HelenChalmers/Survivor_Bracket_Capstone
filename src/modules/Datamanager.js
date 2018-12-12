const remoteURL = "https://survivor-bracket-server.herokuapp.com"

export default Object.create(null, {
    get: {
        value: function (resourcecomponent, id) {
            return fetch(`${remoteURL}/${resourcecomponent}/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function (resourcecomponent) {
            return fetch(`${remoteURL}/${resourcecomponent}`).then(e => e.json())
        }
    },
    post: {
        value: function (resourcecomponent, newItem) {
            return fetch(`${remoteURL}/${resourcecomponent}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newItem)
            }).then(e => e.json())
        }
    },
    delete: {
        value: (resourcecomponent, id) => {
            return fetch(`${remoteURL}/${resourcecomponent}/${id}`, {
            method: "DELETE"
        })
        .then(()=>{return fetch(`${remoteURL}/${resourcecomponent}`).then(e => e.json()) })

        }
    },
    patch: {
        value: function (resourcecomponent, id, editUser) {
            return fetch(`${remoteURL}/${resourcecomponent}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editUser)
            }).then(e => e.json())
        }
    }
})