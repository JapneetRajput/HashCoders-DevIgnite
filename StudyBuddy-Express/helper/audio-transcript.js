import { AssemblyAI } from "assemblyai";

const client = new AssemblyAI({
  apiKey: "3b1ff495a280462796dce40e62ad2bed",
});

const audioUrl =
  "https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3";

const config = {
  audio_url: audioUrl,
};

const transcript = await client.transcripts.create(config);
console.log(transcript.text);
