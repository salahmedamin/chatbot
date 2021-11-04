const { default: got } = require("got/dist/source");
const langs = ["en","fr","ar"]
const data = ({input,from,to})=>({
  format: "text",
  from: from === "en" ? "eng": from === "fr" ? "fra" : "ara",
  to: to === "en" ? "eng": to === "fr" ? "fra" : "ara",
  input,
  options: {
    sentenceSplitter: true,
    origin: "translation.web",
    contextResults: true,
    languageDetection: true,
  },
})

module.exports = async ({input,from,to})=>{
    if(!langs.includes(from) || !langs.includes(to)) return;
    const d = (await got.post(
        "https://api.reverso.net/translate/v1/translation",
        {
            json: data({input,from,to}),
            headers:{
                "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36 Edg/94.0.992.38",
            },
        }
    )).body
    return JSON.parse(d).translation[0]
}