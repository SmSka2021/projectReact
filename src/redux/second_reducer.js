
 import uniqid from "uniqid";

export let initialState =  {
  first: [
    { idd: uniqid(), src:"1.jpg", name: "Фаршированный картофель с мясом и грибами", recepie: "Три больших картофеля в кожуре отправляем в духовку и запекаем до готовности при температуре 180 градусов. Шампиньоны нарезаем пластинами, обжариваем до золотистости. Солим и перчим по вкусу. Куриное филе нарезаем на крупные кубики. Лук мелко нарезаем. Обжариваем куриное филе до полуготовности и добавляем лук.Также любимые специи по вкусу и обжариваем до золотистости.Готовый картофель достаем из духовки и срезаем часть кожуры. Мякоть картофеля перекладываем в емкость.Добавляем сливочное масло и молоко.Соль, перец и паприку по вкусу. Хорошо перемешиваем и перекладываем в кондитерский мешок. В лодочки из картофеля выкладываем мясо, затем грибы. По желанию поливаем сливками. Посыпаем тертым сыром. Сверху выкладываем картофельное пюре.Отправляем в духовку и запекаем до золотистой корочки."},
    { idd: uniqid(), src:"2.jpg", name: "Праздничная свинина 'гармошка'", recepie: "Сначала делаем маринад, для этого:соевый соус,лимонный сок,горчицу и раст.масло налить в чашку и хорошо размешать. Кусок мяса промыть,сделать надрезы,посыпать смесью перцев,мелко нарезанным чесноком и нарезанным хлопьями имбирём, залить приготовленным маринадом. Поставить в холодильник (на ночь), утром достать маринованное мясо,в надрезы положить нарезанные кружочками помидоры и ломтики сыр,завернуть в фольгу и в разогретую до 200С духовку на 1 час, за это время почистить картошку,отварить. Выложить варёную картошку на противень с мясом,запекать ещё 15 минут."},
    { idd: uniqid(), src:"3.jpg", name: "Кавказское картофельное туршу с рубленым мясом", recepie: "Мясо нарубаем мелко, лук шинкуем или пропускаем и то и другое через мясорубку. Нашинкованную зелень отправляем в фарш, добавляем специи и соль по вкусу. В стакане теплой кипяченой воды растворяем лимонную кислоту и выливаем в фарш. Тщательно размешиваем. Начинка готова. Картофель очищаем от кожуры, надрезаем с каждой стороны. Отправляем в подсоленную воду. Один из срезов будет служить крышечкой. Вынимаем ножом и чайной ложкой сердцевину. Начиняем полость картофеля плотно фаршем и закрываем крышкой. Отправляем в духовку, разогретую до 180 градусов, предварительно налив в противень около стакана воды и пару столовых ложек растительного масла. По готовности вынимаем противень, посыпаем картофель пропущенным через терку сыром и ставим в выключенную духовку на пару минут, чтобы сыр расплавился."},
    { idd: uniqid(), src:"4.jpg", name: "Дапанджи", recepie: "Курицу порезать на довольно крупные куски. Затем посыпать крахмалом и полить соевым соусом. Если хотите чтобы, курица была острая, то крахмал лучше не добавлять. Оставить мариноваться, а тем временем подготовим овощи. Сладкий перец порезать на продолговатые кусочки. Картофель на крупные примерно 2,5*2,5 см.  Чеснок и горький перец мелко. Разогреть масло в глубокой сковороде. Обжарить курицу примерно минут 7. Затем добавить картофель, морковь, лук, перец сладкий и половину горького перца и чеснока. А также звездочки бадьяна. Готовить на медленном огне 20 минут, до готовности овощей, если бульон выкипит добавить немного воды. За пять минут до готовности добавить оставшийся перец и чеснок и специи."},
    { idd: uniqid(), src:"5.jpg", name: "Жаркое из говядины с овощами", recepie: "Нарезать все овощи средними кусочками, примерно одинаковой величины. Говядину нарежьте средними кусочками примерно 3-4 сантиметра каждый. Добавить кусочки говядины в большую миску, посыпать мукой, солью и перцем, и хорошо перемешать. Разогреть масло в сотейнике, как только масло станет горячим, обжарить говядину порциями по 1-2 минуты с каждой стороны. Выньте говядину из сотейника, накройте фольгой и отложите в сторону. Добавьте нарезанный лук и чеснок в сотейник, жарьте 1 минуту. Добавьте чашку говяжьего бульона, и с помощью деревянной ложки тщательно очистите дно сотейника, чтобы удалить прилипшие к ней мелкие кусочки муки и мяса. Верните говядину в сотейник, добавьте томатную пасту, протертые помидоры, нарезанную морковь, грибы, сельдерей и картофель. Добавьте красное сухое вино, сушеный розмарин, красный перец, хорошо перемешайте. "},
  ],
 
  newMessageBody1: '',
  newMessageBody2: '',
}

export const secondReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIRST-ADD-POST": {
      let mess = { idd: uniqid(), name: state.newMessageBody1, recepie: state.newMessageBody2, src: "6.jpg"};
      let stateCopy = {...state};
      stateCopy.first=[...state.first];
      stateCopy.first.push(mess);
      stateCopy.newMessageBody2 = '';
      stateCopy.newMessageBody1 = '';
      return stateCopy;
    }
    case "FIRST-UPDATE-NEW-POST-CHANGE":{
      let stateCopy = {...state};     
      stateCopy.newMessageBody2 = action.recepie;
      return stateCopy;
    }
      case "FIRST-UPDATE-INPUT-CHANGE":{
      let stateCopy = {...state};
      stateCopy.newMessageBody1 = action.name;     
      return stateCopy;
      }
      case "FIRST-REMOVE":{
        let stateCopy = {...state};
        stateCopy.first=[...state.first];
     let newArrFirst = stateCopy.first.filter(item => item.idd !== action.idd);  
     stateCopy.first = newArrFirst
        return stateCopy;
      } 
    default:
      return state;
  }
};

export const addFirstctionCreator =() =>({type: "FIRST-ADD-POST"});

export const updateFirstInputActionCreator= (title)=> (
  {type: "FIRST-UPDATE-INPUT-CHANGE", name: title})

export const updateFirstActionCreator= (text)=> (
  {type: "FIRST-UPDATE-NEW-POST-CHANGE", recepie: text})

  export const removeFirstActionCreator= (idd)=> (
    {type: "FIRST-REMOVE", idd: idd})
 