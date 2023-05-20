var conversionData = {
  length: {
    units: {
      mm: "Millimeter (mm)",
      cm: "Centimeter (cm)",
      m: "Meter (m)",
      km: "Kilometer (km)",
      in: "Inch (in)",
      ft: "Foot (ft)",
      yd: "Yard (yd)",
      mi: "Mile (mi)"
    },
    conversionFunc: convertLength
  },
  temperature: {
    units: {
      C: "Celsius (°C)",
      F: "Fahrenheit (°F)",
      K: "Kelvin (K)"
    },
    conversionFunc: convertTemperature
  },
  weight: {
    units: {
      mg: "Milligram (mg)",
      g: "Gram (g)",
      kg: "Kilogram (kg)",
      lb: "Pound (lb)",
      oz: "Ounce (oz)"
    },
    conversionFunc: convertWeight
  },
  time: {
    units: {
      s: "Second (s)",
      min: "Minute (min)",
      h: "Hour (h)",
      day: "Day (day)",
      wk: "Week (wk)",
      mo: "Month (mo)",
      yr: "Year (yr)"
    },
    conversionFunc: convertTime
  },
  bitBytes: {
    units: {
      b: "Bit (b)",
      B: "Byte (B)",
      kb: "Kilobit (kb)",
      kB: "Kilobyte (kB)",
      Mb: "Megabit (Mb)",
      MB: "Megabyte (MB)",
      Gb: "Gigabit (Gb)",
      GB: "Gigabyte (GB)"
    },
    conversionFunc: convertBitBytes
  },
  area: {
    units: {
      sqmm: "Square Millimeter (mm²)",
      sqcm: "Square Centimeter (cm²)",
      sqm: "Square Meter (m²)",
      sqkm: "Square Kilometer (km²)",
      sqin: "Square Inch (in²)",
      sqft: "Square Foot (ft²)",
      sqyd: "Square Yard (yd²)",
      sqmi: "Square Mile (mi²)",
      ha: "Hectare (ha)",
      acre: "Acre (acre)"
    },
    conversionFunc: convertArea
  },
  angle: {
    units: {
      deg: "Degree (°)",
      rad: "Radian (rad)",
      grad: "Gradian (grad)",
      arcmin: "Minute of Arc (arcmin)",
      arcsec: "Second of Arc (arcsec)"
    },
    conversionFunc: convertAngle
  },
  speed: {
    units: {
      mps: "Meter per Second (m/s)",
      kmph: "Kilometer per Hour (km/h)",
      mph: "Mile per Hour (mph)",
      kn: "Knot (kn)"
    },
    conversionFunc: convertSpeed
  },
  volume: {
    units: {
      cucm: "Cubic Centimeter (cm³)",
      ml: "Milliliter (ml)",
      l: "Liter (l)",
      cuin: "Cubic Inch (in³)",
      cuft: "Cubic Foot (ft³)",
      cuyd: "Cubic Yard (yd³)",
      cum: "Cubic Meter (m³)",
      tsp: "Teaspoon (tsp)",
      tbsp: "Tablespoon (tbsp)",
      floz: "Fluid Ounce (fl oz)",
      cup: "Cup (cup)",
      pt: "Pint (pt)",
      qt: "Quart (qt)",
      gal: "Gallon (gal)"
    },
    conversionFunc: convertVolume
  }
};

function populateUnits() {
  var conversionType = document.getElementById("conversionType").value;
  var fromUnitSelect = document.getElementById("fromUnit");
  var toUnitSelect = document.getElementById("toUnit");
  fromUnitSelect.innerHTML = "";
  toUnitSelect.innerHTML = "";

  var units = conversionData[conversionType].units;
  for (var unit in units) {
    var option = document.createElement("option");
    option.value = unit;
    option.text = units[unit];
    fromUnitSelect.appendChild(option.cloneNode(true));
    toUnitSelect.appendChild(option);
  }
}

function convert() {
  var inputValue = document.getElementById("inputValue").value;
  var conversionType = document.getElementById("conversionType").value;
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;

  var conversionFunc = conversionData[conversionType].conversionFunc;
  var result = conversionFunc(inputValue, fromUnit, toUnit);

  document.getElementById("result").innerHTML =
    inputValue + " " + fromUnit + " is equal to " + result + " " + toUnit + ".";
}

