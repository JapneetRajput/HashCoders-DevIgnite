import React, { useState } from "react";
import { useVoiceToText } from "react-speakup";
import { summarizeLecture } from "../api/service";

const LectureNotes = () => {
  const { startListening, stopListening, transcript } = useVoiceToText({
    continuous: true,
    lang: "en-US",
  });
  const [isListening, setIsListening] = useState(false);

  const toggleListening = async () => {
    if (isListening) {
      setIsListening(false);
      stopListening();
      const response = await summarizeLecture(transcript);
      console.log(response);
    } else {
      setIsListening(true);
      startListening();
    }
  };

  return (
    <div>
      <button onClick={toggleListening}>
        {isListening ? "Stop recording" : "Start recording"}
      </button>
    </div>
  );
};

export default LectureNotes;
