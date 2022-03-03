import { Injectable } from '@nestjs/common';
import { LCDClient } from "@terra-money/terra.js";

@Injectable()
export class BCUtil {
  constructor() {}

  async sendGetRequestToBC(params): Promise<any> {

    const terra = new LCDClient({
      URL: "http://localhost:1317",
      chainID: "localterra",
    });

    console.log(params)
    const ret = await terra.bank.balance(params);
    console.log(ret);
    return ret;
  }
}
