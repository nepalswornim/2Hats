/* Mock data. You can safely remove it when it is loaded into database */
var mockData = null;
function clear() {
    $("#modal-overlay").fadeOut(200);
    $("#btnAdd").show();
    $("#txtCompany").val('');
    $("#txtLevel").val("");
    $("#lblID").text('');
    $("#txtSuite").val('');
    $("#tblData").show();
    $("#frmDetail").hide();
    GetAllData();
    CreateTable();
    Binder();
    BindTable(mockData);
   
};
function GetAllData() {

    $.ajax({

        type: "GET",
        url: "/api/Directories",
    
        contentType: "application/json charset-utf-8",
        success: function (data) {
            mockData = data;
          
            CreateTable();
                BindTable(mockData);

        },
        error: function () {

        }
    });

}
function GetDaTaById(id) {
 
    $.ajax({

        type: "GET",
        url: "/api/Directories/"+id,
        contentType: "application/json charset-utf-8",
        success: function (data) {
            
           
            $("#tblData").hide();
            $("#frmDetail").show();
            $("#txtCompany").val(data["CompanyName"]);
            $("#txtLevel").val(data["Level"]);
            $("#txtSuite").val(data["Suite"]);
            $("#lblID").text(data["ID"]);
          
        },
        error: function () {

        }
    });

   
}

var Directory = {
    ID: null,
    CompanyName: "",
    Level: "",
    Suite: ""
};

function UpdateDirectory(item) {
    var id = $("#lblID").val();
    var options = {};
    options.url = "/api/Directories/UpdateDetails",
    options.type = "PUT";
 
    var obj = Directory;
    obj.ID = $("#lblID").text();
    obj.CompanyName = $("#txtCompany").val();
    obj.Level = $("#txtLevel").val();
    obj.Suite = $("#txtSuite").val();
    console.dir(obj);
    options.data = JSON.stringify(obj);
    options.contentType = "application/json";
    options.dataType = "html";
    options.success = function (msg) {
        alert("Successfully Updated");
        //$("#tblData").show();
        //$("#frmDetail").hide();
        //GetAllData();
        //CreateTable();
        //Binder();
        //BindTable(mockData); 
        clear();
    };
    options.error = function () {
        $("#msg").html("Error while calling the Web API!");
    };
    $.ajax(options);
};
function AddDirectory() {
    var id = 0;
    var options = {};
    options.url = "/api/Directories",
        options.type = "POST";

    var obj = Directory;
    obj.ID = 0;
    obj.CompanyName = $("#txtCompany").val();
    obj.Level = $("#txtLevel").val();
    obj.Suite = $("#txtSuite").val();
    console.dir(obj);
    options.data = JSON.stringify(obj);
    options.contentType = "application/json";
    options.dataType = "html";
    options.success = function (msg) {
        alert("Successfully Added");
     
        clear();
    };
    options.error = function () {
        $("#msg").html("Error while calling the Web API!");
    };
    $.ajax(options);
};
function DeleteDirectory(id) {
   
    var options = {};
    options.url = "/api/Directories/"
        + id;
    options.type = "DELETE";
    options.dataType = "html";
    options.success = function (msg) {
        alert("Deleted Successfully");
        clear();
    };
    options.error = function () {
        $("#msg").html("Error while calling the Web API!");
    };
    $.ajax(options);
}




function CreateTable() {
 
    var tbody = "";
    $("#tblData tbody").empty();
 

    $.each(mockData, function (i, val) {
        tbody += "<tr><td style=\"display:none\">" + val["ID"] + "</td>";
        tbody += "<td>" + val["CompanyName"] + "</td>";
        tbody += "<td>" + val["Suite"] + "</td>";
        tbody += "<td>" + val["Level"] + "</td>";
        tbody += "<td><button type=\"button\"  class=\'btn-Edit btn btn-success'>Edit</button>";
        tbody += "<td><button type=\"button\"  class=\'btn-Delete btn btn-danger'>Delete</button></tr>";


    });

    $("#tblData tbody").html(tbody);
}
// Convert the JSON array to Html Table
function BindTable(jsondata) {
    $(tableid).empty();
    var tableid = "#table-1, #table-2";
    // Get all the column headings of the data
    var columns = BindTableHeader(jsondata, tableid);
    for (var i = 0; i < jsondata.length; i++) {
        var row$ = $("<tr/>");
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = jsondata[i][columns[colIndex]];
            if (cellValue == null) cellValue = "";
            row$.append($("<td/>").html(cellValue));
        }
        
        $(tableid).append(row$);
    }
    // Append the "..." to the First Column of the HTML Table
    //$(".table tr td:nth-child(2)").append(
    //    "       . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . "
    //);
    $(tableid).show();
}

