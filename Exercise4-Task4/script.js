var selectedRow = null;

function onFormSubmit(){
    let data = readData();

    if(selectedRow == null){
        insertData(data);
    }
    else{
        updateData(data);
    }
    
    resetForm();

}


function readData(){
    let data = {};

    data["firstname"] = document.getElementById("firstname").value;

    data["lastname"] = document.getElementById("lastname").value;

    return data;
}


function insertData(data){

    let f = document.getElementById("firstname").value;
    let l = document.getElementById("lastname").value;

    if(f == "" || l == ""){
        alert("both are empty");
    }

    else{

        let table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
        let newrow = table.insertRow(table.length);

        cell1 = newrow.insertCell(0);
        cell1.innerHTML = data.firstname;

        cell2 = newrow.insertCell(1);
        cell2.innerHTML = data.lastname;

        cell3 = newrow.insertCell(2);
        cell3.innerHTML = `<input type="button" value="Edit" onclick="onEdit(this)"/>
                        <input type="button" value="Delete" onclick="onDelete(this)"/>`;

        cell4 = newrow.insertCell(3);
        cell4.innerHTML = `<input type="checkbox" id="checkboxId" />`;                 

    }

    
}

const source = document.getElementsByName("chk_all");

function checkAll(source){
    console.log(source);
    checkboxes = document.querySelectorAll('#checkboxId');
    console.log(checkboxes.length);
    
    for(let i=0, n=checkboxes.length;i<n;i++) {
    
        checkboxes[i].checked = true;
        //let row = checkboxes[i].parentElement.parentElement;
        //console.log(row);

    }
    return checkboxes;
    
}

function deleteAll(){
    const checkboxarr = checkAll(source);
    console.log(checkboxarr);

    for(let i=0;i<checkboxarr.length;i++){

        if(checkboxarr[i].checked == true){
            onDelete(checkboxarr[i]);
        }
        
    }
}



function resetForm(){
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    selectedRow = null;

}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
}

function updateData(data){
    selectedRow.cells[0].innerHTML = data.firstname;
    selectedRow.cells[1].innerHTML = data.lastname;
}

function onDelete(td){
    let row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
}

