const DOCTORS_WITHOUT_BORDERS = "Doctors Without Borders";
const WORLD_WILDLIFE_FUND = "World Wildlife Fund";
const AMERICAN_RED_CROSS = "American Red Cross";
const SOUTHERN_POVERTY_LAW = "Southern Poverty Law Center";

$(function(){

  //simple cost calculator
  function whatYourMoneyCanDo(money, charity) {
    var amounts = Object.keys(charity.resources);
    var min = '';
    amounts.forEach(function(amount, index) {
      if (money >= +amount) {
        min = charity.resources[amount];
      }
    });
    return min;
  }

  //randomly choose a charity and return the full object
  function randomChoose (charityList) {
    var length = charityList.length;
    var randomSelection = Math.floor(Math.random() * length);
    var selectedCharity = selectedCharities[randomSelection];
    var chosenCharity = charities[selectedCharity];
    return chosenCharity;
  }

  $SOMEIDHERE = $('#SOMEIDHERE');

  const charities = {
    doctorsWithoutBorders: {
      name: "Doctors Without Borders",
      donationUrl: 'https://donate.doctorswithoutborders.org/onetime.cfm',
      imgUrl: 'https://thinkingglobal.wikispaces.com/file/view/doctors-without-borders.jpg/133141019/231x216/doctors-without-borders.jpg',
      resources: {
        0: 'support the worldwide fight for access to life-saving medicine',
        0.67: 'vaccinate a child against tuberculosis, measles, diphtheria, tetanus, pertussis, and polio',
        5: 'give a child a rotavirus vaccine',
        46: 'fully vaccinate a child',
        100: 'be a hero to patients around the world'
      }
    },
    worldWildlifeFund: {
      name: "World Wildlife Fund",
      donationUrl: 'https://support.worldwildlife.org/site/SPageServer?pagename=main_onetime&s_src=AWE1510GD914',
      imgUrl: 'https://goodlogo.com/images/logos/world_wildlife_fund_logo_2372.gif',
      resources: {
        0: 'support the worldwide fight to save animals',
        15: 'adopt a polar bear or a penguin for a month',
        20: 'adopt a tiber for a month',
        25: 'adopt an endangered animal'
      }
    },
    americanRedCross: {
      name: "American Red Cross",
      donationUrl: 'https://www.redcross.org/donate/donation',
      imgUrl: 'http://www.redcross.org/images/MEDIA_CustomProductCatalog/m48040100_ButtonLogo200.jpg',
      resources: {
        0: 'help distribute life-saving blood units worldwide',
        40: 'pay for the costs of shipping a unit of blood',
      }
    },
    southernPoveryLawCenter: {
      name: "Southern Poverty Law Center",
      donationUrl: 'https://donate.splcenter.org/',
      imgUrl: 'http://www.americanthinker.com/legacy_assets/articles/assets/SPLC_Logo.jpg',
      resources: {
        0: 'have your donation matched dollar-for-dollar to support civil rights',
        50: 'have over 50% of your gift go directly to public education and the fight for civil rights'
      }
    }
  }
  var newTotal;
  if (total === 0) {
    newTotal = Math.floor(Math.random() * 100);
  } else {
    newTotal = total;
  }
  console.log('new', newTotal);
  var randomCharity = randomChoose(selectedCharities);
  var goodDeed = whatYourMoneyCanDo(newTotal, randomCharity);
  $('#charity-image').append(
    `<img src=${randomCharity.imgUrl} />`
  )

  $('#charity-text').append(
    $(`<p>Buying items? For the items in your cart you could donate to ${randomCharity.name} and ${goodDeed}</p>`)
  )

  $('#charity-button').append(
    $(`<button type="button" class="btn btn-hot text-uppercase btn-lg"><a href=${randomCharity.donationUrl} target="_blank">Donate <span class="glyphicon glyphicon-heart" aria-hidden="true"></span></a></button>`)
  )



  // selectedCharities.forEach(charity => {
  //   var newCharity = charities[charity];
  //   $('#OTHER').append($(`<p><a href=${newCharity.donationURL}>${newCharity.name}</a></p>`))
  // })

})


