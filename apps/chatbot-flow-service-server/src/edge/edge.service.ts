import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EdgeServiceBase } from "./base/edge.service.base";

@Injectable()
export class EdgeService extends EdgeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
