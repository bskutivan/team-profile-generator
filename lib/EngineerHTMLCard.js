function generateEngineerCard(engineer) {
    return `
    <div class="col-3">
        <div class="card border rounded" style="width: 18rem;">
            <div class="card-body bg-primary text-white pb-5">
                <h3 class="card-title">${engineer.name}</h3>
                <h5 class="card-text">Engineer</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">id: ${engineer.id}</li>
                <li class="list-group-item">email: ${engineer.email}</li>
                <li class="list-group-item" href="https://github.com/${engineer.gitHub}>GitHib: ${engineer.gitHub}</li>
            </ul>
        </div>
    </div>
    `
}

module.exports = generateEngineerCard