function generateManagerCard(manager) {
    return `
    <div class="col-3 m-4">
        <div class="card border rounded" style="width: 18rem;">
            <div class="card-body bg-primary text-white pb-5">
                <h3 class="card-title">${manager.name}</h3>
                <h5 class="card-text">Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">id: ${manager.id}</li>
                <li class="list-group-item"><a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
}

module.exports = generateManagerCard