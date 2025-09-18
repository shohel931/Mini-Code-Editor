function runCode() {
    const htmlCode = document.getElementById("html_code").value;
    const cssCode = "<style>" + document.getElementById("css_code").value + "</style>";
    const jsCode = "<script>" + document.getElementById("js_code").value + "</" + "script>";


    const previewFrame = document.getElementById("preview").contentWindow.document;
    previewFrame.open();
    previewFrame.write(htmlCode + cssCode + jsCode);
    previewFrame.close();
}