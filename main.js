// json파일을 동적으로 불러옴 fetch
function loadItems() {
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items);  
}

// 받아온 아이템들을 HTML에 업데이트 시킴
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');     
    // 각각에 해당하는 item들을 li의 배열로 변환하는 mapping
    // createHTMLString(item)이라는 함수를 join으로 문자열로 반환
}

// item파일들을 HTML li 구조로 바꿈
function createHTMLString(item) {
    return `
        <li class="item">
            <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
            <span class="item_description">${item.gender}, ${item.size}</span>
        </li>
    `;
}

function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }
    
    displayItems(items.filter(item => item[key] === value));
    // const filtered = items.filter(item => item[key] === value);
    // console.log(filtered);
    //displayItems(filtered);
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener("click", () => displayItems(items));
    buttons.addEventListener("click", event => onButtonClick(event, items));
}


// main
loadItems()                         // item들을 불러와서
    .then(items => {                // promise가 성사가 되면 items라는 함수에
        displayItems(items);        // item들을 보여주는 함수와
        setEventListeners(items);   // click 했을 때의 이벤트를 적용시킨다
    })
    .catch(console.log);