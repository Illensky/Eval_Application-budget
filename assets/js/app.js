const expenses = document.querySelectorAll(".spent");
const revenues = document.querySelectorAll(".revenues");
const saving = document.querySelectorAll(".saving");

let totalExpense = 0;
let totalRevenues = 0;
let totalSaving = 0;


document.querySelector("#resultBtn").addEventListener("click", () => {

    for (let expense of expenses) {
        totalExpense += parseFloat(expense.value);
    }

    for (let revenu of revenues) {
        totalRevenues += parseFloat(revenu.value);
    }

    for (let save of saving) {
        totalSaving +=parseFloat(save.value);
    }

    console.log(totalExpense);
    console.log(totalRevenues);
    console.log(totalSaving);

    let result = totalRevenues - (totalExpense + totalSaving);

    const allExpensesPar = document.createElement("p");
    allExpensesPar.innerHTML = "Total : " + totalExpense.toString();
    document.querySelector("#spent").appendChild(allExpensesPar);

    const allRevenuesPar = document.createElement("p");
    allRevenuesPar.innerHTML = "Total : " + totalRevenues.toString();
    document.querySelector("#revenues").appendChild(allRevenuesPar);

    const allSavingPar = document.createElement("p");
    allSavingPar.innerHTML = "Total : " + totalSaving.toString();
    document.querySelector("#saving").appendChild(allSavingPar);

    const remainingBudgetPar = document.createElement("p");
    if (result === 0) {
        remainingBudgetPar.innerHTML = "Votre situation est tout juste viable, il vous reste " + result.toString() + "€ à la fin du mois";
    }
    else if (result > 1000) {
        remainingBudgetPar.innerHTML = "Votre situation est fiable, il vous reste " + result.toString() + "€ à la fin du mois.";
        remainingBudgetPar.style.color = "green";
    }
    else if (result > 0) {
        remainingBudgetPar.innerHTML = "Votre situation est correcte, il vous reste " + result.toString() + "€ à la fin du mois.";
        remainingBudgetPar.style.color = "green";
    }
    else if (result < -1000) {
        remainingBudgetPar.innerHTML = "Votre situation est désastreuse, vous êtes en déficit de " + Math.abs(result).toString() + "€ à la fin du mois.";
        remainingBudgetPar.style.color = "red";
    }
    else {
        remainingBudgetPar.innerHTML = "Votre situation est dangereuse, vous êtes en déficit de " + Math.abs(result).toString() + "€ à la fin du mois.";
        remainingBudgetPar.style.color = "red";
    }
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#result").appendChild(remainingBudgetPar)

    totalExpense = 0;
    totalRevenues = 0;
    totalSaving = 0;
    result = 0;
})