function NaiveDict(){
    this.keys = []
    this.values = []
}
NaiveDict.prototype.set = function(key, value){
    this.keys.push(key)
    this.values.push(value)
}
NaiveDict.prototype.get = function(lookupKey){
    for (var i=0;i<this.keys.length;i++){
        var key = this.keys[i];
        if (key === lookupKey) {
            return this.values[i]
        }
    }
}