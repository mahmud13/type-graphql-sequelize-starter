import { ObjectType, Field, ID, InputType, Int } from 'type-graphql'

@ObjectType()
export class UserType {
  @Field((_type) => ID)
  id: number;

  @Field()
  km: number;

  @Field()
  combustible: string;

  @Field()
  color: string;
}

@InputType()
export class UserInput {
  @Field((_type) => String!)
  color: string;

  @Field((_type) => String!)
  combustible: string;

  @Field((_type) => Int!)
  km: number;
}
