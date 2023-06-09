const ListStudents =
    [
        {
            "id": 1,
            "name": "Nguyễn Văn An",
            "age": 25,
            "gender": "male"
        },
        {
            "id": 2,
            "name": "Trần Thị Bình",
            "age": 30,
            "gender": "female"
        },
        {
            "id": 3,
            "name": "Lê Hoàng Cước",
            "age": 40,
            "gender": "male"
        },
        {
            "id": 4,
            "name": "Phạm Thị Dịu",
            "age": 22,
            "gender": "female"
        },
        {
            "id": 5,
            "name": "Võ Thành An",
            "age": 28,
            "gender": "male"
        },
        {
            "id": 6,
            "name": "Đỗ Thị Diệu",
            "age": 35,
            "gender": "female"
        },
        {
            "id": 7,
            "name": "Nguyễn Văn Thành",
            "age": 50,
            "gender": "male"
        },
        {
            "id": 8,
            "name": "Hoàng Thị Hải",
            "age": 27,
            "gender": "female"
        },
        {
            "id": 9,
            "name": "Nguyễn Thành Nam",
            "age": 33,
            "gender": "male"
        },
        {
            "id": 10,
            "name": "Nguyễn Văn Kiên",
            "age": 26,
            "gender": "male"
        },
        {
            "id": 11,
            "name": "Nguyễn Ngọc Bách",
            "age": 17,
            "gender": "male"
        },
        {
            "id": 12,
            "name": "Nguyễn Thu Hiền",
            "age": 19,
            "gender": "female"
        }
    ]



function loadData(list) {
    let tbody = document.querySelector("#studentList");
    tbody.innerHTML = '';
    for (student of list) {

        const newRow = document.createElement("tr");
        const id = document.createElement("td");
        const name = document.createElement("td");
        const age = document.createElement("td");
        const gender = document.createElement("td");
        id.innerText = student.id;
        name.innerText = student.name;
        age.innerText = student.age;
        gender.innerText = student.gender;
        newRow.appendChild(id);
        newRow.appendChild(name);
        newRow.appendChild(age);
        newRow.appendChild(gender);

        newRow.addEventListener("click", function () {
            console.log(newRow)
            editStudent(id.innerText, name.innerText, age.innerText, gender.innerText);
        });

        tbody.appendChild(newRow);
    }
}

function addStudent() {
    const idInput = document.querySelector("#id");
    const nameInput = document.querySelector("#name");
    const ageInput = document.querySelector("#age");
    const genderInput = document.querySelector('input[name="gender"]:checked');

    // Create a new student object
    const newStudent = {
        id: idInput.value,
        name: nameInput.value,
        age: ageInput.value,
        gender: genderInput.value
    };

    // Add the new student to the list
    ListStudents.push(newStudent);

    // Clear the input fields
    idInput.value = "";
    nameInput.value = "";
    ageInput.value = "";
    genderInput.checked = false;

    // Refresh the table with updated data
    loadData(ListStudents);
}

function updateStudent() {
    const idInput = document.querySelector("#id");
    console.log(idInput.value)
    const nameInput = document.querySelector("#name");
    const ageInput = document.querySelector("#age");
    const genderInput = document.querySelector('input[name="gender"]:checked');

    // Find the index of the student to be updated in the ListStudents array
    const index = idInput.value - 1;
    // Update the student's information
    ListStudents[index].name = nameInput.value;
    ListStudents[index].age = ageInput.value;
    ListStudents[index].gender = genderInput.value;

    // Clear the input fields
    idInput.value = "";
    nameInput.value = "";
    ageInput.value = "";
    genderInput.checked = false;

    // Refresh the table with updated data
    loadData(ListStudents);
}

function editStudent(id, name, age, gender) {
    const idInput = document.querySelector("#id");
    const nameInput = document.querySelector("#name");
    const ageInput = document.querySelector("#age");
    const genderInputs = document.querySelectorAll('input[name="gender"]');

    idInput.value = id;
    nameInput.value = name;
    ageInput.value = age;

    for (const genderInput of genderInputs) {
        if (genderInput.value === gender) {
            genderInput.checked = true;
            break;
        }
    }
}

function deleteStudent() {
    const idInput = document.querySelector("#id");
    const nameInput = document.querySelector("#name");
    const ageInput = document.querySelector("#age");
    const genderInput = document.querySelector('input[name="gender"]:checked');

    // Find the index of the student to be remove in the ListStudents array
    const index = idInput.value - 1;

    // remove student from the list
    ListStudents.splice(index, 1);

    // Clear the input fields
    idInput.value = "";
    nameInput.value = "";
    ageInput.value = "";
    genderInput.checked = false;

    // Refresh the table with updated data
    loadData(ListStudents);
}

function sortStudentByName() {
    ListStudents.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    console.log(ListStudents)
    loadData(ListStudents);
}

function findStudentByName() {
    const searchName = document.querySelector('#name').value;
    const matchedName = [];

    for (const student of ListStudents) {
        if (student.name.toLowerCase().includes(searchName.toLowerCase())) {
            matchedName.push(student);
            console.log("Found student:", student);
        }
    }
    loadData(matchedName);
}