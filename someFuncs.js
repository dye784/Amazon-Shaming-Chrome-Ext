const DOCTORS_WITHOUT_BORDERS = "Doctors Without Borders";
const WORLD_WILDLIFE_FUND = "World Wildlife Fund";
const AMERICAN_RED_CROSS = "American Red Cross";
const SOUTHERN_POVERTY_LAW = "Southern Poverty Law Center";

//simple cost calculator
function whatYourMoneyCanDo(money, charity) {
  return money / goodDeedPrice * 1.00
}

//randomly choose a charity and return the full object
function (charityList) {
  var length = charityList.length;
  var randomSelection = Math.floor(Math.random() * length);
  var selectedCharity = charityList[randomSelection];
  var chosenCharity = charityList[selectedCharity];
  return chosenCharity;
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


$(function(){
  $SOMEIDHERE = $('#SOMEIDHERE');

  const charities = {
    doctorsWithoutBorders: {
      name: "Doctors Without Borders",
      donationURL: 'https://donate.doctorswithoutborders.org/onetime.cfm',
      resources: {
        0: 'support the worldwide fight access to life-saving medicine',
        0.67: 'vaccinate a child against tuberculosis, measles, diphtheria, tetanus, pertussis, and polio',
        5: 'Give a child a rotavirus vaccine',
        46: 'fully vaccinate a child',
        100: 'be a hero to parients around the world'
      }
    },
    worldWildlifeFund: {
      name: "World Wildlife Fund",
      donationURL: 'https://support.worldwildlife.org/site/SPageServer?pagename=main_onetime&s_src=AWE1510GD914',
      resources: {
        0: 'support the worldwide fight to save animals',
        15: 'adopt a polar bear or a penguin for a month',
        20: 'adopt a tiber for a month',
        25: 'adopt an endangered animal'
      }
    },
    americanRedCross: {
      name: "American Red Cross",
      donationURL: 'https://www.redcross.org/donate/donation',
      resources: {
        0: 'help distribute life-saving blood units worldwide',
        250: 'pay for the total costs of a unit of blood',
      }
    },
    southernPoveryLawCenter: {
      name: "Southern Poverty Law Center",
      donationURL: 'https://donate.splcenter.org/',
      resources: {
        0: 'have your donation matched dollar-for-dollar to support civil rights',
        50: 'have over 50% of your gift go directly to public education and the fight for civil rights'
      }
    }
  }

  // charities.forEach(charity => {
  //   $SOMEIDHERE.append($(`<a href=${charity.donationURL}>${charity.name}</a>`))
  // })
// selectedCharities.push(5)
  console.log(selectedCharities);

  selectedCharities.forEach(charity => {
    var newCharity = charities[charity];
    $('#OTHER').append($(`<p><a href=${newCharity.donationURL}>${newCharity.name}</a></p>`))
  })

})


