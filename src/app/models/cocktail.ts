export class Cocktail {
    name: string;
    category: string;
    alcoholic: boolean;
    instructions: string;
    image: string;
    ingredients: string[];
    measures: string[];
    editable: boolean;
    constructor(name: string, category: string, alcoholic: boolean,  instructions: string,  image: string, ingredients: string[], measures: string[], editable: boolean){
        this.name = name;
        this.category = category;
        this.alcoholic = alcoholic;
        this.instructions = instructions;
        this.image = image;
        this.ingredients = ingredients;
        this.measures = measures;
        this.editable = editable;
    }

    public getName(){
        return this.name;
    }

    public getCategory(){
        return this.category;
    }

    public getAlcoholic(){
        return this.alcoholic;
    }
    public getInstructions(){
        return this.instructions;
    }

    public getImage(){
        return this.image;
    }

    public getIngredients(){
        return this.ingredients;
    }

    public getMeasures(){
        return this.measures;
    }

    public getEditable(){
        return this.editable;
    }
    


    public setName(name:string){
        this.name = name;
    }
    public setCategory(category:string){
        this.category = category;
    }

    public setIsAlcoholic(is:boolean){
        this.alcoholic = is;
    }

    public setImage(image:string){
        this.image = image;
    }

    public setInstructions(instructions:string){
        this.instructions = instructions;
    }

    public setIngredients(ingredients:string[]){
        this.ingredients = ingredients;
    }

   public setMeasures(measures: string[]){
        this.measures = measures;
    }

    public setEditable(editable: boolean){
        this.editable = editable;
    }

  } 
  
