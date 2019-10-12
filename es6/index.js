var tahoe = {
    resorts: ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"],
    print: (delay = 1000) => {
        setTimeout(() => {
            console.log(this.resorts.join(", "))
        }, delay);
    }
};

tahoe.print()