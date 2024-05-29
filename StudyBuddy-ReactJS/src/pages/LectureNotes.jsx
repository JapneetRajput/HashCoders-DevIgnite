import React, { useState } from "react";
import { useVoiceToText } from "react-speakup";
import { summarizeLecture } from "../api/service";

const LectureNotes = () => {
  const { startListening, stopListening, transcript } = useVoiceToText({
    continuous: true,
    lang: "en-US",
  });
  const [isListening, setIsListening] = useState(false);
  const [summarizedNotes, setSummarizedNotes] = useState();

  const toggleListening = async () => {
    if (isListening) {
      stopListening();
      const response = await summarizeLecture(transcript);
      setSummarizedNotes(response);
      setIsListening(false);
    } else {
      startListening();
      setIsListening(true);
    }
  };

  return (
    <div className="pt-12">
      <button
        className="bg-gray-800 text-white py-4 px-2 rounded-md"
        onClick={toggleListening}
      >
        {isListening ? "Stop recording" : "Start recording"}
      </button>
      {summarizedNotes && <h2>{summarizedNotes}</h2>}
    </div>
  );
};

export default LectureNotes;
