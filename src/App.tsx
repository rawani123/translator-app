import { useState } from "react";
import { ArrowLeftRight, Loader2 } from 'lucide-react';

const languages = [
  { code: "sq-AL", name: "Albanian" },
  { code: "am-ET", name: "Amharic" },
  { code: "ar-SA", name: "Arabic" },
  { code: "bjs-BB", name: "Bajan" },
  { code: "eu-ES", name: "Basque" },
  { code: "be-BY", name: "Belarusian" },
  { code: "bem-ZM", name: "Bemba" },
  { code: "bn-IN", name: "Bengali" },
  { code: "bi-VU", name: "Bislama" },
  { code: "bs-BA", name: "Bosnian" },
  { code: "br-FR", name: "Breton" },
  { code: "my-MM", name: "Burmese" },
  { code: "ca-ES", name: "Catalan" },
  { code: "cop-EG", name: "Coptic" },
  { code: "hr-HR", name: "Croatian" },
  { code: "cs-CZ", name: "Czech" },
  { code: "da-DK", name: "Danish" },
  { code: "nl-NL", name: "Dutch" },
  { code: "dz-BT", name: "Dzongkha" },
  { code: "en-GB", name: "English" },
  { code: "et-EE", name: "Estonian" },
  { code: "fn-FNG", name: "Fanagalo" },
  { code: "fo-FO", name: "Faroese" },
  { code: "fi-FI", name: "Finnish" },
  { code: "fr-FR", name: "French" },
  { code: "gl-ES", name: "Galician" },
  { code: "de-DE", name: "German" },
  { code: "el-GR", name: "Greek" },
  { code: "gu-IN", name: "Gujarati" },
  { code: "ha-NE", name: "Hausa" },
  { code: "he-IL", name: "Hebrew" },
  { code: "hi-IN", name: "Hindi" },
  { code: "hu-HU", name: "Hungarian" },
  { code: "is-IS", name: "Icelandic" },
  { code: "id-ID", name: "Indonesian" },
  { code: "it-IT", name: "Italian" },
  { code: "ja-JP", name: "Japanese" },
  { code: "kn-IN", name: "Kannada" },
  { code: "kk-KZ", name: "Kazakh" },
  { code: "km-KM", name: "Khmer" },
  { code: "rn-BI", name: "Kirundi" },
  { code: "ko-KR", name: "Korean" },
  { code: "ku-TR", name: "Kurdish" },
  { code: "ky-KG", name: "Kyrgyz" },
  { code: "lo-LA", name: "Lao" },
  { code: "la-VA", name: "Latin" },
  { code: "lv-LV", name: "Latvian" },
  { code: "mg-MG", name: "Malagasy" },
  { code: "ms-MY", name: "Malay" },
  { code: "dv-MV", name: "Maldivian" },
  { code: "mi-NZ", name: "Maori" },
  { code: "men-SL", name: "Mende" },
  { code: "mt-MT", name: "Maltese" },
  { code: "ne-NP", name: "Nepali" },
  { code: "niu-NU", name: "Niuean" },
  { code: "no-NO", name: "Norwegian" },
  { code: "ny-MW", name: "Nyanja" },
  { code: "ur-PK", name: "Pakistani" },
  { code: "pau-PW", name: "Palauan" },
  { code: "pa-IN", name: "Panjabi" },
  { code: "fa-IR", name: "Persian" },
  { code: "pis-SB", name: "Pijin" },
  { code: "pl-PL", name: "Polish" },
  { code: "pt-PT", name: "Portuguese" },
  { code: "ro-RO", name: "Romanian" },
  { code: "ru-RU", name: "Russian" },
  { code: "sm-WS", name: "Samoan" },
  { code: "sg-CF", name: "Sango" },
  { code: "sr-RS", name: "Serbian" },
  { code: "sn-ZW", name: "Shona" },
  { code: "si-LK", name: "Sinhala" },
  { code: "sk-SK", name: "Slovak" },
  { code: "so-SO", name: "Somali" },
  { code: "es-ES", name: "Spanish" },
  { code: "sw-SZ", name: "Swahili" },
  { code: "sv-SE", name: "Swedish" },
  { code: "tl-PH", name: "Tagalog" },
  { code: "tg-TJ", name: "Tajik" },
  { code: "ta-LK", name: "Tamil" },
  { code: "te-IN", name: "Telugu" },
  { code: "tet-TL", name: "Tetum" },
  { code: "th-TH", name: "Thai" },
  { code: "bo-CN", name: "Tibetan" },
  { code: "ti-TI", name: "Tigrinya" },
  { code: "to-TO", name: "Tongan" },
  { code: "tn-BW", name: "Tswana" },
  { code: "tr-TR", name: "Turkish" },
  { code: "tk-TM", name: "Turkmen" },
  { code: "uk-UA", name: "Ukrainian" },
  { code: "uz-UZ", name: "Uzbek" },
  { code: "vi-VN", name: "Vietnamese" },
  { code: "cy-GB", name: "Welsh" },
  { code: "wo-SN", name: "Wolof" },
  { code: "xh-ZA", name: "Xhosa" },
  { code: "yi-YD", name: "Yiddish" },
  { code: "zu-ZA", name: "Zulu" }
].sort((a, b) => a.name.localeCompare(b.name));

