$(onReady);

function onReady(){
console.log('ready!');

// add click listeners here
$('#submitButton').on('click', submitclicks);
$('#clearButton').on('click', clearClick);
$('#add').on('click', inputsToServer);
$('#subtract').on('click', inputsToServer);
$('multiply').on('click', inputsToServer);
$('divide').on('click', inputsToServer);
}


function submitclicks(){
    // collect inputs and 
    $.ajax({
        method: 'POST', 
        url: '/calc'
        // "POST"-ing data that is from the client to the server.
    }).then(function (response){
        console.log(response)

    }).catch(function(error){
        console.log(error)
    });
// calls to functions
    clearClick();
    inputsToServer();
}


function clearClick(){
    // deletes inputs..

}

function inputsToServer(){
    // ajax !!
    
}
