const examples = {
    0: {
        selectGender: 'female', 
        selectCelebrating: "Birthday",
        textCelebrating: 'С Днём Рождения!',
        colorText: '#000000',
        colorCard: '#ffd1dc',
        cardSize: "600x400",
        alignHorizontal: "center",
        fontSize: "50", 
        borderWidth: "10", 
        colorBorder:'#ffffff', 
        alignVertical:"bottom", 
        typeFont: "OldClassic", 
        alignHorizontalPicture: "center", 
        alignVerticalPicture: "middle", 
        scalePicture: '0.9', 
        pict: "flower.png", 
        offsetLeftPicture: '0', 
        offsetRightPicture: '0', 
        offsetTopPicture: '20', 
        offsetBottomPicture: '0', 
        offsetLeftText: '0', 
        offsetRightText: '0', 
        offsetTopText: '0', 
        offsetBottomText: '0'
    },
    1: {
        selectGender: 'male',   
        selectCelebrating: 'February',
        cardSize: '400x200',
        borderWidth: '10',
        colorCard: '#008000',
        colorBorder: '#ff0000',
        textCelebrating: 'Поздравляем\r\nс праздником!',        
        alignHorizontal: 'right',
        alignVertical: 'middle',
        offsetLeftText: '5',
        offsetRightText: '0',
        offsetTopText: '0',
        offsetBottomText: '0',
        fontSize: '30',
        typeFont: 'Pattaya',
        colorText: '#000000',
        pict: 'star.png',
        scalePicture: '0.7',
        alignVerticalPicture: 'middle',
        alignHorizontalPicture: 'left',
        offsetLeftPicture: '0',
        offsetRightPicture: '0',
        offsetTopPicture: '0',
        offsetBottomPicture: '0'
    },
    2: {
        selectGender: 'male',
        selectCelebrating: 'Sun',
        cardSize: '600x400',
        borderWidth: '10',
        colorCard: '#ece74b',
        colorBorder: '#ffffff',
        textCelebrating: 'С Масленицей!',
        alignHorizontal: 'center',
        alignVertical: 'bottom',
        offsetLeftText: '0',
        offsetRightText: '0',
        offsetTopText: '0',
        offsetBottomText: '0',
        fontSize: '70',
        typeFont: 'Pattaya',
        colorText: '#000000',
        pict: 'pancakes.png',
        scalePicture: '0.6',
        alignVerticalPicture: 'top',
        alignHorizontalPicture: 'center',
        offsetLeftPicture: '0',
        offsetRightPicture: '0',
        offsetTopPicture: '0',
        offsetBottomPicture: '15'
    },
    3: {
        selectGender: 'male',
        selectCelebrating: 'Easter',
        cardSize: '200x400',
        borderWidth: '5',
        colorCard: '#71ee68',
        colorBorder: '#ffffff',
        textCelebrating: 'С Пасхой!',
        alignHorizontal: 'center',
        alignVertical: 'bottom',
        offsetLeftText: '0',
        offsetRightText: '0',
        offsetTopText: '0',
        offsetBottomText: '0',
        fontSize: '35',
        typeFont: 'OldClassic',
        colorText: '#000000',
        pict: 'bunny_egg.png',
        scalePicture: '0.6',
        alignVerticalPicture: 'middle',
        alignHorizontalPicture: 'center',
        offsetLeftPicture: '0',
        offsetRightPicture: '0',
        offsetTopPicture: '20',
        offsetBottomPicture: '0'
    },
    4: {
        selectGender: 'male',
        selectCelebrating: 'Knowledge',
        cardSize: '600x400',
        borderWidth: '10',
        colorCard: '#f0b847',
        colorBorder: '#fa0000',
        textCelebrating: 'С Днём Знаний!',
        alignHorizontal: 'center',
        alignVertical: 'bottom',
        offsetLeftText: '0',
        offsetRightText: '0',
        offsetTopText: '0',
        offsetBottomText: '0',
        fontSize: '60',
        typeFont: 'OldClassic',
        colorText: '#000000',
        pict: 'books.png',
        scalePicture: '0.6',
        alignVerticalPicture: 'middle',
        alignHorizontalPicture: 'center',
        offsetLeftPicture: '0',
        offsetRightPicture: '0',
        offsetTopPicture: '50',
        offsetBottomPicture: '0'
    },
    5: {
        selectGender: 'female',
        selectCelebrating: 'Birthday',
        cardSize: '400x600',
        borderWidth: '10',
        colorCard: '#ecb6e6',
        colorBorder: '#ffffff',
        textCelebrating: 'С Днём Рождения!\r\n' +
          'Пусть в жизни будет все, \r\n' +
          'что нужно: здоровье, мир,\r\n' +
          'любовь и дружба.\r\n' +
          'Не отвернется пусть успех,\r\n' +
          'Удача любит больше всех.',
        alignHorizontal: 'center',
        alignVertical: 'top',
        offsetLeftText: '0',
        offsetRightText: '0',
        offsetTopText: '0',
        offsetBottomText: '20',
        fontSize: '35',
        typeFont: 'OldClassic',
        colorText: '#000000',
        pict: 'bear.png',
        scalePicture: '0.5',
        alignVerticalPicture: 'bottom',
        alignHorizontalPicture: 'center',
        offsetLeftPicture: '0',
        offsetRightPicture: '0',
        offsetTopPicture: '0',
        offsetBottomPicture: '0'
    },
    6: {
        selectGender: 'male',
        selectCelebrating: 'Birthday',
        cardSize: '800x500',
        borderWidth: '5',
        colorCard: '#70d273',
        colorBorder: '#000000',
        textCelebrating: 'С Днём Рождения!',
        alignHorizontal: 'center',
        alignVertical: 'bottom',
        offsetLeftText: '0',
        offsetRightText: '0',
        offsetTopText: '0',
        offsetBottomText: '0',
        fontSize: '70',
        typeFont: 'Pattaya',
        colorText: '#000000',
        pict: 'car.png',
        scalePicture: '0.7',
        alignVerticalPicture: 'middle',
        alignHorizontalPicture: 'center',
        offsetLeftPicture: '0',
        offsetRightPicture: '0',
        offsetTopPicture: '50',
        offsetBottomPicture: '0'
    },
    7: {
        selectGender: 'male',
        selectCelebrating: 'Easter',
        cardSize: '600x400',
        borderWidth: '10',
        colorCard: '#eeeaf0',
        colorBorder: '#fcccff',
        textCelebrating: 'С Пасхой!',
        alignHorizontal: 'center',
        alignVertical: 'bottom',
        offsetLeftText: '0',
        offsetRightText: '0',
        offsetTopText: '0',
        offsetBottomText: '0',
        fontSize: '60',
        typeFont: 'OldClassic',
        colorText: '#795036',
        pict: 'easter.png',
        scalePicture: '0.6',
        alignVerticalPicture: 'middle',
        alignHorizontalPicture: 'center',
        offsetLeftPicture: '0',
        offsetRightPicture: '0',
        offsetTopPicture: '30',
        offsetBottomPicture: '0'
    },
    8: {
        selectGender: 'female',
        selectCelebrating: 'NewYear',
        cardSize: '400x600',
        borderWidth: '10',
        colorCard: '#aeffa3',
        colorBorder: '#ffffff',
        textCelebrating: 'От всей души\r\n' +
          'поздравляю\r\n' +
          'с Новым годом!\r\n' +
          'желаю мира, добра, \r\n' +
          'поддержки близких.',
        alignHorizontal: 'left',
        alignVertical: 'bottom',
        offsetLeftText: '0',
        offsetRightText: '5',
        offsetTopText: '0',
        offsetBottomText: '0',
        fontSize: '50',
        typeFont: 'OldClassic',
        colorText: '#000000',
        pict: 'coronet.png',
        scalePicture: '0.5',
        alignVerticalPicture: 'top',
        alignHorizontalPicture: 'center',
        offsetLeftPicture: '0',
        offsetRightPicture: '0',
        offsetTopPicture: '0',
        offsetBottomPicture: '15'
    },
}

