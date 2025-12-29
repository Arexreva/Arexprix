
import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS, BRAND_NAME, ADDRESS, BUSINESS_HOURS, CATERING_DATA } from "../constants";

export const getGeminiResponse = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are a friendly Southern AI assistant for ${BRAND_NAME} in Girard, Georgia.
    Use Southern hospitality in your tone (words like "y'all", "bless your heart", "sugar").
    
    Business Info:
    - Address: ${ADDRESS}
    - Hours: ${BUSINESS_HOURS.map(h => `${h.day}: ${h.hours}`).join(', ')}
    - Menu Highlights: ${MENU_ITEMS.map(m => m.name).join(', ')}
    - Catering includes: ${CATERING_DATA.map(c => c.name).join(', ')}
    
    Only answer questions related to the restaurant. If a user asks something unrelated, politely steer them back to our delicious steaks and seafood.
    Keep answers concise and helpful.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 250,
      }
    });

    return response.text || "I'm sorry, I'm havin' a little trouble thinkin' right now. Can you try again, sugar?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Well, bless my circuits, somethin' went wrong. Try askin' me again in a bit!";
  }
};
