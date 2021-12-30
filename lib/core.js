class BrowserPrint {
    static print(src) {
        if (BrowserPrint.iframeTmp && document.body.contains(BrowserPrint.iframeTmp)) {
            document.body.removeChild(BrowserPrint.iframeTmp)
        }
        let iframe = document.createElement("iframe")
        BrowserPrint.iframeTmp = iframe
        iframe.hidden = true
        document.body.appendChild(iframe)
        iframe.src = src
        iframe.onload = function() {
            iframe.contentWindow.print()
        }
    }

    static printPdfBlob(blob) {
        if (BrowserPrint.iframeTmp && document.body.contains(BrowserPrint.iframeTmp)) {
            document.body.removeChild(BrowserPrint.iframeTmp)
        }
        let iframe = document.createElement("iframe")
        BrowserPrint.iframeTmp = iframe
        iframe.hidden = true
        document.body.appendChild(iframe)
        iframe.src = URL.createObjectURL(blob)
        iframe.onload = function() {
            iframe.contentWindow.print()
        }
    }
}

BrowserPrint.iframeTmp = null

export default BrowserPrint