function App() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [selectedLanguageFrom, setSelectedLanguageFrom] = useState("en-GB");
  const [selectedLanguageTo, setSelectedLanguageTo] = useState("hi-IN");
  const [isLoading, setIsLoading] = useState(false);

  const getLanguageCode = (fullCode: string) => {
    // Extract the language part before the hyphen for the API
    return fullCode.split('-')[0];
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    try {
      const fromLang = getLanguageCode(selectedLanguageFrom);
      const toLang = getLanguageCode(selectedLanguageTo);

      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          inputText
        )}&langpair=${fromLang}|${toLang}&de=example@email.com`
      );
      const data = await response.json();
      
      if (data.responseStatus === 200 && data.responseData?.translatedText) {
        setTranslatedText(data.responseData.translatedText);
      } else {
        console.error("Translation API Error:", data);
        if (data.responseStatus === 403) {
          setTranslatedText("Daily translation limit exceeded. Please try again later.");
        } else if (data.responseDetails?.includes("NO QUERY SPECIFIED")) {
          setTranslatedText("Please enter text to translate.");
        } else if (data.responseDetails?.includes("INVALID LANGUAGE PAIR")) {
          setTranslatedText(`This language pair (${fromLang} to ${toLang}) is not supported. Please try a different combination.`);
        } else {
          setTranslatedText(`Translation error: ${data.responseDetails || "Unknown error occurred"}`);
        }
      }
    } catch (error) {
      console.error("Error translating text:", error);
      setTranslatedText("Network error occurred. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwapLanguages = () => {
    setSelectedLanguageFrom(selectedLanguageTo);
    setSelectedLanguageTo(selectedLanguageFrom);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
      <main className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
        <div className="p-6 sm:p-10">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Text Translator
          </h1>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <select
                value={selectedLanguageFrom}
                onChange={(e) => setSelectedLanguageFrom(e.target.value)}
                className="w-full sm:w-auto flex-1 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>

              <button
                onClick={handleSwapLanguages}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                aria-label="Swap languages"
              >
                <ArrowLeftRight className="h-4 w-4" />
              </button>

              <select
                value={selectedLanguageTo}
                onChange={(e) => setSelectedLanguageTo(e.target.value)}
                className="w-full sm:w-auto flex-1 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="input-text" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Input Text
                </label>
                <textarea
                  id="input-text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter text to translate"
                  className="w-full h-40 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-white resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="translated-text" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Translated Text
                </label>
                <div id="translated-text" className="h-40 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white overflow-auto">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                    </div>
                  ) : (
                    translatedText || "Translation will appear here"
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={handleTranslate}
              disabled={isLoading || !inputText.trim()}
              className="w-full sm:w-auto px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Translating
                </>
              ) : (
                "Translate"
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
