export var Q;
(function (Q) {
    function htmlEncoder(a) {
        switch (a) {
            case '&': return '&amp;';
            case '>': return '&gt;';
            case '<': return '&lt;';
        }
        return a;
    }
    function htmlEncode(s) {
        var text = (s === null ? '' : s.toString());
        if ((new RegExp('[><&]', 'g')).test(text)) {
            return text.replace(new RegExp('[><&]', 'g'), this.htmlEncoder);
        }
        return text;
    }
    function getQueryString() {
        var queries = {};
        var url = document.location.search;
        if (url.trim() !== '') {
            $.each(document.location.search.substr(1).split('&'), function (c, q) {
                var i = q.split('=');
                queries[i[0]] = i[1];
            });
        }
        return queries;
    }
    Q.getQueryString = getQueryString;
    ;
    function getFormData($form) {
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};
        $.map(unindexed_array, function (n) {
            indexed_array[n['name']] = n['value'] === 'on' ? true : n['value'];
        });
        return indexed_array;
    }
    function numberToWords(number) {
        var digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        var elevenSeries = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        var countingByTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        var shortScale = ['', 'thousand', 'million', 'billion', 'trillion'];
        var x = number === null || number === void 0 ? void 0 : number.toString().indexOf('.');
        if (x == -1)
            x = number === null || number === void 0 ? void 0 : number.toString().length;
        if (x > 15)
            return 'too big';
        var n = number === null || number === void 0 ? void 0 : number.toString().split('');
        var str = '';
        var sk = 0;
        for (var i_1 = 0; i_1 < x; i_1++) {
            var cn = parseInt(n[i_1]);
            if ((x - i_1) % 3 == 2) {
                if (cn === 1) {
                    str += elevenSeries[Number(n[i_1 + 1])] + ' ';
                    i_1++;
                    sk = 1;
                }
                else if (cn != 0) {
                    str += countingByTens[cn - 2] + ' ';
                    sk = 1;
                }
            }
            else if (cn != 0) {
                str += digit[cn] + ' ';
                if ((x - i_1) % 3 == 0)
                    str += 'hundred ';
                sk = 1;
            }
            if ((x - i_1) % 3 == 1) {
                if (sk)
                    str += shortScale[(x - i_1 - 1) / 3] + ' ';
                sk = 0;
            }
        }
        if (x != number.toString().length) {
            var y = number.toString().length;
            str += 'point ';
            for (var i = x + 1; i < y; i++)
                str += digit[n[i]] + ' ';
        }
        str = str.replace(/\number+/g, ' ');
        return str.trim() + ".";
    }
    Q.numberToWords = numberToWords;
})(Q || (Q = {}));
//# sourceMappingURL=lib.js.map