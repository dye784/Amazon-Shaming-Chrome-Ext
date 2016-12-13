const DOCTORS_WITHOUT_BORDERS = "Doctors Without Borders";
const WORLD_WILDLIFE_FUND = "World Wildlife Fund";
const AMERICAN_RED_CROSS = "American Red Cross";
const SOUTHERN_POVERTY_LAW = "Southern Poverty Law Center";

//simple cost calculator
function whatYourMoneyCanDo(money, goodDeedPrice) {
  return money / goodDeedPrice * 1.00
}

// switch case for specific charities
function specificCharityCosts(money, charity) {
  switch(charity) {
    case DOCTORS_WITHOUT_BORDERS :
      let costOfVaccines = 1000
      return whatYourMoneyCanDo(money, costOfVaccines)
    case WORLD_WILDLIFE_FUND :
      let costOfSavingPanda = 1000
      return whatYourMoneyCanDo(money, costOfSavingPanda)
    case AMERICAN_RED_CROSS:
      let costOfNotActuallyHelping = 1000000000
      return whatYourMoneyCanDo(money, costOfNotActuallyHelping)
    case SOUTHERN_POVERTY_LAW:
      let costOfFightingHate = 10000
      return whatYourMoneyCanDo(money, costOfFightingHate)
    default:
      return;
  }
}

console.log(specificCharityCosts(2000, DOCTORS_WITHOUT_BORDERS))
console.log(specificCharityCosts(2000, WORLD_WILDLIFE_FUND))
console.log(specificCharityCosts(2000, AMERICAN_RED_CROSS))
console.log(specificCharityCosts(2000, SOUTHERN_POVERTY_LAW))

// hard coded charities


// ]

//gets charity from chrome storage
// const arrayOfCharityLinks = chrome.storage.sync.get({
//   charities
// })

// html for charities with name and links


// console.log(arrayHTMLcharityWithLinks)

// <a href="http://www.w3schools.com/html/">Visit our HTML tutorial</a>


//append html to dom at some id
// document.getElementById('SOMEIDHERE').append(arrayHTMLcharityWithLinks)

$(function(){
  $SOMEIDHERE = $('#SOMEIDHERE');

  const charities = [
  {
    name: "Doctors Without Borders",
    donationURL: 'https://donate.doctorswithoutborders.org/onetime.cfm'
  },
  {
    name: "World Wildlife Fund",
    donationURL: 'https://support.worldwildlife.org/site/SPageServer?pagename=main_onetime&s_src=AWE1510GD914'
  },
  {
    name: "American Red Cross",
    donationURL: 'https://www.redcross.org/donate/donation'
  },
  {
    name: "Southern Poverty Law",
    donationURL: 'https://donate.splcenter.org/'
  }]

  charities.forEach(charity => {
    $SOMEIDHERE.append($(`<a href=${charity.donationURL}>${charity.name}</a>`))
  })

})()
    // arrayHTMLcharityWithLinks.forEach(link => {
    //   $SOMEIDHERE.append(link)
    // })

