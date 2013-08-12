exports.BattleScripts = {
        init: function() {
                for (var i in this.data.Learnsets) {
                        var learnset = this.data.Learnsets[i].learnset;
                        var sk = learnset.sketch || [];
                        if (!sk.length) {
                            this.modData('Learnsets', i).learnset.sketch = ["3E","3S0","3S1","3S2","3S3","3S4","3S5","3S6","3S7","3S8","3S9","3S10","3S11","4E","4S0","4S1","4S2","4S3","4S4","4S5","4S6","4S7","4S8","4S9","4S10","4S11","4S12","4S13","4S14","4S15","4S16","4S17","4S18","4S19","4S20","4S21","4S22","4S23","5E","5S0","5S1","5S2","5S3","5S4","5S5","5S6","5S7","5S8","5S9","5S10","5S11","5S12","5S13","5S14","5S15","5S16","5S17","5S18","5S19","5S20","5S21","5S22","5S23","5S24","5S25","5S26","5S27","5S28","5S29","5S30","5S31"];
                            
                        }
                }
        }
};
