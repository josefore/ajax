function cs50Info(name) {
    // Handle when nothing is chosen
    if (name == "")
        return;

    // Create a new AJAX object
    var ajax = new XMLHttpRequest();

    // When the page is loaded, have a callback function prefill our div
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200){
                document.querySelector('#infodiv').innerHTML = ajax.responseText;
                let ad = document.querySelector('#ad');
                // console.log(ad.value);
                ad.value = name
                console.log(ad.value);
            }
            else {
                document.querySelector('#infodiv').innerHTML = '<p style="color:red">File not found</p>';
            }
        }
    };

    // Open the requested file and transmit the data
    ajax.open('GET', name + '.html', true);
    ajax.send();
}