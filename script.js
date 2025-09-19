function runCode() {
    const htmlCode = document.getElementById("html_code").value;
    const cssCode = "<style>" + document.getElementById("css_code").value + "</style>";
    const jsCode = "<script>" + document.getElementById("js_code").value + "</" + "script>";

    const previewFrame = document.getElementById("preview").contentWindow.document;
    previewFrame.open();
    previewFrame.write(htmlCode + cssCode + jsCode);
    previewFrame.close();
}

// Divider drag resize
const editor = document.querySelector(".editor");
const divider = document.querySelector(".divider");

let isResizing = false;

divider.addEventListener("mousedown", function(e) {
    isResizing = true;
    document.body.style.cursor = "col-resize";
});

document.addEventListener("mousemove", function(e) {
    if (!isResizing) return;
    let newWidth = e.clientX / window.innerWidth * 100; // percentage
    if (newWidth > 20 && newWidth < 70) {
        editor.style.width = newWidth + "%";
    }
});

document.addEventListener("mouseup", function() {
    isResizing = false;
    document.body.style.cursor = "default";
});
