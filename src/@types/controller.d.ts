import {RequestHandler} from "express";


declare global {
    type CommonController = (
        request: CommonRequest,
        response: CommonResponse
    ) => any;
}
