let selectors =()=>{
    
    let mySelector = {
        mainSection: '#mainSection',
        categoryDiv: '.categoryDiv',
        categoryValue: '#category',
        numberOfItems: '#numberOfItems',
        biddingAmount: '#biddingAmount',
        comment: '#comment',
        payBtn: '#payBtn',
        bidSummaryItem: '#bidSummaryItem',
        tbody: '#summaryTbody',
        errorSpan: '#errorSpan'
    };

    return{
        mySelector
    };
};

let getDetails=()=>{
    let categoryValue = document.querySelector(selectors().mySelector.categoryValue).value;

    let numberOfItems = document.querySelector(selectors().mySelector.numberOfItems).value;

    let biddingAmount = document.querySelector(selectors().mySelector.biddingAmount).value;

    let comment = document.querySelector(selectors().mySelector.comment).value;

    return{
        categoryValue, numberOfItems, biddingAmount, comment
    }
}

let createTableRow=(trClass)=>{
    let tableRow = document.createElement('tr');
        tableRow.className = trClass;
    
    return tableRow;
}

let createTableData =(tdClass)=>{
    let tableData = document.createElement('td');
        tableData.className = tdClass;
    
    return tableData;
}
let db = [];

let events=(()=>{
        let errorSpan = document.querySelector(selectors().mySelector.errorSpan)
        let count = 0;

        let payBtn = document.querySelector(selectors().mySelector.payBtn);

    payBtn.addEventListener('click', ()=>{
        if((getDetails().numberOfItems === '') || (getDetails().biddingAmount === '') || (getDetails().comment === "")){
            errorSpan.innerText = 'All fields must be filled'
        }
        else{
            count++;
            addItem(getDetails(), count)
            errorSpan.innerText = ''
        }
    })

    let addItem=(item, count)=>{
        item.count = count
        db.push(item)
        let tbody = document.querySelector(selectors().mySelector.tbody);
        
        let tr = createTableRow('trClass');

        let serialNumberTd = createTableData('serialNumberTd')
            serialNumberTd.innerText = count;

        let categoryTd = createTableData('categoryTd')
            categoryTd.innerText = item.categoryValue;

        let numberOfItemTd = createTableData('numberOfItemTd')
            numberOfItemTd.innerText = item.numberOfItems;

        let bidAmountTd = createTableData('bidAmountTd')
            bidAmountTd.innerText = item.biddingAmount;

        let commentTd = createTableData('commentTd')
            commentTd.innerText = item.comment;

        tr.appendChild(serialNumberTd)
        tr.appendChild(categoryTd)
        tr.appendChild(numberOfItemTd)
        tr.appendChild(bidAmountTd)
        tr.appendChild(commentTd)

        tbody.appendChild(tr);

        clearFields();
    }
})()

let clearFields=()=>{
    document.querySelector(selectors().mySelector.numberOfItems).value = '';
    
    document.querySelector(selectors().mySelector.biddingAmount).value = '';

    document.querySelector(selectors().mySelector.comment).value = '';
}
