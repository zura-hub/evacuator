const images = document.querySelectorAll('.slider img');
let current = 0;

setInterval(() => {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }

    current++;

    if (current === images.length) {
        current = 0;
    }

    images[current].classList.add('active');
}, 5000);


// text scripting
const scriptingFc = (callback) => {
    const text = "ჩვენ შეგიძლიათ გვანდო თქვენი ავტომობილი";
    const textArea = document.querySelectorAll('.hederText')[0];
    let i = 0;

    function script() {
        if (i < text.length) {
            textArea.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(intervalId);
            if (typeof callback === 'function') {
                callback();
            }
        }
    }

    const intervalId = setInterval(script, 100);
}






const infoScripting = () => {
    const info = document.querySelector('.info')
    const textInfo = 'ჩვენ გთავაზობთ ავტომობილების გადაზიდვას უსაფრთხოდ, ნებისმერი მიმართულებით. ჩვენი გამოცდილება თქვენი სიმშვიდის გარანტია'
    let i = 0;

    function inScript() {
        if (i < textInfo.length) {
            info.innerHTML += textInfo.charAt(i)
            i++
        } else {
            clearInterval(intervalId)
        }
    }
    const intervalId = setInterval(inScript, 100)
}

scriptingFc(infoScripting);


const btn = document.querySelector('.btn');
const inpt = document.querySelector('.inpt');
const price = document.querySelector('.price')

let clickCount = 0;

btn.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 1) {
    inpt.style.display = 'block';
    btn.textContent = 'დაგვიკავშირდით 599 99 99 99 ';
  } else if (clickCount === 2) {
    location.href = 'tel:+9955999999';
  }
});

window.onload = () => {
    setTimeout(() => {
        btn.style.display = 'block';
    }, 18000);
}


const calc = () => {
    let intervalId;

    inpt.addEventListener('input', () => {
        const result = inpt.value * 1.5;
        price.innerHTML = result + ' ლარი';

        clearInterval(intervalId);
        intervalId = setInterval(() => {
            inpt.value = '';
        }, 3000);
    });
};

calc()