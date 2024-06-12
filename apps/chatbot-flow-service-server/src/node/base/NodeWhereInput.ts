/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JsonFilter } from "../../util/JsonFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { EdgeWhereUniqueInput } from "../../edge/base/EdgeWhereUniqueInput";
import { FlowWhereUniqueInput } from "../../flow/base/FlowWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class NodeWhereInput {
  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  content?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => EdgeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EdgeWhereUniqueInput)
  @IsOptional()
  @Field(() => EdgeWhereUniqueInput, {
    nullable: true,
  })
  edge?: EdgeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => FlowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FlowWhereUniqueInput)
  @IsOptional()
  @Field(() => FlowWhereUniqueInput, {
    nullable: true,
  })
  flow?: FlowWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { NodeWhereInput as NodeWhereInput };
