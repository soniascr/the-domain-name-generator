let pronoun = ['the', 'our', 'my'];
let adj = ['great', 'big', 'small'];
let noun = ['jogger', 'racoon','writer'];
let fin = ['.us', '.net','.es','.com']
for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
            for (var l = 0; l < fin.length; l++) {
                var domain = pronoun[i] + adj[j] + noun[k] + fin[l];
                console.log(domain);
            }
        }
    }
}