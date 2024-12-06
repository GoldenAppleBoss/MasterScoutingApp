const teams = [
    { id: 1, name: 'BEAN 1833' },
    { id: 2, name: 'OTTO 1746' },
    { id: 3, name: 'Walton 2946' },
];

const teamList = document.querySelector('#team-list ul');
teams.forEach(team => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `team.html?id=${team.id}`;
    link.textContent = `${team.name} (Team ${team.id})`;
    listItem.appendChild(link);
    teamList.appendChild(listItem);
});
