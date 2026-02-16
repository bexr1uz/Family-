let lists = [
    {name: "Bakdurdi Matyoqubov", father: null},
    {name: "Faxriddin Matyoqubov", father: "Bakdurdi Matyoqubov"},
    {name: "Bexruz Bekdurdiyev", father: "Faxriddin Matyoqubov"},
];

function deletePerson(name) {
    lists = lists.filter(p => p.name !== name && p.father !== name);
    renderTree();
}

function renderTree() {
    const container = document.getElementById("tree");
    container.innerHTML = "";
    treeLists(null, container);
}

function treeLists(father, container) {
    lists
        .filter(item => item.father === father)
        .forEach(person => {
            let node = document.createElement("div");
            node.className = "node";

            node.innerHTML = `
                <div class="person">
                    ${person.name}
                    <button class="delBtn" onclick="deletePerson('${person.name}')">x</button>
                </div>
            `;

            container.appendChild(node);
            treeLists(person.name, node);
        });
}

function addElement() {
    let name = document.getElementById("childName").value.trim();
    let father = document.getElementById("parentName").value.trim();

    if (!name) {
        alert("Ismni kiriting!");
        return;
    }

    lists.push({
        name: name,
        father: father || null
    });

    document.getElementById("childName").value = "";
    document.getElementById("parentName").value = "";

    renderTree();
}

function searchPerson() {
    let search = document.getElementById("searchName").value.trim();

    if (!search) {
        alert("Ism kiriting!");
        return;
    }

    const names = lists.map(person => person.name);
    let position = names.indexOf(search);

    if (position !== -1) {
        document.getElementById("result").innerText =
            search + " " + (position + 1) + "-o‘rinda joylashgan";
    } else {
        document.getElementById("result").innerText =
            "Bunday ism topilmadi!";
    }

    document.getElementById("searchName").value = "";
}

renderTree();