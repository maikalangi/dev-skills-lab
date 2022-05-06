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

console.log(addSkill)

// function will add skill from input field into newly created list under title

$button.click(()=>{
    // while ($input.val()!==''){
    const $skill = $('<li class="skill"></li>');
    const $close = $('<input class="close" type="button" value="X"/>')
    $skill.css('list-style-type', 'none');
    $skill.text($input.val());
    $ul.append($skill);
    $ul.append($close);
    // }
    $input.val('');
});

// new list will have button with function to clear skill entry

// const $close = $('.close')
// const $skill = $('.skill')
$('input.close').click(()=>{
    $('li.skill').remove();
});