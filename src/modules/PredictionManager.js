const remoteURL = "https://survivor-bracket-server.herokuapp.com"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/predictions/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/predictions`).then(e => e.json())
        }
    },
    getAllUserPredictions: {
        value: function (id) {
            return fetch(`${remoteURL}/predictions?userId=${id}&_sort=PlacementPredictionId&_order=asc`).then(e => e.json())
        }
    },
    delete: {
        value: (id) => {
            return fetch(`${remoteURL}/predictions/${id}`, {
            method: "DELETE"
        })
        .then(()=>{return fetch(`${remoteURL}/predictions`).then(e => e.json()) })

        }
    },
    post: {
        value: (newPrediction) => {
            return fetch(`${remoteURL}/predictions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPrediction)
            }).then(e => e.json())
        }
    },
    patch: {
        value: function (id, editPrediction) {
            
            return fetch(`${remoteURL}/predictions/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editPrediction)
            }).then(e => e.json())

        }
    },
    getPredictionsbyUser: {
        value: (id) => {
            return fetch(`${remoteURL}/predictions?correctPrediction=true&userId=${id}`)
            .then(response => response.json());
        }
    }
})