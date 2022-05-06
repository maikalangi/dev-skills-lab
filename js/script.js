// // the "document ready" approach
// $(document).ready(function () {
//     // all of your app's js goes within this function
//     alert("Everything is ready, let's do this")
//   })
  
//   // or, the shortcut version
//   $(function () {
//     // all of your app's js goes within this function
//     alert("Everything is ready, let's do this")
//   })

const $ul = $('.list')
const $button = $('#button')
const $input = $('#field')

const addSkill = $input.val()

// function will add skill from input field into newly created list under title

console.log(addSkill)

// function skillFunc (){
//     $main.append($list.val(addSkill));
// };


$button.click(()=>{
    const $newList = $('<li></li>');
    $newList.css('list-style-type', 'none');
    $newList.text($input.val());
    $ul.append($newList);
});

// new list will have button with function to clear skill entry
