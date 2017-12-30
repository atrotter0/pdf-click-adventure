//engine
var MAX_CHOICES = 4;

function reset() {
  showGameOptions();
  hideSectionElements();
  hideChoiceElements();
}

function newGame() {
  hideGameOptions();
  showSectionElements();
}

function showGameOptions() {
  elementDisplay("newGameBtn", true);
  elementDisplay("loadGameBtn", true);
}

function hideGameOptions() {
  elementDisplay("newGameBtn", false);
  elementDisplay("loadGameBtn", false);
}

function showSectionElements() {
  elementDisplay("sectionBox", true);
  elementDisplay("titleBox", true);
  elementDisplay("continueBtn", true);
}

function hideSectionElements() {
  elementDisplay("sectionBox", false);
  elementDisplay("titleBox", false);
  elementDisplay("continueBtn", false);
}

function elementDisplay(id, boolean) {
  var element = this.getField(id);
  if (boolean == true) {
    element.display = display.visible;
  } else {
    element.display = display.hidden;
  }
}

function startStory(section) {
  displaySection(section);
  displayTitle(section);
}

function displaySection(section) {
  var sectionBox = this.getField("sectionBox");
  sectionBox.value = section.defaultText;
}

function displayTitle(section) {
  var titleBox = this.getField("titleBox");
  titleBox.value = section.title;
}

function continueStory(section, iterator) {
  var sectionBox = this.getField("sectionBox");
  segmentIterator += 1;
  if (noMoreSegments(section, iterator)) {
    displaySegment(sectionBox, section, iterator);
    displayChoices(section);
    resetIterator();
  } else {
    displaySegment(sectionBox, section, iterator);
  }
}

function noMoreSegments(section, iterator) {
  var maxSegments = section.segments.length - 1;
  if (iterator >= maxSegments) {
    return true;
  } else {
    return false;
  }
}

function displaySegment(sectionBox, section, iterator) {
  sectionBox.value = section.segments[segmentIterator];
}

function resetIterator() {
  segmentIterator = 0;
}

function displayChoices(section) {
  elementDisplay("continueBtn", false);
  showChoiceElements(section);
}

function showChoiceElements(section) {
  for(i = 0; i < section.choices.length; i++) {
    var btnId = "choice" + (i + 1) + "Btn"
    var boxId = "choice" + (i + 1) + "Box"
    var choiceKey = section.choices[i];
    whatDoYouDo();
    getChoiceText(choiceKey, boxId);
    elementDisplay(btnId, true);
    elementDisplay(boxId, true);
  }
}

function hideChoiceElements() {
  for(i = 0; i < MAX_CHOICES; i++) {
    var btnId = "choice" + (i + 1) + "Btn"
    var boxId = "choice" + (i + 1) + "Box"
    elementDisplay(btnId, false);
    elementDisplay(boxId, false);
  }
}

function whatDoYouDo() {
  var titleBox = this.getField("titleBox");
  titleBox.value = "What do  you do?";
}

function getChoiceText(choiceKey, boxId) {
  var choiceBox = this.getField(boxId);
  var choice = getChoice(choiceKey);
  choiceBox.value = choice.text;
}

function getChoice(key) {
  return choiceMap[key]
}

function getSection(key) {
  return sectionMap[key];
}

function makeChoice(choiceKey) {
  hideChoiceElements();
  setSection(choiceKey);
  showSectionElements();
  startStory(currentSection);
}

function setSection(choiceKey) {
  var choice = getChoice(choiceKey);
  var sectionKey = choice.toSection;
  var nextSection = getSection(sectionKey);
  currentSection = nextSection;
}

console.println("loaded engine!");

//reset state
reset();
