// https://calculator.swiftutors.com/fixed-assets-to-net-worth-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const fixedAssetstoNetWorthRatioRadio = document.getElementById('fixedAssetstoNetWorthRatioRadio');
const netFixedAssetsRadio = document.getElementById('netFixedAssetsRadio');
const netWorthRadio = document.getElementById('netWorthRadio');

let fixedAssetstoNetWorthRatio;
let netFixedAssets = v1;
let netWorth = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

fixedAssetstoNetWorthRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Fixed Assets';
  variable2.textContent = 'Net Worth';
  netFixedAssets = v1;
  netWorth = v2;
  result.textContent = '';
});

netFixedAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Fixed Assets to Net Worth Ratio';
  variable2.textContent = 'Net Worth';
  fixedAssetstoNetWorthRatio = v1;
  netWorth = v2;
  result.textContent = '';
});

netWorthRadio.addEventListener('click', function() {
  variable1.textContent = 'Fixed Assets to Net Worth Ratio';
  variable2.textContent = 'Net Fixed Assets';
  fixedAssetstoNetWorthRatio = v1;
  netFixedAssets = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(fixedAssetstoNetWorthRatioRadio.checked)
    result.textContent = `Fixed Assets to Net Worth Ratio = ${computeFixedAssetstoNetWorthRatio().toFixed(2)}`;

  else if(netFixedAssetsRadio.checked)
    result.textContent = `Net Fixed Assets = ${computeNetFixedAssets().toFixed(2)}`;

  else if(netWorthRadio.checked)
    result.textContent = `Net Worth = ${computeNetWorth().toFixed(2)}`;
})

// calculation

function computeFixedAssetstoNetWorthRatio() {
  return Number(netFixedAssets.value) / Number(netWorth.value);
}

function computeNetFixedAssets() {
  return Number(fixedAssetstoNetWorthRatio.value) * Number(netWorth.value);
}

function computeNetWorth() {
  return Number(netFixedAssets.value) / Number(fixedAssetstoNetWorthRatio.value);
}