// Get all Column Names from JSON and Bind the HTML Table Header
function BindTableHeader(jsondata, tableid) {
    var columnSet = [];
    var headerTr$ = $("<tr/>");
    for (var i = 0; i < jsondata.length; i++) {
        var rowHash = jsondata[i];
        for (var key in rowHash) {
            if (rowHash.hasOwnProperty(key)) {
                // Add each unique column names to a variable array*/
                if ($.inArray(key, columnSet) === -1) {
                    columnSet.push(key);
                    headerTr$.append($("<th/>").html(key));
                }
            }
        }
    }
    $("#table-1 tr, #table-2 tr").remove();
    $(tableid).append(headerTr$);
    return columnSet;
}

function goInFullScreen(element) {
    //enter full screen mode
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
    //hide cursor, too
    document.body.style.cursor = "none";
}

/* Open editor modal */
(function () {
    $("#modal-open").click(function () {
        $("#tblData").show();
        $("#frmDetail").hide();
        $("textbox").empty();
        $("#modal-overlay")
            .fadeIn(200)
            .css("display", "flex");

        $("#divTable").show();
        Binder();




    });
    $("#modal-overlay-hide").click(function () {
        $("#modal-overlay").fadeOut(200);
    });

    $("#btnSubmit").click(function () {

         UpdateDirectory($("#lblID").val());
       
    });
    $("#btnCancel").click(function () {
        $("#tblData").show();
        $("#frmDetail").hide();
        $("#btnAdd").show();
   

    });
    $("#btnAdd").click(function () {
        $("#tblData").hide();
        $("#frmDetail").show();
        $("#txtCompany").val('');
        $("#txtLevel").val("");
        $("#lblID").text('');
        $("#txtSuite").val('');
        $("#btnAdd").hide();
        $("#btnAddSubmit").show();
        $("#btnSubmit").hide();
    });
    $("#btnAddSubmit").click(function () {

        AddDirectory();
        $("#btnAdd").show();
        $("#btnSubmit").show();
    });

    function Binder() {
        $(".btn-Edit").click(function () {

            $("#btnAdd").hide();
            $("#btnAddSubmit").hide();
            var id = $(this).parent().parent().find("td:eq(0)").html();
            GetDaTaById(id);
           
        });
        $(".btn-Delete").click(function () {
            if (confirm("Are you sure?")) {
                // your deletion code
                var id = $(this).parent().parent().find("td:eq(0)").html();
                DeleteDirectory(id);

            }
           
            

           
        });
    }

    var timedelay = 1;

  
    function delayCheck() {
        if (timedelay == 5) {
            $("#modal-open").fadeOut();
            timedelay = 1;
        }
        timedelay = timedelay + 1;
    }

    /* Show editor button */
    $(document).mousemove(function () {
        $("#modal-open").fadeIn();
        timedelay = 1;
        clearInterval(_delay);
        _delay = setInterval(delayCheck, 200);
    });
    // page loads starts delay timer
    _delay = setInterval(delayCheck, 200);
})();

// Starting
$(document).ready(function () {
     //Detect Chrome Browser to Hide the Warning Message & Activate the Drag & Drop
    if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())
        && !/edge/.test(navigator.userAgent.toLowerCase())) {
    
        // Go Into FullScreen Mode
        //goInFullScreen(document.body);
    } else {
        $(".dropbox-container").show();
    }
    $(".dropbox-container").hide();

 
    GetAllData();
     
    $("#fixedtable tr").fadeIn(1500);


});
