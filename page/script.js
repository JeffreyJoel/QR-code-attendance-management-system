$(".grid-item-row").hide();
$(".list-next").hide()
$("#list-btn").hide()
$(".next").hide()
$("#nxtBtn").click(function () {
  $(".list-next").show();
  $(".next").show()
})

$("#grid-btn").on("click",
  function () {
    $(".grid-item-row").show();
    // $(".list").toggle();
    $(this).hide()
    $("#list-btn").show()
    $(".list-row").hide();

  }
)
$("#list-btn").on("click",
  function () {
    $(".list-row").show();
    $(this).hide()
    $("#grid-btn").show()
    $(".grid-item-row").hide();

  }
)
// $("#scroll-btn").on("click", function(){
//   $(".myList").scrollBy(0, 100)
// })


// $(function() { 
//     $('#dateoicker-1').datepicker( {
//       yearRange: "c-100:c",
//       changeMonth:false,
//       changeYear: true,
//       showButtonPanel: true,
//       closeText:'Select',
//       currentText: 'This year',
//       onClose: function(dateText, inst) {
//         var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
//         $(this).val($.datepicker.formatDate("yy", new Date(year, 0, 1)));
//         $(".myList li").filter(function() {
//             $(this).toggle($(this).text().toLowerCase().indexOf(year,  0, 1) > -1)
//           })
//       },
//       beforeShow: function(input, inst){
//         if ($(this).val()!=''){
//           var tmpyear = $(this).val();
//           $(this).datepicker('option','defaultDate',new Date(tmpyear, 0, 1));
//         }
//       }
//     }).focus(function () {
//       $(".ui-datepicker-month").hide();
//       $(".ui-datepicker-calendar").hide();
//       $(".ui-datepicker-current").hide();
//       /*$(".ui-datepicker-close").hide();*/
//       $(".ui-datepicker-prev").hide();
//       $(".ui-datepicker-next").hide();
//       $("#ui-datepicker-div").position({
//         my: "left top",
//         at: "left bottom",
//         of: $(this)
//       });
//     }).attr("readonly", false);
//     // $("#dateoicker-1").change(function(){
//     //     var value = $(this).val();
//     //     console.log(value)
//     //     $("#myList li").filter(function() {
//     //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     //   });
//     // });
//   });
//   $("#myInput").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $(".myList li").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//     $(".myList .card").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
// //   });
//   $("#dateoicker-1").change(function(){
//     var value = $(this).val().toLowerCase();
//     $(".list-row .list-item").filter(function() {
//     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//   });
//   $(".grid-item-row .grid-item").filter(function() {
//     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//   });
// });

// var dat = $("#dateoicker-1").;
//   dat.change(function () {
//   console.log($(this).val());
// });
$("#dateoicker-1").on('input', function () {

})
$("#filter-btn").click(function () {
  $("#filter-content").toggle('.show')
});

$("#dateoicker-1").click(function () {
  $("#date-content").toggle('.show')

});

function Search() {
  var value = $(this).val().toLowerCase();
  $(".list-row .list-item").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
  $(".grid-item-row .grid-item").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  })
};
$("#myInput").on("keyup", Search);
$("#filter-btn").on("keyup", Search);
$("#dateoicker-1").on("keyup", Search);


$("#filter-content div").click(function () {
  $('#filter-btn').val($(this).text());

  var value = $("#filter-btn").val().toLowerCase();
  $(".list-row .list-item").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
  $(".grid-item-row .grid-item").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  })
})

$("#date-content div").click(function () {
  $('#dateoicker-1').val($(this).text());
  
  var value = $("#dateoicker-1").val().toLowerCase();
  $(".list-row .list-item").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
  $(".grid-item-row .grid-item").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  })
})


// $("#dateoicker-1").change(Search);




