//choices outline
var choice = {
  code: '',
  title: '',
  text: '',
  toSection: ''
};

//choices
var choice1 = {
  code: 'C11',
  title: 'Fight Back',
  text: 'Agree with Rholsk. You will help fight off the attackers as best you can.',
  toSection: 'S2'
};

var choice2 = {
  code: 'C12',
  title: 'Flee',
  text: 'Agree with Vattar. You need to get out of the village before it’s too late.',
  toSection: 'S3'
};

var choice3 = {
  code: 'C13',
  title: 'Lend A Hand',
  text: 'Agree with Davian. You need to aid the wounded, and attempt to get them to safety.',
  toSection: 'S4'
};

var choice4 = {
  code: 'C21',
  title: 'Cast Buffs',
  text: 'Cast a spell on yourself or your allies. Your group is going to need all the help they can get.',
  toSection: 'S5'
};

var choice5 = {
  code: 'C22',
  title: 'Ready Ranged',
  text: 'Ready a ranged attack. You’re going to target the first enemy you see and strike quickly.',
  toSection: 'S6'
};

var choice6 = {
  code: 'C23',
  title: 'Ready Melee',
  text: 'Ready a melee attack. If any of the raiders get close enough, you’ll be the first one to strike.',
  toSection: 'S7'
};

var choice7 = {
  code: 'C24',
  title: 'Fade Away',
  text: 'Attempt to stealth. You’ll use the smoke and distractions of the battle to your advantage.',
  toSection: 'S8'
};

var choiceMap = {
  'C11': choice1,
  'C12': choice2,
  'C13': choice3,
  'C21': choice4,
  'C22': choice5,
  'C23': choice6,
  'C24': choice7
};

console.println("loaded choices!");
