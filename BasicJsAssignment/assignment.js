// Radian to degreee

function radianToDegree(radian) {
  if (isNaN(radian)) {
    return "Please enter a number";
  } else {
    let degree = (radian * 180) / Math.PI;
    return degree.toFixed(2);
  }
}

const radians = radianToDegree(10);
console.log(radians);



//isJavaScriptFile

function isJavaScriptFile(String) {
  if (typeof String === "string") {
    if (String.endsWith(".js")) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please enter a valid file name";
  }
}

const String = isJavaScriptFile("image.jpg.js");
console.log(String);

//oilPrice

function oilPrice(diesel, petrol, octane) {
  if (isNaN(diesel) || isNaN(petrol) || isNaN(octane)) {
    return "Please enter the valid amount of diesel, petrol & octane";
  } else {
    let dieselPrice = 114;
    let petrolPrice = 130;
    let octanePrice = 135;
    let price =
      diesel * dieselPrice + petrol * petrolPrice + octane * octanePrice;
    return price;
  }
}

const price = oilPrice(0, 2, 3);
console.log(price);



//public bus fare

function publicBusFare(amount) {
  let bus = 50;
  let microBus = 11;

  if (isNaN(amount)) {
    return "Please enter a valid amount";
  } else {
    if (amount % bus >= 0) {
      microBus = amount % bus;
      if (microBus % 11 >= 0) {
        let fare = (microBus % 11) * 250;
        return fare;
      }
    }
  }
}

const people = publicBusFare(112);
console.log(people);



//isBestFriend

function isBestFriend(a, b) {
  if (typeof a === "object" && typeof b === "object") {
    if (
      a.hasOwnProperty("name") &&
      a.hasOwnProperty("friend") &&
      b.hasOwnProperty("name") &&
      b.hasOwnProperty("friend")
    ) {
      if (a.name.toLowerCase() == b.friend.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Property doesn't exist";
    }
  } else {
    return false;
  }
}

const friendCheck = isBestFriend(
  { name: "joe", friend: "alex" },
  { name: " alex", friend: "joe" }
);
console.log(friendCheck);



