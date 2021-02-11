const requestURL = 'https://krapipl.imumk.ru:8443/api/mobilev1/update'

function sendReq(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then( res => {
        return res.json()
    })
}

sendReq( 'POST', requestURL, {"data":""})
    .then(
        d => {
            c(d.items);
            console.log(d)
        }
    )
    .catch( err => console.log(err))

function c(data) {
    data.forEach(({ title, genre, subject, status, price, priceBonus, shopUrl }) => {
        console.log('Title: ' + title, 'Genre: ' + genre, 'Subject: ' + subject, 'Status: ' + status, 'Price: ' + price, 'Bonus: ' + priceBonus)
        createCard(title, genre, subject, status, price, priceBonus, shopUrl);
    });
}



function createCard(title, genre, subject, status, price, priceBonus, shopUrl) {
    let card = document.createElement('li');
    let g = []
    t = title.split('.')
    t.splice(0,1)
    g.push(t)
    data = g.toString().split(',')
    if(data[1] == undefined) {
        data[1] = ''
    }

    card.className = 'courses-card'
    card.innerHTML = `
    <div class="card-img" ><img src="https://www.imumk.ru/svc/coursecover/4307"></div>
    <div class="card-info">
        <p class="card-title">${data[0]}</p>
        <p class="card-grade">${data[1]}</p>
        <p class="card-genre">${genre}</p>
        <a class="card-meta" href="${shopUrl}">Подробнее</a>
        <div class="card-price">${price}р</div>
    </div>
    `
    document.querySelector('.courses-list').appendChild(card);
}
