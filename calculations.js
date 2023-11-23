document.addEventListener('DOMContentLoaded', function () {
  var heaterButton = document.getElementById('heaterButton');
  var heaterButtonDisabled = document.getElementById('heaterButtonDisabled');
  var heaterText = document.getElementById('heaterText');
  var heaterTextDisabled = document.getElementById('heaterTextDisabled');
  var panelButton = document.getElementById('panelButton');
  var panelButtonDisabled = document.getElementById('panelButtonDisabled');
  var panelText = document.getElementById('panelText');
  var panelTextDisabled = document.getElementById('panelTextDisabled');
  var houseButton = document.getElementById('houseButton');
  var houseButtonDisabled = document.getElementById('houseButtonDisabled');
  var houseText = document.getElementById('houseText');
  var houseTextDisabled = document.getElementById('houseTextDisabled');
  var yearButton = document.getElementById('yearButton');
  var yearButtonDisabled = document.getElementById('yearButtonDisabled');
  var yearText = document.getElementById('yearText');
  var yearTextDisabled = document.getElementById('yearTextDisabled');
  var personButton = document.getElementById('personButton');
  var personButtonDisabled = document.getElementById('personButtonDisabled');
  var personText = document.getElementById('personText');
  var personTextDisabled = document.getElementById('personTextDisabled');
  var radiosHeater = document.querySelectorAll(
    'input[name="Verwarmen-radio-group"]'
  );
  var radiosPanel = document.querySelectorAll('input[name="Zonnepanelen"]');
  var radiosHouse = document.querySelectorAll('input[name="Type-woning"]');
  var radiosYear = document.querySelectorAll('input[name="Bouwjaar"]');
  var radiosPerson = document.querySelectorAll('input[name="Huishouden"]');

  var checkRadioHeaterSelected = function () {
    return Array.from(radiosHeater).some((radio) => radio.checked);
  };

  var checkRadioPanelSelected = function () {
    return Array.from(radiosPanel).some((radio) => radio.checked);
  };

  var checkRadioHouseSelected = function () {
    return Array.from(radiosHouse).some((radio) => radio.checked);
  };

  var checkRadioYearSelected = function () {
    return Array.from(radiosYear).some((radio) => radio.checked);
  };

  var checkRadioPersonSelected = function () {
    return Array.from(radiosPerson).some((radio) => radio.checked);
  };

  var toggleHeaterButtonState = function () {
    if (checkRadioHeaterSelected()) {
      heaterButton.style.display = 'block';
      heaterButtonDisabled.style.display = 'none';
    } else {
      heaterButton.style.display = 'none';
      heaterButtonDisabled.style.display = 'block';
    }
    heaterText.style.display = 'block';
    heaterTextDisabled.style.display = 'none';
  };

  var togglePanelButtonState = function () {
    if (checkRadioPanelSelected()) {
      panelButton.style.display = 'block';
      panelButtonDisabled.style.display = 'none';
    } else {
      panelButton.style.display = 'none';
      panelButtonDisabled.style.display = 'block';
    }
    panelText.style.display = 'block';
    panelTextDisabled.style.display = 'none';
  };

  var toggleHouseButtonState = function () {
    if (checkRadioHouseSelected()) {
      houseButton.style.display = 'block';
      houseButtonDisabled.style.display = 'none';
    } else {
      houseButton.style.display = 'none';
      houseButtonDisabled.style.display = 'block';
    }
    houseText.style.display = 'block';
    houseTextDisabled.style.display = 'none';
  };

  var toggleYearButtonState = function () {
    if (checkRadioYearSelected()) {
      yearButton.style.display = 'block';
      yearButtonDisabled.style.display = 'none';
    } else {
      yearButton.style.display = 'none';
      yearButtonDisabled.style.display = 'block';
    }
    yearText.style.display = 'block';
    yearTextDisabled.style.display = 'none';
  };

  var togglePersonButtonState = function () {
    if (checkRadioPersonSelected()) {
      personButton.style.display = 'block';
      personButtonDisabled.style.display = 'none';
    } else {
      personButton.style.display = 'none';
      personButtonDisabled.style.display = 'block';
    }
    personText.style.display = 'block';
    personTextDisabled.style.display = 'none';
  };

  radiosHeater.forEach((radio) => {
    radio.addEventListener('change', toggleHeaterButtonState);
  });

  radiosPanel.forEach((radio) => {
    radio.addEventListener('change', togglePanelButtonState);
  });

  radiosHouse.forEach((radio) => {
    radio.addEventListener('change', toggleHouseButtonState);
  });

  radiosYear.forEach((radio) => {
    radio.addEventListener('change', toggleYearButtonState);
  });

  radiosPerson.forEach((radio) => {
    radio.addEventListener('change', togglePersonButtonState);
  });

  heaterButtonDisabled.addEventListener('click', () => {
    heaterText.style.display = 'none';
    heaterTextDisabled.style.display = 'block';
  });

  panelButtonDisabled.addEventListener('click', () => {
    panelText.style.display = 'none';
    panelTextDisabled.style.display = 'block';
  });

  houseButtonDisabled.addEventListener('click', () => {
    houseText.style.display = 'none';
    houseTextDisabled.style.display = 'block';
  });

  yearButtonDisabled.addEventListener('click', () => {
    yearText.style.display = 'none';
    yearTextDisabled.style.display = 'block';
  });

  personButtonDisabled.addEventListener('click', () => {
    personText.style.display = 'none';
    personTextDisabled.style.display = 'block';
  });

  toggleHeaterButtonState();
  togglePanelButtonState();
  toggleHouseButtonState();
  toggleYearButtonState();
  togglePersonButtonState();

  var zonnepanelenRadios = document.querySelectorAll(
    'input[name="Zonnepanelen"]'
  );

  zonnepanelenRadios.forEach(function (radio) {
    radio.addEventListener('change', calculate);
  });

  document.getElementById('calculate').onclick = calculate;


  function calculate() {
    var stroomInput = document.getElementById('Stroom').value;
    var isStroomInputValid = stroomInput && !isNaN(stroomInput);

    var stroom2Input = document.getElementById('Stroom-2').value;
    var isStroom2InputValid = stroom2Input && !isNaN(stroom2Input);

    var stroom3Input = document.getElementById('Stroom-3').value;
    var isStroom3InputValid = stroom3Input && !isNaN(stroom3Input);

    var resultElementGas2023 = document.getElementById('2023resultGas');
    var resultElementGas2023High = document.getElementById('2023resultGasHigh');
    var resultElementElectric2023 =
      document.getElementById('2023resultElectric');
    var resultElementElectric2023High = document.getElementById(
      '2023resultElectricHigh'
    );
    var resultElementGas2035 = document.getElementById('2035resultGas');
    var resultElementElectric2035 =
      document.getElementById('2035resultElectric');
    var resultElementGas2035High = document.getElementById('2035resultGasHigh');
    var resultElementElectric2035High = document.getElementById(
      '2035resultElectricHigh'
    );
    var resultElementGas2035Low = document.getElementById('2035resultGasLow');
    var resultElementElectric2035Low = document.getElementById(
      '2035resultElectricLow'
    );
    var resultElementWarmte2023 = document.getElementById('2023resultWarmte');
    var resultElementWarmte2023High = document.getElementById(
      '2023resultWarmteHigh'
    );
    var resultElementWarmte2035 = document.getElementById('2035resultWarmte');
    var resultElementWarmte2035High = document.getElementById(
      '2035resultWarmteHigh'
    );
    var resultElementWarmte2035Low = document.getElementById(
      '2035resultWarmteLow'
    );


    document.getElementById('2023NetbeheerkostenLow').innerText = 283;
    document.getElementById('2023NetbeheerkostenHigh').innerText = 283;


    document.getElementById('2035NetbeheerkostenLow').innerText = 417; 
    document.getElementById('2035NetbeheerkostenHigh').innerText = 439;

    var selectedRadio = document.querySelector(
      'input[name="Huishouden"]:checked'
    );
    var selectedHeatingSystem = document.querySelector(
      'input[name="Verwarmen-radio-group"]:checked'
    ).value;
    var selectedWoning = document.querySelector(
      'input[name="Type-woning"]:checked'
    ).value;
    var selectedBouwjaar = document.querySelector(
      'input[name="Bouwjaar"]:checked'
    ).value;

    var selectedZonnepanelen = document.querySelector(
      'input[name="Zonnepanelen"]:checked'
    ).value;
    var zonnepanelenAdjustment = 0;

    switch (selectedZonnepanelen) {
      case '1-10-zonnepanelen':
        zonnepanelenAdjustment = -2700;
        break;
      case '10-20-zonnepanelen':
        zonnepanelenAdjustment = -5400;
        break;
      case '20-30-zonnepanelen':
        zonnepanelenAdjustment = -8100;
        break;
      case '30-of-meer-zonnepanelen':
        zonnepanelenAdjustment = -10800;
        break;
    }

    if (
      selectedRadio &&
      selectedWoning &&
      selectedBouwjaar &&
      selectedHeatingSystem
    ) {
      var index = parseInt(selectedRadio.id.replace('Personen', '')) - 1;
      var gemiddeldM32023 =
        prices2023[selectedHeatingSystem][selectedWoning][selectedBouwjaar][
          'gemiddeld m3'
        ][index];
      var gemiddeldKwH2023 =
        prices2023[selectedHeatingSystem][selectedWoning][selectedBouwjaar][
          'gemiddeld kwH'
        ][index];
      var gemiddeldM32035 =
        prices2035[selectedHeatingSystem][selectedWoning][selectedBouwjaar][
          'gemiddeld m3'
        ][index];
      var gemiddeldKwH2035 =
        prices2035[selectedHeatingSystem][selectedWoning][selectedBouwjaar][
          'gemiddeld kwH'
        ][index];
      var gemiddeldGj2023 =
        prices2023[selectedHeatingSystem][selectedWoning][selectedBouwjaar][
          'gemiddeld Gj'
        ][index];
      var gemiddeldGj2035 =
        prices2035[selectedHeatingSystem][selectedWoning][selectedBouwjaar][
          'gemiddeld Gj'
        ][index];

      var gemiddeldM32035Low = gemiddeldM32035 * 0.4275;
      var gemiddeldKwH2035Low = gemiddeldKwH2035 * 0.13;
      var gemiddeldM32035High = gemiddeldM32035 * 0.63;
      var gemiddeldKwH2035High = gemiddeldKwH2035 * 0.23;
      var gemiddeldGj2035Low = gemiddeldGj2035 * 12.36;
      var gemiddeldGj2035High = gemiddeldGj2035 * 36.24;
      var gemiddeldGj2023 = gemiddeldGj2023 * 39.16;
      var gemiddeldKwH2023 = gemiddeldKwH2023 * 0.19;
      var gemiddeldM32023 = gemiddeldM32023 * 0.66;

      if (isStroomInputValid) {
        stroomInput = parseFloat(stroomInput);
        gemiddeldKwH2035Low = stroomInput * 0.13 + 60.33;
        gemiddeldKwH2035High = stroomInput * 0.23 + 60.33;
        gemiddeldKwH2023 = stroomInput * 0.19 + 60.33;
      }

      if (isStroom2InputValid) {
        stroom2Input = parseFloat(stroom2Input);
        gemiddeldM32035Low = stroom2Input * 0.43 + 59.5;
        gemiddeldM32035High = stroom2Input * 0.63 + 59.5;
        gemiddeldM32023 = stroom2Input * 0.66 + 59.5;
      }

      if (isStroom3InputValid) {
        stroom3Input = parseFloat(stroom3Input);
        gemiddeldGj2035Low = stroom3Input * 12.36 + 929.95;
        gemiddeldGj2035High = stroom3Input * 36.24 + 1286.64;
        gemiddeldGj2023 = stroom3Input * 39.16 + 503.53;
      }

      gemiddeldKwH2023 += zonnepanelenAdjustment;
      gemiddeldKwH2035Low += zonnepanelenAdjustment;
      gemiddeldKwH2035High += zonnepanelenAdjustment;

      gemiddeldKwH2023 = Math.max(gemiddeldKwH2023, 0);
      gemiddeldKwH2035Low = Math.max(gemiddeldKwH2035Low, 0);
      gemiddeldKwH2035High = Math.max(gemiddeldKwH2035High, 0);

      if (resultElementWarmte2023) {
        resultElementWarmte2023.innerHTML = Math.round(gemiddeldGj2023) || '0';
      }
      if (resultElementWarmte2023High) {
        resultElementWarmte2023High.innerHTML =
          Math.round(gemiddeldGj2023) || '0';
      }
      if (resultElementGas2023) {
        resultElementGas2023.innerHTML = Math.round(gemiddeldM32023) || '0';
      }
      if (resultElementGas2023High) {
        resultElementGas2023High.innerHTML = Math.round(gemiddeldM32023) || '0';
      }
      if (resultElementElectric2023) {
        resultElementElectric2023.innerHTML =
          Math.round(gemiddeldKwH2023) || '0';
      }
      if (resultElementElectric2023High) {
        resultElementElectric2023High.innerHTML =
          Math.round(gemiddeldKwH2023) || '0';
      }
      if (resultElementGas2035Low) {
        resultElementGas2035Low.innerHTML =
          Math.round(gemiddeldM32035Low) || '0';
      }
      if (resultElementElectric2035Low) {
        resultElementElectric2035Low.innerHTML =
          Math.round(gemiddeldKwH2035Low) || '0';
      }
      if (resultElementWarmte2035Low) {
        resultElementWarmte2035Low.innerHTML =
          Math.round(gemiddeldGj2035Low) || '0';
      }
      if (resultElementElectric2035High) {
        resultElementElectric2035High.innerHTML =
          Math.round(gemiddeldKwH2035High) || '0';
      }
      if (resultElementGas2035High) {
        resultElementGas2035High.innerHTML =
          Math.round(gemiddeldM32035High) || '0';
      }
      if (resultElementWarmte2035High) {
        resultElementWarmte2035High.innerHTML =
          Math.round(gemiddeldGj2035High) || '0';
      }
      var electric2035High = parseInt(document.getElementById('2035resultElectricHigh').innerHTML, 10);
      var gas2035High = parseInt(document.getElementById('2035resultGasHigh').innerHTML, 10);
      var warmte2035High = parseInt(document.getElementById('2035resultWarmteHigh').innerHTML, 10);
      var total2035High = electric2035High + gas2035High + warmte2035High;

      document.getElementById('2035highSummary').innerHTML = total2035High;

      var electric2023High = parseInt(document.getElementById('2023resultElectricHigh').innerHTML, 10);
      var gas2023High = parseInt(document.getElementById('2023resultGasHigh').innerHTML, 10);
      var warmte2023High = parseInt(document.getElementById('2023resultWarmteHigh').innerHTML, 10);
      var total2023High = electric2023High + gas2023High + warmte2023High;

      document.getElementById('2023highSummary').innerHTML = total2023High;

      var electric2035Low = parseInt(document.getElementById('2035resultElectricLow').innerHTML, 10);
      var gas2035Low = parseInt(document.getElementById('2035resultGasLow').innerHTML, 10);
      var warmte2035Low = parseInt(document.getElementById('2035resultWarmteLow').innerHTML, 10);
      var total2035Low = electric2035Low + gas2035Low + warmte2035Low;

      document.getElementById('2035lowSummary').innerHTML = total2035Low;


      var electric2023 = parseInt(document.getElementById('2023resultElectric').innerHTML, 10);
      var gas2023 = parseInt(document.getElementById('2023resultGas').innerHTML, 10);
      var warmte2023 = parseInt(document.getElementById('2023resultWarmte').innerHTML, 10);
      var total2023 = electric2023 + gas2023 + warmte2023;

      document.getElementById('2023lowSummary').innerHTML = total2023;



      var value2023HighSummary = parseInt(document.getElementById('2023highSummary').innerText, 10);
      var value2035HighSummary = parseInt(document.getElementById('2035highSummary').innerText, 10);
      var value2023LowSummary = parseInt(document.getElementById('2023LowSummary').innerText, 10);
      var value2035LowSummary = parseInt(document.getElementById('2035LowSummary').innerText, 10);


      var differenceHighSummary = value2023HighSummary - value2035HighSummary;
      var differenceLowSummary = value2023LowSummary - value2035LowSummary;


     var resultHighRed = document.getElementById('resultHighRed');
     var resultHighGreen = document.getElementById('resultHighGreen');
     var resultLowRed = document.getElementById('resultLowRed');
     var resultLowGreen = document.getElementById('resultLowGreen');
     var highResultDifferencePlus = document.getElementById('highResultDifferencePlus');
     var highResultDifferenceMinus = document.getElementById('highResultDifferenceMinus');
     var lowResultDifferencePlus = document.getElementById('lowResultDifferencePlus');
     var lowResultDifferenceMinus = document.getElementById('lowResultDifferenceMinus');


    if (differenceHighSummary >= 0) {
        resultHighGreen.style.display = 'block';
        resultHighRed.style.display = 'none';
        highResultDifferencePlus.innerText = differenceHighSummary;
    } else {
        resultHighRed.style.display = 'block';
        resultHighGreen.style.display = 'none';
        highResultDifferenceMinus.innerText = Math.abs(differenceHighSummary);
    }

    if (differenceLowSummary >= 0) {
        resultLowGreen.style.display = 'block';
        resultLowRed.style.display = 'none';
        lowResultDifferencePlus.innerText = differenceLowSummary;
    } else {
        resultLowRed.style.display = 'block';
        resultLowGreen.style.display = 'none';
        lowResultDifferenceMinus.innerText = Math.abs(differenceLowSummary);
    }


    }

    var maxValue = 2000;
    var value2023LowElectric = parseInt(document.getElementById('2023resultElectric').innerHTML, 10);
    var value2035LowElectric = parseInt(document.getElementById('2035resultElectricLow').innerHTML, 10);
    var value2023HighElectric = parseInt(document.getElementById('2023resultElectricHigh').innerHTML, 10);
    var value2035HighElectric = parseInt(document.getElementById('2035resultElectricHigh').innerHTML, 10);
    var value2023LowGas = parseInt(document.getElementById('2023resultGas').innerHTML, 10);
    var value2035LowGas = parseInt(document.getElementById('2035resultGasLow').innerHTML, 10);
    var value2023HighGas = parseInt(document.getElementById('2023resultGasHigh').innerHTML, 10);
    var value2035HighGas = parseInt(document.getElementById('2035resultGasHigh').innerHTML, 10);
    var value2023LowWarmte = parseInt(document.getElementById('2023resultWarmte').innerHTML, 10);
    var value2035LowWarmte = parseInt(document.getElementById('2035resultWarmteLow').innerHTML, 10);
    var value2023HighWarmte = parseInt(document.getElementById('2023resultWarmteHigh').innerHTML, 10);
    var value2035HighWarmte = parseInt(document.getElementById('2035resultWarmteHigh').innerHTML, 10);
    var value2023LowNetbeheerkosten = parseInt(document.getElementById('2023resultNetbeheerkostenLow').innerHTML, 10);
    var value2035LowNetbeheerkosten = parseInt(document.getElementById('2035resultNetbeheerkostenLow').innerHTML, 10);
    var value2023HighNetbeheerkosten = parseInt(document.getElementById('2023resultNetbeheerkostenHigh').innerHTML, 10);
    var value2035HighNetbeheerkosten = parseInt(document.getElementById('2035resultNetbeheerkostenHigh').innerHTML, 10);

    var width2023LowElectric = (value2023LowElectric / maxValue) * 100;
    var width2035LowElectric = (value2035LowElectric / maxValue) * 100;
    var width2023HighElectric = (value2023HighElectric / maxValue) * 100;
    var width2035HighElectric = (value2035HighElectric / maxValue) * 100;
    var width2023LowGas = (value2023LowGas / maxValue) * 100;
    var width2035LowGas = (value2035LowGas / maxValue) * 100;
    var width2023HighGas = (value2023HighGas / maxValue) * 100;
    var width2035HighGas = (value2035HighGas / maxValue) * 100;
    var width2023LowWarmte = (value2023LowWarmte / maxValue) * 100;
    var width2035LowWarmte = (value2035LowWarmte / maxValue) * 100;
    var width2023HighWarmte = (value2023HighWarmte / maxValue) * 100;
    var width2035HighWarmte = (value2035HighWarmte / maxValue) * 100;
    var width2023LowNetbeheerkosten = (value2023LowNetbeheerkosten / maxValue) * 100;
    var width2035LowNetbeheerkosten = (value2035LowNetbeheerkosten / maxValue) * 100;
    var width2023HighNetbeheerkosten = (value2023HighNetbeheerkosten / maxValue) * 100;
    var width2035HighNetbeheerkosten = (value2035HighNetbeheerkosten / maxValue) * 100;

    document.getElementById('barElectric2023LowFill').style.width = width2023LowElectric + '%';
    document.getElementById('barElectric2035LowFill').style.width = width2035LowElectric + '%';
    document.getElementById('barElectric2023HighFill').style.width = width2023HighElectric + '%';
    document.getElementById('barElectric2035HighFill').style.width = width2035HighElectric + '%';
    document.getElementById('barGas2023LowFill').style.width = width2023LowGas + '%';
    document.getElementById('barGas2035LowFill').style.width = width2035LowGas + '%';
    document.getElementById('barGas2023HighFill').style.width = width2023HighGas + '%';
    document.getElementById('barGas2035HighFill').style.width = width2035HighGas + '%';
    document.getElementById('barWarmte2023LowFill').style.width = width2023LowWarmte + '%';
    document.getElementById('barWarmte2035LowFill').style.width = width2035LowWarmte + '%';
    document.getElementById('barWarmte2023HighFill').style.width = width2023HighWarmte + '%';
    document.getElementById('barWarmte2035HighFill').style.width = width2035HighWarmte + '%';
    document.getElementById('barNetbeheerkosten2023LowFill').style.width = width2023LowNetbeheerkosten + '%';
    document.getElementById('barNetbeheerkosten2035LowFill').style.width = width2035LowNetbeheerkosten + '%';
    document.getElementById('barNetbeheerkosten2023HighFill').style.width = width2023HighNetbeheerkosten + '%';
    document.getElementById('barNetbeheerkosten2035HighFill').style.width = width2035HighNetbeheerkosten + '%';

  }

  calculate();
});
