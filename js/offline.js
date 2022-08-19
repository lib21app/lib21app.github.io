var hint = document.getElementById("hint");
    
// Defining function to update connection status
function updateConnectionStatus() {  
    var status = document.getElementById("status");
    if(navigator.onLine) {
        status.innerHTML = "Komunitas";
        status.classList.add("online");
        status.classList.remove("offline");                        
    } else {
        status.innerHTML = "Offline, No Internet";
        status.classList.add("offline");
        status.classList.remove("online");            
    }
}

// Defining function to update connection status
function updateConnectionStatus() {  
    var status = document.getElementById("status404");
    if(navigator.onLine) {
        status.innerHTML = "Please contact SMPN 21 Purworejo librarian on this case";
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