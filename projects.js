console.log(`test`)
$(() => {
  //declare publicly used variables
  const arrayTitle = ['project1', 'project2', 'project3']
  const array = ['https://i.imgur.com/4zlP2k8.gif', 'https://i.imgur.com/wjobVTN.jpeg', 'https://i.imgur.com/DEqLHqH.gif']
  let arrayIndex = 0
  $('h3').text(arrayTitle[arrayIndex])
  $('.projimg').attr('src', array[arrayIndex])

//nav functions
const home = () => {
      window.location.replace('https://cheery-choux-3168bb.netlify.app/')
}
const bio = () => {
      window.location.replace('https://amazing-kataifi-10194f.netlify.app/')
}
const resume = () => {
      window.location.replace('https://jovial-basbousa-b14d5a.netlify.app/')
}
const projects = () => {
      window.location.replace('https://graceful-ganache-f07e77.netlify.app/')
}
const linkedin = () => {
      window.open('https://www.linkedin.com')
}

//project swaping functions
  const imgLeft = () => {
    if(arrayIndex > 0){
      arrayIndex--
    } else if(arrayIndex === 0){
      arrayIndex = array.length -1
    }
    $('h3').text(arrayTitle[arrayIndex])
    $('.projimg').attr('src', array[arrayIndex])
  }
  const imgRight = () => {
    if(arrayIndex < array.length -1){
      arrayIndex++
    } else if(arrayIndex == array.length -1){
      arrayIndex = 0
    }
    $('h3').text(arrayTitle[arrayIndex])
    $('.projimg').attr('src', array[arrayIndex])
  }
  const imgSwitch1 = () => {
    arrayIndex = 0
    $('h3').text(arrayTitle[arrayIndex])
    $('.projimg').attr('src', array[arrayIndex])
  }
  const imgSwitch2 = () => {
    arrayIndex = 1
    $('h3').text(arrayTitle[arrayIndex])
    $('.projimg').attr('src', array[arrayIndex])
  }
  const imgSwitch3 = () => {
    arrayIndex = 2
    $('h3').text(arrayTitle[arrayIndex])
    $('.projimg').attr('src', array[arrayIndex])
  }

  //project swap buttons
  $('.bright').on("click", imgRight)
  $('.bleft').on("click", imgLeft)
  $('.proj1').on("click", imgSwitch1)
  $('.proj2').on("click", imgSwitch2)
  $('.proj3').on("click", imgSwitch3)

  //nav buttons
  $('.bhome').on("click", home)
  $('.bio').on("click", bio)
  $('.resume').on("click", resume)
  $('.projects').on("click", projects)
  $('.linkedin').on("click", linkedin)
})
