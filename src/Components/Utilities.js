import { createContext } from "react";

const TranslateContext = createContext();

export function translate(cardData, translatedArrayOfCards, targetLanguage, categoryObject, setCategoryObject) {
  const initialLength = translatedArrayOfCards.length;
  //   cardData = JSON.parse(cardData);
  // console.log("cardData", cardData);
  //   const [dataConfig, setDataConfig] = useState(null);
  let dataConfig = null;
  //   const { sourceLanguage, targetLanguage } = useParams();
  const sourceLanguage = "en";

  const apiUrlConfig =
    "https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/getModelsPipeline";

  const requestOptionsConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      userId: "f10847ade123496aaedfe515ddb04a38",
      ulcaApiKey: "33932375e8-602f-410c-80c2-eed579880775",
    },
    body: JSON.stringify({
      pipelineTasks: [
        {
          taskType: "translation",
          config: {
            language: {
              sourceLanguage: sourceLanguage,
              targetLanguage: targetLanguage,
            },
          },
        },
      ],
      pipelineRequestConfig: {
        pipelineId: "64392f96daac500b55c543cd",
      },
    }),
  };

  fetch(apiUrlConfig, requestOptionsConfig)
    .then((response) => response.json())
    .then((data) => {
      dataConfig = data;
      // console.log("dataConfig", dataConfig);
      if (dataConfig) {
        const apiUrlCompute = dataConfig.pipelineInferenceAPIEndPoint
          ? dataConfig.pipelineInferenceAPIEndPoint.callbackUrl
          : null;
        // console.log("apiUrlCompute", apiUrlCompute);

        const inferenceApiKey = dataConfig.pipelineInferenceAPIEndPoint
          ? dataConfig.pipelineInferenceAPIEndPoint.inferenceApiKey
          : null;
        // console.log("inferenceApiKey", inferenceApiKey);

        if (apiUrlCompute !== null && inferenceApiKey !== null) {
          const name = inferenceApiKey.name;
          const value = inferenceApiKey.value;
          // console.log("name", name);
          // console.log("value", value);
          const headers = {
            "Content-Type": "application/json",
            // userId: "f10847ade123496aaedfe515ddb04a38",
            // ulcaApiKey: "33932375e8-602f-410c-80c2-eed579880775",
          };

          headers[name] = value;
          let obj = {...cardData};
          for (var keyTemp in cardData) {
            if (
              keyTemp !== "category" &&
              keyTemp !== "title"
            )
              continue;
            // console.log("keyOutsideFetch", keyTemp);

            (function (keyTemp) {
              const requestOptionsCompute = {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                  pipelineTasks: [
                    {
                      taskType: "translation",
                      config: {
                        language: {
                          sourceLanguage: sourceLanguage,
                          targetLanguage: targetLanguage,
                        },
                        serviceId: "",
                      },
                    },
                  ],
                  inputData: {
                    input: [
                      {
                        source: cardData[keyTemp],
                      },
                    ],
                  },
                }),
              };

              fetch(apiUrlCompute, requestOptionsCompute)
                .then((response) => response.json())
                .then((data) => {
                  // dataConfig = data;
                  // console.log("keyInFetch", keyTemp);
                  obj[keyTemp] =
                    data["pipelineResponse"][0]["output"][0]["target"];

                  // console.log(keyTemp, data);
                  // console.log("object", obj);
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            })(keyTemp);
          }
          let cnt=0;
          var objTasksArray = [];
          for (let key in cardData["Tasks"]) {
            (function(key, cardData){
            // console.log("cardDataTasksOutside", cardData["Tasks"]);
            // console.log("keyOutside", key);
            const SeqNoTemp = cardData["Tasks"][key].SeqNo;
            const ActionTemp = cardData["Tasks"][key].Action;

            const requestOptionsCompute = {
              method: "POST",
              headers: headers,
              body: JSON.stringify({
                pipelineTasks: [
                  {
                    taskType: "translation",
                    config: {
                      language: {
                        sourceLanguage: sourceLanguage,
                        targetLanguage: targetLanguage,
                      },
                      serviceId: "",
                    },
                  },
                ],
                inputData: {
                  input: [
                    {
                      source: cardData["Tasks"][key].Action,
                    },
                  ],
                },
              }),
            };

            fetch(apiUrlCompute, requestOptionsCompute)
              .then((response) => response.json())
              .then((data) => {
                // console.log("cardDataTasksInside",cardData["Tasks"]);
                // console.log("cardTasksLengthInside", cardData["Tasks"].length);
                let translatedObject = {
                  // ...currentObject,
                  SeqNo: SeqNoTemp,
                  Action: data["pipelineResponse"][0]["output"][0]["target"],
                };
                cnt++;
                objTasksArray.push(translatedObject);
                // console.log("translatedObject", translatedObject);
                // console.log("objTasksArray", objTasksArray);
                obj["Tasks"] = objTasksArray;
                // console.log("length", translatedArrayOfCards.length);
                // if(translatedArrayOfCards.length>initialLength) translatedArrayOfCards.pop();
                // console.log("keyInFectch",key);
                // console.log(cardData["Tasks"][key]);
                if(cnt === cardData["Tasks"].length) 
                {
                  translatedArrayOfCards.push(obj);
                  if (!categoryObject[obj.categoryInEnglish]) {
                    categoryObject[obj.categoryInEnglish] = [];
                  }
                  categoryObject[obj.categoryInEnglish].push(JSON.stringify(obj));
                  localStorage.setItem(obj.categoryInEnglish,JSON.stringify(categoryObject[obj.categoryInEnglish]));
                  setCategoryObject(categoryObject);
                }

                console.log("categoryObject", categoryObject);
                // console.log("obj", obj);
                // console.log("translatedArrayOfCards",translatedArrayOfCards);
              })
              .catch((error) => {
                // console.log("ErrorPrintCard", cardData);
                console.error("Error:", error);
              });
            })(key,cardData);
          }

          const output = JSON.stringify(obj);
          // console.log("output", output);
          // return output;
        }
      }

      // console.log("data", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

}
