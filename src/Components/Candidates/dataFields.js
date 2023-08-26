const dataFields = 
{  lastName:["Last Name:",null],
  familyPhoto:["Path/Link to Family Photo", null],
  gps:["GPS Coordinates (lat/lon) in decimal", null],
  members:["TODO: sub-elements for family members", "[]"],
  deed:["Path/Link to Deed images.  Needs ability to add multiple", "[]"],
  video: ["Family Video", ""],
  // These should all be checkboxes someday
  currentOnPayments: ["Current on land payments. (true or false)", null],
  ownsLand: ["Owns land free and clear. (true or false)", false],
  applicationComplete: ["Application is complete. (true or false)", null],
  acceptedToBuild: ["BOH agreed to build home for candidate", false],
  built:["House build complete:", false],
};

export default dataFields