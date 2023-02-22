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
exports.routes = void 0;
const express_1 = require("express");
const openAI_1 = require("./openAI");
exports.routes = (0, express_1.Router)();
exports.routes.get("/", (req, res) => {
    return res.json({ welcome: "Hello! Welcome to OpenAI API!" });
});
exports.routes.post('/ai/text', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userMessage } = req.body;
    try {
        const responseMessageAI = yield (0, openAI_1.callTextModelAI)(userMessage);
        return res.json({ robot: responseMessageAI });
    }
    catch (error) {
        console.log({ error: error.message });
    }
}));
