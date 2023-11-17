import React from "react";
import { translate1 } from "./UtilitiesEntireCard";
import jsonData from "../config2.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

let namesOrder = ["category", "title", "Tasks"];
let arrayOfOriginalUnchangedKeys = [];
// let cardsIndex = [];
let parsedOutput = [];

function divider(str, arr, pattern) {
  let i = 0;
  let indexesOfPattern = [];
  while (i !== -1) {
    i = str.indexOf(pattern, i);
    console.log("i", i + 1);
    console.log("i", str[i + 1]);
    if (i === -1) break;
    indexesOfPattern.push(i + 2);
    i += 2;
  }

  console.log("noOfDelimiter", indexesOfPattern.length);
  for (let i = 0; i < indexesOfPattern.length; i++) {
    if (i === indexesOfPattern.length - 1)
      arr.push(str.substr(indexesOfPattern[i] + 1));
    else
      arr.push(
        str.substr(
          indexesOfPattern[i] + 1,
          indexesOfPattern[i + 1] - indexesOfPattern[i] - 3
        )
      );
  }
}
// Alwayas remember to put "Tasks" at the end of JSON card data.

function decode(str) {
  let cards = [];
  divider(str, cards, "(@)");

  cards.forEach((card) => {
    console.log(card);

    let names = [];
    divider(card, names, "($)");
    names.forEach((name) => console.log(name));
    let obj = {};
    for (let i = 0; i < names.length - 1; i++) obj[namesOrder[i]] = names[i];

    let tasks = [];
    obj[namesOrder[names.length - 1]] = [];
    divider(names[names.length - 1], tasks, "(#)");
    tasks.forEach((task) => {
      console.log("task : ", task);
      obj[namesOrder[names.length - 1]].push(task);
    });
    parsedOutput.push(obj);
  });
}

function UsingRegex(props) {
  const { targetLanguage } = props.targetLanguage;
  const [translatedCardsDataEncoded, setTranslatedCardsDataEncoded] =
    useState();

  let str = "";
  jsonData.cards.forEach((card) => {
    str += "(@)";
    let names = Object.keys(card);
    arrayOfOriginalUnchangedKeys.push({
      categoryInEnglish: card.category,
      ageGroup: card.ageGroup,
      imageUrl: card.imageUrl,
    });
    names.forEach((name) => {
      if (name === "ageGroup" || name === "imageUrl") return;
      str += "($)";
      if (name !== "Tasks") {
        str += card[name];
      } else {
        card["Tasks"].forEach((task) => {
          str += "(#)";
          str += task.Action;
          // str+="(#)";
        });
      }
      // str+="($)";
    });
    // str+="(@)";
  });
  console.log("Encoded Cards Data : ", str);

  translate1(str, targetLanguage, setTranslatedCardsDataEncoded);

  useEffect(() => {
    parsedOutput = [];
    if (translatedCardsDataEncoded) decode(translatedCardsDataEncoded);

    const objectToBeSavedInLocalStorage = {};
    for (let i = 0; i < parsedOutput.length; i++) {
      let cardData = parsedOutput[i];
      cardData = { ...cardData, ...arrayOfOriginalUnchangedKeys[i] };
      console.log("cardData : ", cardData);
      if (!objectToBeSavedInLocalStorage[cardData.categoryInEnglish])
        objectToBeSavedInLocalStorage[cardData.categoryInEnglish] = [];
      objectToBeSavedInLocalStorage[cardData.categoryInEnglish].push(cardData);
    }
    let keysOfCategoriesForLocalStorage = Object.keys(
      objectToBeSavedInLocalStorage
    );
    keysOfCategoriesForLocalStorage.forEach((key) => {
      localStorage.setItem(
        key,
        JSON.stringify(objectToBeSavedInLocalStorage[key])
      );
    });
  }, [translatedCardsDataEncoded]);
}

export default UsingRegex;
