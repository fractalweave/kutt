import { Request } from "express";

export interface CreateLinkReq extends Request {
  body: {
    safe?: boolean;
    reuse?: boolean;
    password?: string;
    customurl?: string;
    description?: string;
    expire_in?: string;
    domain?: Domain;
    target: string;
  };
}
