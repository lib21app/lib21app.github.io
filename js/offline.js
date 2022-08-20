var hint = document.getElementById("hint");
    
// Defining function to update connection status
function updateConnectionStatus() {  
    var status = document.getElementById("status");
    if(navigator.onLine) {
        status.innerHTML = "Online";
        status.classList.add("online");
        status.classList.remove("offline");                        
    } else {
        status.innerHTML = "You are offline, check your internet connection";
        status.classList.add("offline");
        status.classList.remove("online");            
    }
}

// Attaching event handler for the load event
window.addEventListener("load", updateConnectionStatus);

// Attaching event handler for the online event
window.addEventListener("online", function(e) {
    updateConnectionStatus();
    hint.innerHTML = "And we're back!";
});

// Attaching event handler for the offline event
window.addEventListener("offline", function(e) {        
    updateConnectionStatus();
    hint.innerHTML = "Hey, it looks like you're offline.";
});