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
Object.defineProperty(exports, "__esModule", { value: true });
exports.callIA = void 0;
const openAI_1 = require("../services/openAI");
//import say from 'say';
function callIA(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { message } = req.body;
        try {
            const responseMessageAI = yield (0, openAI_1.callTextModelAI)(message);
            //say.speak(responseMessageAI, 'Karen', 1.5);                                 // Speak the AI response ('txt', 'voice', 'speed')    
            return res.status(202).json(responseMessageAI);
        }
        catch (error) {
            return res.status(403).json(error.message);
        }
    });
}
exports.callIA = callIA;
