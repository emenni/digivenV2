import { Field, InputType } from "type-graphql";
import { type Recipe } from "../types/recipe.type";

@InputType()
export class RecipeInput implements Partial<Recipe> {
    @Field()
    title!: string;

    @Field({ nullable: true })
    description?: string;
}
