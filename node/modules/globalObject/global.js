console.log(global)

global.myApp = Object.freeze({
    status() {
        return 'connected to database'
    },
    name: 'noetic-sierra'
})