exports.BattleScripts = {
	init: function() {
		this.modData('Pokedex', 'cherrimsunshine').types = ['Grass', 'Fire'];

		this.modData('Learnsets', 'masquerain').learnset.hurricane = ['5L100'];
		this.modData('Learnsets', 'butterfree').learnset.hurricane = ['5L100'];
		
		this.modData('Pokedex', 'mismagius').abilities['1'] = 'Cursed Body';
		this.modData('Pokedex', 'cryogonal').abilities['1'] = 'Ice Body';
	}
};
