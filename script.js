const tableKey = 'cms-table';

let clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', () => {
    localStorage.removeItem(tableKey)
});

let cmsTable;
let cmsTableDemo = {
    'Dave Rapoza': {
        'phone': '766-786-7868',
        'address': '1234 Sunshine Ave, Denver, Co, 80125'
    },
    'Wylie Beckert': {
        'phone': '555-123-6789',
        'address': '9876 Artist Way, Seattle, WA, 66541'
    }    
}; 

let refreshDomTable = () => {
    
    let cmsTableKeys = Object.keys(cmsTable);
    let tableContainer = document.getElementById('cmsTableContainer');
    let oldTableBody = document.getElementById('tablebody');
    tableContainer.removeChild(oldTableBody);

    let newTableBody = document.createElement('span');
    newTableBody.id = 'tableBody';
}