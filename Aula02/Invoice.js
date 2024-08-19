const invoices = [1000, 9000, 789, 2500];

invoices.forEach(invoice => {
    if (invoice >= 5000) {
        console.log(`Invoice of R$ ${invoice} and bonus of 10%.`);
    } else if ((invoice >= 1000) && (invoice <= 5000)) {
        console.log(`Invoice of R$ ${invoice} and bonus of 5%.`);
    } else {
        console.log(`Invoice of R$ ${invoice} and no bonus.`);
    }
});