/**
 * Krys Mathis
 * Functionality for adding friend from widget
 */

const isFriend = require("./checkFriendship");
const friendFactory = require("../factories/friendsJoinTableFactory");
const autoScroll = require("../autoScroll");
const Toaster = require("../toaster/toaster")
const toaster = Toaster()

const addFriend = function(friend, widget) {
    
    const userMessage = document.querySelector(".friendsWidget__user-comment");
    const inputContainer = document.querySelector(".friendsWidget__inputContainer")

    if (isFriend(friend.id)) {
        userMessage.textContent = "Already friends..."
    } else {
        try {
            friendFactory({"friendId": friend.id}).save();
            inputContainer.style.display = "none";
            toaster.makeToast(`You are now friends with ${friend.userName}`, 2000)
            autoScroll("friendsContainer");
        } catch (err) {
            console.warn("Problem adding record to database");
        }
    }
}

module.exports = addFriend;