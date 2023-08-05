function _selectdisp() {
    val = document.report_create.displayfield.selectedIndex;
    if (val != -1) {
        obj = eval("document.report_create.label" + val);
        obj.value = document.report_create.displayfield.options[val].text;
        document.report_create.label.value = obj.value;
    } else {
        document.report_create.label.value = "";
    }

}
function _selectdispall() {
    let opt = "";
    let ind = document.report_create.displayfield.selectedIndex;
    document.report_create.displaylabel.length = 0;
    for (i = 0; i < document.report_create.displayfield.length; i++) {
        opt = new Option();
        opt.value = document.report_create.displayfield.options[i].text
        opt.text = document.report_create.displayfield.options[i].text
        document.report_create.displaylabel[document.report_create.displaylabel.length] = opt;
    }
    if (ind != -1) {
        document.report_create.label.value = document.report_create.displayfield.options[ind].text;
    } else {
        document.report_create.label.value = "";
    }
}
function _selectdispud(mode) {
    val = document.report_create.displayfield.selectedIndex;
    if (val != -1) {
        obj = eval("document.report_create.label" + val);
        obj.value = document.report_create.displayfield.options[val].text;
        document.report_create.label.value = obj.value;
        if (mode == "up") {
            val = val + 1;
            obj = eval("document.report_create.label" + val);
            obj.value = document.report_create.displayfield.options[val].text;
        } else if (mode == "down") {
            val = val - 1;
            obj = eval("document.report_create.label" + val);
            obj.value = document.report_create.displayfield.options[val].text;
        }
    } else {
        document.report_create.label.value = "";
    }

}
function _blurlabel() {
    val = document.report_create.displayfield.selectedIndex;
    document.report_create.displayfield.options[val].text = document.report_create.label.value;
    _selectdispall();
}
function _clickadd() {

    //alert(document.report_create.displayfield.selectedIndex);
    let arropt = new Array();
    let opt;
    let obj;
    let soptval = new Array();
    let sopttxt = new Array();
    let arroptval = new Array();
    let sindex = document.report_create.displayfield.selectedIndex;
    let bindex = document.report_create.reportfield.selectedIndex;
    if (bindex != -1) {
        for (i = 0; i < document.report_create.displayfield.length; i++) {
            arroptval[i] = document.report_create.displayfield.options[i].value;
            arropt[i] = document.report_create.displayfield.options[i].text;
        }
        if (sindex == -1) { sindex = document.report_create.displayfield.length - 1; }
        document.report_create.displayfield.length = 0;
        for (i = 0; i <= sindex; i++) {
            opt = new Option();
            opt.value = arroptval[i];
            opt.text = arropt[i];
            document.report_create.displayfield[i] = opt;
        }
        opt = new Option();
        opt.value = document.report_create.reportfield.options[document.report_create.reportfield.selectedIndex].value;
        opt.text = document.report_create.reportfield.options[document.report_create.reportfield.selectedIndex].text;
        document.report_create.displayfield[document.report_create.displayfield.length] = opt;
        document.report_create.displayfield[document.report_create.displayfield.length - 1].selected = true;

        for (i = sindex + 1; i < arroptval.length; i++) {
            opt = new Option();
            opt.value = arroptval[i];
            opt.text = arropt[i];
            document.report_create.displayfield[document.report_create.displayfield.length] = opt;
        }
        for (i = 0; i < document.report_create.reportfield.length; i++) {
            soptval[i] = document.report_create.reportfield.options[i].value;
            sopttxt[i] = document.report_create.reportfield.options[i].text;
        }
        document.report_create.reportfield.length = 0;
        for (i = 0; i < soptval.length; i++) {
            if (i != bindex) {
                opt = new Option()
                opt.value = soptval[i];
                opt.text = sopttxt[i];
                document.report_create.reportfield[document.report_create.reportfield.length] = opt;
            }
        }
        if (bindex != 0) {
            if (document.report_create.reportfield[bindex] != null)
                document.report_create.reportfield[bindex].selected = true;
            else
                document.report_create.reportfield[bindex - 1].selected = true;
        }
    }
    _selectdispall();

}
function _clickaddall() {
    let arropt = new Array();
    let opt;
    let soptval = new Array();
    let sopttxt = new Array();
    let arroptval = new Array();
    let sindex = document.report_create.displayfield.selectedIndex;
    let bindex = document.report_create.reportfield.selectedIndex;
    for (i = 0; i < document.report_create.displayfield.length; i++) {
        arroptval[i] = document.report_create.displayfield.options[i].value;
        arropt[i] = document.report_create.displayfield.options[i].text;
    }
    if (sindex == -1) { sindex = document.report_create.displayfield.length - 1; }
    document.report_create.displayfield.length = 0;
    for (i = 0; i <= sindex; i++) {
        opt = new Option();
        opt.value = arroptval[i];
        opt.text = arropt[i];
        document.report_create.displayfield[i] = opt;
    }
    for (i = 0; i < document.report_create.reportfield.length; i++) {
        opt = new Option();
        opt.value = document.report_create.reportfield.options[i].value;
        opt.text = document.report_create.reportfield.options[i].text;
        document.report_create.displayfield[document.report_create.displayfield.length] = opt;
        document.report_create.displayfield[document.report_create.displayfield.length - 1].selected = true;
    }

    for (i = sindex + 1; i < arroptval.length; i++) {
        opt = new Option();
        opt.value = arroptval[i];
        opt.text = arropt[i];
        document.report_create.displayfield[document.report_create.displayfield.length] = opt;
    }
    document.report_create.reportfield.length = 0;
    _selectdispall();
}
function _clickdelete() {
    let opt;
    let soptval = new Array();
    let sopttxt = new Array();
    if (document.report_create.displayfield.selectedIndex != -1) {
        opt = new Option();
        opt.value = document.report_create.displayfield.options[document.report_create.displayfield.selectedIndex].value;
        opt.text = document.report_create.displayfield.options[document.report_create.displayfield.selectedIndex].text;
        document.report_create.reportfield[document.report_create.reportfield.length] = opt;

        bindex = document.report_create.displayfield.selectedIndex;
        for (i = 0; i < document.report_create.displayfield.length; i++) {
            soptval[i] = document.report_create.displayfield.options[i].value;
            sopttxt[i] = document.report_create.displayfield.options[i].text;
        }
        if (bindex == document.report_create.displayfield.length - 1) flag = true; else flag = false;
        document.report_create.displayfield.length = 0;
        for (i = 0; i < soptval.length; i++) {
            if (i != bindex) {
                opt = new Option()
                opt.value = soptval[i];
                opt.text = sopttxt[i];
                document.report_create.displayfield[document.report_create.displayfield.length] = opt;
            }
        }
        if (bindex != 0) {
            if (flag != true) {
                document.report_create.displayfield[bindex].selected = true;
            } else {
                document.report_create.displayfield[bindex - 1].selected = true;
            }
        }
    }
    _selectdispall();
}
function _clickdeleteall() {
    let opt;
    for (i = 0; i < document.report_create.displayfield.length; i++) {
        opt = new Option();
        opt.value = document.report_create.displayfield.options[i].value;
        opt.text = document.report_create.displayfield.options[i].text;
        document.report_create.reportfield[document.report_create.reportfield.length] = opt;
    }
    document.report_create.displayfield.length = 0;
    _selectdispall();
}
function _clickup() {
    let index = document.report_create.displayfield.selectedIndex;
    let optval;
    let opttxt;
    if ((index != 0) && (index != -1)) {
        optval = document.report_create.displayfield.options[index].value;
        opttxt = document.report_create.displayfield.options[index].text;
        document.report_create.displayfield.options[index].value = document.report_create.displayfield.options[index - 1].value;
        document.report_create.displayfield.options[index].text = document.report_create.displayfield.options[index - 1].text;
        document.report_create.displayfield.options[index - 1].value = optval;
        document.report_create.displayfield.options[index - 1].text = opttxt;
        document.report_create.displayfield.options[index - 1].selected = true;
        _selectdispall();
    }
}


