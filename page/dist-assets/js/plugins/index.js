//onclick function for 'edit profile button' on profile page
let myFunction = () => {
    document.getElementsByTagName("input")[2].removeAttribute("readonly");
    document.getElementsByTagName("input")[3].removeAttribute("readonly");
    document.getElementById("department").removeAttribute("disabled");
    document.getElementById('btn').innerText = 'Save';
};


$("#name .card").hide();

$('#Departments  ul li input').click(function() {
    var dataId = $(this).data('id');
    $('div [data-value="' + dataId + '"]').toggle();
});

$("#name li").click(
   function (){
    let newItem = document.createElement("li");
    newItem.innerHTML = $(this).text();
    $(newItem).addClass("list-group-item d-flex justify-content-between align-items-center mx-auto")
    $("#list").append(newItem);
   }
) 
if($("#list li").empty() === false){
    $(".btnx").hide()
}
else{
    $(".btnx").show()
}
// function Todo()
    
// }