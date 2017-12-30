//section outline
var section = {
  code: '',
  fromChoice: '',
  title: '',
  defaultText: '',
  segments: [],
  choices: [],
  nextSection: ''
};

//sections
var section1 = {
  code: 'S1',
  fromChoice: 'default',
  title: 'Ashes to Ashes',
  defaultText: 'The once peaceful village of Verland is burning to the ground. Families huddle together, staggering through smoke-filled streets, shielding their faces as ash rains down around them. The villagers of Verland run screaming in fear as cloaked men on horseback race past, stabbing with swords and spears. The raiders wield vicious weapons, their faces hidden in the shadows beneath the cowls of their cloaks.',
  segments: [
    'You feel an arm on your shoulder, pulling you back into the protected confines of the inn. An arrow flashes past where you were standing.',
    '“It’s too late for them!” Vattar yells, slamming the doors of the inn closed. Solid thumps resound loudly on the wooden barricade; arrows missing their targets.',
    'The half-elf is splattered with blood. Behind him, three motionless bodies lie on the floor, Xefna and his two thugs.',
    '“Like hell it’s too late!” Rholsk snarls, charging forward to rush outside. “I’m not goin’ down without a fight.”',
    'Vattar grabs Rholsk by the shoulder, an incredulous look on his face. “Don’t you see what’s happening out there? The Zhentarim are raiding your village! They’ll leave none alive to tell what happened here.”',
    '“Get yer hands off of me,” Rholsk growls, slowly turning his head to look Vattar in the eyes. “We can’t just run away. This village is all we have!”',
    'Vattar releases the half-orc’s shoulder and placatingly raises his hands. “I don’t want anyone else to die either, and I understand you’re upset, Rholsk, but we can’t risk it.”',
    'Vattar looks at you. “If you’re captured, you will suffer a fate worse than death. Malisar will not have forgotten what we did to him. I need you. The Harpers need you. One village is a small sacrifice to keep the realm safe.”',
    '“Are you serious? W-we can’t just leave them,” Davian stammers. The halfling crosses the common room to stand beside you. Blood mats his curly brown locks, and he holds his crossbow tightly in one hand. He looks towards the sandy-haired youth that arrived moments before, warning of the destruction raging through the village.',
    'The boy is out of breath, his face stained with soot. His tunic is ripped and blackened with ash. He stands a few paces away, his eyes darting between each of you. You recognize the youth. His name is Sammel.',
    '“You have to do something!” Sammel pleads, taking a step forward. “Ma is trapped! The house is falling down around her! Pa left to find help, but he hasn’t come back yet...” Fresh tears begin to course down his soot-stained cheeks. “She… she was covered in blood...”',
    '“I-I’m sorry, lad,” Davian says, looking at the floor. The halfling’s brow furrows, and his eyes begin to burn with anger. He clears his throat and looks at you. “I’ll go and help Sammel and his family,” he says softly. The anger in his eyes is gone, replaced with a stubborn look of determination. “But I can’t do it alone.”'
  ],
  choices: [
    'C11',
    'C12',
    'C13'
  ],
  nextSection: ''
};

var section2 = {
  code: 'S2',
  fromChoice: 'C11',
  title: 'Fight Back',
  defaultText: 'Vattar shakes his head. “Bloody fools,” he mutters under his breath.',
  segments: [
    'A loud thump resounds throughout the inn as something solid strikes one of the walls of the building. The wood begins to blacken and char.',
    'Rholsk walks over to a nearby corpse and rolls it over with his boot, grumbling under his breath.',
    'The corpse of the recently deceased lies face up, eyes staring blankly. Dark blood has soaked the floorboards around the corpse. The half-orc bends down and retrieves a weapon from the dead body, a shortsword with a leather wrapped hilt.',
    'Rholsk looks at you. “We need to arm ourselves, then we head outside and fight back.”',
    'Davian sighs. “Well, you’ve given me one hell of a story to tell,” the halfling says. He is gripping Sammel’s hand, and holding his weapon at the ready with the other. “I suppose it’s now or never.”',
    'Vattar draws his blades and moves to one side of the doorway. “I’ll do my best to cause a distraction,” he says, cutting off a strip of cloth from his cloak. He pours his waterskin over the cloth and ties the makeshift handkerchief around his face. “If you can get away, meet me at the western edge of Kryptgarden Forest.” Vattar’s voice is muffled. “I’ll do my best to wait for you at the forest’s edge. I can’t face Malisar alone.”'
  ],
  choices: [
    'C21',
    'C22',
    'C23',
    'C24'
  ],
  nextSection: ''
};

var sectionMap = {
  'S1': section1,
  'S2': section2
};

console.println("loaded sections!");
