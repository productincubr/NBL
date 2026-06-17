import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

// ─── Text Generation ────────────────────────────────────────────────────────

const TEXT_MODELS = [
  "gemini-3.5-flash",
  "gemini-2.0-flash-exp",
  "gemini-2.0-flash-thinking-exp",
  "gemini-exp-1206",
];

const generateTextWithRetry = async (prompt) => {
  let lastError = null;

  for (const model of TEXT_MODELS) {
    try {
      console.log(`Trying text model: ${model}`);
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
      });
      console.log(`Success with text model: ${model}`);
      return response.text;
    } catch (error) {
      console.log(`Text model ${model} failed:`, error.message);
      lastError = error;
      continue;
    }
  }

  // Fallback: raw fetch
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );
    const data = await res.json();
    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }
    throw new Error(JSON.stringify(data.error));
  } catch (err) {
    throw new Error(lastError?.message || err.message);
  }
};

// ─── Image Generation ────────────────────────────────────────────────────────

export const generateRecipeImage = async (dish) => {
  const prompt = `A beautiful, professional food photography shot of healthy ${dish}. 
Vibrant colors, fresh ingredients, elegant plating on a clean white or wooden surface. 
Soft natural lighting, appetizing and high quality.`;

  try {
    // Try Gemini image generation model via raw fetch
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseModalities: ["IMAGE", "TEXT"] },
        }),
      }
    );

    const data = await res.json();
    console.log("Image gen response:", data);

    const parts = data?.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData?.mimeType?.startsWith("image/")) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }

    console.warn("No image in response, using fallback.");
    return getFallbackImage(dish);
  } catch (error) {
    console.error("Image generation failed:", error.message);
    return getFallbackImage(dish);
  }
};

// ─── Fallback Static Image ───────────────────────────────────────────────────

export const getFallbackImage = (dish) => {
  const dishLower = dish.toLowerCase();

  const categoryMap = {
    pizza: "pizza",
    burger: "burger",
    pasta: "pasta",
    noodle: "pasta",
    rice: "rice",
    biryani: "rice",
    salad: "salad",
    soup: "soup",
    chicken: "chicken",
    fish: "fish",
    sandwich: "burger",
    roti: "rice",
    dal: "soup",
    curry: "chicken",
    paneer: "chicken",
  };

  const matched = Object.keys(categoryMap).find((key) =>
    dishLower.includes(key)
  );
  const category = matched ? categoryMap[matched] : "rice";
  const num = Math.floor(Math.random() * 10) + 1;

  return `https://foodish-api.com/images/${category}/${category}${num}.jpg`;
};

// ─── Recipe Text Generation ──────────────────────────────────────────────────

export const generateHealthyRecipe = async (dish, goals = []) => {
  const prompt = `
    Create a healthy version of "${dish}".
    
    User Goals:
    ${goals.length ? goals.join(", ") : "General Healthy Eating"}
    
    Return ONLY valid HTML.
    
    Structure:
    
    <h2>About This Dish</h2>
    <p>Brief history and health benefits of ${dish}...</p>
    
    <h2>Healthy Version</h2>
    <p>...</p>
    
    <h2>Ingredient Swaps</h2>
    <ul>
    <li>...</li>
    </ul>
    
    <h2>Nutrition (Per Serving)</h2>
    <p><strong>Calories:</strong> ...</p>
    <p><strong>Protein:</strong> ...</p>
    <p><strong>Carbs:</strong> ...</p>
    <p><strong>Fat:</strong> ...</p>
    <p><strong>Fiber:</strong> ...</p>
    
    <h2>Step-by-Step Instructions</h2>
    <ol>
    <li>...</li>
    </ol>
    
    <h2>Health Tips</h2>
    <ul>
    <li>...</li>
    </ul>
    
    Important Rules:
    - Return HTML only
    - No markdown
    - No JSON
    - No code blocks
    - No backticks
    - Keep response clean and professional
  `;

  return await generateTextWithRetry(prompt);
};