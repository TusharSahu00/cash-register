// //getting Inputs
// const billAmt =  document.querySelector("#billAmt");
// const cashGiven = document.querSelecetor("#cash-given");
// const checkBtn = document.querySelector("checkBtn");
// const avalaibleNotes =[2000,500,200,100,50,20,10,5,1];
// checkBtn.addEventListener("click", function validateBillandCashAmount()
// {
//     if(billAmt.value>0)
//     {
//         if(cashGiven.value>=billAmt.value)
//         {
// const amountTobeReturned = cashGiven.value - billAmt.value;
// calculateChanges(amountTobeReturned);
//         }

//         else{
//             console.log("given cash need to be greater than bill amount");
//         }
//     }
//     else
//     {
//         console.log("Please enter valid amount");
//     }
// })

// function calculateChanges(amountTobeReturned)
// {

//     for(let i =0; i<avalaibleNotes.length; i++)
//     {
//        const numberOfNotes = Math.trunc( amountTobeReturned/avalaibleNotes[i]) ;
//        amountTobeReturned = amountTobeReturned % avalaibleNotes[i];
//     }

// }

const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check");
const nextButton = document.querySelector("#next");
const message = document.querySelector("#error-message");
const qtyofnotes = document.querySelectorAll(".numberofnotes");
const availaibleNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
checkButton.addEventListener("click", validateBillandCashAmount);
nextButton.addEventListener("click", hideHtml);
function hideHtml() {
  if (billAmount.value > 0) {
    document.getElementsByClassName("hidden")[0].style.display = "block";
  } else {
    ShowMessage("Amount need to be greater than 0");
  }
}

function validateBillandCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      document.getElementsByClassName("hidden")[1].style.display = "block";
      calculteChanges(amountToBeReturned);
    } else {
      ShowMessage("Cash provided need to be equal to the bill amount");
    }
  } else {
    ShowMessage("Amount need to be greater than 0");
  }
}

function calculteChanges(amountToBeReturned) {
  for (let i = 0; i < availaibleNotes.length; i++) {
    const numberOfNotes = Math.trunc(
      Number(amountToBeReturned) / availaibleNotes[i]
    );

    amountToBeReturned = amountToBeReturned % availaibleNotes[i];
    qtyofnotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}
function ShowMessage(errormessage) {
  message.style.display = "block";
  message.innerText = errormessage;
}
