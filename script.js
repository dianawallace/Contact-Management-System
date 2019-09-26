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

    for (let i = 0; i < cmsTableKeys.length; i++) {
        let currentRow = document.createElement('div');
        let currentNameCol = document.createElement('div');
        let currentPhoneCol = document.createElement('div');
        let currentAddressCol = document.createElement('div');
        let currentEditBtn = document.createElement('div');
        let currentDeleteBtn = document.createElement('div');

        currentRow.className = 'cms-table-row';
        currentNameCol.className = 'cms-table-column cms-name';
        currentPhoneCol.className = 'cms-table-column cms-phone';
        currentAddressCol.className = 'cms-table-column cms-phone';
        currentEditBtn.className = 'cms-table-column cms-edit';
        currentDeleteBtn.className = 'cms-table-column cms-delete';

        currentNameCol.innerHTML = cmsTableKeys[i];
        currentPhoneCol.innerHTML = cmsTable[cmsTableKeys[i]].phone;
        currentAddressCol.innerHTML = cmsTable[cmsTableKeys[i]].address;

        currentEditBtn.innerHTML = '<i class="fas fa-edit"></i>';
        currentDeleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

        currentRow.appendChild(currentNameCol);
        currentRow.appendChild(currentPhoneCol);
        currentRow.appendChild(currentAddressCol);
        currentRow.appendChild(currentEditCol);
        currentRow.appendChild(currentDeleteCol);
        newTableBody.appendChild(currentRow);

    }

    let enableDisableNewUserModal = (option => {
        let newPersonName = document.getElementById('newPersonName');
        let newPersonPhone = document.getElementById('newPersonPhone');
        let newPersonAddress = document.getElementById('newPersonAddress');
        newPersonName.value = '';
        newPersonPhone.value = '';
        newPersonAddress.value = '';

        let newPersonModal = document.getElementById('newPersonModal');
        let backdrop = document.getElementById('backdrop');


    })

}