const commonCelebrating = {
    "NewYear": "Новый Год",
    "Christmas": "Рождество",
    "Birthday": "День Рождения",
    "Knowledge": "День знаний",
    "Sun": "Масленица",
    "Easter": "Пасха",
}

const womenCelebrating = {
    "March": "8 Марта",
    "MotherDay": "День матери",
};

const menCelebrating = {
    "February": "23 Февраля",
    "FatherDay": "День отца",
};

const cardSizes = ["800x500", "500x800", "600x400", "400x600", "400x200", "200x400"]

const express = require("express");
const hbs = require("hbs");

const app = express();
app.use(express.static('public'));

hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
})
hbs.registerHelper('ifEquals2', function(arg1, arg2) {
    return (arg1 == arg2);
})

app.set("view engine", "hbs");

app.get("/", function(request, response){
 
    response.render("index_text.hbs", {
        commonCelebrating: commonCelebrating, womenCelebrating: womenCelebrating, menCelebrating: menCelebrating, cardSizes: cardSizes, post: examples[Math.floor(Math.random() * Object.keys(examples).length)]
    }
    );
});

const urlencodedParser = express.urlencoded({extended: false});

app.post("/", urlencodedParser, function(request, response){

    console.log(request.body)
    response.render("index_text.hbs", {
        commonCelebrating: commonCelebrating, womenCelebrating: womenCelebrating, menCelebrating: menCelebrating,  cardSizes: cardSizes, post: request.body
    });
});

app.listen(3000);
