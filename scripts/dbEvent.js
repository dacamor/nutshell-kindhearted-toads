// Database Event Handler Module -- Chris Miller
// This module creates the event handler on the document to detect any changes to the local storage object and call all task widgets to refresh their content


// const fillChats = require("./chatwidget/fillChats")
const global = require("./globalRefresh")

window.addEventListener("storage", function (event) {
    if (event.key === "NutshellDatabase") {
        global.refresh()
        ///
    }
})

module.exports = null