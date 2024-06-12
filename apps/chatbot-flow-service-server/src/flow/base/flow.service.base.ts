/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Flow as PrismaFlow,
  Node as PrismaNode,
  Bot as PrismaBot,
} from "@prisma/client";

export class FlowServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FlowCountArgs, "select">): Promise<number> {
    return this.prisma.flow.count(args);
  }

  async flows<T extends Prisma.FlowFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FlowFindManyArgs>
  ): Promise<PrismaFlow[]> {
    return this.prisma.flow.findMany<Prisma.FlowFindManyArgs>(args);
  }
  async flow<T extends Prisma.FlowFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FlowFindUniqueArgs>
  ): Promise<PrismaFlow | null> {
    return this.prisma.flow.findUnique(args);
  }
  async createFlow<T extends Prisma.FlowCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FlowCreateArgs>
  ): Promise<PrismaFlow> {
    return this.prisma.flow.create<T>(args);
  }
  async updateFlow<T extends Prisma.FlowUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FlowUpdateArgs>
  ): Promise<PrismaFlow> {
    return this.prisma.flow.update<T>(args);
  }
  async deleteFlow<T extends Prisma.FlowDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FlowDeleteArgs>
  ): Promise<PrismaFlow> {
    return this.prisma.flow.delete(args);
  }

  async findNodes(
    parentId: string,
    args: Prisma.NodeFindManyArgs
  ): Promise<PrismaNode[]> {
    return this.prisma.flow
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .nodes(args);
  }

  async getBot(parentId: string): Promise<PrismaBot | null> {
    return this.prisma.flow
      .findUnique({
        where: { id: parentId },
      })
      .bot();
  }
}
