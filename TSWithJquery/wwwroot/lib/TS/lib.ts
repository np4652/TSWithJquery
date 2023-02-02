
export namespace Q {

    function htmlEncoder(a): string {
        switch (a) {
            case '&': return '&amp;';
            case '>': return '&gt;';
            case '<': return '&lt;';
        }
        return a;
    }

    function htmlEncode(s): string {
        let text = (s === null ? '' : s.toString());
        if ((new RegExp('[><&]', 'g')).test(text)) {
            return text.replace(new RegExp('[><&]', 'g'), this.htmlEncoder);
        }
        return text;
    }

    export function getQueryString(): any {
        let queries = {};
        let url = document.location.search;
        if (url.trim() !== '') {
            $.each(document.location.search.substr(1).split('&'), function (c, q) {
                let i = q.split('=');
                queries[i[0]] = i[1];
            });
        }
        return queries;
    };

    function getFormData($form: JQuery<Element>): any {
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};
        $.map(unindexed_array, function (n) {
            indexed_array[n['name']] = n['value'] === 'on' ? true : n['value'];
        });
        return indexed_array;
    }  

    export function numberToWords(number: number): string {
        let digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let elevenSeries = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let countingByTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        let shortScale = ['', 'thousand', 'million', 'billion', 'trillion'];

        let x = number?.toString().indexOf('.');
        if (x == -1) x = number?.toString().length;
        if (x > 15) return 'too big';
        let n = number?.toString().split('');
        let str = '';
        let sk = 0;
        for (let i = 0; i < x; i++) {
            let cn = parseInt(n[i]);
            if ((x - i) % 3 == 2) {
                if (cn === 1) { str += elevenSeries[Number(n[i + 1])] + ' '; i++; sk = 1; }
                else if (cn != 0) { str += countingByTens[cn - 2] + ' '; sk = 1; }
            }
            else if (cn != 0) {
                str += digit[cn] + ' ';
                if ((x - i) % 3 == 0) str += 'hundred '; sk = 1;
            }
            if ((x - i) % 3 == 1) { if (sk) str += shortScale[(x - i - 1) / 3] + ' '; sk = 0; }
        }
        if (x != number.toString().length) {
            var y = number.toString().length; str += 'point ';
            for (var i = x + 1; i < y; i++) str += digit[n[i]] + ' ';
        }
        str = str.replace(/\number+/g, ' ');
        return str.trim() + ".";
    }
}