function _clickdown() {
    let index = document.report_create.displayfield.selectedIndex;
    let optval;
    let opttxt;
    if ((index != document.report_create.displayfield.length - 1) && (index != -1)) {
        optval = document.report_create.displayfield.options[index].value;
        opttxt = document.report_create.displayfield.options[index].text;

        document.report_create.displayfield.options[index].value = document.report_create.displayfield.options[index + 1].value;
        document.report_create.displayfield.options[index].text = document.report_create.displayfield.options[index + 1].text;
        document.report_create.displayfield.options[index + 1].value = optval;
        document.report_create.displayfield.options[index + 1].text = opttxt;
        document.report_create.displayfield.options[index + 1].selected = true;
        _selectdispall();
    }

}
function _clicknext() {
    if (document.report_create.displayfield.length == 0) {
        top.display_msg(1277, 0);
        return false;
    }
    else {
        document.report_create.displayfield.multiple = true;
        setTimeout("_next()", 500);
    }
}
function _next() {

    for (i = 0; i < document.report_create.displayfield.length; i++) {
        document.report_create.displayfield.options[i].selected = true;
    }
    for (i = 0; i < document.report_create.displaylabel.length; i++) {
        document.report_create.displaylabel.options[i].selected = true;
    }
    document.report_create.mode.value = "screen3";
    document.report_create.submode.value = "next";
    document.report_create.submit();
}
function _clickprevious() {

    document.report_create.mode.value = "screen1";
    document.report_create.submode.value = "next";
    document.report_create.submit();
}
function _finish() {
    for (i = 0; i < document.report_create.displayfield.length; i++) {
        document.report_create.displayfield.options[i].selected = true;
    }
    for (i = 0; i < document.report_create.displaylabel.length; i++) {
        document.report_create.displaylabel.options[i].selected = true;
    }
    document.report_create.mode.value = "screen3";
    document.report_create.submode.value = "finish";
    document.report_create.submit();
}
function _clickfinish() {
    if (document.report_create.displayfield.length == 0) {
        top.display_msg(1277, 0);
        return false;
    }
    else {
        document.report_create.displayfield.multiple = true;
        setTimeout("_finish()", 1);
    }
}
function _clickcancel() {
    document.report_create.mode.value = "cancel";
    document.report_create.submit();
}	