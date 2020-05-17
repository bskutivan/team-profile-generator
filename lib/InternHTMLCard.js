function generateInternCard(intern) {
    return `
    <div class="col-3">
        <div class="card border rounded" style="width: 18rem;">
            <div class="card-body bg-primary text-white pb-5">
                <h3 class="card-title">${intern.name}</h3>
                <h5 class="card-text">Intern</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">id: ${intern.id}</li>
                <li class="list-group-item">email: ${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `
}

module.exports = generateInternCard