"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callTextModelAI = void 0;
const openai_1 = require("openai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const configurationAI = new openai_1.Configuration({ apiKey: process.env.OPENAI_KEY }); // API Key
const openAI = new openai_1.OpenAIApi(configurationAI); // Create OpenAI API instance with API Key configuration
function callTextModelAI(message) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const responseAI = yield openAI.createCompletion({
            model: "text-davinci-003",
            prompt: message,
            temperature: 0.6,
            max_tokens: 4000, // Number of tokens to generate (tokens = words)
            //n: 2,                                                 // Number of results to return,
        });
        //console.log(responseAI.data);
        const responseMessageAI = (_a = responseAI.data.choices[0].text) === null || _a === void 0 ? void 0 : _a.trim(); // Get the AI response in text format
        return responseMessageAI; // Return the AI response in text format
    });
}
exports.callTextModelAI = callTextModelAI;
