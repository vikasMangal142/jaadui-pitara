// import React, { useEffect, useState } from "react";
// import jsonData from "../config1.json";
// import { translate } from "./Utilities.js";
// import { useParams } from "react-router-dom";
// const translatedArrayOfCards = [];

// function translateAllCards(targetLanguage, categoryObject, setCategoryObject) {
//   let x = 0;
//   console.log("jsonLength", jsonData.cards.length);

//   //   const promises = jsonData.cards.map(card => fetch("", card.imageUrl))
//   //   Promise.all(promises).then(d => console.log(d))

//   jsonData.cards.forEach(function (card) {
//     x++;
//     console.log(
//       translate(
//         { ...card, categoryInEnglish: card.category },
//         translatedArrayOfCards,
//         targetLanguage,
//         categoryObject,
//         setCategoryObject
//       )
//     );

//   });
// }

// function Callback() {
//   const { sourceLanguage, targetLanguage } = useParams();
//   const [categoryObject, setCategoryObject] = useState({});

//   useEffect(() => {
//     translateAllCards(targetLanguage, categoryObject, setCategoryObject);
//   }, []);
// }

// export default Callback;
