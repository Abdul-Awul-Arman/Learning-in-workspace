const result = document.getElementById('result');

let approval='Not approved';



let getApproval=(callBack)=>{
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

            resolve('Approved');
            
        }, 500);
    });
};

async function setApprovalText() {

    const approvalPromise=getApproval();
    result.textContent = await approvalPromise;

    
}

setApprovalText()
