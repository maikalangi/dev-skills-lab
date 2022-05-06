const $ul = $('.list')
const $button = $('#button')
const $input = $('#field')

const addSkill = $input.val()

// function will add skill from input field into newly created list under title

$button.click(()=>{
    const $skill = $('<li></li>');
    const $close = $('<button class="close">X</button>');
    $close.css({'height': 'auto','width': 'auto'});
    $skill.css('list-style-type', 'none');
    $skill.text($input.val());
    $ul.append($skill);
    $ul.append($close);

    // new list will have button with function to clear skill entry

    $close.click(()=>{
        $skill
        .remove();
        $close.remove();
    });
    $input.val('');
});