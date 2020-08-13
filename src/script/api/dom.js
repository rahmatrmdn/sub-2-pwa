export function showStanding(data) {
    let standings = "";
    let standingElement = document.getElementById("homeStandings");

    data.standings[0].table.forEach(function (standing) {
        standings += `
                <tr>
                    <td><img src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge"/></td>
                    <td>${standing.team.name}</td>
                    <td>${standing.won}</td>
                    <td>${standing.draw}</td>
                    <td>${standing.lost}</td>
                    <td>${standing.points}</td>
                    <td>${standing.goalsFor}</td>
                    <td>${standing.goalsAgainst}</td>
                    <td>${standing.goalDifference}</td>
                </tr>
        `;
    });

    standingElement.innerHTML = `
                <div class="card" style="padding-left: 24px; padding-right: 24px; margin-top: 30px;">

                <table class="striped responsive-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Team Name</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>P</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                        </tr>
                     </thead>
                    <tbody id="standings">
                        ${standings}
                    </tbody>
                </table>
                
                </div>
    `;
}

export function showTeams(data) {

    let teams = "";
    let teamElement = document.getElementById("teams");

    data.teams.forEach(function (team) {
        teams += `
             <div class="col s12 m4">
                <div class="card">
                    <div class="card-image">
                        <img class="center-block" src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}" alt="Team Badge" 
                                style="width: 300px; height: 300px"> 
                        <span class="card-title grey lighten-2 black-text" style="opacity:0.95">${team.name}</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light grey"><i
                                class="material-icons">favorite</i></a>
                    </div>
                    <div class="card-content">
                        <p>Located in ${team.address}, ${team.shortName} was founded on ${team.founded}. The avenue name is ${team.venue}</p>
                    </div>
                    <div class="card-action">
                        <a href="${team.website}" target="_blank">Website</a>
                    </div>
                </div>
            </div>
        `;
    });

    teamElement.innerHTML = teams;
}


