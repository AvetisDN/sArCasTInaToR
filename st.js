window.onload = function () {
    let k = 0;
    let n = 0;
    let clipboard = new ClipboardJS('#copy');
    document.getElementById('src').onkeyup = function (e) {
        if(/^[0-9a-zA-Zа-яА-ЯЁё\-,.!?+@#%*\/\\]$/.test(e.key)) {
            document.getElementById('dest').value = sArCasTInaTioN(this.value);
        }
        if (this.value.length > 0) {
            document.getElementById('copy').removeAttribute('disabled');
        } else {
            document.getElementById('copy').setAttribute('disabled', 'disabled');
        }
    };
    function sArCasTInaTioN(text) {
        let result = '';
        [...text].forEach(c => {
            let char = c;
            let rand = Math.round(Math.random());
            if (rand) k++;
            else n++;
            if (k > 2) {
                k = 0;
                rand = 0;
            }
            if (n > 2) {
                n = 0;
                rand = 1;
            }
            result += rand ? char.toUpperCase() : char.toLowerCase();
        });
        return result;
    }
    clipboard.on('success', function(e) {
        document.getElementById('copied').classList.add('show');
        setTimeout(function () {
            document.getElementById('copied').classList.remove('show');
        }, 2000);
        e.clearSelection();
    });

};
