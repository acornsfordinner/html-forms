let loginMsg = $('#login-fail-msg')
let loginMsgText = loginMsg.text()
let current_left = $("#favcolour").css("left")

loginMsg.text("")


// function start(){


//     $("#favcolour").on('focus', favcolourfocus)

// }

// $(start)




//vid knapptryck i en textruta
    
//    function favcolourfocus(){
//     let current_top = $("favcolour").css(top)
//     current_top+=20


//     $("#favcolour").css({"top":current_top+"px"})
    
// }
let results = []
let name
let fav_day
let birth_year
let about_text
let fav_animal = []
let fav_color

// $('.login-form button').on('click', function(){
$('.personal-info-form').on('submit', function(e){ //e==event
    e.preventDefault() //prevents the default behaviour which is RELOAD PAGE
    //kolla om minst en av rutorna är checkad
    if (!rabbit.checked && !human.checked && !frog.checked && !dog.checked){
        $('#login-fail-msg').css({'display':'block'})
        $('#login-fail-msg').text('Choose at least one animal.')
        
    }
    else if (!red.checked && !blue.checked && !green.checked){
        $('#login-fail-msg').css({'display':'block'})
        $('#login-fail-msg').text('Choose a favourite colour.')
    }
    else {


    fav_day = $('#favorite-weekday').val()
    birth_year = $('#birth-year').val()
    about_text = $('#about').val()
    name = $('#name').val()
    fav_animal = []
    if(rabbit.checked){
        fav_animal.push('rabbit')
    }
    if(human.checked){
        fav_animal.push('human')
    }
    if(frog.checked){
        fav_animal.push('frog')
    }
    if(dog.checked){
        fav_animal.push('dog')
    }

    if(red.checked){
        fav_color='red'
    }
    else if(blue.checked){
        fav_color='blue'
    }
    else if(green.checked){
        fav_color='green'
    }
    let summary = 'Name: '+name+' Age: '+(2019-birth_year)+' About me: '+about_text+' Favourite day: '+fav_day+' Favourite colour: '+fav_color+' Favourite animal(s): '+fav_animal
    let thisresult = 'Hello '+name+'! You must be happy today, seeing as it is '+fav_day+' today, your most favourite day!\n\nHave you met any '+fav_animal+'s today? The weather is very nice today; the sky is your favourite shade of '+fav_color+'!\n OH and by the way, HAPPY BIRTHDAY! How old are you now, you ask? '+(2019-birth_year)+' years old! I remember when we first met, and you told me: "'+about_text+'". Oh, how you have grown.'
    results.push(summary)
    console.log(summary)
    $('#myForm').hide()
    //make output visible + print 
    $('output').css({'display':'block'})
    $('#results_about').text(thisresult)
    $('#myForm')[0].reset()

    $('#history').append($('<option>', {
        value: summary,
        text: name
    }))
    
    $('select[name=history]').on('click', function(){
        $('#results_about').text($(this).val())
    })


}
})
$('#return-button').on('click', function(e){
    $('output').css({'display':'none'})
    $('#results_about').text(' ')
    $('#myForm').show()




})

        


    // let username = $("#username").val()
    // let password =$('#password').val()

    // if(username == "admin" && password == "password"){
    // console.log("Logged in as: "+username)
    // console.log("You're pasword: "+password)
    // loginMsg.text("")
    
    // }
    // else {
    //     console.log("wrong wrong wrong")
    //     loginMsg.text(loginMsgText)
        
    // }
    

    

// //vid knapptryck i en textruta
// $('.login-form input').on('click', function(e){


// })
