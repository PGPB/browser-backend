import {Request} from "express";


declare global {
    interface CommonRequest extends Request {}
}