function convertLength(value, fromUnit, toUnit) {
  var units = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    mi: 1609.34
  };

  if (!(fromUnit in units) || !(toUnit in units)) {
    return "Invalid unit.";
  }

  return (value * units[fromUnit]) / units[toUnit];
}

function convertTemperature(value, fromUnit, toUnit) {
  if (fromUnit === "C" && toUnit === "F") {
    return (value * 9) / 5 + 32;
  } else if (fromUnit === "F" && toUnit === "C") {
    return ((value - 32) * 5) / 9;
  } else if (fromUnit === "C" && toUnit === "K") {
    return value + 273.15;
  } else if (fromUnit === "K" && toUnit === "C") {
    return value - 273.15;
  } else if (fromUnit === "F" && toUnit === "K") {
    return ((value - 32) * 5) / 9 + 273.15;
  } else if (fromUnit === "K" && toUnit === "F") {
    return ((value - 273.15) * 9) / 5 + 32;
  } else {
    return "Invalid unit.";
  }
}

function convertWeight(value, fromUnit, toUnit) {
  var units = {
    mg: 0.001,
    g: 1,
    kg: 1000,
    lb: 453.592,
    oz: 28.3495
  };

  if (!(fromUnit in units) || !(toUnit in units)) {
    return "Invalid unit.";
  }

  return (value * units[fromUnit]) / units[toUnit];
}

function convertTime(value, fromUnit, toUnit) {
  var units = {
    s: 1,
    min: 60,
    h: 3600,
    day: 86400,
    wk: 604800,
    mo: 2592000,
    yr: 31536000
  };

  if (!(fromUnit in units) || !(toUnit in units)) {
    return "Invalid unit.";
  }

  return (value * units[fromUnit]) / units[toUnit];
}

function convertBitBytes(value, fromUnit, toUnit) {
  var units = {
    b: 1,
    B: 8,
    kb: 1000,
    kB: 8000,
    Mb: 1000000,
    MB: 8000000,
    Gb: 1000000000,
    GB: 8000000000
  };

  if (!(fromUnit in units) || !(toUnit in units)) {
    return "Invalid unit.";
  }

  return (value * units[fromUnit]) / units[toUnit];
}

function convertArea(value, fromUnit, toUnit) {
  var units = {
    sqmm: 0.000001,
    sqcm: 0.0001,
    sqm: 1,
    sqkm: 1000000,
    sqin: 0.00064516,
    sqft: 0.092903,
    sqyd: 0.836127,
    sqmi: 2589988.11,
    ha: 10000,
    acre: 4046.86
  };

  if (!(fromUnit in units) || !(toUnit in units)) {
    return "Invalid unit.";
  }

  return (value * units[fromUnit]) / units[toUnit];
}

function convertAngle(value, fromUnit, toUnit) {
  var units = {
    deg: 1,
    rad: 57.2958,
    grad: 0.9,
    arcmin: 0.0166667,
    arcsec: 0.000277778
  };

  if (!(fromUnit in units) || !(toUnit in units)) {
    return "Invalid unit.";
  }

  return (value * units[fromUnit]) / units[toUnit];
}

function convertSpeed(value, fromUnit, toUnit) {
  var units = {
    mps: 1,
    kmph: 0.277778,
    mph: 0.44704,
    kn: 0.514444
  };

  if (!(fromUnit in units) || !(toUnit in units)) {
    return "Invalid unit.";
  }

  return (value * units[fromUnit]) / units[toUnit];
}

function convertVolume(value, fromUnit, toUnit) {
  var units = {
    cucm: 0.001,
    ml: 0.001,
    l: 1,
    cuin: 0.0163871,
    cuft: 28.3168,
    cuyd: 764.555,
    cum: 1000,
    tsp: 0.005,
    tbsp: 0.015,
    floz: 0.0295735,
    cup: 0.24,
    pt: 0.473176,
    qt: 0.946353,
    gal: 3.78541
  };

  if (!(fromUnit in units) || !(toUnit in units)) {
    return "Invalid unit.";
  }

  return (value * units[fromUnit]) / units[toUnit];
}

document.getElementById("conversionType").addEventListener("change", populateUnits);

populateUnits();
