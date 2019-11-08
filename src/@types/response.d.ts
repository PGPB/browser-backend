import {Response} from "express";


declare global {
    interface CommonResponse extends Response {}
}
