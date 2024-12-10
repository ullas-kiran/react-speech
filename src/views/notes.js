import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import selectSvg from '../asset/select.svg'

const languageOptions = [
  { label: "Cambodian", value: "km-KH" },
  { label: "Deutsch", value: "de-DE" },
  { label: "English", value: "en-AU" },
  { label: "Farsi", value: "fa-IR" },
  { label: "Français", value: "fr-FR" },
  { label: "Italiano", value: "it-IT" },
  { label: "普通话 (中国大陆) - Mandarin", value: "zh" },
  { label: "Portuguese", value: "pt-BR" },
  { label: "Español", value: "es-MX" },
  { label: "Svenska - Swedish", value: "sv-SE" },
];

const Example = () => {
  const [lang, setLang] = useState("en-AU");
  const [value, setValue] = useState("");
  const [blocked, setBlocked] = useState(false);

  const onEnd = () => {
    // You could do something here after listening has finished
  };

  const onResult = (result) => {
    setValue(result);
  };

  const changeLang = (event) => {
    setLang(event.target.value);
    console.log(event.target.value);
  };

  const onError = (event) => {
    if (event.error === "not-allowed") {
      setBlocked(true);
    }
  };

  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult,
    onEnd,
    onError,
  });

  const toggle = listening
    ? stop
    : () => {
        setBlocked(false);
        listen({ lang });
      };

  return (
    <div className="h-screen flex items-center justify-center">
      <form id="speech-recognition-form">
        <h2 className="text-center">Speech Recognition</h2>
        {!supported && (
          <p>
            Oh no, it looks like your browser doesn&#39;t support Speech
            Recognition.
          </p>
        )}
        {supported && (
          <React.Fragment>
            <p>
              {`Click 'Listen' and start speaking.
               SpeechRecognition will provide a transcript of what you are saying.`}
            </p>
            <div className="grid grid-cols-1 grid-rows-1 gap-4 mt-4">
              <div>
                <label htmlFor="language">Language</label>
                <div class="w-full  ">
                  <div className="relative">
                    <select     
                    form="speech-recognition-form"
                  id="language"
                  value={lang}
                  onChange={changeLang} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                      {languageOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  <img  className="w-[19px] inline-block absolute right-1.5 top-[9px]" loading="lazy" src={selectSvg} alt="select" />
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full">
                  <div className="relative w-full ">
                    <textarea
                      className="peer  h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                      id="transcript"
                      name="transcript"
                      placeholder=""
                      value={value}
                      rows={3}
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Message
                    </label>
                  </div>
                </div>
                <button
                  disabled={blocked}
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  type="button"
                  onClick={toggle}
                >
                  {listening ? "Stop" : "Listen"}
                </button>
                {blocked && (
                  <p style={{ color: "red" }}>
                    The microphone is blocked for this site in your browser.
                  </p>
                )}
              </div>
            </div>
          </React.Fragment>
        )}
      </form>
    </div>
  );
};

export default Example;
