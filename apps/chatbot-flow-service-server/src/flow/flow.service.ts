import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlowServiceBase } from "./base/flow.service.base";

@Injectable()
export class FlowService extends FlowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
