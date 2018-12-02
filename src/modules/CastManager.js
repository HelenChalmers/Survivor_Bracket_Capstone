const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/cast/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/cast`).then(e => e.json())
        }
    },
    patch: {
        value: (castId, object) => {
            return fetch(`${remoteURL}/cast/${castId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(object)
            }).then(res => res.json())
        }
    }
})