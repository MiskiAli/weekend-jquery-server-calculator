$(onReady);

function onReady(){
console.log('ready!');

// add click listeners here
$('#submitButton').on('click', submitclicks);
// $('#clearButton').on('click', clearClick);
// $('#add').on('click', inputsToServer);
// $('#subtract').on('click', inputsToServer);
// $('multiply').on('click', inputsToServer);
// $('divide').on('click', inputsToServer);
}


function submitclicks(){
    // collect inputs and append to DOM
    // let numOneInput = $('#numInputOne').val();
    // let numTwoInput = $('#numInputTwo').val();
    const numInputs =  {
        numOneInput: Number($('#numInputOne').val()),
        numTwoInput: Number($('#numInputTwo').val()),
    }
    console.log(numInputs);
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
    // clearClick();
    // inputsToServer();
    showResults ();
}

// GET requests
function showResults (){
    console.log('showing Results');
    $.ajax({
        url: '/calc',
        method: 'GET'
    }).then(function(response){
        console.log(response)
        // response is whatever res.send() sent us.
        // render to DOM 
        render(response);

    }).catch(function(error){
        // basically catches errors like 404, 500 etc.
        console.log(error);
        alert('error in get /calc')
    })
    console.log('end of get calc')

}

function render(calculations){
    // empty - gets rid of dupes
    $('ul').empty();
    //append to dom
for (let obj of calculations){
    $('ul').append(`<li>${obj.numOneInput} --- ${obj.numTwoInput}</li>`)
}

}






// function clearClick(){
//     // deletes inputs..

// }

// function inputsToServer(){
//     // ajax !!
    
// 
