export function translate1(
  cardData,
  targetLanguage,
  setTranslatedCardsDataEncoded
) {
  let dataConfig = null;
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

      if (dataConfig) {
        const apiUrlCompute = dataConfig.pipelineInferenceAPIEndPoint
          ? dataConfig.pipelineInferenceAPIEndPoint.callbackUrl
          : null;

        const inferenceApiKey = dataConfig.pipelineInferenceAPIEndPoint
          ? dataConfig.pipelineInferenceAPIEndPoint.inferenceApiKey
          : null;

        if (apiUrlCompute !== null && inferenceApiKey !== null) {
          const name = inferenceApiKey.name;
          const value = inferenceApiKey.value;

          const headers = {
            "Content-Type": "application/json",
          };

          headers[name] = value;

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
                    source: cardData,
                  },
                ],
              },
            }),
          };

          fetch(apiUrlCompute, requestOptionsCompute)
            .then((response) => response.json())
            .then((data) => {
              console.log("translatedData", data);
              console.log(
                "translatedCard",
                data["pipelineResponse"][0]["output"][0]["target"]
              );

              setTranslatedCardsDataEncoded(
                data["pipelineResponse"][0]["output"][0]["target"]
              );
              console.log(
                "typeOf",
                typeof data["pipelineResponse"][0]["output"][0]["target"]
              );
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
