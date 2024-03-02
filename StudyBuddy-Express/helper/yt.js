import { GoogleGenerativeAI } from "@google/generative-ai";
import { google } from 'googleapis';
import { YoutubeTranscript } from 'youtube-transcript';

const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyCpMc0gKZnTC8WNIbYmTlkOos4XXkWbOqE'
});

const genAI = new GoogleGenerativeAI("AIzaSyCfZPQdAD-4t3SH0q2ur-9agqnlSoOPijs");

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const chat = model.startChat({history:[]});

const msg = "I am creating a youtube summarizer specifically for summazrizing videos realted to CBSE 12th PCM syllabus. I will give you transcripts of the youtube videos in the following prompts and i want you to generate a good summary for them that covers the entire content of the video (300-600 words). Also generate 5 MCQ type questions based on the video content. Additionally i also want you to remember each transcript i send and internally rank them based on the based on the quality of content duration and how the in depth the the content is. Dont give the ranking in the output!!! just remember the ranks for the future. The ranks are dependent of the parameters which are Duration should be short and concept depth should be just an overview of the concept. After all the transcripts are summarized i want you to return the top 2 youtube video transcript ids. Please Note dont reply with summaries now!! Wait for the transcripts i will send them in the following messages";

try{

    const result = await chat.sendMessage(msg);
    const response = result.response;
    
    console.log(response.text())
    console.log("line 23")
} catch(error){
    console.log(error)
    console.log("line 26")
}

async function searchYT(query, maxResults = 5, pageToken = null) {
    try {
      const response = await youtube.search.list({
        part: 'snippet', // search by keyword
        maxResults: 5,
        // pageToken: pageToken, // optional, for going to next/prev result page
        q: query,
        videoCaption: 'closedCaption', // only include videos with captions
        type: 'video', // only include videos, not playlists/channels
      });
    //   console.log(response.data);
      console.log("39");
      return response.data;
    } catch (error) {
      console.error('Error searching YouTube:', error);
      throw error;
    }
}


async function displayYTResults(searchResponse) {
  const transcripts = [];
  try {
    for (const item of searchResponse.items || []) {
    console.log(item.id)
      const videoId = item.id.videoId;
      const title = item.snippet.title;
      const description = item.snippet.description;

      console.log("Video ID:", videoId);
      console.log("Title:", title);
      console.log("Description:", description);
      console.log("59");
      console.log();

      const transcript = await getTranscript(videoId);
      if (transcript.length > 20000) {
        continue;
      }
      console.log(transcript);
      console.log("67");
      const p = `Video id ${videoId} and transcript is ${transcript}`;
      const extractedText = await getAIExtract(p);
      console.log(extractedText);
      console.log("71");
      transcripts.push(transcript);
      console.log();
    }
    return transcripts;
  } catch (error) {
    console.error('Error displaying YouTube results:', error);
    throw error;
  }
}

async function getTranscript(videoId, languages = ['en', 'en-US', 'en-IN', 'en-GB']) {
    try {
      const transcripts = await YoutubeTranscript.fetchTranscript(videoId, { languages: languages });
    //   transcript = TextFormatter.formatTranscript(transcript);
    let transcriptText = ""
    
    transcripts.forEach(function(transcript) {
        transcriptText += transcript.text;
    });
      console.log("transcriptText",transcriptText);
      return transcriptText;
    } catch (error) {
      console.error('Error getting transcript:', error);
      throw error;
    }
}

async function getAIExtract(text) {
    try {
      const prompt = "Generate the summary for the transcript below and give ONLY the summary in the response. The response should have no extra characters except the summary generated";
      const response = await chat.sendMessage(prompt + text);
  
      const prompt1 = "Now give 5 mcq questions based on the transcript provided that cover the entire content. Again make sure there are no additional characters in the response except for the MCQ questions and their answers";
      const response1 = await chat.sendMessage(prompt1);
      console.log(response1);
      console.log(response1.response.text());
      console.log("103");
      console.log(response1);
      console.log("112");
  
      return response.response.text();
    } catch (error) {
      console.error('Error getting AI extract:', error);
      throw error;
    }
}

async function aiRank(duration, depth, transcripts) {
    try {
      const prompt = "Give only the ids of the highest ranked videos and nothing else in the response in the format id1$$id2";
      const response = await chat.sendMessage(prompt);
      return response.response.text();
    } catch (error) {
      console.error('Error ranking AI:', error);
      throw error;
    }
}
  
async function main() {
    try {
      // Search YouTube for videos related to "big data analytics"
      const response = await searchYT("big data analytics", 3);
  
      console.log(response);
      console.log("128");
      // Display YouTube search results and extract transcripts
      const transcripts = await displayYTResults(response);
  
      // Rank the transcripts based on duration and depth
      const res = await aiRank("short", "overview only", transcripts);
  
      console.log("Res:", res);
    } catch (error) {
      console.error('Error:', error);
    }
}
  
main();