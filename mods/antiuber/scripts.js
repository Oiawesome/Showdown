exports.BattleScripts = {
	init: function() {
		this.modData('Pokedex', 'cherrimsunshine').types = ['Grass', 'Fire'];

		this.modData('Learnsets', 'masquerain').learnset.hurricane = ['5L100'];
		this.modData('Learnsets', 'butterfree').learnset.hurricane = ['5L100'];
		delete this.modData('Learnsets', 'butterfree').learnset.hurricane = ['5L100'];
		
		this.modData('Pokedex', 'blaziken').abilities['DW'] = 'Reckless';
		
		this.modData('Pokedex', 'shayminsky').abilities['0'] = 'Leaf Guard';
		this.modData('Pokedex', 'shayminsky').baseStats = {hp:85,atk:83,def:80,spa:105,spd:75,spe:117};
		this.modData('Learnsets', 'shayminsky').learnset.hurricane = ['5L85'];
	}
};
