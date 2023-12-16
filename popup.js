function objectToCSVRow(dataObject) {
    let dataArray = new Array;
    for (let o in dataObject) {
        let innerValue = dataObject[o] === null ? '' : dataObject[o].toString();
        let result = innerValue.replace(/"/g, '""');
        dataArray.push('"' + result + '"');
    }
    return dataArray.join(',') + '\r\n';
}

function exportToCSV() {
    chrome.storage.local.get(null, function(items) {
        let csvContent = "data:text/csv;charset=utf-8,";

        // Column headers
        csvContent += "Company,Role,Location,Date Applied\r\n";

        for (let key in items) {
            csvContent += objectToCSVRow(items[key]);
        }

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("Downloads", "job_applications.csv");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the CSV file
    });
}

document.getElementById('exportButton').addEventListener('click', exportToCSV);
