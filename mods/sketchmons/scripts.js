exports.BattleScripts = {
        init: function() {
                for (var i in this.data.Learnsets) {
                        var learnset = this.data.Learnsets[i].learnset;
                            this.modData('Learnsets', i).learnset.sketch = ["5E"];
                        }
                }
        }
};
