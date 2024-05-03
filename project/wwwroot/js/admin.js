<script>
// Replace these with actual data retrieval and update logic
    const members = [
    {username: "user1", email: "user1@example.com", status: "Active" },
    {username: "user2", email: "user2@example.com", status: "Blocked" },
    ];

    const petitions = [
    {title: "Petition 1", description: "This is petition 1", signatures: 100 },
    {title: "Petition 2", description: "This is petition 2", signatures: 50 },
    ];

    function populateMembers() {
    const memberList = document.getElementById("memberList");
    memberList.innerHTML = ""; // Clear existing content
    for (const member of members) {
        const row = document.createElement("tr");
    row.innerHTML = `
    <td>${member.username}</td>
    <td>${member.email}</td>
    <td>${member.status}</td>
    <td>
        <button class="btn btn-sm btn-secondary" onclick="blockMember('${member.username}')">Block</button>
    </td>
    `;
    memberList.appendChild(row);
    }
}

    function populatePetitions() {
    const petitionList = document.getElementById("petitionList");
    petitionList.innerHTML = ""; // Clear existing content
    for (const petition of petitions) {
        const row = document.createElement("tr");
    row.innerHTML = `
    <td>${petition.title}</td>
    <td>${petition.description}</td>
    <td>${petition.signatures}</td>
    <td>
        <button class="btn btn-sm btn-danger" onclick="deletePetition('${petition.title}')">Delete</button>
    </td>
    `;
    petitionList.appendChild(row);
    }
}

    function blockMember(username) {
        // Implement logic to block the member and update status
        console.log(`Blocking member ${username}`);
    // Update member data and table
    populateMembers();
}

    function deletePetition(title) {
        // Implement logic to delete the petition and remove from list
        console.log(`Deleting petition ${title}`);
    // Update petition data and table
    populatePetitions();
}

    populateMembers();
    populatePetitions();
</script>