// 1. Write a JavaScript program to remove items from a drop-down list.
{
    document.getElementsByTagName('button')[0].addEventListener('click', elementRemove)

    function elementRemove() {
        let rem = document.getElementById('colorSelect').firstElementChild
        document.getElementById('colorSelect').removeChild(rem)
        alert(rem.innerHTML + ' Removed')
        document.getElementById('colorSelect').setAttribute(selected, rem)
    }
}

// 2. Write a JavaScript program to change the  color given text in p tag  
{
    let elm = document.getElementsByTagName('p')[0]
    function textBlue() {
        elm.style.color = 'purple'
    }
    function textRed() {
        elm.style.color = 'red'
    }
    function textGreen() {
        elm.style.color = 'green'
    }
    function textViolet() {
        elm.style.color = 'brown'
    }
    function textOrange() {
        elm.style.color = 'blue'
    }
}

{
    function changeColor() {
        const selectText = document.getElementById('textElement')
        const selectColor = document.getElementById('colorSelect2')
        const selectValue = selectColor.value
        selectText.style.color = selectValue
    }

}
// 3. Write a JavaScript function to get the values of First and Last names of the following form.
{ 
    function fsubmit() {
        let fname = document.getElementById('firstName').value
        let lname = document.getElementById('lastName').value
        alert('Name Entered ' + fname + ' ' + lname)
    }
}

// 4. Write a JavaScript program to display a random image (clicking on a button) from the following list.
{
    let image = document.getElementById('images')
    function image1() {
        image.style.width = '500px'
        image.style.height = '200px'
        image.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmKCyfTyvRoCSlYgX5ZyNd3Ev4nEuSxwyp_t3DrV_3ZZL6KChxvv9IGSymtSQEJqWrzf0&usqp=CAU'
    }
    function image2() {
        image.style.width = '500px';
        image.style.height = '200px';
        image.src = 'https://i.etsystatic.com/35574085/r/il/386989/4727859216/il_fullxfull.4727859216_rdr4.jpg';
    }
    function image3() {
        image.style.width = '500px';
        image.style.height = '343px';
        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAiO5LaB5nd06C2ctv_ByvqvIyR1H650ptS6lydIqURMZjAc_3ZcH7wBXDkZ3vVWft4w&usqp=CAU';
    }
}