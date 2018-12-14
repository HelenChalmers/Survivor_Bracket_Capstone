const remoteURL = "https://survivor-bracket-server.herokuapp.com"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/PlacementMerge/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/PlacementMerge`).then(e => e.json())
        }
    }
})