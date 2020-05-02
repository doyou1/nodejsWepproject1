$(function(){
    $('body').on('submit',valueCheck);
})

function valueCheck(){
    
    if($('#name').val() == ''){
        alert('Name 입력요망');
        return false;
    }

}