
const amountInput = document.getElementById("amount");
const gstSelect = document.getElementById("gst");
const modeSelect = document.getElementById("mode");
const netDisplay = document.getElementById("net");
const gstAmtDisplay = document.getElementById("gstAmt");
const totalDisplay = document.getElementById("total");

function calculateGST() {
    let amount = parseFloat(amountInput.value) || 0;
    let rate = parseFloat(gstSelect.value);
    let mode = modeSelect.value;

    let gstAmount = 0, netAmount = 0, totalAmount = 0;

    if (mode === "exclusive") {
        gstAmount = (amount * rate) / 100;
        netAmount = amount;
        totalAmount = amount + gstAmount;
    } else {
        gstAmount = (amount * rate) / (100 + rate);
        netAmount = amount - gstAmount;
        totalAmount = amount;
    }

    netDisplay.textContent = "₹" + netAmount.toFixed(2);
    gstAmtDisplay.textContent = "₹" + gstAmount.toFixed(2);
    totalDisplay.textContent = "₹" + totalAmount.toFixed(2);
}

// Auto calculate when inputs change
amountInput.addEventListener("input", calculateGST);
gstSelect.addEventListener("change", calculateGST);
modeSelect.addEventListener("change", calculateGST);