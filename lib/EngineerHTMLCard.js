function generateEngineerCard(engineer) {
    return `
    <div class="col-3 m-4">
        <div class="card border rounded" style="width: 18rem;">
            <div class="card-body bg-primary text-white pb-5">
                <h3 class="card-title">${engineer.name}</h3>
                <h5 class="card-text">Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">id: ${engineer.id}</li>
                <li class="list-group-item"><a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHib:<a href="https://github.com/${engineer.gitHub}"> ${engineer.gitHub}</a></li>
            </ul>
        </div>
    </div>
    `
}

module.exports = generateEngineerCard