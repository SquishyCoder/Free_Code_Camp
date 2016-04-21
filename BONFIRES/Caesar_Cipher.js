function rot13(str) {
        var string = [];
        for (var i = 0; i < str.length; i++) {
                string.push(str.charCodeAt(i));
                }
        var alter = string.map(function(val) {
                if ((val >= 32 && val < 48) || (val > 57 && val < 65)) {
                        return String.fromCharCode(val);
                        } else if (val + 12 >= 90) {
                                var remainder = (val + 12) - 90;
                                return String.fromCharCode(65 + remainder);
                                } else {
                                        return String.fromCharCode(val + 13);
                                        }
                });
        return alter.join("");
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK");
