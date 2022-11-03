export var Q;
(function (Q) {
    function callDemo() {
        alert('1');
    }
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
        console.log('Hit QueryString');
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
    function geoLoaction() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.geoSuccess);
        }
        function geoSuccess(position) {
            this.geoLoactionDetail.Latitude = position.coords.latitude;
            this.geoLoactionDetail.Longitute = position.coords.longitude;
        }
    }
    ;
    function htmlToword(id) {
        //-------------------=======================================
        var table = $('#' + id).find('table');
        table.find('tr').each(function () {
            $(this).css({ 'page-break-after': 'always' });
            $(this).find('th').each(function () {
                $(this).css({ 'vertical-align': 'top', 'line-height': '1.42857143', 'padding': '8px', 'border-bottom-width': '2px', 'border': '1px solid #ddd', 'border-spacing': '0', 'border-collapse': 'collapse' });
            });
            $(this).find('td').each(function () {
                $(this).css({ 'vertical-align': 'top', 'line-height': '1.42857143', 'padding': '8px', 'border-bottom-width': '2px', 'border': '1px solid #ddd', 'border-spacing': '0', 'border-collapse': 'collapse' });
            });
        });
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>" +
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        var footer = "</body></html>";
        var sourceHTML = header + document.getElementById(id).innerHTML + footer;
        var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'document.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }
})(Q || (Q = {}));
//# sourceMappingURL=lib.js.map